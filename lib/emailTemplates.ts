export const emailWrapper = (content: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1d4ed8,#0ea5e9);padding:28px 32px;text-align:center;">
              <img
                src="https://physiotouch-clinic.vercel.app/logo.png"
                alt="Physiotouch Clinic"
                width="80"
                style="display:block;margin:0 auto 10px;border-radius:50%;"
              />
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:900;">
                Physiotouch Clinic
              </h1>
              <p style="margin:4px 0 0;color:#bfdbfe;font-size:13px;">
                Expert Physiotherapy · Sector 45, Gurugram
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 32px;text-align:center;">
              <p style="margin:0 0 6px;color:#64748b;font-size:13px;">
                📍 House No. 973, Behind Community Centre, Block C, Sector 45, Gurugram 122003
              </p>
              <p style="margin:0 0 6px;color:#64748b;font-size:13px;">
                📞 +91 83072 10468 &nbsp;|&nbsp; 🕐 Mon–Sun: 9:00 AM – 7:00 PM
              </p>
              <p style="margin:12px 0 0;color:#94a3b8;font-size:11px;">
                © ${new Date().getFullYear()} Physiotouch Clinic. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const ownerEmailContent = (
  name: string,
  phone: string,
  email: string,
  message: string
) => `
  <h2 style="margin:0 0 6px;color:#1d4ed8;font-size:20px;font-weight:900;">
    New Appointment Request 🗓️
  </h2>
  <p style="margin:0 0 24px;color:#64748b;font-size:14px;">
    A new patient has requested an appointment via the website.
  </p>

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="padding:10px 16px;background:#eff6ff;border-radius:10px;">
        <table width="100%">
          <tr>
            <td style="color:#64748b;font-size:13px;width:100px;">👤 Name</td>
            <td style="color:#1e293b;font-size:14px;font-weight:700;">${name}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td style="height:8px;"></td></tr>
    <tr>
      <td style="padding:10px 16px;background:#eff6ff;border-radius:10px;">
        <table width="100%">
          <tr>
            <td style="color:#64748b;font-size:13px;width:100px;">📞 Phone</td>
            <td style="color:#1e293b;font-size:14px;font-weight:700;">${phone}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td style="height:8px;"></td></tr>
    <tr>
      <td style="padding:10px 16px;background:#eff6ff;border-radius:10px;">
        <table width="100%">
          <tr>
            <td style="color:#64748b;font-size:13px;width:100px;">✉️ Email</td>
            <td style="color:#1e293b;font-size:14px;font-weight:700;">${
              email || "Not provided"
            }</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td style="height:8px;"></td></tr>
    <tr>
      <td style="padding:10px 16px;background:#eff6ff;border-radius:10px;">
        <table width="100%">
          <tr>
            <td style="color:#64748b;font-size:13px;width:100px;">💬 Message</td>
            <td style="color:#1e293b;font-size:14px;font-weight:700;">${
              message || "No message"
            }</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <div style="margin-top:24px;padding:16px;background:#fefce8;border-left:4px solid #eab308;border-radius:8px;">
    <p style="margin:0;color:#854d0e;font-size:13px;font-weight:600;">
      ⏰ Please call the patient back as soon as possible to confirm the appointment.
    </p>
  </div>

  <div style="margin-top:20px;text-align:center;">
  <a href="tel:+91${phone}"
    style="display:inline-block;background:#1d4ed8;color:#ffffff;font-size:14px;font-weight:700;padding:12px 28px;border-radius:50px;text-decoration:none;">
    📞 Call Patient Now
  </a>
  <p style="margin:10px 0 0;color:#64748b;font-size:15px;font-weight:700;">
    +91 ${phone}
  </p>
</div>
`;

export const patientEmailContent = (name: string, phone: string) => `
  <h2 style="margin:0 0 8px;color:#1d4ed8;font-size:20px;font-weight:900;text-align:center;">
    Appointment Request Received! ✅
  </h2>
  <p style="margin:0 0 24px;color:#64748b;font-size:14px;text-align:center;">
    Thank you for reaching out to Physiotouch Clinic
  </p>

  <div style="background:#eff6ff;border-radius:12px;padding:20px;margin-bottom:20px;">
    <p style="margin:0 0 8px;color:#1e293b;font-size:15px;">
      Dear <strong>${name}</strong>,
    </p>
    <p style="margin:0 0 12px;color:#475569;font-size:14px;line-height:1.6;">
      We have received your appointment request. Our team will call you on
      <strong style="color:#1d4ed8;">${phone}</strong> shortly to confirm your timing.
    </p>
    <p style="margin:0;color:#475569;font-size:14px;line-height:1.6;">
      For urgent queries, feel free to call us directly.
    </p>
  </div>

  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin-bottom:24px;">
    <p style="margin:0 0 8px;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;">
      Clinic Details
    </p>
    <p style="margin:0 0 6px;color:#1e293b;font-size:13px;">🏥 <strong>Physiotouch Clinic</strong> — Sector 45, Gurugram</p>
    <p style="margin:0 0 6px;color:#1e293b;font-size:13px;">👩‍⚕️ <strong>Dr. Kavita Sharma</strong> — BPT, BPTh</p>
    <p style="margin:0 0 6px;color:#1e293b;font-size:13px;">📞 <strong>+91 83072 10468</strong></p>
    <p style="margin:0;color:#1e293b;font-size:13px;">🕐 <strong>Mon–Sun:</strong> 9:00 AM – 7:00 PM</p>
  </div>

  <div style="text-align:center;">
    <a href="tel:+918307210468"
      style="display:inline-block;background:#1d4ed8;color:#ffffff;font-size:14px;font-weight:700;padding:12px 28px;border-radius:50px;text-decoration:none;">
      📞 Call Us Directly
    </a>
  </div>
`;
