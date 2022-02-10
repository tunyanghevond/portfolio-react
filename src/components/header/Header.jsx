import React from "react";
import "./header.css";
import HeroImg from "../../images/pexels.png";
import SocialIcons from "../social-icons/SocialIcons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>I'm Ghevond</h1>
          <h4>Frontend Web Developer</h4>
          <Link to="/contact" className="btn hero-btn">
            hire me
          </Link>
          <ul className="social-icons hero-icons">
            <SocialIcons />
          </ul>
        </article>
        <article className="hero-img">
          <img src={HeroImg} className="hero-photo" alt="lorem" />
        </article>
      </div>
    </header>
  );
};

export default Header;
