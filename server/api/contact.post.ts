export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const apiKey = config.brevoApiKey || process.env.BREVO_API_KEY || process.env.BREVO_PASS;
  const senderEmail = config.brevoSenderEmail || process.env.BREVO_USER || "onyeka.ezenwankwo@gmail.com";
  const recipientEmail = config.mailTo || process.env.MAIL_TO || "townsmeet@gmail.com";

  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Please provide your name, email, and project details.",
    });
  }

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Brevo API key is not configured. Please set BREVO_API_KEY in your .env file.",
    });
  }

  const escapeHtml = (unsafe: string) => {
    return (unsafe || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const subject = `Inquiry: ${body.projectType || "General"} from ${body.name}`;

  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
      <div style="border-bottom: 2px solid #FFB86A; padding-bottom: 14px; margin-bottom: 20px;">
        <span style="font-size: 11px; font-weight: 700; color: #d96522; text-transform: uppercase; letter-spacing: 1px;">Townsmeet Intake Portal</span>
        <h2 style="margin: 6px 0 0 0; color: #0f172a; font-size: 22px;">New Project Inquiry</h2>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 600; width: 150px; vertical-align: top;">Name:</td>
          <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 700;">${escapeHtml(body.name)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 600; vertical-align: top;">Contact Email:</td>
          <td style="padding: 10px 0; color: #0f172a; font-size: 14px;"><a href="mailto:${escapeHtml(body.email)}" style="color: #ea580c; text-decoration: none; font-weight: 600;">${escapeHtml(body.email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 600; vertical-align: top;">Organisation / Entity:</td>
          <td style="padding: 10px 0; color: #0f172a; font-size: 14px;">${escapeHtml(body.company || "Not specified")}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 600; vertical-align: top;">Initiative Type:</td>
          <td style="padding: 10px 0; color: #0f172a; font-size: 14px;">
            <span style="background-color: #fef6f1; color: #9a3412; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; border: 1px solid #fed7aa;">
              ${escapeHtml(body.projectType || "General")}
            </span>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 600; vertical-align: top;">Scope / Budget:</td>
          <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${escapeHtml(body.budget || "Flexible")}</td>
        </tr>
      </table>

      <div style="background-color: #f8fafc; border-left: 4px solid #FFB86A; border-radius: 8px; padding: 16px 20px; margin-top: 10px;">
        <h4 style="margin: 0 0 10px 0; color: #0f172a; font-size: 14px; font-weight: 700;">Project Details & Message:</h4>
        <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.65; white-space: pre-wrap;">${escapeHtml(body.message)}</p>
      </div>

      <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #f1f5f9; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">
          Delivered via Brevo REST API • Townsmeet Ltd, Abuja, Nigeria
        </p>
      </div>
    </div>
  `;

  const textContent = `
New Project Inquiry from Townsmeet Website
-----------------------------------------
Name: ${body.name}
Email: ${body.email}
Organisation / Community / Business: ${body.company || "Not specified"}
Initiative Type: ${body.projectType || "General"}
Scope / Budget: ${body.budget || "Flexible"}

Message:
${body.message}
  `.trim();

  try {
    const response = await $fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: {
        sender: {
          name: "Townsmeet Website",
          email: senderEmail,
        },
        to: [
          {
            email: recipientEmail,
            name: "Townsmeet Team",
          },
        ],
        replyTo: {
          email: body.email,
          name: body.name,
        },
        subject: subject,
        htmlContent: htmlContent,
        textContent: textContent,
      },
    });

    return {
      success: true,
      messageId: (response as any)?.messageId || "sent",
    };
  } catch (err: any) {
    const errorDetails = err?.data || err?.response?._data || err?.message || err;
    console.error("Brevo API Error:", errorDetails);

    let message =
      err?.data?.message ||
      err?.response?._data?.message ||
      err?.message ||
      "Failed to deliver email via Brevo API.";

    if (err?.statusCode === 401 || (typeof message === "string" && message.toLowerCase().includes("key not found"))) {
      message = "Brevo REST API key is invalid or not found. Please create an API Key in Brevo under 'SMTP & API' -> 'API Keys' (starts with xkeysib-) and set BREVO_API_KEY in your .env file.";
    }

    throw createError({
      statusCode: err?.statusCode || 500,
      statusMessage: message,
    });
  }
});
