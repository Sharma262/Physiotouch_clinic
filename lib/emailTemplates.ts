export const emailWrapper = (content: string) => `
<!DOCTYPE html>
<html lang="en" style="color-scheme: light only;">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="color-scheme" content="light only"/>
  <meta name="supported-color-schemes" content="light"/>
  <style>
    :root { color-scheme: light only; }
    body { background-color: #f1f5f9 !important; }

    /* Force Gmail dark mode override */
    [data-ogsc] .force-light { background-color: #2b1f51 !important; }
    [data-ogsb] .force-light { background-color: #2b1f51 !important; }

    /* Gmail iOS dark mode fix */
    u + .body .gmail-fix { display: block !important; }

    @media (prefers-color-scheme: dark) {
      .force-bg-dark   { background-color: #2b1f51 !important; }
      .force-bg-white  { background-color: #ffffff !important; }
      .force-bg-light  { background-color: #f8f7ff !important; }
      .force-text-white { color: #ffffff !important; }
      .force-text-green { color: #85c226 !important; }
      .force-text-dark  { color: #2b1f51 !important; }
      .force-text-muted { color: #c4b8e8 !important; }
    }
  </style>
</head>
<body class="body" style="margin:0;padding:0;background:#f1f5f9 !important;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0"
    style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
          style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td class="force-bg-dark"
              style="background-color:#2b1f51 !important;padding:28px 32px;text-align:center;">
              <!-- Green top accent line -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td height="4" style="background-color:#85c226 !important;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="padding-top:16px;text-align:center;">
                    <img
                      src="https://physiotouch-clinic.vercel.app/logo-white-bg.jpeg"
                      alt="Physiotouch Clinic"
                      width="80"
                      height="80"
                      style="display:block;margin:0 auto 12px;border-radius:50%;border:3px solid #85c226;"
                    />
                    <h1 class="force-text-white"
                      style="margin:0;color:#ffffff !important;font-size:22px;font-weight:900;">
                      Physiotouch Clinic
                    </h1>
                    <p class="force-text-green"
                      style="margin:6px 0 0;color:#85c226 !important;font-size:13px;font-weight:600;">
                      "Let's Talk Pain"
                    </p>
                    <p class="force-text-muted"
                      style="margin:4px 0 0;color:#c4b8e8 !important;font-size:12px;">
                      Expert Physiotherapy · Sector 45, Gurugram
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="force-bg-white" style="padding:32px;background-color:#ffffff !important;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="force-bg-dark"
              style="background-color:#2b1f51 !important;padding:20px 32px;text-align:center;">
              <p class="force-text-muted"
                style="margin:0 0 6px;color:#c4b8e8 !important;font-size:13px;">
                📍 H No. 973, Behind Community Centre, Near DPS School, Sector 45, Gurugram 122003
              </p>
              <p class="force-text-muted"
                style="margin:0 0 6px;color:#c4b8e8 !important;font-size:13px;">
                📞 +91 95605 79893 &nbsp;|&nbsp; +91 80590 02867
              </p>
              <p class="force-text-muted"
                style="margin:0 0 10px;color:#c4b8e8 !important;font-size:13px;">
                🕐 Mon–Sat: 9:00 AM – 8:00 PM
              </p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td height="1"
                    style="background-color:#85c22640;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
              <p class="force-text-green"
                style="margin:10px 0 0;color:#85c226 !important;font-size:11px;font-weight:600;">
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
  <div style="border-left:4px solid #85c226;padding-left:12px;margin-bottom:20px;">
    <h2 style="margin:0 0 4px;color:#2b1f51;font-size:20px;font-weight:900;">
      New Appointment Request 🗓️
    </h2>
    <p style="margin:0;color:#64748b;font-size:13px;">
      A new patient has requested an appointment via the website.
    </p>
  </div>

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="padding:12px 16px;background:#f8f7ff;border-radius:10px;border-left:3px solid #2b1f51;">
        <table width="100%">
          <tr>
            <td style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;width:100px;">
              👤 Name
            </td>
            <td style="color:#2b1f51;font-size:15px;font-weight:700;">${name}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td style="height:8px;"></td></tr>
    <tr>
      <td style="padding:12px 16px;background:#f8f7ff;border-radius:10px;border-left:3px solid #85c226;">
        <table width="100%">
          <tr>
            <td style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;width:100px;">
              📞 Phone
            </td>
            <td style="color:#2b1f51;font-size:15px;font-weight:700;">${phone}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td style="height:8px;"></td></tr>
    <tr>
      <td style="padding:12px 16px;background:#f8f7ff;border-radius:10px;border-left:3px solid #2b1f51;">
        <table width="100%">
          <tr>
            <td style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;width:100px;">
              ✉️ Email
            </td>
            <td style="color:#2b1f51;font-size:15px;font-weight:700;">${email || "Not provided"}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td style="height:8px;"></td></tr>
    <tr>
      <td style="padding:12px 16px;background:#f8f7ff;border-radius:10px;border-left:3px solid #85c226;">
        <table width="100%">
          <tr>
            <td style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;width:100px;">
              💬 Message
            </td>
            <td style="color:#2b1f51;font-size:15px;font-weight:700;">${message || "No message"}</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <div style="margin-top:20px;padding:14px 16px;background:#fefce8;border-left:4px solid #eab308;border-radius:8px;">
    <p style="margin:0;color:#854d0e;font-size:13px;font-weight:600;">
      ⏰ Please call the patient back as soon as possible to confirm the appointment.
    </p>
  </div>

  <div style="margin-top:20px;text-align:center;">
    <a href="tel:+91${phone}"
      style="display:inline-block;background:#85c226;color:#2b1f51;font-size:15px;font-weight:900;padding:14px 32px;border-radius:50px;text-decoration:none;">
      📞 Call Patient Now
    </a>
    <p style="margin:10px 0 0;color:#2b1f51;font-size:16px;font-weight:900;">
      +91 ${phone}
    </p>
  </div>
`;

