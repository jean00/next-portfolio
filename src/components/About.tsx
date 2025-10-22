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
import Avatar from "@/assets/avatar.png";
import SectionWrapper from "@/wrapper/section-wrapper";
import { motion } from "motion/react";
import Image from "next/image";

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
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-4">
        About{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Me
        </span>
      </h2>
      <h2 className="text-lg lg:text-2xl mb-4 lg:mb-12">
        I build front-ends with performance and accessibility in mind.
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={Avatar}
            alt="Jean portrait"
            width={600}
            height={600}
            className="rounded-3xl shadow-2xl hover:scale-105 transition"
          />
        </motion.div>

        <div className="text-center md:text-left">
          <p className="text-gray-400 leading-relaxed mb-6">
            I build front-ends with <strong>performance</strong> and{" "}
            <strong>accessibility</strong> in mind.
            <br />
            Front-End Developer with 3+ years of experience using React and
            TypeScript. Passionate about clean, maintainable UI and micro
            front-end architectures. Based in Milan, Italy 🇮🇹.
          </p>

          <h3 className="text-xl font-semibold mb-3">My Tech Stack</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {techs.map((icon) => icon)}
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

        {/* <p className="mt-12 text-xs text-right w-full">
          ... and more on my resume
        </p> */}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About, "about", "work-experience");
