import React from "react";

const Title = ({ title, asd }) => {
  return (
    <div className={`section-title ${asd}`}>
      <h2>{title}</h2>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
