"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sections: string[], threshold = 0.5): string {
  const [active, setActive] = useState(sections[0] ?? "home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections, threshold]);

  return active;
}
