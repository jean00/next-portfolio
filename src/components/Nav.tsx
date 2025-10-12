"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const navElements = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contacts", href: "#contacts" },
];

const Nav = () => {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="fixed flex w-full justify-between items-center pt-12 px-15">
      <h1 className="text-base font-bold">
        Jean <span className="font-normal">/ portfolio</span>
      </h1>
      <div className="md:flex hidden gap-6 text-base font-bold items-center">
        {navElements.map((el) => (
          <a className="hover:text-primary" key={el.name} href={el.href}>
            {el.name}
          </a>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="p-5 mb-4">Navigation</SheetTitle>
            {navElements.map((el) => (
              <a
                className="p-5 hover:text-primary"
                key={el.name}
                href={el.href}
              >
                {el.name}
              </a>
            ))}
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Nav;
