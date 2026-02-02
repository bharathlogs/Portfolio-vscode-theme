# Data Structures

**Last Updated:** 2026-01-31

---

## Table of Contents
1. [Skills Data](#skills-data)
2. [Projects Data](#projects-data)
3. [Experience Data](#experience-data)
4. [Education Data](#education-data)
5. [Contact Form Data](#contact-form-data)
6. [Navigation Data](#navigation-data)

---

## Skills Data

### Location
`pages/Skills.tsx` (embedded in component)

### Structure
```typescript
interface Skill {
  name: string;
  icon: string;  // URL to icon image
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: "https://img.icons8.com/color/48/python--v1.png" },
      { name: "Dart", icon: "https://img.icons8.com/color/48/dart.png" },
      { name: "JavaScript", icon: "https://img.icons8.com/color/144/javascript--v1.png" },
      { name: "HTML/CSS", icon: "https://img.icons8.com/color/48/html-5--v1.png" },
    ]
  },
  {
    category: "AI/ML & Data Science",
    skills: [
      { name: "TensorFlow", icon: "https://img.icons8.com/color/48/tensorflow.png" },
      { name: "OpenCV", icon: "https://img.icons8.com/color/48/opencv.png" },
      { name: "MediaPipe", icon: "https://img.icons8.com/color/48/google-logo.png" },
      { name: "YOLO", icon: "https://img.icons8.com/color/48/artificial-intelligence.png" },
      { name: "Pandas", icon: "https://img.icons8.com/color/48/pandas.png" },
      { name: "NumPy", icon: "https://img.icons8.com/color/48/numpy.png" },
      { name: "PyTorch", icon: "https://img.icons8.com/fluency/48/pytorch.png" },
      { name: "Streamlit", icon: "https://img.icons8.com/color/48/streamlit.png" },
    ]
  },
  {
    category: "Cloud & Tools",
    skills: [
      { name: "AWS", icon: "https://img.icons8.com/color/144/amazon-web-services.png" },
      { name: "Git", icon: "https://img.icons8.com/color/144/git.png" },
      { name: "GitHub", icon: "https://img.icons8.com/fluency/144/github.png" },
      { name: "VS Code", icon: "https://img.icons8.com/fluency/144/visual-studio-code-2019.png" },
      { name: "JIRA", icon: "https://img.icons8.com/color/48/jira.png" },
      { name: "Firebase", icon: "https://img.icons8.com/color/48/firebase.png" },
      { name: "Flutter", icon: "https://img.icons8.com/color/48/flutter.png" },
    ]
  }
];
```

### Metadata
- **Total Categories:** 3
- **Total Skills:** 19
- **Programming Languages:** 4
- **AI/ML & Data Science:** 8
- **Cloud & Tools:** 7

### Recommended TypeScript Interface
```typescript
// types/index.ts
export interface Skill {
  name: string;
  icon: string;
  proficiency?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  yearsOfExperience?: number;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
  description?: string;
}
```

### Future Enhancements
- Add proficiency levels
- Add years of experience
- Add skill descriptions
- Add endorsements count
- Add certification links
- Group by type (frontend, backend, etc.)

---

## Projects Data

### Location
`pages/Projects/index.tsx` and `pages/Projects/[id].tsx` (embedded)

### Current Structure
⚠️ **Issue:** No centralized data structure, hardcoded in components

### Inferred Structure
```typescript
interface Project {
  id: number | string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
  date?: string;
  category?: string;
}
```

### Example Projects (Inferred)
```typescript
const projectsData: Project[] = [
  {
    id: 1,
    title: "Project Name 1",
    description: "Short description",
    longDescription: "Detailed description with multiple paragraphs...",
    technologies: ["Python", "TensorFlow", "Flask"],
    image: "/images/project1.png",
    githubUrl: "https://github.com/bharathlogs/project1",
    liveUrl: "https://project1-demo.com",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    date: "2024-01",
    category: "AI/ML"
  },
  // ... more projects
];
```

### Static Paths (Current)
```typescript
// pages/Projects/[id].tsx
export async function getStaticPaths() {
  const paths = [1, 2, 3, 4, 5].map((id) => ({
    params: { id: id.toString() }
  }));
  return { paths, fallback: false };
}
```

⚠️ **Issue:** Hardcoded IDs (1-5), should be generated from data

### Recommended Data File
```typescript
// data/projects.ts
export const projects: Project[] = [
  // Project data here
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id.toString() === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(p => p.category === category);
};

export const getProjectsByTech = (tech: string): Project[] => {
  return projects.filter(p =>
    p.technologies.includes(tech)
  );
};
```

---

## Experience Data

### Location
`pages/Experience.tsx` (embedded in component)

### Structure
```typescript
interface Experience {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  responsibilities: string[];
  technologies?: string[];
  icon: string;
  type: "work" | "internship" | "freelance";
}
```

### Example Data (Inferred from Timeline)
```typescript
const experienceData: Experience[] = [
  {
    title: "Data Science Intern",
    company: "Eidovis",
    location: "India",
    dateRange: "Current",
    responsibilities: [
      "Working on real datasets",
      "Building small models",
      "Cleaning data",
      "Problem solving"
    ],
    technologies: ["Python", "Pandas", "TensorFlow"],
    icon: "https://img.icons8.com/color/96/briefcase.png",
    type: "internship"
  },
  // ... more experiences
];
```

### Recommended Data File
```typescript
// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;  // ISO date format
  endDate?: string;   // undefined = current
  description: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
  icon: string;
  type: "full-time" | "part-time" | "internship" | "freelance" | "contract";
  companyUrl?: string;
}

export const experiences: Experience[] = [
  // Experience data
];
```

---

## Education Data

### Location
`pages/Education.tsx` (embedded in component)

### Structure
```typescript
interface Education {
  degree: string;
  institution: string;
  location: string;
  dateRange: string;
  field: string;
  details: string[];
  icon: string;
  gpa?: number;
  achievements?: string[];
}
```

### Current Data
```typescript
const educationData: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Sona College of Technology",
    location: "IN",
    dateRange: "Aug 2024 - Jul 2026",
    field: "Computer and Information Sciences and Support Services",
    details: [
      "Computer and Information Sciences and Support Services",
      "Focus on AI/ML, Data Science, and Software Engineering"
    ],
    icon: "https://img.icons8.com/color/96/graduation-cap.png"
  },
  {
    degree: "Bachelor of Science (BS) - Computer Science",
    institution: "Dr.G.R.Damodaran College of Science",
    location: "IN",
    dateRange: "Jul 2021 - Jul 2024",
    field: "Computer Science",
    details: [
      "Computer Science"
    ],
    icon: "https://img.icons8.com/color/96/university.png"
  }
];
```

### Recommended Data File
```typescript
// data/education.ts
export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  field: string;
  description: string;
  courses?: string[];
  gpa?: number;
  achievements?: string[];
  icon: string;
  institutionUrl?: string;
}

export const education: Education[] = [
  // Education data
];
```

---

## Contact Form Data

### Location
`pages/Email.tsx` (form state)

### Structure
```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
```

### Validation Rules
```typescript
const validation = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    required: false,
    pattern: /^[\d\s\-\+\(\)]+$/,
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
};
```

### Recommended Schema (Zod)
```typescript
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),

  email: z.string()
    .email("Invalid email format"),

  phone: z.string()
    .regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone format")
    .optional(),

  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

---

## Navigation Data

### Location
`Components/Layouts/SideSecondPanel/SideSecondPanel.tsx`

### Structure
```typescript
interface NavigationItem {
  label: string;
  path: string;
  icon?: string;
  extension: string;  // File extension for display
  children?: NavigationItem[];
}
```

### Current Data (Inferred)
```typescript
const navigationData: NavigationItem[] = [
  {
    label: "README.md",
    path: "/",
    extension: ".md"
  },
  {
    label: "skills.ts",
    path: "/Skills",
    extension: ".ts"
  },
  {
    label: "education.tsx",
    path: "/Education",
    extension: ".tsx"
  },
  {
    label: "experience.tsx",
    path: "/Experience",
    extension: ".tsx"
  },
  {
    label: "projects",
    path: "/Projects",
    extension: "",
    children: [
      // Nested routes could go here
    ]
  },
  {
    label: "hobbies.md",
    path: "/Hobbies",
    extension: ".md"
  },
  {
    label: "blogs.tsx",
    path: "/Blogs",
    extension: ".tsx"
  },
  {
    label: "learning",
    path: "/Learning",
    extension: ""
  },
  {
    label: "anime.tsx",
    path: "/Anime",
    extension: ".tsx"
  },
  {
    label: "contact.ts",
    path: "/Email",
    extension: ".ts"
  }
];
```

### Route to Tab Mapping
```typescript
// Components/Layouts/Layout.tsx
const routeToTab: Record<string, { label: string; path: string }> = {
  "/": { label: "README.md", path: "/" },
  "/Skills": { label: "skills.ts", path: "/Skills" },
  "/Education": { label: "education.tsx", path: "/Education" },
  "/Experience": { label: "experience.tsx", path: "/Experience" },
  "/Projects": { label: "projects/", path: "/Projects" },
  "/Hobbies": { label: "hobbies.md", path: "/Hobbies" },
  "/Blogs": { label: "blogs.tsx", path: "/Blogs" },
  "/Learning": { label: "learning/", path: "/Learning" },
  "/Anime": { label: "anime.tsx", path: "/Anime" },
  "/Email": { label: "contact.ts", path: "/Email" },
};
```

---

## Local Storage Data

### Visitor Count
```typescript
localStorage.setItem("count", String(count));
localStorage.getItem("count");
```

### Navigation History
```typescript
interface RecentLink {
  path: string;
  timestamp?: number;
}

// Stored as JSON array
localStorage.setItem("history", JSON.stringify(recentLinks));
const recentLinks: string[] = JSON.parse(
  localStorage.getItem("history") || "[]"
);
```

### Recommended Structure
```typescript
// utils/localStorage.ts
export interface VisitorData {
  count: number;
  firstVisit: string;
  lastVisit: string;
}

export interface NavigationHistory {
  path: string;
  timestamp: number;
  title: string;
}

export const storageKeys = {
  visitorData: "portfolio_visitor_data",
  navHistory: "portfolio_nav_history",
  preferences: "portfolio_preferences",
} as const;

export const getVisitorData = (): VisitorData => {
  const data = localStorage.getItem(storageKeys.visitorData);
  return data ? JSON.parse(data) : null;
};

export const saveVisitorData = (data: VisitorData): void => {
  localStorage.setItem(storageKeys.visitorData, JSON.stringify(data));
};
```

---

## Recommended Data Organization

### Folder Structure
```
data/
├── index.ts              # Export all data
├── skills.ts             # Skills data
├── projects.ts           # Projects data
├── experience.ts         # Experience data
├── education.ts          # Education data
├── navigation.ts         # Navigation structure
├── social.ts             # Social media links
└── metadata.ts           # SEO metadata templates
```

### Example: data/index.ts
```typescript
export * from "./skills";
export * from "./projects";
export * from "./experience";
export * from "./education";
export * from "./navigation";
export * from "./social";
export * from "./metadata";
```

### Benefits
- Single source of truth
- Easy to update
- Type-safe with TypeScript
- Reusable across components
- Testable
- Version controlled

---

## Data Migration Plan

### Phase 1: Extract Data
- Create data files
- Define TypeScript interfaces
- Move hardcoded data to files

### Phase 2: Update Components
- Import data from data files
- Remove inline data
- Update prop types

### Phase 3: Add Utilities
- Create helper functions
- Add data filters
- Add data transformers

### Phase 4: Validate
- Test all pages
- Verify data accuracy
- Check TypeScript types

---

## Related Documentation
- [Component Documentation](./02-Component-Documentation.md)
- [API Documentation](./04-API-Documentation.md)

---

*For data structure improvements, see [ROADMAP.md](../ROADMAP.md) Phase 3*
