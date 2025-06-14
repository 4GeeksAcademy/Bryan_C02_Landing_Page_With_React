import React, { useState } from "react";
import "../../styles/index.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="brand">Start Bootstrap</div>

      <button className="hamburger" onClick={() => setShowMenu(!showMenu)}>
        ☰
      </button>

      <ul className={`nav-links ${showMenu ? "show" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;