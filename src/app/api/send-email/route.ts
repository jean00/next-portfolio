import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");
require("dotenv").config();

export async function POST(request: Request) {
  const body = await request.json();
  const message = {
    from: body.email,
    to: process.env.EMAIL,
    subject: `${body.subject} by ${body.name} (${body.email})`,
    html: `${body.message}`,
    replyTo: body.email,
    headers: {
      "X-Entity-Ref-ID": "newmail",
    },
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail(message);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
