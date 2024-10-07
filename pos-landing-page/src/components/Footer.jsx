// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './styles/Footer.css'; // Assuming you'll style it separately
import { Link } from 'react-router-dom';

const Footer = ({ headerColor, color }) => {
  return (
    <footer className="footer" style={{ backgroundColor: color, color: headerColor }}>
      <div className="footer-container">
        <div className="footer-column">
          <h4 style={{ color: headerColor }}>WebFiles</h4>
          <p>At WebFiles, We are committed to getting your business to new heights. It's Easy with WebFiles.</p>
          <p>896 street BC City</p>
        </div>

        <div className="footer-column">
          <h4 style={{ color: headerColor }}>Pages</h4>
          <ul>
            <li><Link to="/" style={{ color: headerColor }}>Home</Link></li>
            <li><Link to="/blog" style={{ color: headerColor }}>Blog & News</Link></li>
            <li><Link to="/about" style={{ color: headerColor }}>About Us</Link></li>
            <li><Link to="/contact" style={{ color: headerColor }}>Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 style={{ color: headerColor }}>Support</h4>
          <ul>
            <li><Link to="/faq" style={{ color: headerColor }}>FAQ</Link></li>
            <li><a href="#" style={{ color: headerColor }}>Support Center</a></li>
            <li><a href="#" style={{ color: headerColor }}>Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 style={{ color: headerColor }}>Contact</h4>
          <ul className="contact-info">
            <li><FaPhoneAlt /> +1129-456-7890</li>
            <li><FaEnvelope /> wisecorp896@gmail.com</li>
          </ul>
          <div className="social-media">
            <a href="#" style={{ color: headerColor }}><FaFacebook /></a>
            <a href="#" style={{ color: headerColor }}><FaTwitter /></a>
            <a href="#" style={{ color: headerColor }}><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Wisecorp Technologies Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
