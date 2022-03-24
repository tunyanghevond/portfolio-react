import React from "react";
import "./connect.css";
import Icons from "../../constants/icons";

import connectVideo from "../../videos/connect.mp4";
import defaultImg from "../../images/project-1.jpeg";
const Connect = () => {
  return (
    <section className="connect">
      <video
        video="true"
        controls
        autoPlay
        muted
        loop
        className="video-container"
        poster={defaultImg}
      >
        <source src={connectVideo} type="video/mp4" />
        Sorry, your browser does not support embedded
      </video>
      <div className="video-banner">
        <div className="section-title">
          <h2>let's get in touch</h2>
          <div className="underline"></div>
          <p className="video-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga
            itaque nam repellat cumque tempore blanditiis amet odio eligendi
            magnam totam sapiente culpa quae et fugit doloribus molestias, modi
            soluta.
          </p>
          <Icons styleClass="connect-icons" />
        </div>
      </div>
    </section>
  );
};

export default Connect;
