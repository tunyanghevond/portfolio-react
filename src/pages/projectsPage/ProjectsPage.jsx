import React from "react";
import "./projects-page.css";
import { Link } from "react-router-dom";
import Title from "../../components/title/Title";
import { FaGithub, FaHome } from "react-icons/fa";
import {projectsPage} from '../../constants/projects';
const ProjectsPage = () => {
  return (
    <>
      <header className="projects-hero">
        <Title title="My projects" />
      </header>
      <section className="section projects-page ">
        <div className="section-center projects-page-center">
         {projectsPage.map(project => {
           const {id,img,githubUrl,liveUrl,title,text} = project
           return <article className="single-project" key={id}>
            <div className="project-container">
              <img src={img} alt="lorem" />
              <Link to="/" className="project-icon">
                <FaHome />
              </Link>
            </div>
            <div className="project-details">
              <h4>{title}</h4>
              <p>{text}</p>
              <div className="project-footer">
                <span>
                  <a href={githubUrl} target="_blank" rel="noreferrer"><FaGithub /></a>
                </span>
                <a href={liveUrl} target="_blank" rel="noreferrer">try it out</a>
            </div>
            </div>
          </article> 
         })}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
