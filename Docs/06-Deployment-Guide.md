# Deployment Guide

**Last Updated:** 2026-01-31

---

## Table of Contents
1. [Overview](#overview)
2. [Local Development](#local-development)
3. [Production Build](#production-build)
4. [Vercel Deployment](#vercel-deployment)
5. [Environment Variables](#environment-variables)
6. [Domain Configuration](#domain-configuration)
7. [CI/CD](#cicd)
8. [Troubleshooting](#troubleshooting)

---

## Overview

### Hosting Platform
**Vercel** - Optimized for Next.js applications

### Production URL
`https://www.bharathloganathan.dev`

### Deployment Method
- Automatic deployment from Git repository
- Manual deployment via Vercel CLI
- GitHub integration (assumed)

---

## Local Development

### Prerequisites
```bash
# Required
Node.js >= 14.x
npm >= 6.x or yarn >= 1.22

# Recommended
Node.js >= 18.x (LTS)
npm >= 9.x
```

### Initial Setup
```bash
# Clone repository
git clone https://github.com/bharathlogs/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
yarn install
```

### Environment Variables
Create `.env.local` file:
```env
# AWS SES Configuration
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
AWS_REGION=ap-south-1
AWS_SES_FROM_EMAIL=your-email@domain.com
AWS_SES_TO_EMAIL=recipient@domain.com

# Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

⚠️ **Important:** Never commit `.env.local` to Git!

### Development Server
```bash
# Start development server
npm run dev

# Server runs at
http://localhost:3000
```

### Development Features
- Hot Module Replacement (HMR)
- Fast Refresh
- Error overlay
- TypeScript checking
- ESLint warnings

---

## Production Build

### Build Process
```bash
# Create optimized production build
npm run build

# Output
.next/              # Build output
.next/static/       # Static assets
.next/server/       # Server functions
```

### Build Optimization
Next.js automatically:
- Minifies JavaScript and CSS
- Optimizes images
- Generates static HTML where possible
- Code splits by route
- Tree shakes unused code

### Test Production Build Locally
```bash
# Build
npm run build

# Start production server
npm start

# Server runs at
http://localhost:3000
```

### Build Configuration
**next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,  // Use SWC for faster builds
  images: {
    domains: ['img.icons8.com', 'i.imgur.com'],  // External images
  },
}

module.exports = nextConfig
```

---

## Vercel Deployment

### Automatic Deployment (Recommended)

#### 1. Connect Repository
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your Git provider (GitHub/GitLab/Bitbucket)
4. Select your repository
5. Configure project settings

#### 2. Project Configuration
```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

#### 3. Environment Variables
Add in Vercel Dashboard:
```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
AWS_SES_FROM_EMAIL
AWS_SES_TO_EMAIL
```

#### 4. Deploy
- Click "Deploy"
- Vercel builds and deploys automatically
- Get deployment URL

### Deployment Triggers
- **Production:** Push to `main` branch
- **Preview:** Push to any branch or pull request
- **Manual:** Deploy from Vercel Dashboard

### Preview Deployments
Each push creates a unique preview URL:
```
https://portfolio-abc123-bharathlogs.vercel.app
```

---

### Manual Deployment via CLI

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login
```bash
vercel login
```

#### 3. Deploy
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

#### 4. Environment Variables (CLI)
```bash
# Add environment variable
vercel env add AWS_ACCESS_KEY_ID

# Pull environment variables
vercel env pull .env.local
```

---

## Environment Variables

### Production Environment Variables

#### Required
```env
AWS_ACCESS_KEY_ID           # AWS credentials
AWS_SECRET_ACCESS_KEY       # AWS credentials
AWS_REGION                  # AWS region (ap-south-1)
AWS_SES_FROM_EMAIL          # Sender email
AWS_SES_TO_EMAIL            # Recipient email
```

#### Optional
```env
NEXT_PUBLIC_VERCEL_ANALYTICS_ID    # Vercel Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID      # Google Analytics (if used)
```

### Setting in Vercel Dashboard
1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add variables for each environment:
   - Production
   - Preview
   - Development

### Security Best Practices
- ✅ Use environment variables for all secrets
- ✅ Prefix public variables with `NEXT_PUBLIC_`
- ✅ Different values for production/preview
- ❌ Never hardcode sensitive data
- ❌ Never commit .env files to Git

---

## Domain Configuration

### Custom Domain Setup

#### 1. Add Domain in Vercel
1. Go to Project Settings → Domains
2. Add `bharathloganathan.dev`
3. Add `www.bharathloganathan.dev`

#### 2. DNS Configuration
Add these records to your DNS provider:

**For Root Domain (bharathloganathan.dev):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### 3. SSL Certificate
- Vercel automatically provisions SSL certificates
- HTTPS enabled by default
- Auto-renewal handled by Vercel

#### 4. Redirect Configuration
In `vercel.json`:
```json
{
  "redirects": [
    {
      "source": "http://www.bharathloganathan.dev/:path*",
      "destination": "https://www.bharathloganathan.dev/:path*",
      "permanent": true
    }
  ]
}
```

---

## CI/CD

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### Pre-deployment Checks
```bash
# Run linting
npm run lint

# Type check
npx tsc --noEmit

# Run tests (when implemented)
npm test

# Build locally
npm run build
```

---

## Performance Optimization

### Vercel Features

#### 1. Edge Network
- Global CDN
- Automatic asset optimization
- Brotli compression

#### 2. Analytics
- Core Web Vitals monitoring
- Real user metrics
- Performance insights

#### 3. Caching
- Automatic static asset caching
- API route caching (if configured)
- ISR (Incremental Static Regeneration)

### Cache Configuration
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

---

## Monitoring & Analytics

### Vercel Analytics
Enabled in `_app.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

### Monitoring Metrics
- Page views
- Unique visitors
- Performance scores
- Error rates
- Geographic distribution

### Access Analytics
1. Vercel Dashboard
2. Project → Analytics
3. View real-time and historical data

---

## Troubleshooting

### Common Issues

#### Build Failures

**Issue:** TypeScript errors during build
```bash
# Solution: Fix TypeScript errors locally first
npx tsc --noEmit

# Or disable strict checks (not recommended)
// tsconfig.json
{
  "compilerOptions": {
    "noEmit": true,
    "skipLibCheck": true
  }
}
```

**Issue:** Missing dependencies
```bash
# Solution: Ensure all dependencies in package.json
npm install

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue:** Environment variable not found
```bash
# Solution: Add to Vercel Dashboard
# Or prefix with NEXT_PUBLIC_ for client-side access
```

---

#### Deployment Issues

**Issue:** Old version still showing
```bash
# Solution: Clear browser cache
# Or check deployment URL to ensure new version deployed
```

**Issue:** 404 errors on routes
```bash
# Solution: Ensure pages exist in pages/ directory
# Check next.config.js for rewrites/redirects
```

**Issue:** API routes not working
```bash
# Solution: Check pages/api/ structure
# Verify Vercel function logs in Dashboard
```

---

#### Domain Issues

**Issue:** Domain not pointing to site
```bash
# Solution: Verify DNS records
# Wait for DNS propagation (up to 48 hours)
# Use DNS checker: https://dnschecker.org
```

**Issue:** SSL certificate error
```bash
# Solution: Wait for Vercel to provision certificate
# Ensure domain is verified in Vercel Dashboard
```

---

### Debug Mode

#### Enable Debug Logging
```bash
# Local
DEBUG=* npm run dev

# Vercel CLI
vercel --debug
```

#### View Logs
```bash
# Vercel CLI
vercel logs

# Or view in Vercel Dashboard → Deployments → Logs
```

---

## Rollback Procedure

### Rollback to Previous Deployment
1. Go to Vercel Dashboard
2. Navigate to Deployments
3. Find working deployment
4. Click "⋯" → "Promote to Production"

### Instant Rollback
```bash
# Using Vercel CLI
vercel rollback
```

---

## Backup & Recovery

### Git Repository
- Primary backup is Git history
- All code changes version controlled
- Can redeploy any commit

### Vercel Deployment History
- Keeps all deployment history
- Can rollback to any deployment
- Deployment artifacts stored by Vercel

### Data Backup
- No database (static content)
- Content in Git repository
- Contact form emails sent to email (not stored)

---

## Production Checklist

Before deploying to production:

- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] Environment variables configured in Vercel
- [ ] .env.local added to .gitignore
- [ ] Production build tested locally
- [ ] All pages loading correctly
- [ ] Forms working (contact form)
- [ ] Analytics configured
- [ ] Domain configured with SSL
- [ ] SEO meta tags verified
- [ ] Performance tested (Lighthouse)
- [ ] Mobile responsiveness checked
- [ ] Cross-browser testing done
- [ ] 404 page exists
- [ ] Error handling implemented

---

## Deployment Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint

# Vercel CLI
vercel                   # Deploy to preview
vercel --prod            # Deploy to production
vercel logs              # View logs
vercel env pull          # Pull environment variables
vercel domains           # Manage domains
vercel rollback          # Rollback deployment

# Git
git push origin main     # Trigger automatic deployment
```

---

## Related Documentation
- [Architecture Overview](./01-Architecture-Overview.md)
- [API Documentation](./04-API-Documentation.md)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

*For deployment improvements, see [ROADMAP.md](../ROADMAP.md)*
