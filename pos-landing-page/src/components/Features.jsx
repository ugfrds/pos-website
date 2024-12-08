import React from 'react';
import { FaRegCreditCard, FaChartLine, FaUsers } from 'react-icons/fa';
import './styles/Features.css';

const FeaturesSection = () => {
  const featuresLeft = [
    { icon: <FaRegCreditCard />, title: 'Effortless Order Processing', description: 'User experience at its Best. Fast, Intuitive & Powerful' },
    { icon: <FaChartLine />, title: 'Real-Time Analytics', description: 'Access real-time sales data and analytics to make informed business decisions.' },
  ];

  const featuresRight = [
    { icon: <FaUsers />, title: 'User Management', description: 'Create user / employee accounts with just a few clicks' },
    { icon: <FaChartLine />, title: 'Multi-Platform Support', description: 'Our POS system is compatible with a variety of devices.' },
  ];

  return (
    <div className="features">
      <section className="features-section">
        {/* First Column: Title, Heading, Subheading, Button */}
        <div className="features-column main-column">
          <div className="features-title">
            <span>🚀</span> Features
          </div>
          <h2 className="features-heading">All-in-One POS Solution</h2>
          <p className="features-subheading">
            Track your entire business operations from easy-to-use, intuitive interfaces that make business planning and management a breeze.
          </p>
          <button className="view-all-features">View All Features</button>
        </div>

        {/* Second Column: First Set of Features */}
        <div className="features-column">
          {featuresLeft.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Third Column: Second Set of Features */}
        <div className="features-column">
          {featuresRight.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
