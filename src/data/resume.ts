/**
 * resume.ts — Single Source of Truth for all portfolio content.
 *
 * All UI components consume data from this file exclusively.
 * No text, links, or structured content should be hardcoded in components.
 */

import type {
  PersonalInfo,
  Experience,
  SkillCategory,
  Education,
  Language,
  NavLink,
} from "@/types";

// ─── Personal Info ─────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Jean Louis Mosquera Escobar",
  firstName: "Jean",
  title: "Frontend Software Engineer",
  location: "Milan, Italy",
  email: "jeanlouis433@gmail.com",
  bio: "Front-End Developer with 3+ years of experience building scalable web applications using React and TypeScript. Passionate about creating performant, accessible, and maintainable UIs within modern micro front-end architectures.",
  resumeUrl: "/Jean_Louis_Mosquera_Escobar_Frontend_Engineer.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/jean-louis-mosquera",
    github: "https://github.com/jean00",
  },
};

// ─── Hero ──────────────────────────────────────────────────────────────────

export const heroTech: string[] = [
  "React",
  "TypeScript",
  "Next.js",
  "Micro Front-Ends",
];

// ─── Navigation ────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Experiences", href: "#work-experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contacts" },
];

// ─── Work Experience ───────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    id: "accenture",
    role: "Frontend Engineer",
    company: "Accenture",
    type: "full-time",
    period: "Oct 2023 – Present",
    description:
      "Developed enterprise applications with React and TypeScript inside a scalable Micro Front-End architecture, contributing to zero-downtime deployments and strict WCAG compliance.",
    highlights: [
      "Built independent Micro Front-End widgets, isolating features to enable targeted data delivery and zero-downtime deployments.",
      "Developed responsive, accessible custom component libraries ensuring strict WCAG compliance across the enterprise platform.",
      "Integrated REST APIs to build live dashboards for monitoring key business metrics, significantly improving data visibility.",
    ],
    tech: ["React", "TypeScript", "Micro Front-Ends", "WCAG", "Azure", "Git"],
  },
  {
    id: "mediaminer",
    role: "Frontend Developer",
    company: "MediaMiner",
    type: "freelance",
    period: "Jun 2024 – Oct 2024",
    description:
      "Designed and built the web interface for an AI-driven media analysis platform that automatically detects and flags sensitive data within images.",
    highlights: [
      "Developed a secure web interface for automated detection and flagging of sensitive data (passwords, confidential info) within images.",
      "Translated complex AI model outputs into intuitive, responsive dashboards ensuring seamless UX and strict data-handling protocols.",
    ],
    tech: ["React", "TypeScript", "Responsive Design", "REST APIs"],
  },
  {
    id: "business-changers",
    role: "JavaScript Developer",
    company: "Business Changers",
    type: "full-time",
    period: "Apr 2022 – Oct 2023",
    description:
      "Maintained and extended SiAge, the tender management platform for the Lombardy Region, building complex interactive forms and optimising legacy backend workflows.",
    highlights: [
      "Built dynamic forms and complex interactive validation logic using vanilla JavaScript (ES6+) to handle extensive regional data inputs.",
      "Optimised legacy backend workflows by developing custom SQL queries for data extraction and automating PDF generation via XML/XSL:FO.",
    ],
    tech: ["JavaScript (ES6+)", "SQL", "XML", "XSL:FO"],
  },
  {
    id: "sielte",
    role: "IT Help Desk Support",
    company: "Sielte S.p.A.",
    type: "full-time",
    period: "Jan 2021 – Oct 2021",
    description:
      "Managed ITIL-compliant ticketing systems, rapidly diagnosing and resolving technical issues and user requests for Vodafone practices.",
    highlights: [
      "Managed ITIL-compliant ticketing systems, diagnosing and resolving technical issues for Vodafone practices.",
    ],
    tech: ["ITIL", "Helpdesk"],
  },
];

// ─── Skills ────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "HTML5",
      "CSS3",
      "SCSS",
    ],
  },
  {
    id: "state-data",
    label: "State & Data",
    skills: ["Redux", "Zustand", "SWR"],
  },
  {
    id: "ui-visualization",
    label: "UI & Visualisation",
    skills: [
      "Recharts",
      "D3",
      "Storybook",
      "Figma",
      "Responsive Design",
      "WCAG",
    ],
  },
  {
    id: "architecture",
    label: "Architecture",
    skills: [
      "Micro Front-Ends",
      "API Integration",
      "Performance Optimisation",
      "Webpack",
      "Vite",
    ],
  },
  {
    id: "backend-db",
    label: "Backend & DB",
    skills: ["Node.js", "SQL", "Oracle", "MySQL"],
  },
  {
    id: "devops",
    label: "Tools & DevOps",
    skills: ["Git", "GitHub", "Microsoft Azure", "Postman"],
  },
];

// ─── Education ─────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    institution: "ITIS Altiero Spinelli",
    degree: "High School Diploma",
    field: "Computer Science",
    year: "2019",
  },
];

// ─── Languages ─────────────────────────────────────────────────────────────

export const languages: Language[] = [
  { name: "Italian", level: "Native" },
  { name: "Spanish", level: "Native" },
  { name: "English", level: "B2 CEFR" },
];
