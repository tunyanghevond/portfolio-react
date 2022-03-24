import React from "react";
import "./timeline.css";
import Title from "../title/Title";
import { timeline } from "../../constants/timeline";
const Timeline = () => {
  return (
    <section className="section timeline">
      <Title title="work experience" />
      <div className="section-center timeline-center">
        {timeline.map((timeline) => {
          const { id, year, title, text } = timeline;
          return (
            <article className="timeline-item" key={id}>
              <h4>{title}</h4>
              <h4>{year}</h4>
              <p>{text}</p>
              <span className="number">{timeline.id}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
