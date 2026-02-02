# Styling Guide

**Last Updated:** 2026-01-31

---

## Table of Contents
1. [Styling Approach](#styling-approach)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Layout System](#layout-system)
5. [Component Styles](#component-styles)
6. [Responsive Design](#responsive-design)
7. [Tailwind Configuration](#tailwind-configuration)

---

## Styling Approach

### Technologies Used
1. **Tailwind CSS** (v3.2.4) - Utility-first framework
2. **CSS Modules** - Scoped component styles
3. **Global CSS** - Base styles and overrides
4. **Inline Styles** - Dynamic React styles

### File Structure
```
styles/
└── globals.css          # Global styles, Tailwind imports

Components/Layouts/
└── Layout.module.css    # Layout-specific scoped styles
```

### Style Priority
1. Inline styles (highest specificity)
2. CSS Modules
3. Tailwind utility classes
4. Global CSS (lowest specificity)

---

## Color Palette

### VS Code Dark Theme

#### Background Colors
```css
--bg-primary: #1e1e1e;      /* Main background */
--bg-secondary: #2d2d2d;    /* Cards, panels */
--bg-tertiary: #252525;     /* Hover states */
--bg-accent: #007acc;       /* Active elements */
```

#### Text Colors
```css
--text-primary: #ffffff;    /* Main text */
--text-secondary: #cccccc;  /* Secondary text */
--text-tertiary: #808080;   /* Muted text */
--text-link: #3b82f6;       /* Links (blue-500) */
```

#### Accent Colors
```css
--accent-blue: #007acc;     /* Primary actions */
--accent-green: #34d399;    /* Success, highlights */
--accent-red: #ef4444;      /* Errors, warnings */
--accent-yellow: #fbbf24;   /* Warnings */
```

#### Border Colors
```css
--border-default: #404040;  /* Default borders */
--border-active: #007acc;   /* Active borders */
--border-subtle: #2d2d2d;   /* Subtle dividers */
```

### Tailwind Color Usage

#### Most Used Classes
```css
/* Backgrounds */
bg-gray-800                 /* #1f2937 - cards */
bg-gray-900                 /* #111827 - dark sections */
bg-blue-400                 /* #60a5fa - status bar */
bg-opacity-50               /* 50% opacity */

/* Text */
text-white                  /* #ffffff */
text-gray-100               /* #f3f4f6 */
text-gray-200               /* #e5e7eb */
text-gray-300               /* #d1d5db */
text-gray-400               /* #9ca3af */
text-gray-500               /* #6b7280 */
text-blue-500               /* #3b82f6 - links */

/* Borders */
border-gray-600             /* #4b5563 */
border-gray-700             /* #374151 */
border-blue-500             /* #3b82f6 */
```

---

## Typography

### Font Stack
```css
font-family:
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Roboto,
  "Helvetica Neue",
  Arial,
  sans-serif;
```

### Font Sizes (Tailwind)
```css
text-xs     /* 0.75rem (12px) */
text-sm     /* 0.875rem (14px) */
text-base   /* 1rem (16px) */
text-lg     /* 1.125rem (18px) */
text-xl     /* 1.25rem (20px) */
text-2xl    /* 1.5rem (24px) */
text-3xl    /* 1.875rem (30px) */
text-4xl    /* 2.25rem (36px) */
text-5xl    /* 3rem (48px) */
```

### Font Weights
```css
font-light      /* 300 */
font-normal     /* 400 */
font-medium     /* 500 */
font-semibold   /* 600 */
font-bold       /* 700 */
font-extrabold  /* 800 */
```

### Common Text Styles

#### Headings
```tsx
// H1 - Page titles
<h1 className="lg:text-5xl font-bold leading-tight text-white text-3xl">

// H2 - Section titles
<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">

// H3 - Subsection titles
<h3 className="vertical-timeline-element-title font-bold">
```

#### Body Text
```tsx
// Primary body
<p className="text-lg font-medium text-gray-300">

// Secondary body
<p className="text-sm text-gray-400 font-sans">

// Small text
<p className="text-xs text-gray-500">
```

#### Links
```tsx
<a className="text-blue-500 cursor-pointer text-sm pb-2 font-sans">
```

---

## Layout System

### Grid Layout (Tailwind)
```tsx
// Skills grid - responsive columns
<dl className="
  space-y-10 mt-4
  md:space-y-0
  md:grid
  md:grid-cols-2
  xl:grid-cols-4
  lg:grid-cols-3
  sm:grid-cols-1
  xs:grid-cols-1
  md:gap-x-4
  md:gap-y-4
">
```

### Flexbox Patterns
```tsx
// Horizontal flex
<div className="flex items-center justify-between">

// Vertical flex
<div className="flex flex-col">

// Responsive flex direction
<div className="flex flex-col md:flex-row md:space-x-4">
```

### Spacing System
```css
p-2     /* padding: 0.5rem (8px) */
p-3     /* padding: 0.75rem (12px) */
p-4     /* padding: 1rem (16px) */
p-5     /* padding: 1.25rem (20px) */
p-6     /* padding: 1.5rem (24px) */

m-2     /* margin: 0.5rem */
m-4     /* margin: 1rem */
mt-4    /* margin-top: 1rem */
mb-4    /* margin-bottom: 1rem */
```

---

## Component Styles

### Layout.module.css

#### Icon Buttons
```css
.faicons {
  text-align: center;
  vertical-align: middle;
  padding-left: 0.65rem;
  padding-right: 0px;
  cursor: pointer;
}
```

#### Layout Container
```css
.layoutContainer {
  display: flex;
}
```

#### Sidebar (Open)
```css
.navside {
  width: 180px;
  min-width: 180px;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  flex-shrink: 0;
}
```

#### Sidebar (Collapsed)
```css
.navsidecollapse {
  width: 47px;
  min-width: 47px;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  flex-shrink: 0;
}
```

#### Main Content Area
```css
.mainside {
  flex: 1;
  min-width: 0;
  max-width: 100%;
  height: 100vh;
  overflow-x: hidden;
  margin-left: 100px;
}

.mainsidecollapse {
  flex: 1;
  min-width: 0;
  max-width: 100%;
  height: 100vh;
  overflow-x: hidden;
  margin-left: 100px;
}
```

---

### Global CSS (globals.css)

#### Custom Classes
```css
/* Scrollbar styling */
.scrollbar {
  /* Custom scrollbar styles */
}

/* VS Code container */
.vscodecontainer {
  /* Container max-width and centering */
}

/* Center image container */
.containerCenterImage {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Header styling */
.side-header {
  width: 47px;
  background: #1e1e1e;
  position: fixed;
  height: 100vh;
  z-index: 50;
}

/* Bottom status bar */
.bottom-header {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  background: #60a5fa; /* blue-400 */
}
```

#### Editor Tabs
```css
.editor-tabs {
  display: flex;
  background: #2d2d2d;
  border-bottom: 1px solid #404040;
  overflow-x: auto;
}

.editor-tab {
  padding: 8px 16px;
  color: #808080;
  background: #2d2d2d;
  border-right: 1px solid #404040;
  cursor: pointer;
}

.editor-tab.active {
  color: #ffffff;
  background: #1e1e1e;
}

.editor-tab:hover {
  background: #252525;
}
```

---

## Responsive Design

### Breakpoints

#### Custom Breakpoint
```typescript
// useIsMobile hook
const isMobile = window.innerWidth < 943;
```

#### Tailwind Breakpoints
```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Responsive Patterns

#### Conditional Rendering
```tsx
{!isTabletOrMobile ? (
  <DesktopLayout />
) : (
  <MobileLayout />
)}
```

#### Responsive Classes
```tsx
// Text size
<h2 className="text-3xl lg:text-5xl">

// Grid columns
<div className="grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

// Spacing
<div className="p-2 md:p-6">

// Visibility
<div className="hidden md:block">
```

---

## Button Styles

### Primary Button
```tsx
<button className="
  bg-blue-500
  hover:bg-blue-600
  text-white
  font-bold
  py-2 px-4
  rounded
">
```

### Secondary Button
```tsx
<button className="
  bg-gray-700
  hover:bg-gray-600
  text-white
  py-2 px-4
  rounded
  border border-gray-600
">
```

### Link Button
```tsx
<a className="
  text-blue-500
  cursor-pointer
  hover:underline
">
```

---

## Card Styles

### Skill Card
```tsx
<div className="
  relative
  flex items-center gap-2
  p-2
  rounded-md
  border border-gray-700
  bg-gray-800 bg-opacity-50
">
```

### Project Card
```tsx
<div className="
  w-full
  flex justify-start items-center
  pl-2 pr-2 p-1
  rounded-sm
  gap-2
  border-b border-blue-500
  bg-[#262626]
">
```

---

## Form Styles

### Input Field
```tsx
<input className="
  w-full
  px-3 py-2
  border border-gray-600
  rounded-md
  bg-gray-800
  text-white
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
" />
```

### Text Area
```tsx
<textarea className="
  w-full
  px-3 py-2
  border border-gray-600
  rounded-md
  bg-gray-800
  text-white
  resize-none
" />
```

---

## Animation & Transitions

### Hover Effects
```css
/* Smooth transitions */
transition-all duration-200 ease-in-out

/* Transform on hover */
hover:scale-105 transform

/* Color transitions */
hover:bg-blue-600 transition-colors
```

### Loading Spinner
```tsx
// next.js-progressbar component
<NextNProgress color="#34d399" height={2} />
```

### Icon Rotation
```tsx
<svg className={`
  w-4 h-4
  transition-transform
  ${isOpen ? "rotate-0" : "-rotate-90"}
`}>
```

---

## Tailwind Configuration

### tailwind.config.js
```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors can be added here
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          // ...
        ],
      },
    },
  },
  plugins: [],
}
```

---

## Best Practices

### Do's ✅
- Use Tailwind utility classes for common styles
- Use CSS Modules for component-specific complex styles
- Keep color palette consistent
- Use responsive classes for mobile adaptation
- Group related utility classes logically

### Don'ts ❌
- Mix too many inline styles with Tailwind
- Hardcode colors (use Tailwind palette)
- Create overly specific CSS selectors
- Ignore accessibility (color contrast)
- Duplicate styles across components

---

## Accessibility Considerations

### Color Contrast
- Ensure WCAG AA compliance (4.5:1 for normal text)
- Use contrast checker tools
- Avoid using color alone to convey information

### Focus States
```tsx
<button className="
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  focus:ring-offset-2
">
```

### Screen Reader Only Text
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## Known Issues

### Current Problems
1. Inconsistent spacing (mix of px and rem values)
2. Inline styles mixed with Tailwind classes
3. Some hardcoded colors instead of Tailwind utilities
4. No dark mode toggle (only dark theme)
5. Custom breakpoint (943px) doesn't match Tailwind

### Recommended Fixes
See [ROADMAP.md](../ROADMAP.md) Phase 3 for refactoring plan.

---

## Related Documentation
- [Architecture Overview](./01-Architecture-Overview.md)
- [Component Documentation](./02-Component-Documentation.md)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

*For styling improvements, see [ROADMAP.md](../ROADMAP.md) Phase 5 (Dark/Light Mode)*
