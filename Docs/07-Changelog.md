# Changelog

All notable changes to the portfolio website.

---

## [Unreleased]

### Planned
See [ROADMAP.md](../ROADMAP.md) for planned features and improvements.

---

## [Current] - 2026-01-31

### Recent Layout Adjustments

#### Changed
- **Sidebar Width**: Reduced from 200px to 180px for better space utilization
- **Main Content Positioning**: Added 100px left margin to main content area
- **Homepage Layout**:
  - Added -100px left margin to main container
  - Added -100px left margin to About section for custom positioning
- **Layout System**: Improved flexbox-based layout with proper constraints

#### Modified Files
- `Components/Layouts/Layout.module.css`:
  - Updated `.navside` width: 200px → 180px
  - Added margin-left: 100px to `.mainside` and `.mainsidecollapse`
- `pages/index.tsx`:
  - Added custom margin-left styles to main and About section

---

## [Documentation] - 2026-01-31

### Added
- Comprehensive documentation structure in `/Docs` folder
- `ROADMAP.md` - 7-phase improvement roadmap
- `01-Architecture-Overview.md` - System architecture documentation
- `02-Component-Documentation.md` - Component API documentation
- `03-Styling-Guide.md` - Styling conventions and patterns
- `04-API-Documentation.md` - API endpoint documentation
- `05-Data-Structures.md` - Data models and structures
- `06-Deployment-Guide.md` - Deployment procedures
- `07-Changelog.md` - This file

---

## [Initial Release] - Prior to 2026-01-31

### Core Features

#### Pages
- **Homepage (/)**: Welcome page with introduction and quick links
- **Skills (/Skills)**: Categorized skills showcase with icons
- **Education (/Education)**: Timeline-based education history
- **Experience (/Experience)**: Professional experience timeline
- **Projects (/Projects)**: Project showcase with detail pages
- **Email (/Email)**: Contact form with AWS SES integration
- **Hobbies (/Hobbies)**: Personal interests and hobbies
- **Blogs (/Blogs)**: External blog links
- **Anime (/Anime)**: Anime-related hobby section
- **Learning (/Learning)**: Learning tracks and resources

#### Components
- **Layout System**: VS Code-inspired interface
  - SideMainPanel: Icon navigation bar
  - SideSecondPanel: File explorer sidebar
  - Tab system: File-based tab navigation
  - Status bar: Visitor count and system info
- **Responsive Design**: Mobile and desktop layouts
- **Timeline Component**: Vertical timeline for education/experience
- **Custom Icons**: SVG icon components

#### Functionality
- **Tab Navigation**: Track and manage open tabs
- **Navigation History**: Recent pages in localStorage
- **Visitor Counter**: Track total visits
- **Contact Form**: Email sending via AWS SES
- **Responsive Layouts**: Separate desktop/mobile views
- **Skills Categories**: Expandable/collapsible skill groups

#### Styling
- **Tailwind CSS**: Utility-first styling
- **CSS Modules**: Scoped component styles
- **Dark Theme**: VS Code-inspired color scheme
- **Custom Scrollbars**: Styled scrollbars

#### Infrastructure
- **Next.js 13.2.4**: React framework with SSR/SSG
- **TypeScript**: Type safety
- **Vercel**: Production hosting
- **AWS SES**: Email service
- **Vercel Analytics**: Visitor analytics

---

## Known Issues

### Security
- ⚠️ **Critical**: Hardcoded AWS credentials in `pages/api/sendEmail.ts`
- ⚠️ **High**: No rate limiting on email API
- ⚠️ **High**: Missing input sanitization (XSS vulnerability)
- ⚠️ **Medium**: No CSRF protection

### Performance
- External icon URLs (slow loading from icons8.com)
- Using `next/legacy/image` instead of optimized `next/image`
- Large bundle size (react-custom-scrollbars, aws-sdk)
- No lazy loading on images

### Code Quality
- Heavy use of `any` types throughout codebase
- TypeScript strict mode disabled
- Duplicate mobile/desktop code across components
- Data embedded in components (not separated)
- No component prop interfaces

