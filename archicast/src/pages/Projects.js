import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h1>Our Projects</h1>
      <p>
        Explore some of our recent work:
      </p>
      <div className="project-gallery">
        <div className="project-item">
          <h2>Residential Renovation</h2>
          <p>Complete interior overhaul of a two-story family home.</p>
        </div>
        <div className="project-item">
          <h2>Commercial Office Space</h2>
          <p>Modern, open-concept office design for a tech startup.</p>
        </div>
        <div className="project-item">
          <h2>Retail Storefront</h2>
          <p>Stylish and functional layout for a boutique clothing shop.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
