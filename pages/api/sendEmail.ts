import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { validateContactForm, sanitizeHtml } from "@/lib/validation";
import { emailRateLimiter } from "@/lib/rateLimiter";
import { verifyCsrfToken } from "@/lib/csrf";

const resend = new Resend(process.env.RESEND_API_KEY);

type Data = {
  data: boolean | null;
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ data: null, error: "Method not allowed" });
  }

  // Verify CSRF token
  if (!verifyCsrfToken(req)) {
    return res.status(403).json({
      data: null,
      error: "Invalid CSRF token. Please refresh the page and try again.",
    });
  }

  // Apply rate limiting (5 requests per 15 minutes)
  if (emailRateLimiter.check(req, res)) {
    return res.status(429).json({
      data: null,
      error: "Too many requests. Please try again later.",
    });
  }

  // Validate request body with Zod
  const validation = validateContactForm(req.body);

  if (!validation.success) {
    const errors = validation.error.issues.map((err) => err.message).join(", ");
    return res.status(400).json({
      data: null,
      error: `Validation failed: ${errors}`,
    });
  }

  const { name, email, message, phone } = validation.data;

  // Check environment variables
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
    console.error("Missing required Resend environment variables");
    return res.status(500).json({
      data: false,
      error: "Email service is not configured. Please contact the administrator.",
    });
  }

  try {
    // Send email using Resend
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Default Resend sender
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #007acc;">New Contact Form Submission</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
              <p><strong>Name:</strong> ${sanitizeHtml(name)}</p>
              <p><strong>Email:</strong> ${sanitizeHtml(email)}</p>
              ${phone ? `<p><strong>Phone:</strong> ${sanitizeHtml(phone)}</p>` : ""}
              <p><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-left: 4px solid #007acc; margin-top: 10px;">
                ${sanitizeHtml(message).replace(/\n/g, "<br>")}
              </div>
            </div>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">
              This email was sent from the contact form on bharathloganathan.dev
            </p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">
              Reply directly to this email to respond to ${sanitizeHtml(email)}
            </p>
          </body>
        </html>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    });

    return res.status(200).json({
      data: true,
      error: "",
    });
  } catch (error: any) {
    console.error("Resend error:", error);
    return res.status(500).json({
      data: false,
      error: "Failed to send email. Please try again later.",
    });
  }
}
