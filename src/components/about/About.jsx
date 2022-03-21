import React from "react";
import "./about.css";
import Title from "../title/Title";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section about">
      <div className="section-center about-center">
        <article className="about-info">
          <Title title="about" asd="about-title" />
          <p>
            Motivated web developer with over 1 year of front end experience and
            passion for responsive website design, looking for a front end
            developer position in Berlin.
          </p>
          <p>
            I pay close attention to details and have the ability to stay
            focused on the task as long as necessary to get the job done. I
            constantly keep myself updated on new technology and ways of working
            in the industry.
          </p>
          <Link to="/about" className="btn">
            about me
          </Link>
        </article>
      </div>
    </section>
  );
};

export default About;
