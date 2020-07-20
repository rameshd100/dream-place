import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dream Place</h1>
      <ul className="nav-links">
        <li>
          <a href="/" className="home-link">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="about-link">
            About
          </a>
        </li>
        <li>
          <a href="/tours" className="tours-link">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
