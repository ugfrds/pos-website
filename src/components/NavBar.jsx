// Navbar.js
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import ToggleButton from './ToggleButton';
import './styles/Navbar.css'; // Styles for the navbar

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add or remove dark mode class to body based on isDarkMode state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <Logo />
      <NavLinks />
      <ToggleButton isDarkMode={isDarkMode} onToggle={handleToggle} />
    </header>
  );
};

export default Navbar;
