import React from "react";
import { homeAnimation } from "../../utilities/SvgIcons";

const TitleSection = () => {
  return (
    <section className="title-section">
      <div className="title-container">
        <p className="title">Stay curious.</p>
        <p className="tagline">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className="title-button">Start reading</button>
      </div>
      {/* <div>{homeAnimation}</div> */}
    </section>
  );
};

export default TitleSection;
