import About from "@/components/about";
import Contacts from "@/components/contacts";
import Hero from "@/components/hero";
import NavigationDots from "@/components/navigation-dots";
import Projects from "@/components/projects";
import WorkExperience from "@/components/work-experience";

export default function Home() {
  return (
    <main className="px-6 md:px-16 overflow-hidden">
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contacts />
      <NavigationDots />
    </main>
  );
}
