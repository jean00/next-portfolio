"use client";

import SectionWrapper from "@/components/section-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "./ui/carousel";
import { experiences } from "@/data/work-experience";

const WorkExperience = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-4 md:mb-10">
        My Work{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experiences
        </span>
      </h2>
      {/* Desktop */}
      <div className="hidden lg:flex space-x-10 min-w-max">
        {experiences.map((exp) => (
          <Card key={exp.company} className="border-0 w-72 bg-card">
            <CardHeader>
              <CardTitle className="flex justify-center">{exp.icon}</CardTitle>
              <CardDescription>
                {exp.company} — {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-card-foreground text-sm">
              {exp.description}
            </CardContent>
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
              <Card key={exp.company} className="border-0 w-72 bg-card">
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    {exp.icon}
                  </CardTitle>
                  <CardDescription>
                    {exp.company} — {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-card-foreground text-sm">
                  {exp.description}
                </CardContent>
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
