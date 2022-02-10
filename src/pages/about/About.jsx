import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      About
      <Link to="/" className="btn">
        Back to home
      </Link>
    </div>
  );
};

export default About;
