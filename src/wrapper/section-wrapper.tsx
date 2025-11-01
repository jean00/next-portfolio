"use client";

import { JSX } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const SectionWrapper = (
  Component: () => JSX.Element,
  id: string,
  nextId?: string
) =>
  function HOC() {
    return (
      <>
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          id={id}
          className="relative flex flex-col justify-center items-center min-h-screen text-center w-full"
        >
          <Component />
          {nextId && (
            <a href={`#${nextId}`} className="absolute bottom-2 animate-bounce">
              <ChevronDown size={64} />
            </a>
          )}
        </motion.section>
      </>
    );
  };

export default SectionWrapper;
