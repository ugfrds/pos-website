// NavLinks.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // If you're using React Router

const NavLinks = () => (
  <nav className="nav-links">
    <NavLink to="/" activeClassName="active-link">Home</NavLink>
    <NavLink to="/about" activeClassName="active-link">About</NavLink>
    <NavLink to="/faq" activeClassName="active-link">FAQ</NavLink>
    <NavLink to="/blog" activeClassName="active-link">Blog</NavLink>
    <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
  </nav> 
);

export default NavLinks;
