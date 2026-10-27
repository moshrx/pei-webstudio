import { Resend } from "resend";
import { escapeHtml, jsonResponse } from "./inquiry-request";

export async function sendInquiry(subject: string, email: string, lines: string[], to?: string) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !from || from.includes("onboarding@resend.dev")) {
    return jsonResponse({ error: "We cannot receive form messages right now. Please email peiwebstudio@gmail.com." }, 503);
  }
  const text = lines.join("\n");
  try {
    const { error } = await new Resend(key).emails.send({
      from, to: [to ?? process.env.CONTACT_TO_EMAIL ?? "peiwebstudio@gmail.com"],
      replyTo: email, subject, text,
      html: `<div style="white-space:pre-wrap">${escapeHtml(text)}</div>`
    });
    if (error) {
      console.error("Inquiry provider error", error.name);
      return jsonResponse({ error: "Could not send your request. Please try again or email peiwebstudio@gmail.com." }, 502);
    }
    return jsonResponse({ ok: true });
  } catch {
    console.error("Inquiry delivery failed");
    return jsonResponse({ error: "Could not send your request. Please try again or email peiwebstudio@gmail.com." }, 502);
  }
}
