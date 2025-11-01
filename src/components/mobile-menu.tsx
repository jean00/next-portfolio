"use client";

import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  Sheet,
} from "./ui/sheet";
import { useTheme } from "next-themes";

const MobileMenu = ({
  navLinks,
}: {
  navLinks: { name: string; href: string }[];
}) => {
  const [open, setOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-transparent border-none"
            aria-label="Open mobile menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[80vw] sm:w-[60vw] p-6 flex flex-col justify-between bg-background/80 backdrop-blur-md border-l border-border/20"
        >
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold text-foreground mb-4">
              Menu
            </SheetTitle>
          </SheetHeader>
          <nav
            className="flex flex-col space-y-6 mt-8"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-foreground hover:text-primary focus:text-primary focus:outline-2 focus:outline-primary focus:outline-offset-2 rounded transition-colors duration-300"
                onClick={() => setOpen(false)}
                aria-label={`Navigate to ${link.name} section`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-12 border-t border-border/20 pt-6 flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Jean / portfolio
            </span>

            <Button
              className="cursor-pointer"
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } theme`}
            >
              <Sun className="h-5 w-5 transition-all dark:opacity-0" />
              <Moon className="absolute h-5 w-5 transition-all opacity-0 dark:opacity-100" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
