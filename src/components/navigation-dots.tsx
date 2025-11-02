"use client";
import React, { useEffect, useState, useCallback } from "react";

const sections = ["home", "about", "work-experience", "projects", "contacts"];

const NavigationDots = () => {
  const [active, setActive] = useState("home");

  const onScroll = useCallback(() => {
    const scrollPos = window.scrollY;
    const current = sections.findLast((id) => {
      const el = document.getElementById(id);
      return el && el.offsetTop <= scrollPos + window.innerHeight / 2;
    });

    setActive(current ?? "home");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

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
