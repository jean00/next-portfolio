import { Badge } from "@/components/ui/badge";

const mainTech = ["React", "TypeScript", "Next.js", "Tailwind CSS"];

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-3rem)] justify-center items-center text-center">
      <h1 className="text-6xl font-bold">
        Hello, I'm{" "}
        <span className="bg-gradient-to-b from-[#000000] to-[#00DDFF] bg-clip-text text-transparent">
          Jean
        </span>
      </h1>
      <p className="mt-4 text-5xl">Frontend developer</p>
      <div className="flex gap-7">
        {mainTech.map((tech) => (
          <Badge key={tech} className="mx-1 mt-4" variant={"outline"}>
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
