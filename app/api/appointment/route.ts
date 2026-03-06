import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

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
  console.log("ENV CHECK:", process.env.GMAIL_USER, process.env.GMAIL_APP_PASSWORD?.length);

  try {
    // 4. Send email to clinic owner
    await transporter.sendMail({
      from: `"Clinic Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CLINIC_OWNER_EMAIL,
      subject: `New Appointment Request — ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <table style="font-size:16px; line-height:2">
          <tr><td><b>Name</b></td><td>: ${name}</td></tr>
          <tr><td><b>Phone</b></td><td>: ${phone}</td></tr>
          <tr><td><b>Email</b></td><td>: ${email || "Not provided"}</td></tr>
          <tr><td><b>Message</b></td><td>: ${message || "No message"}</td></tr>
        </table>
      `,
    });

    // 5. Send confirmation email to patient (only if they gave their email)
    if (email) {
      await transporter.sendMail({
        from: `"PhysioClinic Gurgaon" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "Appointment Request Received ✅",
        html: `
          <h2>Hi ${name}, we received your request!</h2>
          <p>Thank you for reaching out to <b>PhysioClinic Gurgaon</b>.</p>
          <p>Our team will call you on <b>${phone}</b> shortly to confirm your appointment.</p>
          <br/>
          <p>— Dr. Kavita sharma & Team</p>
        `,
      });
    }

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