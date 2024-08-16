import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaInfoCircle, FaEnvelope } from 'react-icons/fa'; // Import icons
import '../styles/Navbar.css';
import logo from '../assets/logo192.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      
      <div className="navbar-right">
        <div className="navbar-logo-container">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/about">
          <FaInfoCircle className="icon" />
          About
        </Link>
        <Link to="/contact">
          <FaEnvelope className="icon" />
          Contact
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
