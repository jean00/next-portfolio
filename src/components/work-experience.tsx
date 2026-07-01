"use client";

import { useState } from "react";
import SectionWrapper from "@/components/section-wrapper";
import { Badge } from "./ui/badge";
import { experiences } from "@/data/resume";
import type { Experience } from "@/types";
import { Briefcase, Code2, Rocket, Headset } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React from "react";

const iconMap: Record<string, React.ElementType> = {
  accenture: Rocket,
  mediaminer: Code2,
  "business-changers": Code2,
  sielte: Headset,
};

const colorMap: Record<string, { dot: string; ring: string; text: string }> = {
  accenture: {
    dot: "bg-green-500",
    ring: "ring-green-500/50",
    text: "text-green-400",
  },
  mediaminer: {
    dot: "bg-blue-400",
    ring: "ring-blue-400/50",
    text: "text-blue-400",
  },
  "business-changers": {
    dot: "bg-purple-500",
    ring: "ring-purple-500/50",
    text: "text-purple-400",
  },
  sielte: {
    dot: "bg-yellow-500",
    ring: "ring-yellow-500/50",
    text: "text-yellow-400",
  },
};

const ExperienceDetail = ({ experience }: { experience: Experience }) => {
  const colors = colorMap[experience.id] ?? {
    dot: "bg-primary",
    ring: "",
    text: "text-primary",
  };

  return (
    <motion.article
      key={experience.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22, ease: "easeInOut" }}
      className="w-full text-left"
      aria-labelledby={`detail-role-${experience.id}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
        <div>
          <h3
            id={`detail-role-${experience.id}`}
            className="text-xl font-bold text-foreground leading-snug"
          >
            {experience.role}
            {experience.type === "freelance" && (
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                (Freelance)
              </span>
            )}
          </h3>
          <p className={`text-sm font-semibold ${colors.text}`}>
            {experience.company}
          </p>
        </div>
        <time className="text-xs text-muted-foreground bg-muted border border-border px-3 py-1 rounded-full shrink-0 w-fit">
          {experience.period}
        </time>
      </div>

      {/* Description — hidden on mobile to save space */}
      <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed mb-4">
        {experience.description}
      </p>

      {/* Highlights */}
      {experience.highlights.length > 1 && (
        <ul className="space-y-1.5 mb-4" aria-label="Key achievements">
          {experience.highlights.map((highlight, i) => (
            <li
              key={highlight}
              className={`flex gap-2.5 text-xs text-muted-foreground${i >= 2 ? " hidden sm:flex" : ""}`}
            >
              <span
                className={`${colors.text} shrink-0 mt-0.5`}
                aria-hidden="true"
              >
                ▸
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tech badges */}
      {experience.tech.length > 0 && (
        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {experience.tech.map((t) => (
            <li key={t}>
              <Badge variant="tech">{t}</Badge>
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
};

const chronological = [...experiences].reverse();

const WorkExperience = () => {
  const [activeId, setActiveId] = useState<string>(experiences[0].id);
  const activeExp =
    experiences.find((e) => e.id === activeId) ?? experiences[0];

  return (
    <div className="w-full max-w-2xl pt-8 sm:pt-16 pb-6 sm:pb-12 text-left">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-6 sm:mb-10">
        My Work{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experiences
        </span>
      </h2>

      {/* Horizontal dot selector */}
      <div
        className="relative w-full mb-6 sm:mb-10"
        role="tablist"
        aria-label="Select a work experience"
      >
        {/* Connecting line */}
        <div
          className="absolute top-5 left-5 right-5 h-px bg-border"
          aria-hidden="true"
        />

        <div className="relative flex justify-between">
          {chronological.map((exp) => {
            const Icon = iconMap[exp.id] ?? Briefcase;
            const colors = colorMap[exp.id] ?? {
              dot: "bg-primary",
              ring: "ring-primary/50",
              text: "text-primary",
            };
            const isActive = exp.id === activeId;

            return (
              <button
                key={exp.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${exp.id}`}
                onClick={() => setActiveId(exp.id)}
                className="flex flex-col items-center gap-2.5 group focus:outline-none"
              >
                <div
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${colors.dot} ${
                    isActive
                      ? `ring-2 ring-offset-2 ring-offset-background ${colors.ring} shadow-lg scale-110`
                      : "opacity-40 scale-95 group-hover:opacity-70 group-hover:scale-100"
                  }`}
                >
                  <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="text-center leading-tight">
                  <p
                    className={`text-xs font-semibold transition-colors duration-200 ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {exp.company}
                  </p>
                  <time
                    className={`text-[10px] transition-colors duration-200 ${
                      isActive
                        ? "text-muted-foreground"
                        : "text-muted-foreground/50"
                    }`}
                  >
                    {exp.period}
                  </time>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      <div id={`panel-${activeId}`} role="tabpanel" className="w-full">
        <AnimatePresence mode="wait">
          <ExperienceDetail key={activeId} experience={activeExp} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionWrapper(WorkExperience, "work-experience", "projects");
