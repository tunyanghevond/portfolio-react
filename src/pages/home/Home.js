import React from "react";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Project from "../../components/projects/Project";
import Connect from "../../components/connect/Connect";
import Timeline from "../../components/timeline/Timeline";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Project />
      <Timeline />
      <Connect />
    </>
  );
};

export default Home;
