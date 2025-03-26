import React from 'react';
import './Home.css';

function Home() {
  return (
    <div id="home" className="home active">
      <div className="overlay">
        <h1 className="main-title">
          GET GREATEST SERVICE
          <br />
          FROM OUR COMPANY
        </h1>
        <p className="description">
          ARCHICAST IS A GREAT COMPANY THAT
          <br />
          YOU CAN TRUST TO BUILD.
        </p>

        {/* Background Video */}
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="archicastvid1.mp4" type="video/mp4" />
          {/* Fallback message if video can't load */}
          Your browser does not support the video tag.
        </video>

        {/* Image Carousel */}
        <div
          className="carousel-container"
          style={{
            position: 'absolute',
            top: '70%',
            left: '55%',
            width: '600px',
            height: '400px',
          }}
        >
          <div className="carousel">
            <img src="building1.jpg" alt="Image 1" />
            <img src="building2.jpg" alt="Image 2" />
            <img src="building3.jpg" alt="Image 3" />
          </div>
        </div>
      </div>

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
            <a href="#">Terms & Conditions</a> | <a href="#">Privacy</a> |{' '}
            <a href="#">Legal Notice</a>
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

export default Home;
