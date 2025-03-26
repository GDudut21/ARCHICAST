import React from 'react';
import './Home.css';

function Home() {
  return (
    <div id="home" className="home active">
      {/* Overlay container for text + carousel */}
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
          {/* Fallback if video fails */}
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
    </div>
  );
}

export default Home;
