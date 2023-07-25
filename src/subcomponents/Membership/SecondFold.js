import React from "react";

const SecondFold = () => {
  return (
    <div className="secondFold">
      <div className="sfone">
        <p className="sfoneTitle">Get unlimited access to every story.</p>
        <img
          src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg"
          alt="sf_img"
          className="sfImage"
        />
        <p className="sfoneTagline">
          Read any article in our entire library across all your devices — with
          no paywalls, story limits or ads.
        </p>
      </div>
      <div className="sftwo">
        <p className="sftwoTitle">
          Support the voices you want to hear more from.
        </p>
        <img
          src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg"
          alt="sf_img"
          className="sfImage"
        />
        <p className="sftwoTagline">
          A portion of your membership will directly support the writers and
          thinkers you read the most.
        </p>
      </div>
    </div>
  );
};

export default SecondFold;
