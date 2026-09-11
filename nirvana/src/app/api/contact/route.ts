import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    // =========================================
    // REQUIRED FIELD VALIDATION
    // =========================================

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // =========================================
    // EMAIL VALIDATION
    // =========================================

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // =========================================
    // LENGTH VALIDATION
    // =========================================

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

    // =========================================
    // CONTACT EMAILS
    // =========================================

    const sponsorshipEmail =
      "nirvana.sponsorship123@gmail.com";

    const designClubEmail =
      "designclubigdtuw@gmail.com";

    // =========================================
    // RECEIVED CONTACT MESSAGE
    // =========================================

    console.log(
      "================================="
    );

    console.log(
      "NIRVANA CONTACT FORM"
    );

    console.log(
      "================================="
    );

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    console.log(
      "Sponsorship Email:",
      sponsorshipEmail
    );

    console.log(
      "Design Club Email:",
      designClubEmail
    );

    console.log(
      "================================="
    );

    // =========================================
    // SUCCESS
    // =========================================

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been received successfully.",
      },
      { status: 200 }
    );

  } catch (error) {

    console.error(
      "Contact form error:",
      error
    );

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