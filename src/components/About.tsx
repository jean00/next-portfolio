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
  <ReactIcon key="react" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
  <TypescriptIcon
    key="ts"
    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
  />,
  <HtmlIcon key="html" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
  <CssIcon key="css" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
  <JavascriptIcon
    key="js"
    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
  />,
  <ReduxIcon key="redux" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
];

const About = () => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">
        About{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Me
        </span>
      </h2>
      <h2 className="text-lg lg:text-2xl mb-2 lg:mb-12">
        I build front-ends with <strong>performance</strong> and{" "}
        <strong>accessibility</strong> in mind.
        <br />
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 md:gap-16 h-[400px]">
        <Image
          src={Avatar}
          alt="Jean portrait"
          className="hidden lg:block rounded-3xl shadow-2xl hover:scale-105 transition w-48 sm:w-56 md:w-72 lg:w-[400px] h-auto"
          priority
        />

        <div className="flex flex-col lg:justify-between h-full text-center lg:text-left">
          <p className="text-xl text-gray-400 leading-relaxed mb-6">
            Front-End Developer with 3+ years of experience using React and
            TypeScript. Passionate about clean, maintainable UI and micro
            front-end architectures. Based in Milan, Italy 🇮🇹.
          </p>
          <div>
            <h2 className="text-lg font-bold mb-4">My tech stack</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-10 mb-4">
              {techs.map((icon) => icon)}
            </div>
          </div>
          <p className="text-xs text-center w-full">
            ... and more on my resume
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about", "work-experience");
