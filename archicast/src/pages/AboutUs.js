// pages/AboutUs/AboutUs.js
import React from 'react';
import './AboutUs.css';
import Footer from '../templates/Footer';

function AboutUs() {
  return (
    <div id="crew" className="crew-section">
      <h2 className="crew-heading">
        MEET <span className="highlight-text">OUR CREW</span>
      </h2>
      <p className="crew-subheading">The Team Behind Our Success</p>

      <div className="crew-container">
        <div className="crew-member">
          <img src="dudut1.png" alt="dudut1" />
          <h3>Jiro</h3>
          <p>CEO</p>
        </div>

        <div className="crew-member">
          <img src="dudut.png" alt="dudut" />
          <h3>Dudut Giron</h3>
          <p>President</p>
        </div>
      </div>
       
  <Footer />
  </div>
    
  );
}


export default AboutUs;