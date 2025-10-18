import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import SectionWrapper from "@/wrapper/SectionWrapper";

const mainTech = ["React", "TypeScript", "Next.js", "Tailwind CSS"];

const Hero = () => {
  return (
    <>
      <h1 className="text-6xl font-bold">
        Hi, I'm{" "}
        <span className="bg-gradient-to-b from-[#000000] to-[#00DDFF] bg-clip-text text-transparent">
          Puli
        </span>
      </h1>
      <p className="text-5xl mb-6">Frontend developer</p>
      <div className="flex gap-6 mb-16">
        {mainTech.map((tech) => (
          <Badge key={tech} variant="tech">
            {tech}
          </Badge>
        ))}
      </div>
      <Button variant="outline"> Download Resume</Button>
    </>
  );
};

export default SectionWrapper(Hero, "hero", "about");
