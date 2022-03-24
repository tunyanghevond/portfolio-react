import React from "react";
import "./project.css";
import { Link } from "react-router-dom";
import { projects } from "../../constants/projects";

const Project = () => {
  return (
    <section className=" projects">
      <div className="section-title">
        <h2>Latest Works</h2>
        <div className="underline"></div>
        <p className="projects-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga
          itaque nam repellat cumque tempore blanditiis amet odio eligendi
          magnam totam sapiente culpa quae et fugit doloribus molestias, modi
          soluta.
        </p>
      </div>
      <div className="section-center project-center">
        {projects.map((item) => {
          return (
            <Link to={item.url} className={item.class} key={item.id}>
              <article className="project">
                <img
                  src={item.img}
                  alt="single project"
                  className="project-img"
                />
                <div className="project-info">
                  <h4>{item.title}</h4>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
