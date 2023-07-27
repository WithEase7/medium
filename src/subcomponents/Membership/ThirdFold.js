import React from "react";

const ThirdFold = () => {
  return (
    <div className="thirdFold">
      <p className="tfTitle">Why I'm a Medium Member...</p>
      <div className="tfTestimonial">
        <img
          src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Molina-1.png"
          alt="tf_img"
          className="tfImage"
        />
        <div className="tfCommentContainer">
        <p className="tfComment">
        "I love Medium’s membership — it gives me access to the stories I love
        by the writers I love, and it allows me to help support those writers
        financially."
      </p>
      <p className="tfName">Kayt Molina</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdFold;
