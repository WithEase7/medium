import React from "react";
import "../css/Membership.css"
import FirstFold from "../subcomponents/Membership/FirstFold";
import SecondFold from "../subcomponents/Membership/SecondFold";
import ThirdFold from "../subcomponents/Membership/ThirdFold";
import FourthFold from "../subcomponents/Membership/FourthFold";
import FifthFold from "../subcomponents/Membership/FifthFold";


const Membership = () => {
  return (
    <div>
      <FirstFold />
      <SecondFold />
      <ThirdFold />
      <FourthFold />
      <FifthFold />
    </div>
  );
};

export default Membership;
