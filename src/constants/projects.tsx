import { Discord, Todolist, WeatherForecast } from "@/constants/image";

export const projects = [
  {
    key: "discord-music-bot",
    image: <Discord />,
    title: "Discord music bot",
    description: "A simple music bot for Discord built by using Node Js.",
    background: ["#6B5BFF", "#563ACC"],
  },
  {
    key: "todo-list",
    image: <Todolist />,
    title: "Todo List App",
    description: "A simple todo list app built by using React.",
    background: ["#007C91", "#00B8D4"],
  },
  {
    key: "weather-forecast-app",
    image: <WeatherForecast />,
    title: "Weather Forecast App",
    description: "A simple weather forecast app built by using React.",
    background: ["#FF8A65", "#FF7043"],
  },
];
