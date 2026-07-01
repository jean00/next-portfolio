import { Discord, TodoManager, WeatherApp } from "@/constants/image";
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    key: "todo-list",
    image: TodoManager,
    title: "Todo Manager",
    description:
      "Full-stack todo app with pinned items, colour coding and due dates.",
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    githubUrl: "https://github.com/jean00/todo-manager",
    liveUrl: "https://todo-manager-frontend.onrender.com/",
  },
  {
    key: "weather-forecast-app",
    image: WeatherApp,
    title: "Weather Forecast App",
    description:
      "Weather forecast app with auth, location search and 7-day forecast.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth.js", "Mongoose"],
    githubUrl: "https://github.com/jean00/nextweatherapp",
    liveUrl: "https://next-crud-weather.vercel.app/",
  },
  {
    key: "discord-music-bot",
    image: Discord,
    title: "Discord Music Bot",
    description:
      "Self-hosted Discord bot that streams audio from YouTube into voice channels.",
    tech: ["Node.js", "Discord.js"],
    githubUrl: "https://github.com/jean00/discordbot",
    liveUrl:
      "https://discord.com/oauth2/authorize?client_id=904003512927653899&scope=bot&permissions=3147776",
  },
];
