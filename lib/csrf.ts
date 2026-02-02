import { NextApiRequest, NextApiResponse } from "next";

/**
 * Generate a simple CSRF token
 * In production, consider using a more robust library like 'csrf' or 'csurf'
 */
export function generateCsrfToken(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);
  return `${timestamp}.${random}`;
}

/**
 * Validate CSRF token format
 * Basic validation - checks token structure
 */
export function validateCsrfToken(token: string | undefined): boolean {
  if (!token) return false;

  const parts = token.split(".");
  // Valid token should have 2 parts: timestamp and random
  return parts.length === 2 && parts[0].length > 0 && parts[1].length > 0;
}

/**
 * Extract CSRF token from request headers
 */
export function getCsrfTokenFromRequest(req: NextApiRequest): string | undefined {
  return req.headers["x-csrf-token"] as string | undefined;
}

/**
 * Validate CSRF token from request
 */
export function verifyCsrfToken(req: NextApiRequest): boolean {
  const token = getCsrfTokenFromRequest(req);
  return validateCsrfToken(token);
}
