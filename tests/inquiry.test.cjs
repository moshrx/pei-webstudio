const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');

// Run the actual TypeScript handlers without a test framework dependency.
const resolve = Module._resolveFilename;
Module._resolveFilename = function(name, ...args) {
  return resolve.call(this, name.startsWith('@/') ? path.join(__dirname, '..', name.slice(2)) : name, ...args);
};
require.extensions['.ts'] = (mod, filename) => mod._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText, filename);
let sent = [], providerError = null;
const originalLoad = Module._load;
Module._load = function(name, ...args) {
  if (name === 'resend') return { Resend: class { emails = { send: async payload => { sent.push(payload); return { error: providerError }; } }; } };
  return originalLoad.call(this, name, ...args);
};
process.env.RESEND_API_KEY = 'mock-key';
process.env.CONTACT_FROM_EMAIL = 'Studio <hello@example.invalid>';
process.env.UPSTASH_REDIS_REST_URL = 'https://redis.example.invalid';
process.env.UPSTASH_REDIS_REST_TOKEN = 'mock-token';
let counter = 1, limiterFailure = false;
global.fetch = async (url, options) => {
  assert.equal(url, 'https://redis.example.invalid');
  const command = JSON.parse(options.body);
  assert.equal(command[0], 'EVAL');
  assert.equal(command[2], '1');
  return { ok: !limiterFailure, json: async () => ({ result: counter }) };
};
const { NextRequest } = require('next/server');
const { POST: contact } = require('../app/api/contact/route.ts');
const { POST: fix } = require('../app/api/fix-request/route.ts');
const payload = { name:'Test Person',email:'test@example.invalid',company:'',website:'example.ca',service:'Improve my website',message:'Please review the mobile menu.',honeypot:'' };
function request(body, options = {}) {
  return new NextRequest('https://www.peiwebstudio.ca/api/contact', { method:'POST', headers: { 'content-type':'application/json', origin:'https://www.peiwebstudio.ca', ...options.headers }, body: typeof body === 'string' ? body : JSON.stringify(body) });
}
test('contact delivers optional business details, service and escaped message',async()=>{
  const response = await contact(request({...payload,message:'Please fix <script>alert(1)</script>'}));
  assert.equal(response.status,200); assert.equal(sent.length,1);
  assert.match(sent[0].text,/Service: Improve my website/);
  assert.match(sent[0].text,/Website: example.ca/);
  assert.match(sent[0].html,/&lt;script&gt;/); assert.doesNotMatch(sent[0].html,/<script>/);
});
test('invalid inputs and honeypot never send',async()=>{
  const before=sent.length;
  for (const change of [{email:'bad'},{website:'javascript:alert(1)'},{message:'x'},{name:'a'.repeat(101)},{service:'unknown'}]) assert.equal((await contact(request({...payload,...change}))).status,400);
  assert.equal((await contact(request({...payload,honeypot:'bot'}))).status,200);
  assert.equal(sent.length,before);
});
test('rejects cross-origin, wrong media type, malformed and oversized bodies',async()=>{
  assert.equal((await contact(request(payload,{headers:{origin:'https://other.invalid'}}))).status,403);
  assert.equal((await contact(request(payload,{headers:{'content-type':'text/plain'}}))).status,415);
  assert.equal((await contact(request('{broken'))).status,400);
  assert.equal((await contact(request('x'.repeat(17000)))).status,413);
});
test('rate limit and limiter failure cannot send',async()=>{
  const before=sent.length;counter=6;
  const response=await contact(request(payload));assert.equal(response.status,429);assert.equal(response.headers.get('retry-after'),'900');
  counter=1;limiterFailure=true;assert.equal((await contact(request(payload))).status,503);limiterFailure=false;
  assert.equal(sent.length,before);
});
test('provider error is generic and missing sender fails safely',async()=>{
  providerError={name:'provider',message:'secret internal details'};
  const response=await contact(request(payload));assert.equal(response.status,502);assert.doesNotMatch(await response.text(),/secret/);providerError=null;
  const sender=process.env.CONTACT_FROM_EMAIL;delete process.env.CONTACT_FROM_EMAIL;
  assert.equal((await contact(request(payload))).status,503);process.env.CONTACT_FROM_EMAIL=sender;
});
test('fix intake validates platform and includes CAD without taking payment',async()=>{
  const body={name:'Test Person',email:'test@example.invalid',website:'example.ca',platform:'Shopify',problem:'The menu overlaps on mobile.',company:''};
  assert.equal((await fix(request({...body,platform:'invalid'}))).status,400);
  assert.equal((await fix(request(body))).status,200);assert.match(sent.at(-1).subject,/\$49 CAD/);
  const before=sent.length;assert.equal((await fix(request({...body,company:'bot'}))).status,200);assert.equal(sent.length,before);
});
test('new website requests can omit optional company and website',async()=>{
  const {company,website,...minimal}=payload;
  assert.equal((await contact(request({...minimal,service:'Build a new website'}))).status,200);
  assert.match(sent.at(-1).text,/Company: Not provided/);
});
test('rejects JSON-like media types instead of accepting prefix matches',async()=>{
  assert.equal((await contact(request(payload,{headers:{'content-type':'application/json-invalid'}}))).status,415);
  assert.equal((await contact(request(payload,{headers:{'content-type':'application/json; charset=utf-8'}}))).status,200);
});
test('partial shared limiter configuration fails closed',async()=>{
  const token=process.env.UPSTASH_REDIS_REST_TOKEN;delete process.env.UPSTASH_REDIS_REST_TOKEN;
  try {assert.equal((await contact(request(payload))).status,503);} finally {process.env.UPSTASH_REDIS_REST_TOKEN=token;}
});
test('limits both forms together and resets the local window',async()=>{
  const url=process.env.UPSTASH_REDIS_REST_URL, token=process.env.UPSTASH_REDIS_REST_TOKEN,vercel=process.env.VERCEL;
  delete process.env.UPSTASH_REDIS_REST_URL;delete process.env.UPSTASH_REDIS_REST_TOKEN;delete process.env.VERCEL;
  const originalNow=Date.now;
  try {
    for(let i=0;i<5;i++) assert.equal((await contact(request({...payload,honeypot:'test'}))).status,200);
    assert.equal((await fix(request({name:'Test Person',email:'test@example.invalid',website:'example.ca',platform:'Shopify',problem:'Please fix the menu.',company:'bot'}))).status,429);
    assert.equal((await contact(request(payload,{headers:{'x-forwarded-for':'changed','x-vercel-forwarded-for':'changed'}}))).status,429);
    const future=originalNow()+900001;Date.now=()=>future;
    assert.equal((await contact(request({...payload,honeypot:'test'}))).status,200);
  } finally {Date.now=originalNow;process.env.UPSTASH_REDIS_REST_URL=url;process.env.UPSTASH_REDIS_REST_TOKEN=token;if(vercel)process.env.VERCEL=vercel;}
});
test('both form schemas enforce every maximum length',()=>{
  const {contactSchema,fixSchema}=require('../lib/inquiry-schema.ts');
  const fixInput={name:'Test Person',email:'test@example.invalid',website:'example.ca',platform:'Shopify',problem:'Please fix the mobile menu.'};
  for(const [field,max] of [['name',100],['company',100],['message',2000],['website',300],['email',254]])assert.equal(contactSchema.safeParse({...payload,[field]:'a'.repeat(max+1)}).success,false,field);
  for(const [field,max] of [['name',100],['company',100],['problem',2000],['website',300],['email',254]])assert.equal(fixSchema.safeParse({...fixInput,[field]:'a'.repeat(max+1)}).success,false,field);
  assert.equal(contactSchema.safeParse({...payload,name:'   ',message:'          '}).success,false);
});
test('website inputs accept normal addresses and reject credentials and non-web schemes',()=>{
  const {contactSchema}=require('../lib/inquiry-schema.ts');
  for(const website of ['', 'example.ca','www.example.ca/services','https://example.ca','http://example.ca/path?q=1'])assert.equal(contactSchema.safeParse({...payload,website}).success,true,website);
  for(const website of ['javascript:alert(1)','ftp://example.ca','https://user:pass@example.ca','not a website','https://'])assert.equal(contactSchema.safeParse({...payload,website}).success,false,website);
});
test('malformed payload types cannot reach email delivery',async()=>{
  const before=sent.length;
  for(const value of [null,[],42,true,'"string"',{...payload,name:{html:'bad'}}])assert.equal((await contact(request(value))).status,400);
  assert.equal(sent.length,before);
});
test('response cache is disabled on success and errors',async()=>{
  for(const response of [await contact(request({...payload,honeypot:'test'})),await contact(request({}))])assert.equal(response.headers.get('cache-control'),'no-store');
});
test('recipient routing uses configured inbox and fix-specific override',async()=>{
  const oldContact=process.env.CONTACT_TO_EMAIL,oldFix=process.env.FIX_TO_EMAIL;
  process.env.CONTACT_TO_EMAIL='contact@example.invalid';process.env.FIX_TO_EMAIL='fix@example.invalid';
  try {
    await contact(request(payload));assert.deepEqual(sent.at(-1).to,['contact@example.invalid']);assert.equal(sent.at(-1).replyTo,payload.email);
    await fix(request({name:'Test Person',email:'test@example.invalid',website:'example.ca',platform:'Shopify',problem:'Please fix the mobile menu.'}));assert.deepEqual(sent.at(-1).to,['fix@example.invalid']);
  } finally {if(oldContact)process.env.CONTACT_TO_EMAIL=oldContact;else delete process.env.CONTACT_TO_EMAIL;if(oldFix)process.env.FIX_TO_EMAIL=oldFix;else delete process.env.FIX_TO_EMAIL;}
});
