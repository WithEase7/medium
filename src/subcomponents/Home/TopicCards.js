import React from "react";

const TopicCards = () => {
  const topics = [
    "Programming",
    "Data Science",
    "Technology",
    "Self Improvement",
    "Writing",
    "Relationships",
    "Machine Learning",
    "Productivity",
    "Politics",
  ];
  const subLinks = ["Help", "Status", "Writers", "Blog", "Careers", "Privacy", "Terms", "About", "Text to speeach", "Teams"]
  return (
      <div className="topicSection">
        <h4>Discover more of what matters to you</h4>
        <ul className="topicList">
          {topics.map((item, index) => {
            return (
              <li key={index} className="topicName">
                {item}
              </li>
            );
          })}
        </ul>
        <a href="">See more topics</a>
      </div>
    //   <ul className="subLinks">
    //     {
    //         subLinks.map((item, index) => {
    //             return (
    //                 <li key={index}>{item}</li>
    //             )
    //         })
    //     }
    //   </ul>
  );
};

export default TopicCards;
