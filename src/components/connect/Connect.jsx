import React from "react";
import "./connect.css";
import { Link } from "react-router-dom";

import connectVideo from "../../videos/connect.mp4";
import defaultImg from "../../images/aregak-resort.jpeg";
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
          <h2>about</h2>
          <div className="underline"></div>
          <p className="video-text">
           Hello, I am Ghevond and I am a web developer. I live and work in Berlin. I spend most of my day, experimenting with HTML, CSS, JavaScript and React. I enjoy coding and the challenge of learning something new everyday.
          </p>
          <Link to="/about" className="btn">
            learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Connect;
