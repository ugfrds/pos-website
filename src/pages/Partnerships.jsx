
import React from 'react';
import './styles/Partnerships.css';

const Partnerships = () => {
  return (
    <section className="partnerships-section">
      <div className="container">
        <h2 className="section-title">Partner with Us</h2>
        <p className="section-subtitle">We believe in the power of collaboration. Whether you’re an investor, supplier, or a strategic partner, there’s a place for you in our journey. Let's grow together!</p>
        <div className="partnership-details">
          <div className="partnership-card">
            <h3 className="partnership-title">Investment Opportunities</h3>
            <p className="partnership-description">
              We offer a range of investment opportunities for those looking to be part of our innovative projects. Partner with us to make a lasting impact.
            </p>
          </div>
          <div className="partnership-card">
            <h3 className="partnership-title">Strategic Alliances</h3>
            <p className="partnership-description">
              Join forces with us to explore new markets, enhance product offerings, and drive mutual growth through strategic partnerships.
            </p>
          </div>
          <div className="partnership-card">
            <h3 className="partnership-title">Supplier Partnerships</h3>
            <p className="partnership-description">
              We are always on the lookout for reliable suppliers who share our commitment to quality and innovation. Let's work together to create value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;