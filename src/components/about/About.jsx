import React from "react";
import "./about.css";
import Title from "../title/Title";
import { Link } from "react-router-dom";
import { about } from "../../constants/about";

const About = () => {
  return (
    <section className="section about">
      <div className="section-center about-center">
        <article className="about-info">
          <Title title="about" asd="about-title" />
          {about.map((item) => {
            return <p key={item.id}>{item.text}</p>;
          })}
          <Link to="/about" className="btn">
            about me
          </Link>
        </article>
      </div>
    </section>
  );
};

export default About;
