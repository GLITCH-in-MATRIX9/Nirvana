import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Check whether the Resend API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    // Read the form data
    const body: ContactBody = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    // Check required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Prevent excessively long input
    if (name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is too long.",
        },
        { status: 400 }
      );
    }

    if (subject.length > 200) {
      return NextResponse.json(
        {
          success: false,
          message: "Subject is too long.",
        },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is too long.",
        },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: "Nirvana Contact <onboarding@resend.dev>",

      to: "anjali95912@yahoo.com",

      replyTo: email,

      subject: `Nirvana Contact: ${subject}`,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          background: #08070f;
          color: #ffffff;
          padding: 40px;
        ">
          <div style="
            max-width: 650px;
            margin: 0 auto;
            background: #100d1c;
            border: 1px solid #30284c;
            border-radius: 12px;
            padding: 32px;
          ">

            <h1 style="
              margin: 0 0 8px;
              font-size: 28px;
              color: #c8b5ff;
            ">
              Nirvana — New Contact Message
            </h1>

            <p style="
              margin: 0 0 30px;
              color: #aaa2c4;
              font-size: 14px;
            ">
              A new message was submitted through the Nirvana website.
            </p>

            <div style="margin-bottom: 22px;">
              <p style="
                margin: 0 0 6px;
                color: #a995e8;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 2px;
              ">
                Name
              </p>

              <p style="margin: 0; font-size: 16px;">
                ${escapeHtml(name)}
              </p>
            </div>

            <div style="margin-bottom: 22px;">
              <p style="
                margin: 0 0 6px;
                color: #a995e8;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 2px;
              ">
                Email
              </p>

              <p style="margin: 0; font-size: 16px;">
                ${escapeHtml(email)}
              </p>
            </div>

            <div style="margin-bottom: 22px;">
              <p style="
                margin: 0 0 6px;
                color: #a995e8;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 2px;
              ">
                Subject
              </p>

              <p style="margin: 0; font-size: 16px;">
                ${escapeHtml(subject)}
              </p>
            </div>

            <div>
              <p style="
                margin: 0 0 6px;
                color: #a995e8;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 2px;
              ">
                Message
              </p>

              <div style="
                background: #08070f;
                border: 1px solid #30284c;
                border-radius: 8px;
                padding: 18px;
                line-height: 1.7;
                font-size: 15px;
                white-space: pre-wrap;
              ">
                ${escapeHtml(message)}
              </div>
            </div>

            <div style="
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #30284c;
              color: #77718c;
              font-size: 12px;
            ">
              Nirvana — Design Club of IGDTUW
            </div>

          </div>
        </div>
      `,
    });

    // Resend returned an error
    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to send your message. Please try again later.",
        },
        { status: 500 }
      );
    }

    console.log("Nirvana contact email sent:", data?.id);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}