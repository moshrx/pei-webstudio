import { NextRequest } from "next/server";
import { contactSchema } from "@/lib/inquiry-schema";
import { jsonResponse, readInquiry } from "@/lib/inquiry-request";
import { sendInquiry } from "@/lib/send-inquiry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const result = await readInquiry(request);
  if (result.response) return result.response;
  const parsed = contactSchema.safeParse(result.data);
  if (!parsed.success) return jsonResponse({ error: "Please check the form and try again." }, 400);
  const { name, email, company, website, service, message, honeypot } = parsed.data;
  if (honeypot) return jsonResponse({ ok: true });
  return sendInquiry(`Website inquiry: ${service}`, email, [
    "New website inquiry from PEI Web Studio", "", `Name: ${name}`, `Email: ${email}`,
    `Company: ${company || "Not provided"}`, `Website: ${website || "Not provided"}`,
    `Service: ${service}`, "", "Message:", message
  ]);
}
