import { Briefcase, Code, Rocket } from "lucide-react";

export const experiences = [
  {
    icon: <Briefcase className="w-6 h-6 text-blue-500" />,
    title: "Help desk",
    company: "Sielte S.p.A.",
    period: "2021",
    description:
      "As an IT Help Desk professional, I have managed user assistance requests and resolved issues related to Vodafone practices. My primary responsibilities were diagnosing and resolving technical problems and managing support tickets, using the ticketing system and ITIL procedures.",
    tech: [],
  },
  {
    icon: <Code className="w-6 h-6 text-purple-500" />,
    title: "Javascript Developer",
    company: "Business Changers",
    period: "2022 – 2023",
    description:
      "Developed and optimized dynamic forms and interactive logic for SiAge, the Lombardy Region’s tender management platform. Built SQL queries for data extraction, generated PDFs from XML with XSL:FO, and contributed to testing, bug fixing, and feature improvements.",
    tech: ["JavaScript", "XML", "XSL:FO", "SQL"],
  },
  {
    icon: <Rocket className="w-6 h-6 text-green-500" />,
    title: "Frontend Developer",
    company: "Accenture",
    period: "2023 – Present",
    description:
      "Front-End Developer in a project focused on building business process applications using React within a Micro Front-End architecture",
    tech: [
      "React",
      "TypeScript",
      "Figma",
      "Micro Front-Ends",
      "CSS",
      "Git",
      "Azure",
    ],
  },
];
