import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const jsonResponse = (body: Record<string, string | boolean>, status = 200) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export const escapeHtml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");

const windowMs = 15 * 60 * 1000;
const buckets = new Map<string, { count: number; expires: number }>();

// Optional shared Redis counter for multiple serverless instances. The bounded
// local fallback limits one process only; use the deployment WAF as well.
async function allowed(key: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (Boolean(url) !== Boolean(token)) throw new Error("Incomplete rate limiter configuration");
  if (url && token) {
    const response = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(["EVAL", "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('PEXPIRE',KEYS[1],ARGV[1]) end; return n", "1", key, String(windowMs)]),
      signal: AbortSignal.timeout(5000), cache: "no-store"
    });
    if (!response.ok) throw new Error("Rate limiter unavailable");
    const data = await response.json();
    if (typeof data.result !== "number") throw new Error("Invalid rate limit response");
    return data.result <= 5;
  }
  const now = Date.now();
  for (const [id, entry] of buckets) if (entry.expires <= now) buckets.delete(id);
  const entry = buckets.get(key) ?? { count: 0, expires: now + windowMs };
  if (!buckets.has(key) && buckets.size >= 10000) return false;
  entry.count++;
  buckets.set(key, entry);
  return entry.count <= 5;
}

export async function readInquiry(request: NextRequest): Promise<{ data: unknown; response?: never } | { response: NextResponse; data?: never }> {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin && !["https://peiwebstudio.ca", "https://www.peiwebstudio.ca"].includes(origin)) {
    return { response: jsonResponse({ error: "Please submit this form from our website." }, 403) };
  }
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return { response: jsonResponse({ error: "Expected a JSON request." }, 415) };
  }
  // Vercel supplies this address; never trust arbitrary forwarded headers off-platform.
  const ip = process.env.VERCEL ? request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() : "local";
  const key = `inquiry:${createHash("sha256").update(ip || "unknown").digest("hex")}`;
  try {
    if (!await allowed(key)) {
      const response = jsonResponse({ error: "Too many requests. Please try again in 15 minutes or email peiwebstudio@gmail.com." }, 429);
      response.headers.set("Retry-After", "900");
      return { response };
    }
  } catch {
    return { response: jsonResponse({ error: "Please try again shortly or email peiwebstudio@gmail.com." }, 503) };
  }
  const reader = request.body?.getReader();
  if (!reader) return { response: jsonResponse({ error: "Please complete the form." }, 400) };
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > 16384) {
        await reader.cancel();
        return { response: jsonResponse({ error: "Your request is too large." }, 413) };
      }
      chunks.push(value);
    }
    return { data: JSON.parse(Buffer.concat(chunks).toString("utf8")) };
  } catch {
    return { response: jsonResponse({ error: "Please check the form and try again." }, 400) };
  } finally { reader.releaseLock(); }
}
