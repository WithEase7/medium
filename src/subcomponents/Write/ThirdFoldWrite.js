import React from "react";

const ThirdFoldWrite = () => {
  return (
    <div className="t3Write">
      <div className="t3wTop">
        <p className="t3wFirstText">
          Create<br></br>your space.
        </p>
        <p className="t3wSecondText">
          Tell your story your way - with different ways to write, style, and
          brand your work.
        </p>
        <button className="t3wButton">Start writing</button>
        <img
          src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/earn_kelly_kaki.png"
          alt="t2w_image"
          className="t3wImage"
        />
      </div>
      <div className="t3wCard">
        <p className="t3wThirdText">Start a blog.</p>
        <p className="t3wFourthText">
          Create a blog for free to have a personalized home for your writing.
          Brand your space and share your writing with readers on any device.
        </p>
      </div>
      <div className="t3wCard">
        <p className="t3wThirdText">Start a publication.</p>
        <p className="t3wFourthText">
          Collaborate with others or publish under a brand name. Use our story
          submission system and expressive customization options.
        </p>
      </div>
    </div>
  );
};

export default ThirdFoldWrite;
