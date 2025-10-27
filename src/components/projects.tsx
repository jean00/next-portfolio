"use client";

import SectionWrapper from "@/wrapper/section-wrapper";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { projects } from "@/constants/projects";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "./ui/carousel";

const Projects = () => {
  return (
    <>
      <h1 className="text-5xl lg:text-6xl font-bold mb-4">My projects</h1>
      {/* Desktop */}
      <div className="hidden lg:flex space-x-10 min-w-max">
        {projects.map((project) => (
          <Card
            key={project.key}
            className="border-0 w-72 "
            style={{
              background: `linear-gradient(to right, ${project.background[0]}, ${project.background[1]})`,
            }}
          >
            <CardContent>{project.image}</CardContent>
            <CardHeader className="text-primary-text text-sm">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="text-primary-text">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Mobile */}
      <Carousel className="lg:hidden w-full max-w-3xl mx-auto">
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.key} className="flex justify-center">
              <Card
                className="border-0 w-72 "
                style={{
                  background: `linear-gradient(to right, ${project.background[0]}, ${project.background[1]})`,
                }}
              >
                <CardContent>{project.image}</CardContent>
                <CardHeader className="text-primary-text text-sm">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-primary-text">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <p>Card Footer</p>
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

export default SectionWrapper(Projects, "projects", "contact");
