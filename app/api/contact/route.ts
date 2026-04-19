import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const bodySchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  company: z.string().min(2).max(100),
  message: z.string().min(10).max(2000),
});

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL ?? "peiwebstudio@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "PEI Web Studio <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function jsonResponse(body: Record<string, string | boolean>, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

export async function POST(request: NextRequest) {
  if (!resendApiKey) {
    return jsonResponse(
      { error: "Email service is not configured. Add RESEND_API_KEY." },
      500
    );
  }

  const json = await request.json().catch(() => null);
  const parsed = bodySchema.safeParse(json);

  if (!parsed.success) {
    return jsonResponse({ error: "Invalid form input." }, 400);
  }

  const { name, email, company, message } = parsed.data;
  const resend = new Resend(resendApiKey);

  const subject = `New website inquiry from ${company}`;
  const text = [
    "New contact inquiry from peiwebstudio.ca",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    "",
    "Message:",
    message
  ].join("\n");

  const html = `
    <h2>New contact inquiry from peiwebstudio.ca</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      text,
      html
    });

    if (error) {
      const isResendTestingRestriction =
        error.message?.includes("You can only send testing emails to your own email address") ??
        false;

      if (isResendTestingRestriction) {
        return jsonResponse(
          {
            error:
              "Contact email is still in test mode. Verify a domain in Resend and set CONTACT_FROM_EMAIL to an address on that domain."
          },
          500
        );
      }

      return jsonResponse(
        { error: error.message || "Unable to send right now. Please try again in a moment." },
        500
      );
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error("Contact email send failed", error);
    return jsonResponse(
      { error: "Unable to send right now. Please try again in a moment." },
      500
    );
  }
}
