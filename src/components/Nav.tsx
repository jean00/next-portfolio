"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import MobileMenu from "./mobile-menu";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  {
    name: "Experiences",
    href: "#work-experience",
  },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contacts" },
];

const Nav = () => {
  const { setTheme, theme } = useTheme();

  return (
    <nav
      className="fixed min-w-screen flex justify-between items-center px-6 py-4 z-50 bg-background/80 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <h1 className="text-sm font-bold">
        Jean <span className="font-normal">/ portfolio</span>
      </h1>
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
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
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
