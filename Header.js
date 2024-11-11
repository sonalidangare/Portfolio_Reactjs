import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header">
      <div className="container">
        <nav>
          {/* <img src="portfolio.jpg" className="logo" alt="Logo" /> */}
          <ul id="sidemenu" className={menuOpen ? "open" : ""}>
            <li><a href="#header">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#Specializations">SPECIALIZATIONS</a></li>
            <li><a href="#portfolio">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
            {/* <i className="fa-solid fa-xmark" onClick={toggleMenu}></i> */}
          </ul>
          {/* <i className="fa-solid fa-bars" onClick={toggleMenu}></i> */}
        </nav>
        {/* <div className="header-text">
          <h2>Hi, <br />I'm <span>Sonali</span> Dangare, <br />Software Developer</h2>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
