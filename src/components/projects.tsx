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
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Projects = () => {
  return (
    <>
      <h1 className="text-5xl lg:text-6xl font-bold mb-4">My projects</h1>
      {/* <Carousel className="w-full max-w-3xl mx-auto">
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.key}>
              <Card
                className="border-0"
                style={{
                  background: `linear-gradient(to right, ${project.background[0]}, ${project.background[1]})`,
                }}
              >
                <CardContent>{project.image}</CardContent>
                <CardHeader>
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
    </>
  );
};

export default SectionWrapper(Projects, "projects", "contact");
