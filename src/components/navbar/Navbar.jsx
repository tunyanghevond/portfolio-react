import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../images/logo.svg";
import Links from "../../constants/links";
import Icons from "../../constants/icons";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} alt="nav-logo" className="nav-logo" />
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
            <Links styleClass="sidebar-links" />
            <Icons styleClass="social-icons" />
          </div>
        </aside>
        <Links styleClass="nav-links" />
      </div>
    </nav>
  );
};

export default Navbar;
