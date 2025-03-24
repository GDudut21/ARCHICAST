import React from 'react';
import { Link } from 'react-router-dom';
import '.Navbar.css'; // The CSS code below

function Header() {
  return (
    <header className="header">
      {/* Left side: logo + text */}
      <div className="header-left">
        <img
          src="archicastlogo.png"
          alt="Archicast Logo"
          className="logo-img"
        />
        <div>
          <h1 className="logo">ARCHICAST</h1>
          <p className="tagline">Build the Future with Excellence and Innovation</p>
        </div>
      </div>

      {/* Right side: nav bar */}
      <div className="header-right">
        <nav>
          <ul className="navbar-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
