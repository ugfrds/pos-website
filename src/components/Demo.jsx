import React from 'react';
import './styles/Demo.css';

const Demo = () => {
  return (
    <section className="demo" id="demo">
      <div className="container">
        <div className="demo-content">
          {/* Left Column: Description */}
          <div className="demo-description">
            <h2>Try the Demo</h2>
            <h3>Experience the Future of POS</h3>
            <p>
              Watch our demo video to see the full potential of our POS system in action. 
              Learn how easy it is to set up, customize, and use our software to boost your business.
            </p>
            <a href="#" className="cta-button">Try the Live Demo</a>
          </div>

          {/* Right Column: Video */}
          <div className="demo-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="POS System Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
