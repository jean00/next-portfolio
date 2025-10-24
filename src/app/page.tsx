import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import WorkExperience from "@/components/work-experience";

export default function Home() {
  return (
    <main className="px-6 sm:px-15">
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
    </main>
  );
}
