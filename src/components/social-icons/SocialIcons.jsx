import React from "react";
import "./social-icons.css";
import {
  FaLinkedin,
  FaGithub,
  FaFacebookMessenger,
  FaInstagram,
} from "react-icons/fa";
const SocialIcons = () => {
  return (
    <>
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
    </>
  );
};

export default SocialIcons;
