import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Intake for the $49 small-fix offer on /us.
 *
 * This route deliberately does NOT take payment. It emails the request so a
 * human can confirm the job really is a small fix before any money changes
 * hands. See the note at the bottom of this file before adding Stripe.
 */
const bodySchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  website: z.string().min(3).max(300),
  platform: z.string().min(2).max(60),
  problem: z.string().min(10).max(2000),
  // Honeypot: real people leave this empty because it is hidden from them.
  company: z.string().max(100).optional()
});

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.FIX_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL ?? "peiwebstudio@gmail.com";
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
    headers: { "Cache-Control": "no-store" }
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
    return jsonResponse({ error: "Please check the form and try again." }, 400);
  }

  const { name, email, website, platform, problem, company } = parsed.data;

  // Bot filled the hidden field. Accept the request so the bot does not retry,
  // but send nothing.
  if (company) {
    return jsonResponse({ ok: true });
  }

  const resend = new Resend(resendApiKey);

  const subject = `$49 fix request from ${name} (${platform})`;
  const text = [
    "New $49 fix request from peiwebstudio.ca/us",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Website: ${website}`,
    `Platform: ${platform}`,
    "",
    "What is broken:",
    problem,
    "",
    "NEXT STEP: confirm this is a small fix, then send the payment link.",
    "If it is bigger than $49, reply with a quote instead."
  ].join("\n");

  const html = `
    <h2>New $49 fix request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Website:</strong> ${escapeHtml(website)}</p>
    <p><strong>Platform:</strong> ${escapeHtml(platform)}</p>
    <p><strong>What is broken:</strong></p>
    <p>${escapeHtml(problem).replace(/\n/g, "<br />")}</p>
    <hr />
    <p><em>Next step: confirm this is a small fix, then send the payment link.
    If it is bigger than $49, reply with a quote instead.</em></p>
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
              "Intake email is still in test mode. Verify a domain in Resend and set CONTACT_FROM_EMAIL to an address on that domain."
          },
          500
        );
      }

      return jsonResponse(
        { error: error.message || "Could not send right now. Please try again in a moment." },
        500
      );
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error("Fix request send failed", error);
    return jsonResponse(
      { error: "Could not send right now. Please try again in a moment." },
      500
    );
  }
}

/* ─────────────────────────────────────────────────────────────────────────
   If Stripe is ever added, it belongs AFTER this step, not inside it.

   The $49 price only holds because a human reads the request first and
   confirms the job is genuinely small. Charging on submit would mean
   collecting money for requests that turn out to be full redesigns, which is
   the exact scope creep the "what $49 does not cover" section exists to
   prevent.

   Intended flow:
     1. Client submits this form (free, no card).
     2. Human reviews. Small fix -> send a Stripe payment link by email.
        Bigger job -> reply with a quote instead.
     3. Work starts once the link is paid.
   ───────────────────────────────────────────────────────────────────────── */
