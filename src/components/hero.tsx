"use client";

import { toast } from "sonner";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import SectionWrapper from "@/components/section-wrapper";
import { heroTech, personalInfo } from "@/data/resume";

const Hero = () => {
  const { firstName, title, resumeUrl } = personalInfo;

  return (
    <div className="w-full max-w-2xl px-6 flex flex-col items-center">
      <h1 className="text-5xl sm:text-6xl font-bold">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-b from-[#000000] to-[#00DDFF] bg-clip-text text-transparent">
          {firstName}
        </span>
      </h1>
      <h2 className="text-xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6">{title}</h2>
      <div
        className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12 sm:mb-16"
        role="list"
        aria-label="Core technologies"
      >
        {heroTech.map((tech) => (
          <Badge key={tech} variant="tech" role="listitem">
            {tech}
          </Badge>
        ))}
      </div>
      <Button
        asChild
        variant="outline"
        onClick={() => {
          toast("Download started", {
            description: "Check your download folder",
          });
        }}
      >
        <a href={resumeUrl} download aria-label="Download CV as PDF">
          Download CV
        </a>
      </Button>
    </div>
  );
};

export default SectionWrapper(Hero, "home", "about");
