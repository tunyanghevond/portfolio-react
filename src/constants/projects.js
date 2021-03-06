import Project1 from "../images/aregak-resort.jpeg";
import Project2 from "../images/cocktail-bar.jpg";
import Project3 from "../images/tea-station.jpeg";
import Project4 from "../images/expense-calculator.jpg";


export const projects = [
  {
    id: 1,
    img: Project1,
    url: "/projects",
    title: "aregak resort",
    class: "project-1",
  },
  {
    id: 2,
    img: Project2,
    url: "/projects",
    title: "cocktails bar",
    class: "project-2",
  },
  {
    id: 3,
    img: Project3,
    url: "/projects",
    title: "tea station",
    class: "project-3",
  },
  {
    id: 4,
    img: Project4,
    url: "/projects",
    title: "expense calculator",
    class: "project-4",
  },
];
export const projectsPage = [
  {
    id: 1,
    img: Project1,
    githubUrl: "https://github.com/tunyanghevond/react-aregak-resort",
    liveUrl:"https://aregak-resort.netlify.app",
    title: "aregak resort",
    text:'Aregak resort is a project for hotel room reservations built with React, where are used some of the most popular React features, such as React Hooks, context API and styled components.'
  },
  {
    id: 2,
   img: Project2,
   githubUrl: "https://github.com/tunyanghevond/react-cocktails",
    liveUrl:"https://cocktails-bar-react.netlify.app",
    title: "cocktails bar",
    text:'A simple website for searching your favorite cocktails or drinks recipe. The app is built using an open, crowd-sourced database of cocktails.'
  },
  {
    id: 3,
    img: Project3,
    githubUrl: "https://github.com/tunyanghevond/tea-station",
    liveUrl:"https://a-tea-station.netlify.app",
    title: "tea station",
    text:'Another practicing project for tea lovers, a single page application using pure HTML and CSS.'
  },
  {
    id: 4,
    img: Project4,
   githubUrl: "https://github.com/tunyanghevond/react-budget-calculator-app",
    liveUrl:"https://calculator-of-expenses.netlify.app/",
    title: "Expense Calculator",
    text:'An expense calculator app created for my personal use, to quickly calculate my expenses.'
  },
];
