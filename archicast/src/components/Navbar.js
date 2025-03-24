import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your combined CSS

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

      {/* MAIN CONTENT */}
      <main className="main-content">
        {/* Your main page content goes here */}
        <h2>Page Content</h2>
        <p>This is where you would render your routes or other components.</p>
      </main>

      {/* FOOTER SECTION */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Revocation Form</a>
          <a href="#">FAQ</a>
          <a href="#">Returns</a>
          <a href="#">Shipping</a>
          <a href="#">Contact</a>
          <a href="#">Mesh Size Instructions</a>
        </div>

        <div className="footer-socials">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-snapchat"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
        </div>

        <div className="footer-info">
          <p>Site by ArchiCast</p>
          <p>&copy; 2025 ArchiCast | All Rights Reserved</p>
          <p>
            <a href="#">Terms & Conditions</a> | <a href="#">Privacy</a> | <a href="#">Legal Notice</a>
          </p>
        </div>

        <div className="footer-payment">
          <img src="visa.png" alt="Achipelago" />
          <img src="archiwall.png" alt="Archiwall" />
          <img src="resilient.png" alt="Resilient" />
          <img src="amazon.png" alt="White Equipment" />
        </div>
      </footer>
    </div>
  );
}

export default Layout;
