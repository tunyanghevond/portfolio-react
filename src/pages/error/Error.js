import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      Error
      <Link to="/" className="btn">
        Back to home
      </Link>
    </div>
  );
};

export default Error;
