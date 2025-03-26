import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure this contains the snippet's CSS

function Layout() {
  return (
    <div className="page-container">
      {/* HEADER SECTION */}
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

      {/* MAIN CONTENT (e.g., hero section, etc.) */}
      <main className="main-content">
        {/* Your page content goes here */}
      </main>
    </div>
  );
}

export default Layout;
