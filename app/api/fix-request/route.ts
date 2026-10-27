import { NextRequest } from "next/server";
import { fixSchema } from "@/lib/inquiry-schema";
import { jsonResponse, readInquiry } from "@/lib/inquiry-request";
import { sendInquiry } from "@/lib/send-inquiry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Intake only: confirm scope before requesting payment.
export async function POST(request: NextRequest) {
  const result = await readInquiry(request);
  if (result.response) return result.response;
  const parsed = fixSchema.safeParse(result.data);
  if (!parsed.success) return jsonResponse({ error: "Please check the form and try again." }, 400);
  const { name, email, website, platform, problem, company } = parsed.data;
  if (company) return jsonResponse({ ok: true });
  return sendInquiry("$49 CAD website fix request", email, [
    "New $49 CAD fix request", "", `Name: ${name}`, `Email: ${email}`,
    `Website: ${website}`, `Platform: ${platform}`, "", "What needs fixing:", problem,
    "", "Confirm this is a small fix and confirm the total before sending a payment link. Quote larger work separately."
  ], process.env.FIX_TO_EMAIL);
}
