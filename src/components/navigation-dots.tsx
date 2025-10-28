import React, { useEffect, useState } from "react";

const NavigationDots = () => {
  const [active, setActive] = useState("home");
  const sections = ["home", "about", "work-experience", "projects", "contacts"];

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY;
      const current = sections.findLast((id) => {
        const el = document.getElementById(id);
        return el && el.offsetTop <= scrollPos + window.innerHeight / 2;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center space-y-4">
      {sections.map((item) => (
        <a
          key={item}
          href={`#${item}`}
          aria-label={item}
          className={`w-2 h-2 rounded-full transition-all ${active === item ? "bg-blue-500 scale-125" : "bg-gray-400"}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
