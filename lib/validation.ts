import { z } from "zod";

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .trim(),

  email: z
    .string()
    .email("Invalid email format")
    .max(255, "Email must not exceed 255 characters")
    .trim()
    .toLowerCase(),

  phone: z
    .string()
    .regex(/^[\d\s\-\+\(\)]*$/, "Invalid phone format")
    .max(20, "Phone must not exceed 20 characters")
    .optional()
    .default(""),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must not exceed 2000 characters")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Sanitize HTML to prevent XSS attacks
 */
export function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Validate and sanitize contact form data
 */
export function validateContactForm(data: unknown) {
  return contactFormSchema.safeParse(data);
}
