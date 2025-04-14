import React from 'react';
import './Home.css';
import Footer from '../templates/Footer';

function Home() {
  return (
    <div id="home" className="home active">
      {/* Background Video */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="/archicastvid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Additional Footer Component */}
      <Footer />
    </div>
  );
}

export default Home;