### Accessibility
- Missing alt text on many images
- No ARIA labels for interactive elements
- No keyboard navigation support
- No focus indicators
- Color contrast issues in some areas

### SEO
- Duplicate metadata across pages
- Missing sitemap.xml
- Missing robots.txt
- No structured data (JSON-LD)
- No meta descriptions for dynamic routes

### Testing
- No unit tests
- No integration tests
- No E2E tests
- No accessibility tests

See [ROADMAP.md](../ROADMAP.md) for planned fixes.

---

## Technology Stack

### Framework & Language
- Next.js 13.2.4
- React 18.2.0
- TypeScript 4.4.4

### Styling
- Tailwind CSS 3.2.4
- PostCSS 8.4.21
- Autoprefixer 10.4.13

### UI Libraries
- react-vertical-timeline-component 3.6.0
- react-custom-scrollbars 4.1.1
- react-live-clock 6.1.16
- next.js-progressbar 3.9.1

### Backend & Services
- aws-sdk 2.1310.0
- @vercel/analytics 0.1.10

### Development Tools
- ESLint 7.32.0
- TypeScript 4.4.4

---

## Dependencies Update History

### Current Versions (as of 2026-01-31)
```json
{
  "next": "13.2.4",
  "react": "18.2.0",
  "typescript": "4.4.4",
  "tailwindcss": "3.2.4",
  "eslint": "7.32.0"
}
```

### Recommended Updates
See [ROADMAP.md](../ROADMAP.md) Phase 1.4 for dependency update plan:
- Next.js 13.2.4 → 14.x
- React 18.2.0 → 18.3.x
- TypeScript 4.4.4 → 5.3.x
- Tailwind 3.2.4 → 3.4.x
- ESLint 7.32.0 → 8.x

---

## Migration Notes

### From Initial to Current
No major migrations required. Site has been stable since initial deployment.

### Future Migrations
Planned migrations documented in [ROADMAP.md](../ROADMAP.md):

#### Phase 1 (Security)
- Move AWS credentials to environment variables
- Add TypeScript strict mode

#### Phase 2 (Performance)
- Migrate to next/image from next/legacy/image
- Replace aws-sdk with @aws-sdk/client-ses
- Remove react-custom-scrollbars

#### Phase 3 (Refactoring)
- Extract data from components to data files
- Create reusable component library
- Refactor duplicate mobile/desktop code

#### Phase 5 (Features)
- Implement dark/light mode toggle
- Add internal blog system
- Add project filtering

---

## Breaking Changes

### None Yet
No breaking changes have been introduced since initial release.

### Planned Breaking Changes
None planned. All improvements designed to be backward compatible.

---

## Contributors

**Bharath Loganathan**
- Portfolio Owner & Developer
- Email: bharathloganathan2804@gmail.com
- GitHub: [@bharathlogs](https://github.com/bharathlogs)
- LinkedIn: [bharath-loganathan-100666253](https://www.linkedin.com/in/bharath-loganathan-100666253)

---

## Versioning

This project does not currently use semantic versioning.
Version tracking is based on Git commits and Vercel deployments.

### Future Versioning Plan
Consider adopting semantic versioning (semver) after Phase 7 completion:
- **Major**: Breaking changes
- **Minor**: New features
- **Patch**: Bug fixes

---

## License

This is a personal portfolio project. All rights reserved.

---

## Related Documentation
- [Architecture Overview](./01-Architecture-Overview.md)
- [ROADMAP.md](../ROADMAP.md)
- [Component Documentation](./02-Component-Documentation.md)
- [Deployment Guide](./06-Deployment-Guide.md)

---

**Note:** This changelog will be updated as new features and changes are implemented according to the roadmap.

---

## Changelog Format

This changelog follows these conventions:
- **Added**: New features
- **Changed**: Changes to existing functionality
- **Deprecated**: Soon-to-be removed features
- **Removed**: Removed features
- **Fixed**: Bug fixes
- **Security**: Security improvements

Future entries should follow this format for consistency.
