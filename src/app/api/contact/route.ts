import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ---------------------------------------------------------------------------
// In-memory rate limiter: max 3 submissions / IP / hour
// ---------------------------------------------------------------------------
const store = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (store.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= MAX_REQUESTS) return true;
  store.set(ip, [...hits, now]);
  return false;
}

// ---------------------------------------------------------------------------
// Spam keyword filter
// ---------------------------------------------------------------------------
const SPAM_PATTERNS = [
  /\bviagra\b/i,
  /\bcasino\b/i,
  /\blottery\b/i,
  /\bfree\s+money\b/i,
  /\bclick\s+here\b/i,
  /\bbitcoin\b/i,
  /\bcrypto\s+investment\b/i,
  /https?:\/\//i,
];

function isSpam(text: string): boolean {
  return SPAM_PATTERNS.some((re) => re.test(text));
}

// ---------------------------------------------------------------------------
// Email templates
// ---------------------------------------------------------------------------
function notificationHtml(name: string, email: string, message: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:'Segoe UI',Arial,sans-serif;color:#e5e5e5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:12px;overflow:hidden;border:1px solid #2a2a2a;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:32px 40px;">
            <p style="margin:0;font-size:13px;color:rgba(255,255,255,.7);letter-spacing:2px;text-transform:uppercase;">Portfolio</p>
            <h1 style="margin:8px 0 0;font-size:24px;color:#fff;font-weight:700;">New Collaboration Request 🚀</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom:20px;">
                  <p style="margin:0 0 6px;font-size:11px;color:#6b7280;letter-spacing:1px;text-transform:uppercase;">From</p>
                  <p style="margin:0;font-size:16px;font-weight:600;color:#f9fafb;">${name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom:20px;">
                  <p style="margin:0 0 6px;font-size:11px;color:#6b7280;letter-spacing:1px;text-transform:uppercase;">Email</p>
                  <a href="mailto:${email}" style="color:#818cf8;font-size:15px;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p style="margin:0 0 10px;font-size:11px;color:#6b7280;letter-spacing:1px;text-transform:uppercase;">Message</p>
                  <div style="background:#242424;border-left:3px solid #6366f1;padding:16px 20px;border-radius:0 8px 8px 0;">
                    <p style="margin:0;font-size:15px;line-height:1.7;color:#d1d5db;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;border-top:1px solid #2a2a2a;">
            <p style="margin:0;font-size:12px;color:#4b5563;">Received via your portfolio contact form · Reply directly to <a href="mailto:${email}" style="color:#818cf8;">${email}</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function thankYouHtml(name: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:'Segoe UI',Arial,sans-serif;color:#e5e5e5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:12px;overflow:hidden;border:1px solid #2a2a2a;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#10b981,#059669);padding:32px 40px;text-align:center;">
            <p style="margin:0;font-size:36px;"></p>
            <h1 style="margin:12px 0 0;font-size:26px;color:#fff;font-weight:700;">Thanks for reaching out, ${name}!</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;text-align:center;">
            <p style="margin:0 0 20px;font-size:16px;line-height:1.8;color:#d1d5db;">
              Your message has been received and I'm genuinely excited to read it.<br/>
              I'll get back to you within <strong style="color:#34d399;">24–48 hours</strong>.
            </p>
            <p style="margin:0 0 32px;font-size:15px;color:#9ca3af;">
              In the meantime, feel free to explore my work or connect with me on social media.
            </p>
            <a href="https://nguyenvanminh.com" style="display:inline-block;background:linear-gradient(135deg,#10b981,#059669);color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:600;font-size:15px;letter-spacing:.5px;">
              Visit Portfolio →
            </a>
          </td>
        </tr>
        <!-- Signature -->
        <tr>
          <td style="padding:24px 40px;border-top:1px solid #2a2a2a;text-align:center;">
            <p style="margin:0 0 4px;font-size:15px;font-weight:600;color:#f9fafb;">Nguyen Van Minh</p>
            <p style="margin:0;font-size:13px;color:#6b7280;">Full-Stack Developer &amp; Creative Technologist</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  // Rate limit
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in an hour." },
      { status: 429 },
    );
  }

  // Parse body
  let body: { fullName?: string; email?: string; message?: string; _hp?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill the hidden _hp field
  if (body._hp) {
    return NextResponse.json({ success: true }); // silent reject
  }

  const { fullName = "", email = "", message = "" } = body;

  // Validation
  if (!fullName.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 },
    );
  }
  if (message.trim().length < 10) {
    return NextResponse.json(
      { error: "Message is too short (min 10 characters)." },
      { status: 400 },
    );
  }
  if (message.trim().length > 3000) {
    return NextResponse.json(
      { error: "Message is too long (max 3000 characters)." },
      { status: 400 },
    );
  }

  // Spam check
  if (isSpam(`${fullName} ${message}`)) {
    return NextResponse.json(
      { error: "Message was flagged as spam." },
      { status: 400 },
    );
  }

  // SMTP config
  const { SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("[contact] SMTP_USER or SMTP_PASS not set");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const hostTo = CONTACT_TO ?? SMTP_USER;

  try {
    // 1️⃣ Notify host
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: hostTo,
      replyTo: email,
      subject: `📬 New collaboration request from ${fullName}`,
      html: notificationHtml(fullName, email, message),
    });

    // 2️⃣ Thank-you to sender
    await transporter.sendMail({
      from: `"Nguyen Van Minh" <${SMTP_USER}>`,
      to: email,
      subject: "Thanks for reaching out! 🙌",
      html: thankYouHtml(fullName),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}
