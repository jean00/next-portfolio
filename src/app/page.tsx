import { Badge } from "@/components/ui/badge";

const mainTech = ["React", "TypeScript", "Next.js", "Tailwind CSS"];

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-3rem)] justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-[color:--text]">
        Hi, I'm <span className="bg-gradient-to-b from-[#000000] to-[#00DDFF] bg-clip-text text-transparent">Puli</span>
      </h1>
      <p className="text-5xl">Frontend developer</p>
      <div className="flex gap-6">
        {mainTech.map((tech) => (
          <Badge key={tech} className="mx-1 mt-4" variant="tech">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
