"use client";

import SectionWrapper from "@/wrapper/section-wrapper";
import { Briefcase, Code, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "./ui/carousel";

const experiences = [
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
    tech: ["React", "TypeScript", "Figma", "Micro Front-Ends", "CSS", "Git", "Azure"],
  },
];

const WorkExperience = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-4 md:mb-10">
        My Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experiences</span>
      </h2>
      {/* Desktop */}
      <div className="hidden lg:flex space-x-10 min-w-max">
        {experiences.map((exp) => (
          <Card key={exp.company} className="border-0 r w-72 bg-white dark:bg-slate-900">
            <CardHeader>
              <CardTitle className="flex justify-center">{exp.icon}</CardTitle>
              <CardDescription>
                {exp.company} — {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-primary-text text-sm">{exp.description}</CardContent>
            <CardFooter className="mt-[auto] flex flex-wrap justify-center gap-2">
              {exp.tech.map((t) => (
                <Badge key={t} variant="tech">
                  {t}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Mobile */}
      <Carousel className="lg:hidden w-full max-w-3xl mx-auto">
        <CarouselContent>
          {experiences.map((exp) => (
            <CarouselItem key={exp.company} className="flex justify-center">
              <Card key={exp.company} className="border-0 w-72 bg-white dark:bg-slate-900">
                <CardHeader>
                  <CardTitle className="flex justify-center">{exp.icon}</CardTitle>
                  <CardDescription>
                    {exp.company} — {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-primary-text text-sm">{exp.description}</CardContent>
                <CardFooter className="mt-auto flex flex-wrap justify-center gap-2">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="tech">
                      {t}
                    </Badge>
                  ))}
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

export default SectionWrapper(WorkExperience, "work-experience", "projects");
