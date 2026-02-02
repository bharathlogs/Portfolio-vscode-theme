# API Documentation

**Last Updated:** 2026-01-31

---

## Table of Contents
1. [API Routes](#api-routes)
2. [Email API](#email-api)
3. [Third-Party Services](#third-party-services)
4. [Error Handling](#error-handling)
5. [Security](#security)

---

## API Routes

### Overview
Next.js API routes provide serverless function capabilities. All API routes are located in `pages/api/`.

**Current API Endpoints:**
- `/api/sendEmail` - Email sending via AWS SES

---

## Email API

### POST /api/sendEmail

Sends email through AWS Simple Email Service (SES).

#### Endpoint
```
POST /api/sendEmail
```

#### Request Headers
```http
Content-Type: application/json
```

#### Request Body
```typescript
interface EmailRequest {
  name: string;
  email: string;
  phone?: string;  // Optional
  message: string;
}
```

#### Example Request
```javascript
const response = await fetch("/api/sendEmail", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    message: "Hello, I'd like to get in touch!"
  })
});
```

#### Response

**Success (200)**
```json
{
  "message": "Email sent successfully",
  "messageId": "01000183-abc123..."
}
```

**Error (400)**
```json
{
  "error": "All fields are required"
}
```

**Error (500)**
```json
{
  "error": "Failed to send email"
}
```

#### Response Codes
| Code | Description |
|------|-------------|
| 200  | Email sent successfully |
| 400  | Missing required fields |
| 500  | Server error or AWS SES failure |

---

### Implementation Details

**Location:** `pages/api/sendEmail.ts`

#### Current Implementation
```typescript
import type { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "awsAccessKey",  // ⚠️ SECURITY ISSUE
  secretAccessKey: "awsSecretAccessKey",  // ⚠️ SECURITY ISSUE
  region: "ap-south-1",
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Email parameters
  const params = {
    Source: "youremail@gmail.com",  // ⚠️ Placeholder
    Destination: {
      ToAddresses: ["toemail@tomail.com"],  // ⚠️ Placeholder
    },
    Message: {
      Subject: {
        Data: `New Contact Form Submission from ${name}`,
      },
      Body: {
        Text: {
          Data: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone || "Not provided"}
            Message: ${message}
          `,
        },
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    res.status(200).json({
      message: "Email sent successfully",
      messageId: result.MessageId
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
```

---

### Security Issues ⚠️

#### Critical Problems
1. **Hardcoded AWS Credentials**
   - Access key and secret key are hardcoded
   - Credentials visible in source code
   - Risk of unauthorized access

2. **No Rate Limiting**
   - Vulnerable to spam attacks
   - Could incur high AWS costs
   - No request throttling

3. **Missing Input Validation**
   - Basic null checks only
   - No email format validation
   - No HTML sanitization (XSS risk)
   - No phone number validation

4. **No CSRF Protection**
   - Can be called from any origin
   - No CORS configuration
   - No request verification

5. **Error Information Leakage**
   - Console errors may expose system info
   - Generic error messages don't help debugging

---

### Recommended Fixes

#### 1. Environment Variables
```typescript
// .env.local
AWS_ACCESS_KEY_ID=your-actual-key
AWS_SECRET_ACCESS_KEY=your-actual-secret
AWS_REGION=ap-south-1
AWS_SES_FROM_EMAIL=your-email@domain.com
AWS_SES_TO_EMAIL=recipient@domain.com

// Updated code
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
```

#### 2. Rate Limiting
```typescript
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: "Too many requests, please try again later.",
});
```

#### 3. Input Validation
```typescript
import { z } from "zod";

const emailSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10).max(1000),
});

// Validate
const validation = emailSchema.safeParse(req.body);
if (!validation.success) {
  return res.status(400).json({
    error: "Invalid input",
    details: validation.error.errors
  });
}
```

#### 4. HTML Sanitization
```typescript
import DOMPurify from "isomorphic-dompurify";

const sanitizedMessage = DOMPurify.sanitize(message);
```

#### 5. CORS Configuration
```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://yourdomain.com" },
          { key: "Access-Control-Allow-Methods", value: "POST" },
        ],
      },
    ];
  },
};
```

---

## Third-Party Services

### AWS Simple Email Service (SES)

#### Purpose
Sending transactional emails from contact form.

#### Configuration
- **Region:** ap-south-1 (Mumbai)
- **API Version:** 2010-12-01
- **SDK:** aws-sdk (v2) - ⚠️ Should use @aws-sdk/client-ses (v3)

#### Current Setup
```typescript
import AWS from "aws-sdk";

const ses = new AWS.SES({ apiVersion: "2010-12-01" });
```

#### Recommended Setup (AWS SDK v3)
```typescript
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: process.env.AWS_REGION
});

