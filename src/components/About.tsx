"use client";

import {
  CssIcon,
  D3Icon,
  HtmlIcon,
  JavascriptIcon,
  ReactIcon,
  ReduxIcon,
  TypescriptIcon,
} from "@/constants/image";
import SectionWrapper from "@/wrapper/section-wrapper";
import { motion } from "motion/react";

const techs = [
  <ReactIcon key="react" />,
  <TypescriptIcon key="ts" />,
  <HtmlIcon key="html" />,
  <CssIcon key="css" />,
  <JavascriptIcon key="js" />,
  <ReduxIcon key="redux" />,
];

const About = () => {
  return (
    <>
      <h1 className="text-5xl lg:text-6xl font-bold mb-4">About me</h1>
      <h2 className="text-lg lg:text-4xl mb-4 lg:mb-12">
        I build front-ends with performance and accessibility in mind.
      </h2>
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <p className="text-sm lg:text-3xl text-left w-full lg:w-[40%]">
          Front-End Developer with 3+ years of experience building scalable web
          applications using React and TypeScript. Passionate about creating
          performant, accessible, and maintainable UIs within modern micro
          front-end architectures. Based in Milan, Italy
        </p>
        {/* Desktop */}
        <div className="hidden lg:block text-left w-[40%]">
          <h3 className="text-4xl mb-8">My tech stack</h3>
          <div className="grid grid-cols-4 gap-y-12 gap-x-16 text-right">
            {techs.map((icon) => icon)}
          </div>
        </div>
      </div>
      {/* Tablet */}
      <div className="hidden sm:block lg:hidden text-left w-full mt-4">
        <h3 className="text-xl mb-8 font-bold">My tech stack</h3>
        <div className="flex justify-between text-right">
          {techs.map((icon) => icon)}
        </div>
      </div>

      {/* Mobile */}
      <div className="block sm:hidden relative w-full overflow-hidden py-6">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          {[...techs, ...techs].map((icon, i) => (
            <div key={i}>{icon}</div>
          ))}
        </motion.div>

        {/* Optional gradient mask for edges */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      <p className="mt-12 text-xs text-right w-full">
        ... and more on my resume
      </p>
    </>
  );
};

export default SectionWrapper(About, "about", "projects");
