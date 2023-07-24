import React from "react";
import { trendingIcon } from "../../utilities/SvgIcons";
import { data } from "../../utilities/TrendingData";

const TrendingSection = () => {
  const TrendingList = (item, index) => {
    return (
      <li key={index} className="trending-card">
        <span className="trending-index">0{index + 1}</span>
        <div>
          <div className="trending-title">
            <img src={item.image} alt="trending_image" className="trending-image"/>
            <p>{item.title}</p>
          </div>
          <div className="trending-info">
          <p className="trending-desc">{item.description}</p>
          <p className="trending-duration">{item.date} . {item.duration} read</p>
          </div>
        </div>
      </li>
    );
  };
  return (
    <div className="trending-section">
      <div className="trending-header">
        {trendingIcon}
        <p>Trending on Medium</p>
      </div>
      <ul className="trending-list">
        {data.map((item, index) => TrendingList(item,index))}
      </ul>
    </div>
  );
};

export default TrendingSection;
