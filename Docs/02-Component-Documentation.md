# Component Documentation

**Last Updated:** 2026-01-31

---

## Table of Contents
1. [Layout Components](#layout-components)
2. [Page Components](#page-components)
3. [UI Components](#ui-components)
4. [Utility Components](#utility-components)
5. [Component Patterns](#component-patterns)

---

## Layout Components

### Layout.tsx
**Location:** `Components/Layouts/Layout.tsx`

Main application layout wrapper that provides the VS Code-inspired interface.

#### Props
```typescript
interface LayoutProps {
  children: React.ReactNode;
}
```

#### Features
- Top header with gradient loading bar
- Left sidebar navigation (SideMainPanel)
- Explorer panel (SideSecondPanel)
- Tab-based navigation system
- Bottom status bar with visitor count
- Responsive layout (collapses on mobile)

#### State Management
```typescript
const [openSideMenu, setOpenSideMenu] = useState(false);
const [openTabs, setOpenTabs] = useState<string[]>([router.pathname]);
const [VisitorCount, setVisitorCount] = useState(0);
```

#### Tab System
- Tracks open tabs in state array
- Stores tab history in localStorage
- Close button on each tab
- Active tab highlighting
- Auto-adds current route to tabs

#### Usage
```tsx
// In _app.tsx
<Layout>
  <Component {...pageProps} />
</Layout>
```

#### Styling
- Uses CSS Modules: `Layout.module.css`
- Classes: `.layoutContainer`, `.navside`, `.mainside`, `.navsidecollapse`, `.mainsidecollapse`
- Current widths: Sidebar 180px, collapsed 47px
- Main content: margin-left 100px

---

### SideMainPanel.tsx
**Location:** `Components/Layouts/SideMainPanel/SideMainPanel.tsx`

Left vertical icon navigation bar (mimics VS Code activity bar).

#### Props
```typescript
interface ISideMainPanel {
  mainActiveSideButton: boolean;
  toggleSideMainMenu: () => void;
}
```

#### Navigation Items
1. **Explorer** (Copyicon) - Toggles sidebar
2. **Search** (SearchIcon) - Links to `/Projects`
3. **Source Control** (SourceControlIcon) - Links to GitHub
4. **Extensions** (ExtensionsIcon) - Links to `/Skills`
5. **About** (AvatarIcon) - Links to homepage `/`
6. **Settings** (SettingsIcon) - Links to `/Email`

#### Styling
- Uses `Layout.module.css` for `.faicons`
- Active state highlighting
- Tooltips on hover (title attribute)
- Bottom-aligned items for About/Settings

---

### SideSecondPanel.tsx
**Location:** `Components/Layouts/SideSecondPanel/SideSecondPanel.tsx`

Explorer sidebar panel with navigation tree (mimics VS Code explorer).

#### Props
```typescript
interface ISideSecondPanel {
  closeSideMenu: () => void;
}
```

#### Structure
- Collapsible "EXPLORER" section
- Navigation tree with pages:
  - README.md (Home)
  - skills.ts (Skills)
  - education.tsx (Education)
  - experience.tsx (Experience)
  - projects/ (Projects)
  - hobbies.md (Hobbies)
  - blogs.tsx (Blogs)
  - learning/ (Learning)
  - anime.tsx (Anime)
  - contact.ts (Email)

#### Features
- Active route highlighting
- File extension indicators
- Expandable/collapsible sections
- Close button

---

## Page Components

### index.tsx (Homepage)
**Location:** `pages/index.tsx`

Welcome/About page with introduction and quick links.

#### Features
- Name and title display
- Quick start links (Skills, Projects, Email, Hobbies)
- Recent navigation history
- About section with social links
- Professional badges

#### Layout Customization
- Custom margin-left: `-100px` on main container
- About section margin-left: `-100px`
- No Scrollbars wrapper (unique to this page)

#### Data
- Recent links from localStorage
- Static social media links
- Professional credentials

---

### Skills.tsx
**Location:** `pages/Skills.tsx`

Skills showcase with categorized, collapsible sections.

#### Data Structure
```typescript
const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: "https://..." },
      // ...
    ]
  },
  // ...
];
```

#### Categories
1. Programming Languages (4 skills)
2. AI/ML & Data Science (8 skills)
3. Cloud & Tools (7 skills)

#### Features
- Expandable/collapsible categories
- Skill count display
- Icon-based skill cards
- Grid layout (responsive)
- All sections open by default

#### State
```typescript
const [openSections, setOpenSections] = useState<Record<number, boolean>>(
  Object.fromEntries(skillsData.map((_, i) => [i, true]))
);
```

---

### Education.tsx
**Location:** `pages/Education.tsx`

Education timeline display using vertical timeline component.

#### Features
- Vertical timeline layout
- Separate desktop/mobile renders
- Education entries with icons
- Date ranges
- Institution details

#### Entries
1. **Master of Computer Applications (MCA)**
   - Sona College of Technology, IN
   - Aug 2024 - Jul 2026
   - Focus: AI/ML, Data Science, Software Engineering

2. **Bachelor of Science (BS) - Computer Science**
   - Dr.G.R.Damodaran College of Science, IN
   - Jul 2021 - Jul 2024

#### Component Library
- Uses `react-vertical-timeline-component`
- Custom styling with inline styles
- Icons from icons8.com

---

### Experience.tsx
**Location:** `pages/Experience.tsx`

Work experience timeline (similar structure to Education).

#### Features
- Vertical timeline layout
- Company logos
- Role descriptions
- Responsibilities list
- Date ranges

#### Pattern
- Duplicate desktop/mobile code (needs refactoring)
- Same timeline component as Education
- Custom background colors per entry

---

### Projects/index.tsx
**Location:** `pages/Projects/index.tsx`

Projects listing page with grid display.

#### Features
- Project cards in grid
- Technology badges
- Project images
- Links to detail pages
- Responsive grid layout

#### Issues
- Uses `any` types (needs TypeScript interfaces)
- Data embedded in component
- No filtering/search functionality

---

### Projects/[id].tsx
**Location:** `pages/Projects/[id].tsx`

Dynamic project detail page.

#### Features
- Full project description
- Technology stack
- Screenshots/demos
- GitHub and live links
- Detailed feature list

#### Routing
```typescript
export async function getStaticPaths() {
  const paths = [1, 2, 3, 4, 5].map((id) => ({
    params: { id: id.toString() }
  }));
  return { paths, fallback: false };
}
```

#### Issues
- Hardcoded paths (should be dynamic)
- Uses `any` types
- No proper data structure

---

### Email.tsx
**Location:** `pages/Email.tsx`

Contact form page with email sending.

#### Form Fields
- Name
- Email
- Phone (optional)
- Message

#### Features
- Client-side validation
- Success/error messages
- AWS SES integration
- Separate desktop/mobile layouts

#### Validation
- Required fields check
- Email format validation (basic)
- Phone number validation (basic)

#### API Integration
```typescript
fetch("/api/sendEmail", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData)
});
```

#### Issues
- No rate limiting
- Basic validation only
- No loading states
- Uses `any` types

---

### Hobbies.tsx
**Location:** `pages/Hobbies.tsx`

Personal hobbies and interests display.

#### Features
- Hobby cards with images
- External links
- Responsive layout
- Separate desktop/mobile views

---

### Blogs.tsx
**Location:** `pages/Blogs.tsx`

Blog posts listing (external links).

#### Features
- Blog card grid
- Medium integration
- External blog links
- Thumbnails and excerpts

#### Note
- No internal blog system
- All links to external platforms
- Could be enhanced (see ROADMAP.md)

---

## UI Components

### SVG Icons (IconsSVG.tsx)
**Location:** `Components/SVG/IconsSVG.tsx`

Reusable SVG icon components.

#### Available Icons
- `AvatarIcon` - User profile icon
- `Copyicon` - Files/copy icon
- `SearchIcon` - Magnifying glass
- `SourceControlIcon` - Git branch icon
- `ExtensionsIcon` - Extensions puzzle piece
- `SettingsIcon` - Settings gear
- `Closebtn` - Close X button
- `Chevrondown` - Down arrow

#### Props
```typescript
interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}
```

#### Usage
```tsx
import { SearchIcon } from "@/Components/SVG/IconsSVG";

<SearchIcon width={24} height={24} />
```

---

## Utility Components

### useIsMobile Hook
**Location:** `Components/Helper/useIsMobile.tsx`

Custom React hook for responsive design detection.

#### Implementation
```typescript
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 943);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
```

#### Breakpoint
- Mobile: < 943px
- Desktop: >= 943px

#### Usage
```tsx
const isTabletOrMobile = useIsMobile();

{!isTabletOrMobile ? (
  <DesktopLayout />
) : (
  <MobileLayout />
)}
```

---

## Component Patterns

### Common Patterns

#### 1. Responsive Rendering
```tsx
const isTabletOrMobile = useIsMobile();

{!isTabletOrMobile ? (
  // Desktop version
  <DesktopComponent />
) : (
  // Mobile version
  <MobileComponent />
)}
```

**Issue:** Code duplication (see ROADMAP.md)

---

#### 2. Scrollbars Wrapper
```tsx
import { Scrollbars } from "react-custom-scrollbars";

<Scrollbars
  autoHide
  autoHideTimeout={1000}
  autoHideDuration={200}
  universal={true}
>
  {/* Page content */}
</Scrollbars>
```

**Used in:** Skills, Education, Experience, Email, Hobbies, Blogs
**Not used in:** Homepage (index.tsx)

---

#### 3. Meta Tags Pattern
```tsx
<Head>
  <title>Page Title</title>
  <meta name="description" content="Description" />
  <link rel="icon" href="/favicon.ico" />
  <meta property="og:title" content="Title" />
  {/* ... more meta tags */}
</Head>
```

**Issue:** Duplicated across all pages (should be abstracted)

---

#### 4. Timeline Pattern
```tsx
<VerticalTimeline animate={false}>
  <VerticalTimelineElement
    visible={true}
    className="vertical-timeline-element--work"
    contentStyle={{ background: "#2d2d2d", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #2d2d2d" }}
    date="Date Range"
    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    icon={<Image src="icon-url" />}
  >
    {/* Content */}
  </VerticalTimelineElement>
</VerticalTimeline>
```

**Used in:** Education, Experience

---

## Component Dependencies

### External Libraries
```
Layout.tsx
  ├── next/router
  ├── next/link
  ├── next.js-progressbar
  └── SideMainPanel, SideSecondPanel

Page Components
  ├── next/head
  ├── next/legacy/image
  ├── react-custom-scrollbars
  └── react-vertical-timeline-component (Education, Experience)

Icons
  └── Pure SVG (no dependencies)
```

---

## Component Best Practices

### Current Issues
1. ❌ Heavy use of `any` types
2. ❌ Inline styles mixed with Tailwind
3. ❌ Duplicate mobile/desktop code
4. ❌ No prop type definitions
5. ❌ No component documentation
6. ❌ No accessibility attributes

### Recommended Improvements
1. ✅ Define proper TypeScript interfaces
2. ✅ Extract inline styles to CSS Modules
3. ✅ Create responsive wrapper component
4. ✅ Add JSDoc comments
5. ✅ Add ARIA labels
6. ✅ Add prop validation

---

## Component Testing

### Current State
- ❌ No unit tests
- ❌ No integration tests
- ❌ No E2E tests

### Recommended (See ROADMAP.md Phase 7)
- Jest + React Testing Library
- Component tests for forms, buttons
- E2E tests with Playwright

---

## Related Documentation
- [Architecture Overview](./01-Architecture-Overview.md)
- [Styling Guide](./03-Styling-Guide.md)
- [Data Structures](./05-Data-Structures.md)

---

*For planned component improvements, see [ROADMAP.md](../ROADMAP.md) Phase 3*
