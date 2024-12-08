// src/components/HeroSection.js
import React from 'react';
import './styles/HeroSection.css'; // Import the CSS file
import placeholderImage from '../assets/Mockup.svg';

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">Revolutionize Your Business with Our POS System</h1>
          <p className="hero-subheading">
          Seamlessly manage your restaurant's operations with our intuitive and powerful POS system. From real-time analytics to effortless order management, we've got everything you need to elevate your business and enhance customer satisfaction.
          </p>
          <button className="primary-cta-button">Get Started</button>
        </div>
      </section>

      {/* Image placed outside of the hero section but protrudes into it */}
      <div className="protruding-container">
        <img src={placeholderImage} alt="Protruding Section Image" className="protruding-image" />
      </div>
    </>
  ); 
};
 
export default HeroSection;

