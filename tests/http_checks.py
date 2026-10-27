"""HTTP/HTML checks against a running production build; no browser or real emails.
Usage: npm run test:http -- http://localhost:3102
"""
import collections
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from html.parser import HTMLParser
from pathlib import Path

BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3102').rstrip('/')
if urllib.parse.urlsplit(BASE).hostname not in ('localhost', '127.0.0.1'):
    raise SystemExit('Use a local test server; this suite exercises form throttling.')
checks = []
pages = {}
assets = set()
external = set()

def check(name, condition, detail=''):
    checks.append({'check': name, 'passed': bool(condition), 'detail': detail})

def get(path, method='GET', body=None, headers=None):
    start = time.monotonic()
    req = urllib.request.Request(urllib.parse.urljoin(BASE, path), data=body, headers=headers or {}, method=method)
    try: response = urllib.request.urlopen(req, timeout=20)
    except urllib.error.HTTPError as exc: response = exc
    data = response.read()
    return response.status, {key.title(): value for key,value in response.headers.items()}, data, round((time.monotonic() - start) * 1000, 1)

class Page(HTMLParser):
    def __init__(self): super().__init__(); self.tags = []; self.parents = []; self.inputs = []
    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        self.tags.append((tag, attrs))
        if tag in ('input','select','textarea'):
            self.inputs.append((tag, attrs, 'label' in self.parents))
        if tag not in ('area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'):
            self.parents.append(tag)
    def handle_endtag(self, tag):
        if tag in self.parents:
            index = len(self.parents) - 1 - self.parents[::-1].index(tag)
            self.parents = self.parents[:index]

routes = ['/', '/contact', '/portfolio', '/legal', '/us', '/showcase/nocturne', '/showcase/pelagic', '/social-demos/plumber', '/social-demos/plumber?version=redesign']
for route in routes:
    status, headers, data, ms = get(route)
    check(f'{route}: HTTP 200', status == 200, f'{ms} ms local response (not Core Web Vitals)')
    parser = Page(); text = data.decode(); parser.feed(text); pages[route] = parser
    tags = parser.tags
    ids = [a['id'] for t,a in tags if 'id' in a]
    check(f'{route}: unique IDs', len(ids) == len(set(ids)))
    check(f'{route}: one main and H1', sum(t=='main' for t,a in tags)==1 and sum(t=='h1' for t,a in tags)==1)
    check(f'{route}: English document', any(t=='html' and a.get('lang')=='en' for t,a in tags))
    check(f'{route}: viewport allows zoom', any(t=='meta' and a.get('name')=='viewport' and 'user-scalable=no' not in a.get('content','') for t,a in tags))
    missing_refs = [(key, value) for t,a in tags for key in ('aria-controls','aria-labelledby','aria-describedby') for value in a.get(key,'').split() if value not in ids]
    check(f'{route}: ARIA targets exist', not missing_refs, str(missing_refs))
    check(f'{route}: images have alt', all('alt' in a for t,a in tags if t=='img'))
    labels = {a.get('for') for t,a in tags if t=='label'}
    missing_labels = [a.get('id',a.get('placeholder','unnamed')) for t,a,wrapped in parser.inputs if not wrapped and a.get('id') not in labels and not a.get('aria-label') and not a.get('aria-labelledby') and a.get('type')!='hidden']
    if route != '/social-demos/plumber':
        check(f'{route}: form controls have names', not missing_labels, str(missing_labels))
    meta = {a.get('name',a.get('property')): a.get('content','') for t,a in tags if t=='meta'}
    check(f'{route}: description', bool(meta.get('description')))
    if not route.startswith('/social-demos'):
        canonical = [a.get('href','').rstrip('/') for t,a in tags if t=='link' and a.get('rel')=='canonical']
        check(f'{route}: canonical', canonical == [('https://www.peiwebstudio.ca'+route).rstrip('/')], str(canonical))
        check(f'{route}: social preview', bool(meta.get('og:image')) and bool(meta.get('twitter:image')))
    else:
        check(f'{route}: fictional demo excluded from indexing', 'noindex' in meta.get('robots',''))
    check(f'{route}: no framework version header', not any(k.lower()=='x-powered-by' for k in headers))
    for tag,attrs in tags:
        if tag=='script' and attrs.get('type')=='application/ld+json':
            for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>',text):
                try: structured=json.loads(block); valid=structured.get('@context')=='https://schema.org'
                except ValueError: valid=False
                check(f'{route}: valid structured data',valid)
        if tag=='a' and attrs.get('href','').startswith('https://'): external.add(attrs['href'])
        url = attrs.get('src') if tag in ('script','img') else attrs.get('href') if tag=='link' and attrs.get('rel') in ('stylesheet','icon','apple-touch-icon') else None
        if url and url.startswith('/'): assets.add(url)

