import React from "react";
import "./about.css";
import Title from "../../components/title/Title";

const About = () => {
  return (
    <>
      <section class="section single-page">
        <Title title="about me" />
        <div class="section-center page-info">
          <p>
            Hello, I am John Doe and I am a web developer. I live and work in
            somewhere warm. I spend most of my day, experimenting with HTML, CSS
            and JavaScript (and its endless list of frameworks). I enjoy coding
            and the challenge of learning something new everyday.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
