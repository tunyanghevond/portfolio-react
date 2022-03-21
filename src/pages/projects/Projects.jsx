import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import Title from "../../components/title/Title";
import Footer from "../../components/footer/Footer";
const Projects = () => {
  return (
    <>
      <header className="projects-hero">
        <Title title="My projects" />
      </header>
      <section className="section">
        <div className="section-center projects-page-center">
          <article className="single-project">
            <div className="project-container">
              <img src="./images/project-1.jpeg" alt="lorem" />
              <a href="index.html" className="project-icon">
                <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="project-details">
              <h4>project name</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                quasi soluta amet dolor a deleniti!
              </p>
              <div className="project-footer">
                <span>
                  <i className="fab fa-github"></i>
                </span>

                <a href="https://github.com/">source code</a>
              </div>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
