import React, {useEffect} from "react";
import { mediumLogo } from "../utilities/SvgIcons";
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
    <div className="navbar-container" id="navbar">
      <a className="navbar-logo" href="/">{mediumLogo}</a>
      <div className="navbar-menu-container">
        <ul className="navbar-menu">
          <li className="menu">Our story</li>
          <li className="menu">Membership</li>
          <li className="menu">Write</li>
        </ul>
        <p className="sign-in">Sign In</p>
        <button className="navbar-button" id="navButton">Get started</button>
      </div>
    </div>
  );
};

export default NavBar;
