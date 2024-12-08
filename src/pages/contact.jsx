// ContactPage.js
import React from 'react';
import { FaPhone, FaEnvelope, FaUser, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import NavBar from '../components/nav';
import './styles/ContactPage.css';
import Footer from '../components/Footer';

const ContactPage = () => {
    const headerColor = '#fff';
  const color = '#001f3f';
  return (
    <div className="contact-page">
       <NavBar headerColor={headerColor } color={color} />
      {/* Header Section */}
      <div className="contact-header">
        <h2>Contact Us</h2>
        <h1>Get in Touch</h1>
        <p>We would love to hear from you. Feel free to reach out to us for any inquiries.</p>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="card">
          <h3>Location</h3>
          <p>1234 Street Name, City, Country</p>
          <p><FaPhone /> +123 456 7890</p>
          <p><FaEnvelope /> info@example.com</p>
        </div>

        <div className="card">
          <h3>Support</h3>
          <p>Available 24/7 for all your questions and issues.</p>
          <p><FaPhone /> +123 456 7890</p>
          <p><FaEnvelope /> wisecorp896@gmail.com</p>
        </div>
      </div> 

      {/* Contact Section */}
      <div className="contact-section">
        <div className="form-container">
          <h2>Contact Us</h2>
          <h1>Feel Free to Contact Us</h1>
          <p>We're here to help you with any questions or issues you may have. Reach out to us today.</p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <ul>
              <li>
              <FaFacebookF />
              </li>
              <li>
              <FaTwitter />
              </li>
              <li>
              <FaLinkedinIn />
              </li>
            </ul> 
          </div>
        </div> 

        {/* Contact Form */}
        <div className="form">
          <form>
            <div className="form-group">
              <FaUser className="icon" />
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-group">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <FaPhone className="icon" />
              <input type="tel" placeholder="Phone" />
            </div>
            <div className="form-group">
              
              <textarea placeholder="Enter your message"></textarea>
            </div>
            <button className = "button" type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer  headerColor={headerColor} color = {color}/>
    </div>
  );
};

export default ContactPage;
