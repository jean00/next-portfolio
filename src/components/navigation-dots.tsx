"use client";
import React from "react";
import { useActiveSection } from "@/hooks/use-active-section";

const sections = ["home", "about", "work-experience", "projects", "contacts"];

const NavigationDots = () => {
  const active = useActiveSection(sections);

  return (
    <nav
      className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center space-y-4"
      role="navigation"
      aria-label="Page sections navigation"
    >
      {sections.map((item) => (
        <a
          key={item}
          href={`#${item}`}
          aria-label={`Navigate to ${item.replace("-", " ")} section`}
          className={`w-2 h-2 rounded-full transition-all hover:scale-110 focus:scale-110 focus:outline-2 focus:outline-primary focus:outline-offset-2 ${
            active === item
              ? "bg-primary scale-125 shadow-lg shadow-primary/30"
              : "bg-muted-foreground hover:bg-primary/70 focus:bg-primary/70"
          }`}
          tabIndex={0}
        />
      ))}
    </nav>
  );
};

export default NavigationDots;
