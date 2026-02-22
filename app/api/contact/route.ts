import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  message: z.string().min(10)
});

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL ?? "shareef3533@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "PEI Web Studio <onboarding@resend.dev>";

export async function POST(request: Request) {
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email service is not configured. Add RESEND_API_KEY." },
      { status: 500 }
    );
  }

  const json = await request.json().catch(() => null);
  const parsed = bodySchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form input." }, { status: 400 });
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
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br />")}</p>
  `;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      text,
      html
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send right now. Please try again in a moment." },
      { status: 500 }
    );
  }
}
