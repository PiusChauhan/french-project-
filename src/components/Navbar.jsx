import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        France<span className="brand-accent">Tourism</span>
      </Link>
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/destinations" onClick={() => setIsMenuOpen(false)}>Destinations</Link></li>
        <li><Link to="/culture" onClick={() => setIsMenuOpen(false)}>Culture</Link></li>
        <li><Link to="/guide" onClick={() => setIsMenuOpen(false)}>Guide</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;