"use client";

import SectionWrapper from "@/components/section-wrapper";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";
import type { Project } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "./ui/carousel";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <article
    className="group flex flex-col rounded-xl border border-border/50 bg-card overflow-hidden
                hover:border-border hover:shadow-lg hover:shadow-black/10
                dark:hover:shadow-black/40 transition-all duration-300"
    aria-labelledby={`project-${project.key}-title`}
  >
    {/* Gradient accent bar */}
    <div
      className="h-0.5 w-full bg-gradient-to-r from-blue-400 to-purple-500"
      aria-hidden="true"
    />

    {/* Image */}
    <div className="overflow-hidden h-28 sm:h-36 bg-muted">
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        width={400}
        height={144}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-4 gap-3">
      <div className="flex-1">
        <h3
          id={`project-${project.key}-title`}
          className="font-bold text-sm mb-1 text-foreground"
        >
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech stack */}
      <p
        className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60"
        aria-label="Technologies"
      >
        {project.tech.join(" · ")}
      </p>

      {/* Links */}
      <div className="flex items-center gap-5 pt-2.5 border-t border-border/40">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors focus:outline-2 focus:outline-primary focus:outline-offset-2 rounded"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <Github size={12} aria-hidden="true" />
          GitHub
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors focus:outline-2 focus:outline-primary focus:outline-offset-2 rounded"
          aria-label={`View ${project.title} live demo`}
        >
          <ExternalLink size={12} aria-hidden="true" />
          Live Demo
        </a>
      </div>
    </div>
  </article>
);

const Projects = () => {
  return (
    <div className="w-full max-w-4xl pt-8 sm:pt-16 pb-6 sm:pb-12 text-left">
      <h2 className="text-4xl font-bold mb-6 sm:mb-10 text-center">
        My{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      {/* Desktop: 3-column grid */}
      <ul
        className="hidden lg:grid grid-cols-3 gap-5"
        aria-label="Projects list"
      >
        {projects.map((project) => (
          <li key={project.key}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>

      {/* Mobile / tablet: Carousel with dots */}
      <div className="lg:hidden relative pb-8">
        <Carousel className="w-full" aria-label="Projects carousel">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.key} className="flex justify-center">
                <div className="w-full max-w-sm">
                  <ProjectCard project={project} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots />
        </Carousel>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects", "contacts");
