import { ElementType } from "react";

// Project related types
export interface Project {
  key: string;
  image: ElementType;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
}

// Technology related types
export interface Technology {
  name: string;
  icon: ElementType;
}

// Work experience types
export interface WorkExperience {
  icon: React.ReactNode;
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

// Navigation types
export interface NavLink {
  name: string;
  href: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Theme types
export type Theme = "light" | "dark" | "system";

// Section IDs for navigation
export type SectionId =
  | "hero"
  | "about"
  | "work-experience"
  | "projects"
  | "contacts";

// SEO and metadata types
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// Component props types
export interface SectionWrapperProps {
  id: string;
  nextId?: string;
  children: React.ReactNode;
}

export interface BadgeVariant {
  variant?: "default" | "secondary" | "destructive" | "outline" | "tech";
}

export interface ButtonVariant {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
}
