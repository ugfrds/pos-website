
import React from 'react';
import './styles/Services.css';
import { FaLaptopCode, FaChartLine, FaHandsHelping } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to meet your business needs.',
    },
    {
      icon: <FaChartLine />,
      title: 'Data Analytics',
      description: 'In-depth analytics to help you make informed business decisions.',
    },
    {
      icon: <FaHandsHelping />,
      title: 'Consulting Services',
      description: 'Expert advice to guide your business strategy and operations.',
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;