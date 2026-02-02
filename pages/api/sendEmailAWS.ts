import type { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";
import { validateContactForm, sanitizeHtml } from "@/lib/validation";
import { emailRateLimiter } from "@/lib/rateLimiter";
import { verifyCsrfToken } from "@/lib/csrf";

type Data = {
  data: boolean | null;
  error: string;
};

export default function handler(
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
  if (
    !process.env.AWS_ACCESS_KEY_ID ||
    !process.env.AWS_SECRET_ACCESS_KEY ||
    !process.env.AWS_SES_FROM_EMAIL ||
    !process.env.AWS_SES_TO_EMAIL
  ) {
    console.error("Missing required AWS SES environment variables");
    return res.status(500).json({
      data: false,
      error: "Email service is not configured. Please contact the administrator.",
    });
  }

  // Configure AWS SES with environment variables
  const ses = new AWS.SES({
    apiVersion: "2010-12-01",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || "ap-south-1",
  });

  // Prepare email parameters with sanitized HTML
  const params = {
    Destination: {
      CcAddresses: [],
      ToAddresses: [process.env.AWS_SES_TO_EMAIL],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
            <html>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #007acc;">New Contact Form Submission</h2>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
                  <p><strong>Name:</strong> ${sanitizeHtml(name)}</p>
                  <p><strong>Email:</strong> ${sanitizeHtml(email)}</p>
                  ${phone ? `<p><strong>Phone:</strong> ${sanitizeHtml(phone)}</p>` : ""}
                  <p><strong>Message:</strong></p>
                  <div style="background: white; padding: 15px; border-left: 4px solid #007acc; margin-top: 10px;">
                    ${sanitizeHtml(message)}
                  </div>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">
                  This email was sent from the contact form on bharathloganathan.dev
                </p>
              </body>
            </html>
          `,
        },
        Text: {
          Charset: "UTF-8",
          Data: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n${
            phone ? `Phone: ${phone}\n` : ""
          }Message:\n${message}\n\n---\nSent from bharathloganathan.dev`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `[Portfolio Contact] Message from ${name}`,
      },
    },
    Source: process.env.AWS_SES_FROM_EMAIL,
    ReplyToAddresses: [email],
  };

  // Send email
  ses
    .sendEmail(params)
    .promise()
    .then(function (data) {
      console.log("Email sent successfully:", data.MessageId);
      res.status(200).json({ data: true, error: "" });
    })
    .catch(function (err) {
      console.error("Failed to send email:", err.message);

      // Don't expose internal error details to client
      res.status(500).json({
        data: false,
        error: "Failed to send email. Please try again later.",
      });
    });
}
