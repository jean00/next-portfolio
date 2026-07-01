"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import MobileMenu from "./mobile-menu";
import { navLinks, personalInfo } from "@/data/resume";

const Nav = () => {
  const { setTheme, theme } = useTheme();

  return (
    <nav
      className="fixed min-w-screen flex justify-between items-center px-6 py-4 z-50 bg-background/80 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <p className="text-sm font-bold">
        {personalInfo.firstName}{" "}
        <span className="font-normal">/ portfolio</span>
      </p>
      {/* Desktop */}
      <div className="hidden md:flex gap-6 text-sm font-bold items-center">
        {navLinks.map((el) => (
          <a
            className="hover:text-primary focus:text-primary focus:outline-2 focus:outline-primary focus:outline-offset-2 rounded transition-colors"
            key={el.name}
            href={el.href}
            aria-label={`Navigate to ${el.name} section`}
          >
            {el.name}
          </a>
        ))}
        <Button
          className="cursor-pointer"
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Switch theme"
        >
          <Sun className="h-5 w-5 transition-all dark:opacity-0" />
          <Moon className="absolute h-5 w-5 transition-all opacity-0 dark:opacity-100" />
        </Button>
      </div>
      {/* Mobile */}
      <MobileMenu navLinks={navLinks} />
    </nav>
  );
};

export default Nav;