const command = new SendEmailCommand(params);
const result = await sesClient.send(command);
```

#### Benefits of v3
- Modular packages (smaller bundle)
- Better TypeScript support
- Modern async/await patterns
- Tree-shakeable

---

### Vercel Analytics

#### Purpose
Track page views and performance metrics.

#### Setup
```typescript
// pages/_app.tsx
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

#### Data Collected
- Page views
- Visitor count
- Performance metrics
- Geographic data

#### Privacy
- No personal data collected
- GDPR compliant
- No cookies required

---

### Icons8 API (Unofficial)

#### Purpose
Skill icons and UI icons.

#### Usage
```typescript
icon: "https://img.icons8.com/color/48/python--v1.png"
```

#### Issues
- External dependency
- No offline support
- Potential loading delays
- No version control

#### Recommended Fix
- Download and self-host icons
- Convert to SVG components
- Faster loading
- Better caching

---

## Error Handling

### Current Approach
```typescript
try {
  // API operation
} catch (error) {
  console.error("Error:", error);
  res.status(500).json({ error: "Generic error message" });
}
```

### Issues
1. Generic error messages
2. Error details logged to console (may leak info)
3. No error categorization
4. No retry logic
5. No user-friendly messages

### Recommended Approach
```typescript
try {
  // API operation
} catch (error) {
  // Log for debugging (server-side only)
  logger.error("Email send failed", {
    error,
    context: { name, email }
  });

  // Categorize error
  if (error.code === "MessageRejected") {
    return res.status(400).json({
      error: "Email could not be delivered"
    });
  }

  if (error.code === "Throttling") {
    return res.status(429).json({
      error: "Too many requests. Please try again later."
    });
  }

  // Generic fallback
  return res.status(500).json({
    error: "An unexpected error occurred. Please try again."
  });
}
```

---

## Security Best Practices

### 1. Authentication & Authorization
**Current:** None
**Recommended:**
- Consider API keys for protected routes
- JWT tokens for authenticated endpoints
- Admin dashboard needs auth

### 2. Input Validation
**Current:** Basic null checks
**Recommended:**
- Schema validation (Zod, Yup)
- Email format regex
- String length limits
- Type checking

### 3. Rate Limiting
**Current:** None
**Recommended:**
- Per-IP limiting
- Per-endpoint limiting
- Exponential backoff

### 4. HTTPS Only
**Current:** Enforced by Vercel
**Recommended:**
- Ensure HTTPS in production
- Redirect HTTP to HTTPS
- Secure cookies (if used)

### 5. Environment Variables
**Current:** Hardcoded secrets
**Recommended:**
- Use .env.local for local dev
- Use Vercel env vars for production
- Never commit secrets to git

### 6. CORS
**Current:** Open to all origins
**Recommended:**
- Whitelist specific domains
- Configure per endpoint
- Validate Origin header

---

## Future API Endpoints

### Planned Endpoints (See ROADMAP.md)

#### 1. Analytics Tracking
```
POST /api/analytics/track
```
Track page views and events.

#### 2. Analytics Stats
```
GET /api/analytics/stats
```
Retrieve analytics data for admin dashboard.

#### 3. Blog Posts
```
GET /api/blog/posts
GET /api/blog/posts/[slug]
```
Retrieve blog posts (if internal blog is implemented).

#### 4. Resume Generation
```
GET /api/generate-resume
```
Generate PDF resume on demand.

#### 5. Comments
```
POST /api/comments
GET /api/comments/[postId]
```
Comment system for blog posts.

---

## Testing

### Current State
- ❌ No API tests
- ❌ No integration tests
- ❌ No load testing

### Recommended Tests

#### Unit Tests
```typescript
describe("Email API", () => {
  it("should validate required fields", async () => {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({ name: "Test" }),
    });
    expect(res.status).toBe(400);
  });

  it("should accept valid email", async () => {
    // Test implementation
  });
});
```

#### Integration Tests
- Test actual AWS SES integration
- Mock SES for faster tests
- Test error scenarios

#### Load Tests
- Test rate limiting
- Measure response times
- Identify bottlenecks

---

## Monitoring

### Current
- Console logs only
- Vercel function logs

### Recommended
1. **Error Tracking:** Sentry
2. **Performance Monitoring:** Vercel Analytics
3. **Logging:** Structured logging with Winston/Pino
4. **Alerting:** Email/Slack notifications for errors

---

## Related Documentation
- [Architecture Overview](./01-Architecture-Overview.md)
- [Security Guide](../ROADMAP.md#phase-1-critical-security--infrastructure-week-1)

---

*For API security improvements, see [ROADMAP.md](../ROADMAP.md) Phase 1*
