import React from 'react';
import './Home.css';
import Footer from '../templates/Footer';

function Home() {
  return (
    <div id="home" className="home active">
    
      {/* Additional Footer Component */}
      <Footer />
    </div>
  );
}

export default Home;
