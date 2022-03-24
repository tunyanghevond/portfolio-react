import React from "react";
import "./projects-page.css";
import { Link } from "react-router-dom";
import Title from "../../components/title/Title";
import { FaGithub, FaHome } from "react-icons/fa";
import Img from "../../images/project-1.jpeg";
const ProjectsPage = () => {
  return (
    <>
      <header className="projects-hero">
        <Title title="My projects" />
      </header>
      <section className="section projects-page ">
        <div className="section-center projects-page-center">
          <article className="single-project">
            <div className="project-container">
              <img src={Img} alt="lorem" />
              <Link to="/" className="project-icon">
                <FaHome />
              </Link>
            </div>
            <div className="project-details">
              <h4>project name</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                quasi soluta amet dolor a deleniti!
              </p>
              <div className="project-footer">
                <span>
                  <FaGithub />
                </span>

                <a href="https://github.com/">source code</a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
