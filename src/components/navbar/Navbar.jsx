import React, { useState } from "react";
import "./navbar.css";
import Links from "../links/Links";
import logo from "../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import SocialIcons from "../social-icons/SocialIcons";

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
              <Links />
            </ul>
            <ul className="social-icons">
              <SocialIcons />
            </ul>
          </div>
        </aside>
        <ul className="nav-links">
          <Links />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
