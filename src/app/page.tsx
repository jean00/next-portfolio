import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import NavigationDots from "@/components/navigation-dots";

const About = dynamic(() => import("@/components/about"));
const WorkExperience = dynamic(() => import("@/components/work-experience"));
const Projects = dynamic(() => import("@/components/projects"));
const Contacts = dynamic(() => import("@/components/contacts"));

function SectionSkeleton() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="px-6 md:px-16 overflow-hidden">
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <WorkExperience />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contacts />
      </Suspense>
      <NavigationDots />
    </main>
  );
}
