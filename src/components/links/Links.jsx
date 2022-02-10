import React from "react";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/projects">projects</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
    </>
  );
};

export default Links;
