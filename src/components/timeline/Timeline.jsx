import React from "react";
import "./timeline.css";
import Title from "../title/Title";
import { timelineContent } from "../../constants/";
const Timeline = () => {
  return (
    <section className="section timeline">
      <Title title="timeline" />
      <div className="section-center timeline-center">
        {timelineContent.map((timeline) => {
          return (
            <article className="timeline-item" key={timeline.id}>
              <h4>{timeline.year}</h4>
              <p>{timeline.text}</p>
              <span className="number">{timeline.id}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
