import React, {useEffect} from "react";
import { mediumLogo } from "../utilities/SvgIcons";
import { Link } from "react-router-dom";
import '../css/NavBar.css'

const NavBar = () => {
  const updateNavbarStyle = ()=> {
    const navbar = document.getElementById("navbar")
    const navButton = document.getElementById("navButton")
    const scrollPosition = window.scrollY;
    const scrollThreshold = 350; 
    if (scrollPosition > scrollThreshold) {
      navbar.classList.add('navbar-scrolled');
      navButton.classList.add('greenButton');
    } else {
      navbar.classList.remove('navbar-scrolled');
      navButton.classList.remove('greenButton');
    }
  }
  useEffect(()=> {
    window.addEventListener('scroll', updateNavbarStyle)
  },[])
  return (
    <div className="navbar-background" id="navbar">
    <div className="navbar-container">
      <a className="navbar-logo" href="/">{mediumLogo}</a>
      <div className="navbar-menu-container">
        <ul className="navbar-menu">
          <li className="menu">
            <Link to="/">Our story</Link>
          </li>
          <li className="menu">
          <Link to="/membership">Membership</Link>
          </li>
          <li className="menu">
            <Link to="/write">Write</Link>
          </li>
        </ul>
        <p className="sign-in">Sign In</p>
        <button className="navbar-button" id="navButton">Get started</button>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
