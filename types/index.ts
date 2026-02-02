/**
 * Type definitions for the portfolio application
 */

// ============================================================================
// Skills Types
// ============================================================================

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

// ============================================================================
// Project Types
// ============================================================================

export interface Project {
  id: string | number;
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
  tags?: string[];
}

// ============================================================================
// Experience Types
// ============================================================================

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string; // undefined = current
  description: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
  icon: string;
  type: "full-time" | "part-time" | "internship" | "freelance" | "contract";
  companyUrl?: string;
}

// ============================================================================
// Education Types
// ============================================================================

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

// ============================================================================
// Contact Form Types
// ============================================================================

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactFormResponse {
  data: boolean | null;
  error: string;
}

// ============================================================================
// Navigation Types
// ============================================================================

export interface NavigationItem {
  label: string;
  path: string;
  icon?: string;
  extension: string;
  children?: NavigationItem[];
}

export interface RouteTab {
  label: string;
  path: string;
}

// ============================================================================
// Component Props Types
// ============================================================================

export interface LayoutProps {
  children: React.ReactNode;
}

export interface SideMainPanelProps {
  mainActiveSideButton: boolean;
  toggleSideMainMenu: () => void;
}

export interface SideSecondPanelProps {
  closeSideMenu: () => void;
}

export interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

// ============================================================================
// Local Storage Types
// ============================================================================

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

// ============================================================================
// API Types
// ============================================================================

export interface EmailRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface EmailResponse {
  data: boolean | null;
  error: string;
}

export interface RateLimitData {
  count: number;
  resetTime: number;
}

export interface RateLimitStore {
  [key: string]: RateLimitData;
}

// ============================================================================
// SEO/Meta Types
// ============================================================================

export interface MetaTagsProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
}

export interface StructuredDataPerson {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  url: string;
  image?: string;
  jobTitle: string;
  description: string;
  email?: string;
  sameAs?: string[];
}

// ============================================================================
// Blog Types (for future use)
// ============================================================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  coverImage?: string;
  readingTime?: number;
}

export interface BlogFrontMatter {
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  tags: string[];
  category: string;
}

// ============================================================================
// Analytics Types (for future use)
// ============================================================================

export interface PageView {
  page: string;
  timestamp: number;
  userAgent: string;
  referrer?: string;
}

export interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  topPages: Array<{ page: string; views: number }>;
  topProjects: Array<{ project: string; views: number }>;
}

// ============================================================================
// Theme Types
// ============================================================================

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// ============================================================================
// Utility Types
// ============================================================================

export type Maybe<T> = T | null | undefined;
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
