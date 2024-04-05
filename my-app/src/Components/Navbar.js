import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
    <div className="company-name">
      <h1>Picky Cat</h1>
    </div>
    <div className="navbar-links">
      <ul>
        <li><Link to="#home">Home</Link></li>
        <li><Link to="#about">About Us</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
