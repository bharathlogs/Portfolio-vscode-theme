# Architecture Overview

**Portfolio Website:** bharathloganathan.dev
**Last Updated:** 2026-01-31

---

## Table of Contents
1. [Technology Stack](#technology-stack)
2. [Project Structure](#project-structure)
3. [Design Philosophy](#design-philosophy)
4. [Key Features](#key-features)
5. [Data Flow](#data-flow)

---

## Technology Stack

### Core Framework
- **Next.js**: v13.2.4 (React framework with SSR/SSG)
- **React**: v18.2.0 (UI library)
- **TypeScript**: v4.4.4 (Type safety)

### Styling
- **Tailwind CSS**: v3.2.4 (Utility-first CSS framework)
- **CSS Modules**: Scoped component styles
- **PostCSS**: CSS processing

### UI Components & Libraries
- **react-vertical-timeline-component**: Timeline display for experience/education
- **react-custom-scrollbars**: Custom scrollbar styling
- **react-live-clock**: Real-time clock display
- **next.js-progressbar**: Navigation progress indicator

### Backend & Services
- **AWS SES**: Email service for contact form
- **Vercel Analytics**: Performance and visitor analytics

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting (implicit)
- **TypeScript**: Static type checking

---

## Project Structure

```
portfolio/
├── pages/                      # Next.js pages (routes)
│   ├── _app.tsx               # App wrapper with analytics
│   ├── index.tsx              # Homepage (Welcome page)
│   ├── Skills.tsx             # Skills showcase
│   ├── Education.tsx          # Education timeline
│   ├── Experience.tsx         # Work experience timeline
│   ├── Projects/              # Projects section
│   │   ├── index.tsx         # Projects listing
│   │   └── [id].tsx          # Individual project details
│   ├── Email.tsx              # Contact form
│   ├── Hobbies.tsx            # Hobbies section
│   ├── Blogs.tsx              # Blog links
│   ├── Anime.tsx              # Anime hobby page
│   ├── Learning.tsx           # Learning tracks
│   └── api/                   # API routes
│       └── sendEmail.ts       # Email sending endpoint
├── Components/                 # Reusable components
│   ├── Layouts/               # Layout components
│   │   ├── Layout.tsx        # Main layout wrapper
│   │   ├── Layout.module.css # Layout styles
│   │   ├── SideMainPanel/    # Left sidebar navigation
│   │   └── SideSecondPanel/  # Explorer sidebar
│   ├── Helper/                # Utility components
│   │   └── useIsMobile.tsx   # Mobile detection hook
│   └── SVG/                   # SVG icon components
│       └── IconsSVG.tsx      # Icon definitions
├── styles/                     # Global styles
│   └── globals.css            # Global CSS and Tailwind
├── public/                     # Static assets
│   ├── images/               # Image files
│   ├── favicon.ico           # Site favicon
│   └── mainthumbnail.PNG     # OG image
├── data/                       # Data files (implicit structure)
│   └── (embedded in components currently)
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies

```

---

## Design Philosophy

### Visual Design
- **Theme**: VS Code inspired dark theme
- **Color Scheme**:
  - Background: `#1e1e1e` (dark gray)
  - Primary: Blue tones
  - Accent: Green (`#34d399`)
  - Text: White/Gray scale
- **Typography**: System fonts with sans-serif fallbacks
- **Layout**: Clean, minimal, developer-focused

### UX Principles
1. **VS Code Familiarity**: Mimics VS Code interface for developer appeal
2. **Tab Navigation**: File-based navigation with tabs
3. **Sidebar Explorer**: Familiar navigation pattern
4. **Responsive**: Mobile and desktop optimized
5. **Progressive Disclosure**: Collapsible sections

### Code Organization
- **Component-based**: Modular React components
- **Page-based routing**: Next.js file-system routing
- **Separation of concerns**: Layout, content, and logic separated
- **Type safety**: TypeScript for type checking

---

## Key Features

### 1. Homepage (Welcome Page)
- **Location**: `pages/index.tsx`
- **Features**:
  - Name and title display
  - Quick navigation links
  - About section with social links
  - Recent activity tracking (localStorage)
- **Special**: No scrollbar wrapper (direct layout)

### 2. Skills Section
- **Location**: `pages/Skills.tsx`
- **Features**:
  - Categorized skills display
  - Expandable/collapsible categories
  - Icon-based skill representation
  - Skill count per category
- **Data Structure**: Array of categories with skills

### 3. Education Timeline
- **Location**: `pages/Education.tsx`
- **Features**:
  - Vertical timeline component
  - Separate desktop/mobile layouts
  - Education entries with details
  - Icon-based visual markers
- **Library**: `react-vertical-timeline-component`

### 4. Experience Timeline
- **Location**: `pages/Experience.tsx`
- **Features**:
  - Similar to education timeline
  - Work experience entries
  - Company details and responsibilities
  - Date ranges

### 5. Projects Showcase
- **Location**: `pages/Projects/`
- **Features**:
  - Project grid display
  - Individual project detail pages
  - Technology tags
  - Project links (live/GitHub)
  - Images and descriptions
- **Routing**: Dynamic routes with `[id].tsx`

### 6. Contact Form
- **Location**: `pages/Email.tsx`
- **Features**:
  - Email form with validation
  - AWS SES integration
  - Success/error messaging
  - Separate desktop/mobile layouts
- **API**: `pages/api/sendEmail.ts`

### 7. Hobbies & Personal
- **Location**: `pages/Hobbies.tsx`, `pages/Anime.tsx`
- **Features**:
  - Personal interests display
  - External links
  - Image galleries
  - Responsive layouts

### 8. Blog Section
- **Location**: `pages/Blogs.tsx`
- **Features**:
  - External blog links
  - Medium integration
  - Blog previews
- **Note**: Currently external, no internal posts

### 9. Learning Tracks
- **Location**: `pages/Learning.tsx`
- **Features**:
  - Learning resources
  - Course listings
  - Progress tracking

---

## Data Flow

### Navigation Flow
```
User → SideMainPanel → Route Selection → Page Component → Content Display
```

### Tab System
```
Route Change → Layout.tsx → Tab Management → Open Tabs Array → Tab Display
History → localStorage → Recent Links
```

### Contact Form Flow
```
User Input → Email.tsx → Form Validation → API Route (/api/sendEmail) → AWS SES → Email Sent
```

### Skills Display Flow
```
Skills.tsx → skillsData Array → Category Mapping → Expandable Sections → Skill Cards
```

### Project Display Flow
```
Projects/index.tsx → Project Data → Grid Display → Click → Dynamic Route → [id].tsx → Project Details
```

---

## Responsive Design

### Breakpoints
- **Mobile**: < 943px (custom breakpoint)
- **Tablet**: 943px - 1024px
- **Desktop**: > 1024px
- **Tailwind Defaults**: sm (640px), md (768px), lg (1024px), xl (1280px)

### Layout Adaptation
1. **Desktop**:
   - Full sidebar (200px → 180px width)
   - Horizontal content layout
   - Tab navigation visible
   - Bottom status bar

2. **Mobile**:
   - Collapsed/hidden sidebar
   - Vertical content layout
   - Simplified navigation
   - No bottom bar

### Responsive Components
- `useIsMobile()` hook for conditional rendering
- Separate desktop/mobile JSX in components
- Tailwind responsive classes

---

## State Management

### Client-side State
- **React useState**: Component-level state
- **localStorage**:
  - Navigation history
  - Visitor count
  - Recent links
- **No Global State**: No Redux/Context (simple app)

### Server-side State
- **No Database**: Static content
- **Static Generation**: Build-time page generation
- **API Routes**: Serverless functions for email

---

## Performance Optimizations

### Current
- Next.js automatic code splitting
- Image optimization (partial)
- Static page generation
- Vercel Analytics for monitoring

### Needed (See ROADMAP.md)
- Image optimization (WebP, lazy loading)
- Bundle size reduction
- Better caching strategy
- Component memoization

---

## SEO Strategy

### Current Implementation
- Meta tags on each page (title, description, OG tags)
- Canonical URLs
- Twitter cards
- Mobile-friendly viewport
- Descriptive page titles

### Missing (See ROADMAP.md)
- Sitemap.xml
- robots.txt
- Structured data (JSON-LD)
- Dynamic metadata generation
- Blog post SEO

---

## Deployment

### Platform
- **Vercel**: Production hosting
- **GitHub**: Source control (assumed)

### Build Process
```bash
npm run build    # Next.js build
npm run start    # Production server
npm run dev      # Development server
```

### Environment Variables
- AWS credentials (currently hardcoded - SECURITY ISSUE)
- Should use `.env.local` (see ROADMAP.md Phase 1)

---

## Known Issues

### Critical
1. **Hardcoded AWS credentials** in `pages/api/sendEmail.ts`
2. **No rate limiting** on email API
3. **No input sanitization** on contact form

### Performance
1. External icon URLs (slow loading)
2. Using `next/legacy/image` instead of optimized `next/image`
3. Duplicate mobile/desktop code

### Code Quality
1. Heavy use of `any` types
2. No TypeScript strict mode
3. Duplicate metadata across pages

See [ROADMAP.md](../ROADMAP.md) for full issue list and fixes.

---

## Architecture Decisions

### Why Next.js?
- SEO-friendly with SSR/SSG
- File-based routing (simple)
- API routes (serverless functions)
- Great developer experience
- Vercel deployment optimization

### Why Tailwind?
- Utility-first (fast development)
- Smaller CSS bundle
- Responsive utilities
- Easy customization
- No naming conventions needed

### Why VS Code Theme?
- Developer-focused portfolio
- Unique, memorable design
- Familiar to target audience
- Easy to implement with existing UI patterns

### Why No Database?
- Simple, static content
- No dynamic user data
- Faster performance
- Lower costs
- Easier maintenance

---

## Future Architecture Considerations

### Scalability
- Consider headless CMS for blog (Contentful, Sanity)
- Add database for comments/analytics
- Implement caching layer (Redis)

### Modularity
- Extract reusable components to library
- Create design system
- Separate data layer from presentation

### Performance
- Service worker for offline support
- Better code splitting strategy
- CDN for static assets

---

## Related Documentation
- [Component Guide](./02-Component-Documentation.md)
- [Styling Guide](./03-Styling-Guide.md)
- [API Documentation](./04-API-Documentation.md)
- [Data Structures](./05-Data-Structures.md)
- [Deployment Guide](./06-Deployment-Guide.md)
- [Changelog](./07-Changelog.md)

---

*For implementation roadmap and planned improvements, see [ROADMAP.md](../ROADMAP.md)*
