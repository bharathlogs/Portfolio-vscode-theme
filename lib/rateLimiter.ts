import type { NextApiRequest, NextApiResponse } from "next";

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

/**
 * Simple in-memory rate limiter for API routes
 * For production, consider using Redis or a dedicated rate limiting service
 */
export class RateLimiter {
  private windowMs: number;
  private maxRequests: number;

  constructor(windowMs: number = 15 * 60 * 1000, maxRequests: number = 5) {
    this.windowMs = windowMs; // Default: 15 minutes
    this.maxRequests = maxRequests; // Default: 5 requests
  }

  /**
   * Get client identifier (IP address or user agent as fallback)
   */
  private getClientId(req: NextApiRequest): string {
    // Try to get real IP from various headers (for proxies/load balancers)
    const forwarded = req.headers["x-forwarded-for"];
    const realIp = req.headers["x-real-ip"];

    if (typeof forwarded === "string") {
      return forwarded.split(",")[0].trim();
    }

    if (typeof realIp === "string") {
      return realIp;
    }

    // Fallback to connection remote address or user agent
    return req.socket.remoteAddress || req.headers["user-agent"] || "unknown";
  }

  /**
   * Clean up expired entries from store
   */
  private cleanup() {
    const now = Date.now();
    Object.keys(store).forEach((key) => {
      if (store[key].resetTime < now) {
        delete store[key];
      }
    });
  }

  /**
   * Check if request should be rate limited
   */
  check(req: NextApiRequest, res: NextApiResponse): boolean {
    const clientId = this.getClientId(req);
    const now = Date.now();

    // Cleanup old entries periodically
    if (Math.random() < 0.1) {
      this.cleanup();
    }

    // Initialize or get existing rate limit data
    if (!store[clientId] || store[clientId].resetTime < now) {
      store[clientId] = {
        count: 1,
        resetTime: now + this.windowMs,
      };
      return false; // Not rate limited
    }

    // Increment request count
    store[clientId].count++;

    // Check if limit exceeded
    if (store[clientId].count > this.maxRequests) {
      const resetIn = Math.ceil((store[clientId].resetTime - now) / 1000);
      res.setHeader("X-RateLimit-Limit", this.maxRequests.toString());
      res.setHeader("X-RateLimit-Remaining", "0");
      res.setHeader("X-RateLimit-Reset", store[clientId].resetTime.toString());
      res.setHeader("Retry-After", resetIn.toString());
      return true; // Rate limited
    }

    // Set rate limit headers
    const remaining = this.maxRequests - store[clientId].count;
    res.setHeader("X-RateLimit-Limit", this.maxRequests.toString());
    res.setHeader("X-RateLimit-Remaining", remaining.toString());
    res.setHeader("X-RateLimit-Reset", store[clientId].resetTime.toString());

    return false; // Not rate limited
  }

  /**
   * Middleware function for rate limiting
   */
  middleware() {
    return (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
      if (this.check(req, res)) {
        return res.status(429).json({
          data: null,
          error: "Too many requests. Please try again later.",
        });
      }
      next();
    };
  }
}

/**
 * Create a rate limiter with custom options
 */
export function createRateLimiter(
  windowMs: number = 15 * 60 * 1000,
  maxRequests: number = 5
) {
  return new RateLimiter(windowMs, maxRequests);
}

/**
 * Default rate limiter for email endpoint
 * 5 requests per 15 minutes
 */
export const emailRateLimiter = new RateLimiter(15 * 60 * 1000, 5);
