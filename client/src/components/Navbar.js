import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <div className="brand-logo">V</div>
          <div className="brand-text">
            <span className="brand-name">Varsha</span>
            <span className="brand-sub">Speech Therapist</span>
          </div>
        </Link>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`nav-link${location.pathname === path ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="nav-cta">
            Book Appointment
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
