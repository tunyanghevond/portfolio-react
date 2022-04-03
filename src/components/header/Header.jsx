import React from "react";
import "./header.css";
import HeroImg from "../../images/pexels.png";
import CV from "../../images/Ghevond_Tunyan_CV.pdf";
import { MdLocationPin } from "react-icons/md";
import Icons from '../../constants/icons'
const Header = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>I'm Ghevond</h1>
          <h4>Frontend Web Developer</h4>
          <p>
            <span className="hero-icon">
              <MdLocationPin />
            </span>
            <span>Berlin, Germany</span>
            
          </p>
           <Icons styleClass="social-icons hero-icons "/>
          <a href={CV} className="btn hero-btn" download>
            Download my CV
          </a>
        </article>
        <article className="hero-img">
          <img src={HeroImg} className="hero-photo" alt="lorem" />
        </article>
      </div>
    </header>
  );
};

export default Header;
