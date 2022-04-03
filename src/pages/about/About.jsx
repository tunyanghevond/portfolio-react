import React from "react";
import "./about.css";
import Title from "../../components/title/Title";
import {aboutPage} from '../../constants/about'

const About = () => {
  return (
    <>
      <section class="section single-page">
        <Title title="hi there!" />
        <div class="section-center page-info">
           {aboutPage.map((item) => {
            return <p key={item.id}>{item.text}</p>;
          })}
        </div>
      </section>
    </>
  );
};

export default About;
