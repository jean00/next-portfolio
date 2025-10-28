"use client";

import About from "@/components/about";
import Contacts from "@/components/contacts";
import Hero from "@/components/hero";
import NavigationDots from "@/components/navigation-dots";
import Projects from "@/components/projects";
import WorkExperience from "@/components/work-experience";

export default function Home() {
  return (
    <main className="px-6 sm:px-15">
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contacts />
      <NavigationDots />
    </main>
  );
}
