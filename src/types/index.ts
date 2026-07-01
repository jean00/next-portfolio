import { StaticImageData } from "next/image";
import { ElementType } from "react";

// ─── Resume / Data Layer ───────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  location: string;
  email: string;
  bio: string;
  resumeUrl: string;
  socials: {
    linkedin: string;
    github: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: "full-time" | "freelance" | "contract" | "internship";
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
}

export interface Language {
  name: string;
  level: string;
}

// ─── Project ──────────────────────────────────────────────────────────────

export interface Project {
  key: string;
  image: StaticImageData;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
}

// ─── Technology (icon map — UI concern only) ───────────────────────────────

export interface Technology {
  name: string;
  icon: ElementType;
}

// ─── Navigation ───────────────────────────────────────────────────────────

export interface NavLink {
  name: string;
  href: string;
}

// ─── Contact form ─────────────────────────────────────────────────────────

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

// ─── API ──────────────────────────────────────────────────────────────────

export type ApiResponse<T = void> =
  | { success: true; data: T }
  | { success: false; error: string };

// ─── Misc ─────────────────────────────────────────────────────────────────

export type Theme = "light" | "dark" | "system";

export type SectionId =
  | "home"
  | "about"
  | "work-experience"
  | "projects"
  | "contacts";

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
