import {
  ReactIcon,
  ReduxIcon,
  TypescriptIcon,
  GitIcon,
  TailwindIcon,
  NextIcon,
  Discord,
  Todolist,
  WeatherForecast,
  GitlabIcon,
} from "@/constants/image";
import type { Project, Technology } from "@/types";

export const technologies: Technology[] = [
  { name: "React", icon: ReactIcon },
  { name: "Typescript", icon: TypescriptIcon },
  { name: "Redux", icon: ReduxIcon },
  { name: "Git", icon: GitIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "Next", icon: NextIcon },

  {
    name: "Gitlab",
    icon: GitlabIcon,
  },
];

export const projects: Project[] = [
  {
    key: "discord-music-bot",
    image: Discord,
    title: "Discord music bot",
    description: "A simple music bot for Discord built by using Node Js.",
    githubUrl: "https://github.com/jean00/discordbot",
    liveUrl:
      "https://discord.com/oauth2/authorize?client_id=904003512927653899&scope=bot&permissions=3147776",
  },
  {
    key: "todo-list",
    image: Todolist,
    title: "Todo Manager",
    description:
      "A todo management full stack application with pinned todos, color coding, and due dates. Uses React, TypeScript, Redux, Tailwind CSS, Node.js, Express, and MongoDB.",
    githubUrl: "https://github.com/jean00/todo-manager",
    liveUrl: "https://todo-manager-frontend.onrender.com/",
  },
  {
    key: "weather-forecast-app",
    image: WeatherForecast,
    title: "Weather Forecast App",
    description:
      "Weather forecast website built with Next.js, TypeScript, Tailwind CSS, NextAuth.js, Mongoose, and date-fns.",
    githubUrl: "https://github.com/jean00/nextweatherapp",
    liveUrl: "https://next-crud-weather.vercel.app/",
  },
];
