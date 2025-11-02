"use client";

import { toast } from "sonner";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import SectionWrapper from "@/wrapper/section-wrapper";

const mainTech = ["React", "TypeScript", "Next.js", "Tailwind CSS"];

const Hero = () => {
  return (
    <>
      <h1 className="text-5xl sm:text-6xl font-bold">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-b from-[#000000] to-[#00DDFF] bg-clip-text text-transparent">
          Jean
        </span>
      </h1>
      <h2 className="text-3xl sm:text-5xl mb-6">Frontend developer</h2>
      <div className="flex gap-3 sm:gap-6 mb-16">
        {mainTech.map((tech) => (
          <Badge key={tech} variant="tech">
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
        <a href="/cv_mosquera.pdf" download>
          Download CV
        </a>
      </Button>
    </>
  );
};

export default SectionWrapper(Hero, "hero", "about");
