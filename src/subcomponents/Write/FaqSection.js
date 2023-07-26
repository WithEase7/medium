import React, { useState } from "react";
import arrowIcon from "../../assets/arrow.svg";
import { data } from "../../utilities/faqData";

const FaqSection = () => {
  const [selectedIndex, setSelectedIndex] = useState([]);
  const toggleFaqs = (id) => {
    selectedIndex.includes(id)
      ? setSelectedIndex(selectedIndex.filter((i) => i != id))
      : setSelectedIndex([...selectedIndex, id]);
  };
  return (
    <div className="faqContainer">
      <p className="faqTitle">More about publishing on Medium:</p>
      <ul className="faqList">
        {data.map((item) => {
          return (
            <li className="faqCard" key={item.id}>
              <div className="faqTop">
                <p className="faqQuestion">{item.question}</p>
                <img
                  src={arrowIcon}
                  className="faqIcon"
                  onClick={() => toggleFaqs(item.id)}
                />
              </div>
              {selectedIndex.includes(item.id) && (
                <p className="faqAnswer">{item.answer}</p>
              )}
            </li>
          );
        })}
        <li className="collapse" onClick={()=> setSelectedIndex([])}>Collapse All</li>
      </ul>
    </div>
  );
};

export default FaqSection;