export const patientEmailContent = (name: string, phone: string) => `
  <div style="text-align:center;margin-bottom:24px;">
    <div style="display:inline-block;background:#f0ffd6;border-radius:50%;width:64px;height:64px;line-height:64px;font-size:32px;">
      ✅
    </div>
    <h2 style="margin:12px 0 4px;color:#2b1f51;font-size:22px;font-weight:900;">
      Appointment Request Received!
    </h2>
    <p style="margin:0;color:#64748b;font-size:14px;">
      Thank you for reaching out to Physiotouch Clinic
    </p>
  </div>

  <div style="background:#f8f7ff;border-radius:12px;padding:20px;margin-bottom:16px;border-left:4px solid #2b1f51;">
    <p style="margin:0 0 10px;color:#2b1f51;font-size:15px;font-weight:700;">
      Dear ${name},
    </p>
    <p style="margin:0 0 10px;color:#475569;font-size:14px;line-height:1.7;">
      We have successfully received your appointment request. Our team will call you on
      <strong style="color:#2b1f51;">${phone}</strong> shortly to confirm your appointment timing.
    </p>
    <p style="margin:0;color:#475569;font-size:14px;line-height:1.7;">
      For any urgent queries, feel free to call us directly.
    </p>
  </div>

  <div style="background:#2b1f51;border-radius:12px;padding:20px;margin-bottom:24px;">
    <p style="margin:0 0 12px;color:#85c226;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">
      Clinic Details
    </p>
    <p style="margin:0 0 8px;color:#ffffff;font-size:13px;">
      🏥 <strong>Physiotouch Clinic</strong> — Sector 45, Gurugram
    </p>
    <p style="margin:0 0 8px;color:#ffffff;font-size:13px;">
      👩‍⚕️ <strong>Dr. Kavita Sharma</strong> — B.P.T., M.P.T. (Ortho), MCMT (Canada), CKTT, CCT
    </p>
    <p style="margin:0 0 8px;color:#ffffff;font-size:13px;">
      📞 <strong>+91 95605 79893</strong> &nbsp;|&nbsp; <strong>+91 80590 02867</strong>
    </p>
    <p style="margin:0;color:#ffffff;font-size:13px;">
      🕐 <strong>Mon–Sat:</strong> 9:00 AM – 8:00 PM
    </p>
  </div>

  <div style="text-align:center;">
    <a href="tel:+919560579893"
      style="display:inline-block;background:#85c226;color:#2b1f51;font-size:15px;font-weight:900;padding:14px 32px;border-radius:50px;text-decoration:none;">
      📞 Call Us Directly
    </a>
  </div>
`;