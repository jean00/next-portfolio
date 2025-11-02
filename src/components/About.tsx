"use client";

import Avatar from "@/assets/images/avatar.png";
import { technologies } from "@/constants/helper";
import SectionWrapper from "@/wrapper/section-wrapper";
import Image from "next/image";
import { toast } from "sonner";

const About = () => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">
        About{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Me
        </span>
      </h2>
      <h2 className="text-md lg:text-2xl mb-2 lg:mb-12">
        I build front-ends with <strong>performance</strong> and{" "}
        <strong>accessibility</strong> in mind.
        <br />
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 md:gap-6">
        <Image
          src={Avatar}
          alt="Jean portrait"
          className="hidden lg:block rounded-3xl shadow-2xl hover:scale-105 transition w-48 sm:w-56 md:w-72 lg:w-[350px] h-auto"
          priority
        />

        <div className="flex flex-col lg:h-auto text-center lg:text-left lg:justify-between gap-4">
          <p className="text-sm lg:text-xl text-gray-400 leading-relaxed">
            I&apos;m a front end developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Next.js.
            I&apos;m a quick learner who works closely with clients to build
            efficient, scalable, and user-friendly solutions that solve
            real-world problems.
          </p>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold lg:mb-4">My tech stack</h2>
            <p className="text-sm lg:text-xl text-gray-400 leading-relaxed">
              In addition to the essential skills to master as a developer, such
              as HTML 5, CSS 3 and JavaScript, this section presents the various
              technologies and frameworks I&apos;ve had the opportunity to work
              with on projects, both academically and professionally.
            </p>
          </div>
          <div className="hidden lg:flex w-full flex-wrap gap-10">
            {technologies.map(({ name, icon: Logo }, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <div className="w-[32px] h-[32px]">
                  <Logo className="w-full h-full" />
                </div>
                <p className="text-primary-text">{name}</p>
              </div>
            ))}
          </div>
          <div className="block lg:hidden w-[calc(100vw-3rem)] overflow-hidden">
            <div className="flex gap-10 animate-marquee">
              {technologies.map(({ name, icon: Logo }, i) => (
                <div key={i} className="flex items-center justify-center gap-2">
                  <Logo className="flex items-center gap-3 shrink-0 w-[32px] h-[32px]" />
                  <p className="text-primary-text">{name}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs lg:text-xl text-gray-400 leading-relaxed mt-4 lg:mt-0 text-right">
            See more on my{" "}
            <a
              href="/cv_mosquera.pdf"
              download
              className="text-blue-500 underline"
              onClick={() => {
                toast("Download started", {
                  description: "Check your download folder",
                });
              }}
            >
              resume
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about", "work-experience");
