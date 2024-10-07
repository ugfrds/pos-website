// ToggleButton.js
import React from 'react';
import './styles/ToggleButton.css'; // Define styles for the toggle button here

const ToggleButton = ({ isDarkMode, onToggle }) => (
  <div className="toggle-container">
    <label className="switch">
      <input type="checkbox" checked={isDarkMode} onChange={onToggle} />
      <span className="slider round"></span>
    </label>
  </div>
);

export default ToggleButton;
