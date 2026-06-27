import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getServerEnv } from "@/lib/env";

// In-memory rate limiter: max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export async function POST(request: Request) {
  // Rate limiting by IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (entry && now < entry.resetAt) {
    if (entry.count >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }
    entry.count++;
  } else {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  }

  // Parse & validate body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body" },
      { status: 400 },
    );
  }

  const { name, email: senderEmail, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof senderEmail !== "string" ||
    !isValidEmail(senderEmail) ||
    typeof message !== "string" ||
    message.trim().length < 5
  ) {
    return NextResponse.json({ message: "Invalid input" }, { status: 400 });
  }

  const safeName = escapeHtml(name.trim().slice(0, 100));
  const safeEmail = senderEmail.trim().slice(0, 254);
  const safeMessage = escapeHtml(message.trim().slice(0, 2000));

  const { email, emailPass } = getServerEnv();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: emailPass,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: email,
      replyTo: safeEmail,
      subject: `Portfolio contact from ${safeName}`,
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, "<br>")}</p>
      `,
    });
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