for route,page in pages.items():
    broken = []
    for tag,attrs in page.tags:
        if tag!='a': continue
        href=attrs.get('href',''); parsed=urllib.parse.urlsplit(href)
        if parsed.scheme or parsed.netloc: continue
        destination = parsed.path or urllib.parse.urlsplit(route).path
        query = parsed.query if parsed.path else parsed.query or urllib.parse.urlsplit(route).query
        target = destination + ('?'+query if query else '')
        if target in pages:
            ids = {a.get('id') for t,a in pages[target].tags}
            if parsed.fragment and parsed.fragment not in ids: broken.append(href)
        elif destination not in ('/legal','/contact','/portfolio','/','/us'):
            status,*_=get(target)
            if status!=200: broken.append(href)
    check(f'{route}: internal links and anchors',not broken,str(broken))

secret_values=[]
if Path('.env.local').exists():
    for line in Path('.env.local').read_text().splitlines():
        if '=' in line:
            key,value=line.split('=',1)
            if key in ('RESEND_API_KEY','UPSTASH_REDIS_REST_TOKEN') and value.strip(): secret_values.append(value.strip().strip('\"\'' ).encode())
for asset in sorted(assets):
    status,headers,data,ms=get(asset)
    check(f'asset {asset}: loads',status==200)
    check(f'asset {asset}: no configured server secret',not any(value in data for value in secret_values))

for route in ['/missing-test-page','/social-demos/missing-test-demo','/.env.local','/.git/config']:
    status,headers,data,ms=get(route);check(f'{route}: 404',status==404)
status,headers,data,ms=get('/sitemap.xml');sitemap=data.decode()
check('sitemap: all public pages and no demos',status==200 and all(('https://www.peiwebstudio.ca'+r) in sitemap for r in ['/contact','/portfolio','/legal','/us']) and '/social-demos' not in sitemap)
status,headers,data,ms=get('/robots.txt');check('robots: sitemap and API exclusion',status==200 and b'Sitemap: https://www.peiwebstudio.ca/sitemap.xml' in data and b'Disallow: /api/' in data)
status,headers,data,ms=get('/opengraph-image');check('social preview: 1200x630 PNG',status==200 and data.startswith(b'\x89PNG') and int.from_bytes(data[16:20],'big')==1200 and int.from_bytes(data[20:24],'big')==630)
for endpoint in ['/api/contact','/api/fix-request']:
    status,*_=get(endpoint);check(endpoint+': GET rejected',status==405)
    status,headers,*_=get(endpoint,method='OPTIONS');check(endpoint+': OPTIONS supports POST',status in (200,204) and 'POST' in headers.get('Allow',''))
    status,*_=get(endpoint,method='POST',body=b'{}',headers={'Content-Type':'application/json','Origin':'https://untrusted.invalid'});check(endpoint+': cross-origin rejected',status==403)
    status,*_=get(endpoint,method='POST',body=b'{}',headers={'Content-Type':'text/plain'});check(endpoint+': wrong media rejected',status==415)
# A known honeypot guarantees that these requests never send an email.
payload={'name':'Automated Test','email':'test@example.invalid','service':'Build a new website','message':'Local automated smoke test only.','honeypot':'automated-test'}
statuses=[]
for _ in range(6):
    status,headers,*_=get('/api/contact',method='POST',body=json.dumps(payload).encode(),headers={'Content-Type':'application/json'})
    statuses.append(status)
check('contact: honeypot accepted and request limit enforced',statuses==[200,200,200,200,200,429],str(statuses))
check('contact: rate response has retry guidance',headers.get('Retry-After')=='900')
report={'base':BASE,'checks':checks,'passed':sum(c['passed'] for c in checks),'failed':sum(not c['passed'] for c in checks),'assets_checked':len(assets),'external_links':sorted(external),'limits':['No rendered visual, JavaScript interaction, contrast, screen reader, or field-performance testing.','Intentionally inaccessible bad demo excluded from form-label requirement.','No real emails sent; Redis uses local fallback in this environment.']}
Path('docs/testing').mkdir(parents=True, exist_ok=True)
Path('docs/testing/http-results.json').write_text(json.dumps(report,indent=2)+'\n')
print(f"{report['passed']} checks passed; {report['failed']} failed; {len(assets)} assets checked.")
for c in checks:
    if not c['passed']: print('FAIL',c['check'],c['detail'])
sys.exit(bool(report['failed']))
