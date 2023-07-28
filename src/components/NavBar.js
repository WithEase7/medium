import React, { useState, useEffect } from "react";
import { mediumLogo } from "../utilities/SvgIcons";
import { Link, useLocation } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  const [colorChange, setColorChange] = useState(false);
  let location = useLocation();
  const updateNavbarStyle = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 350;
    scrollPosition > scrollThreshold
      ? setColorChange(true)
      : setColorChange(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateNavbarStyle);
    return (()=> {
      window.removeEventListener("scroll", updateNavbarStyle);
    })
  }, []);
  return (
    <div
      className={"navbar-background " + (colorChange ? "navbar-scrolled" : (location.pathname.includes("write") ? "orangeBackground" : location.pathname.includes("membership") ? "blueBackground" : ""))}
      id="navbar"
    >
      <div className={"navbar-container " + (location.pathname.includes("write") || location.pathname.includes("membership") ? "" : "mw1300")} id="navContainer">
        <a className="navbar-logo" href="/">
          {!colorChange && location.pathname.includes("membership") ? <img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Medium-Logo-Black-RGB-1.svg" className="logoStyle"/> : mediumLogo}
        </a>
        <div className="navbar-menu-container">
          <ul className="navbar-menu">
            <li className="menu">
              <Link to="/membership" className={!colorChange && location.pathname.includes("membership") ? "clrw" : ""}>Membership</Link>
            </li>
            <li className="menu">
              <Link to="/write" className={(!colorChange && location.pathname.includes("membership")) ? "clrw" : ""}>Write</Link>
            </li>
          </ul>
          <Link to="/signup" className={"sign-in "+(!colorChange && location.pathname.includes("membership") ? "clrw" : "")}>
            Sign In
          </Link>
          <Link to="/signup" className={"navbar-button "+(colorChange ? "greenButton" : "")} id="navButton">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
