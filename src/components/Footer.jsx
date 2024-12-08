// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './styles/Footer.css'; // Assuming you'll style it separately
import { Link } from 'react-router-dom';

const Footer = ({ headerColor, color }) => { 
  return (
    <footer className="footer pt-4" style={{ backgroundColor: color, color: headerColor }}>
      <div className="footer-container container">
        <div className="footer-column">
          <h4 style={{ color: headerColor }}>WebFiles</h4>
          <p className="fs-5">At WebFiles, We are committed to getting your business to new heights. 
            It's Easy with WebFiles.</p>  
        </div>

        <div className="footer-column">
          <h4 style={{ color: headerColor }}>Pages</h4>
          <ul className="fs-6">
            <li><Link to="/" style={{ color: headerColor }}>Home</Link></li>
            <li><Link to="/blog" style={{ color: headerColor }}>Blog & News</Link></li>
            <li><Link to="/about" style={{ color: headerColor }}>About Us</Link></li>
            <li><Link to="/contact" style={{ color: headerColor }}>Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 style={{ color: headerColor }}>Support</h4>
          <ul className="fs-6">
            <li><Link to="/faq" style={{ color: headerColor }}>FAQ</Link></li>
            <li><a href="#" style={{ color: headerColor }}>Support Center</a></li>
            <li><a href="#" style={{ color: headerColor }}>Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 style={{ color: headerColor }}>Contact</h4>
          <ul className="contact-info fs-6">
            <li><FaPhoneAlt /> +256-753-145-516</li>
            <li><FaEnvelope /> justlikewiseman@gmail.com</li>
          </ul>
          <div className="social-media">
            <a href="https://facebook.com/justlikewiseman"  target ="_blank" style={{ color: headerColor }}><FaFacebook /></a>
            <a href="https://linkedin.com/in/justlikewiseman"  target ="_blank" style={{ color: headerColor }}><FaLinkedin /></a>
            <a href="https://instagram.com/justlikewiseman" target ="_blank"  style={{ color: headerColor }}><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center pt-4 pb-0">
        <p className='muted '>&copy; {new Date().getFullYear()} Wisecorp Technologies Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
