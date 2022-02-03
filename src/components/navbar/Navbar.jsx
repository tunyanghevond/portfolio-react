import React, { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import {
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaFacebookMessenger,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="nav-logo" className="nav-logo" />
          <button
            className="nav-btn"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FaBars />
          </button>
        </div>
        <aside className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
          <div>
            <button
              className="close-btn"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaTimes />
            </button>
            <ul className="sidebar-links">
              <li>
                <a href="index.html">home</a>
              </li>
              <li>
                <a href="about.html">about</a>
              </li>
              <li>
                <a href="projects.html">projects</a>
              </li>
              <li>
                <a href="contact.html">contact</a>
              </li>
            </ul>
            <ul className="social-icons">
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <FaFacebookMessenger />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <ul className="nav-links">
          <li>
            <a href="index.html">home</a>
          </li>
          <li>
            <a href="about.html">about</a>
          </li>
          <li>
            <a href="projects.html">projects</a>
          </li>
          <li>
            <a href="contact.html">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
