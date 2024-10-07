import React from 'react';
import { FaRegCreditCard, FaChartLine, FaUsers, FaCogs } from 'react-icons/fa';
import './FeaturesSection.css'; // Import the CSS file

const FeaturesSection = () => {
  const leftColumnFeatures = [
    { icon: <FaRegCreditCard />, title: 'Easy Payment Handling', description: 'Manage all payment methods easily.' },
    { icon: <FaChartLine />, title: 'Real-Time Analytics', description: 'Track sales and performance in real-time.' },
  ];

  const rightColumnFeatures = [
    { icon: <FaUsers />, title: 'Customer Management', description: 'Maintain detailed customer profiles.' },
    { icon: <FaCogs />, title: 'Customizable Settings', description: 'Easily tailor features to your business needs.' },
  ];

  return (
    <section className="features-section">
      <div className="features-column features-info">
        <div className="features-title">
          <span>🚀</span> {/* Optionally add a logo here */}
          Features
        </div>
        <h2 className="features-heading">Powerful Tools for Your Business</h2>
        <p className="features-subheading">
          Streamline your operations and boost productivity with our robust feature set.
        </p>
        <button className="view-all-features">View All Features</button>
      </div>

      <div className="features-column">
        {leftColumnFeatures.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="features-column">
        {rightColumnFeatures.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
