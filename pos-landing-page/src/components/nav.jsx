import React, { useState, useEffect } from 'react';
import './styles/nav.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = ({ headerColor, color }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    const navbarLinks = document.querySelectorAll('.navbar-menu ul li a');
const linkColor = darkMode ? '#007bff' : headerColor;

navbarLinks.forEach(link => {
  link.style.setProperty('color', linkColor);
});

    document.documentElement.style.setProperty('--navbar-brand-color', darkMode ? '#ffffff' : headerColor);
   // document.documentElement.style.setProperty('--navbar-link-color', darkMode ? '#007bff' : headerColor);
    document.documentElement.style.setProperty('--navbar-toggle-text-color', darkMode ? '#ffffff' : headerColor);
    document.documentElement.style.setProperty('--navbar-background', darkMode ? '#333333' : color); // Ensure background color is adjusted
  }, [darkMode, headerColor, color]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">WebFiles</Link>
      </div>
      <div className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li ><Link to="/" activeClassName='active-link'>Home</Link></li>
          <li ><Link to="/about" activeClassName='active-link'>About</Link></li>
          <li ><Link to="/faq" activeClassName='active-link'>FAQ</Link></li>
          <li ><Link to="/contact" activeClassName='active-link'>Contact</Link></li>
          <li ><Link to="/blog" activeClassName='active-link'>Blog</Link></li>
        </ul>
      </div>
      <button className="navbar-toggler" onClick={toggleNav}>
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
      </button>
      <button className={`theme-toggle ${darkMode ? 'dark-mode' : ''}`} onClick={toggleDarkMode}>
        <span className="theme-toggle-text">{darkMode ? 'Dark' : 'Light'}</span>
        {darkMode ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
};

export default NavBar;
