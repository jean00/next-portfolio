"use client";

import Avatar from "@/assets/avatar.png";
import { technologies } from "@/constants/helper";
import SectionWrapper from "@/wrapper/section-wrapper";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Marquee } from "./ui/test";

const techStack1 = [
  {
    name: "Next.js",
    iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749764539/nextjs_gyqxdo.png",
  },
  {
    name: "Cloudinary",
    iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763872/cloudinary_jcjz1e.webp",
  },
  {
    name: "Auth.js",
    iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763872/authjs_g9rfwm.webp",
  },
  {
    name: "PostgreSQL",
    iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/psotgresql_ggzxtu.png",
  },
  {
    name: "Supabase",
    iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/supabase_eban6b.png",
  },
  {
    name: "shadCn",
    iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749765234/shadcn_xvjz01.png",
  },
];

const About = () => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">
        About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
      </h2>
      <h2 className="text-md lg:text-2xl mb-2 lg:mb-12">
        I build front-ends with <strong>performance</strong> and <strong>accessibility</strong> in mind.
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
          <p className="text-sm lg:text-xl text-gray-400 leading-relaxed mb-6">
            I&apos;m a front end developer with experience in TypeScript and JavaScript, and expertise in frameworks like React,
            Next.js. I&apos;m a quick learner who works closely with clients to build efficient, scalable, and user-friendly
            solutions that solve real-world problems.
          </p>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold lg:mb-4">My tech stack</h2>
            <p className="text-sm lg:text-xl text-gray-400 leading-relaxed mb-6">
              In addition to the essential skills to master as a developer, such as HTML 5, CSS 3 and JavaScript, this section
              presents the various technologies and frameworks I&apos;ve had the opportunity to work with on projects, both
              academically and professionally.
            </p>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:35s]">
                {techStack1.map((tech, index) => (
                  <div key={index} className="flex items-center gap-10">
                    <Image alt="" src={tech.iconUrl || "/placeholder.svg"} height={20} width={20} unoptimized />
                    <p>{tech.name}</p>
                  </div>
                ))}
              </Marquee>
            </div>

            <div className="hidden lg:flex flex-wrap justify-center md:justify-start gap-10">
              <p className="text-xs text-right w-full">... and more on my resume</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about", "work-experience");
