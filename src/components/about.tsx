"use client";

import Avatar from "@/assets/images/avatar.png";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";
import { toast } from "sonner";
import { personalInfo, skillCategories } from "@/data/resume";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import type { SkillCategory } from "@/types";

interface SkillRowProps {
  category: SkillCategory;
}

const SkillRow = ({ category }: SkillRowProps) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 py-2 sm:py-3 border-b border-border/40 last:border-0">
    <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground shrink-0 sm:w-32">
      {category.label}
    </span>
    <span className="text-sm text-foreground/75 leading-relaxed">
      {category.skills.slice(0, 5).join(" · ")}
    </span>
  </div>
);

const About = () => {
  const { bio, resumeUrl } = personalInfo;

  return (
    <div className="w-full max-w-4xl pt-8 sm:pt-16 pb-6 sm:pb-12">
      <h2 className="text-4xl font-bold mb-6 sm:mb-10 text-center">
        About{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Me
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 items-start text-left">
        {/* Left: Avatar + download — desktop only */}
        <div className="hidden lg:flex flex-col items-center gap-4 shrink-0">
          <Image
            src={Avatar}
            alt="Jean Louis Mosquera — Frontend Software Engineer"
            className="rounded-2xl shadow-xl w-[160px] h-auto"
            loading="lazy"
          />
          <Button
            asChild
            variant="outline"
            size="sm"
            onClick={() =>
              toast("Download started", {
                description: "Check your download folder",
              })
            }
          >
            <a href={resumeUrl} download className="flex items-center gap-2">
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              Resume
            </a>
          </Button>
        </div>

        {/* Right: Bio + skill rows */}
        <div className="flex flex-col gap-4 sm:gap-6 flex-1 min-w-0">
          <p className="text-base text-muted-foreground leading-relaxed">
            {bio}
          </p>

          <div role="list" aria-label="Skill categories">
            {skillCategories.map((cat, i) => (
              <div key={cat.id} role="listitem" className={i >= 4 ? "hidden sm:block" : ""}>
                <SkillRow category={cat} />
              </div>
            ))}
          </div>

          {/* Mobile: resume link */}
          <p className="text-xs text-muted-foreground text-right lg:hidden">
            Full details on my{" "}
            <a
              href={resumeUrl}
              download
              className="text-blue-500 underline"
              aria-label="Download full resume PDF"
            >
              resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about", "work-experience");
