import { ElementType } from "react";
import {
  CssIcon,
  D3Icon,
  HtmlIcon,
  JavascriptIcon,
  ReactIcon,
  ReduxIcon,
  TypescriptIcon,
  GitIcon,
  TailwindIcon,
  NextIcon,
  Discord,
  Todolist,
  WeatherForecast,
} from "@/constants/image";

interface Projects {
  key: string;
  image: ElementType;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
}

export const technologies: ElementType[] = [
  ReactIcon,
  TypescriptIcon,
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  D3Icon,
  ReduxIcon,
  GitIcon,
  TailwindIcon,
  NextIcon,
];

export const projects: Projects[] = [
  {
    key: "discord-music-bot",
    image: Discord,
    title: "Discord music bot",
    description: "A simple music bot for Discord built by using Node Js.",
    githubUrl: "https://github.com/jean00/discordbot",
    liveUrl: "https://discord.com/oauth2/authorize?client_id=904003512927653899&scope=bot&permissions=3147776",
  },
  {
    key: "todo-list",
    image: Todolist,
    title: "Todo List App",
    description: "A simple todo list app built by using React.",
    githubUrl: "https://github.com/jean00/todolist",
    liveUrl: "https://jean00.github.io/todolist/",
  },
  {
    key: "weather-forecast-app",
    image: WeatherForecast,
    title: "Weather Forecast App",
    description: "A simple weather forecast app built by using React.",
    githubUrl: "https://github.com/jean00/nextweatherapp",
    liveUrl: "https://weatherapp-jean00.vercel.app/",
  },
];
