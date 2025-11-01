"use client";

import SectionWrapper from "@/wrapper/section-wrapper";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "./ui/carousel";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/constants/helper";

const Projects = () => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">
        My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">projects</span>
      </h2>
      {/* Desktop */}
      <div className="hidden lg:flex space-x-10 min-w-max">
        {projects.map((project) => (
          <Card key={project.key} className="border-0 w-72 bg-white dark:bg-slate-900">
            <CardContent>{<project.image className="w-full object-cover rounded-2xl" />}</CardContent>
            <CardHeader className="text-primary-text text-sm h-full">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="text-primary-text">{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-primary-text hover:text-blue-700 font-medium transition-all"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-primary-text hover:hover:text-blue-700 font-medium transition-all"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Mobile */}
      <Carousel className="lg:hidden w-full max-w-3xl mx-auto">
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.key} className="flex justify-center">
              <Card className="border-0 w-72 bg-white dark:bg-slate-900">
                <CardContent>{<project.image className="w-full object-cover rounded-2xl" />}</CardContent>
                <CardHeader className="text-primary-text text-sm">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-primary-text">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary-text hover:text-white font-medium transition-all"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary-text hover:text-white font-medium transition-all"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="bottom-[-1.125rem]" />
      </Carousel>
    </>
  );
};

export default SectionWrapper(Projects, "projects", "contacts");
