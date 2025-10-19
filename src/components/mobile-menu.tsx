"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  Sheet,
} from "./ui/sheet";

const MobileMenu = ({
  navLinks,
}: {
  navLinks: { name: string; href: string }[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-transparent border-none"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[80vw] sm:w-[60vw] p-6 flex flex-col justify-between bg-background/80 backdrop-blur-md border-l border-white/10"
        >
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold text-white mb-4">
              Menu
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-6 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-gray-200 hover:text-primary transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-12 border-t border-white/10 pt-6 flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Jean / portfolio
            </span>
            <SheetClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-5 w-5" />
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
