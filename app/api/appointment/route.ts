import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";
import { emailWrapper, ownerEmailContent, patientEmailContent } from "@/lib/emailTemplates";

export async function POST(req: NextRequest) {

  // 1. Read the data sent from the form
  const body = await req.json();
  const { name, phone, email, message } = body;

  // 2. Validate required fields
  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone number are required." },
      { status: 400 }
    );
  }

  // 3. Basic phone validation — must be 10 digits
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    return NextResponse.json(
      { error: "Please enter a valid 10-digit phone number." },
      { status: 400 }
    );
  }

  try {
    // 4. Send email to clinic owner
    await transporter.sendMail({
      from: `"Clinic Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CLINIC_OWNER_EMAIL,
      subject: `New Appointment Request — ${name}`,
      html: emailWrapper(ownerEmailContent(name, phone, email, message)),
    });

    // 5. Send confirmation email to patient (only if they gave their email)
    if (email) {
      await transporter.sendMail({
        from: `"PhysioClinic Gurgaon" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "Appointment Request Received ✅",
        html: emailWrapper(patientEmailContent(name, phone)),
      });
    };

    // 6. Return success
    return NextResponse.json(
      { success: true, message: "Appointment booked successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}