import React, { useState, useEffect } from "react";
import { mediumLogo } from "../utilities/SvgIcons";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  const [colorChange, setColorChange] = useState(false);
  const updateNavbarStyle = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 350;
    scrollPosition > scrollThreshold
      ? setColorChange(true)
      : setColorChange(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateNavbarStyle);
  }, []);
  return (
    <div
      className={"navbar-background " + (colorChange ? "navbar-scrolled" : "")}
      id="navbar"
    >
      <div className="navbar-container">
        <a className="navbar-logo" href="/">
          {mediumLogo}
        </a>
        <div className="navbar-menu-container">
          <ul className="navbar-menu">
            <li className="menu">
              <Link to="/membership">Membership</Link>
            </li>
            <li className="menu">
              <Link to="/write">Write</Link>
            </li>
          </ul>
          <Link to="/signup" className="sign-in">
            Sign In
          </Link>
          <Link to="/signup" className="navbar-button" id="navButton">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
