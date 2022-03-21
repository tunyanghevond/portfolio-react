import React from "react";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Project from "../../components/projects/Project";
import Connect from "../../components/connect/Connect";
import Timeline from "../../components/timeline/Timeline";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Project />
      <Timeline />
      <Connect />
      <Footer />
    </>
  );
};

export default Home;
