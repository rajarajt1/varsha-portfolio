import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">V</div>
          <h3>Varsha</h3>
          <p className="footer-tagline">
            Certified Speech-Language Pathologist <br />
            B.A.S.L.P — Helping voices be heard.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FiFacebook /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li>Speech Therapy</li>
            <li>Language Therapy</li>
            <li>Audiology</li>
            <li>Pediatric Therapy</li>
            <li>Voice Therapy</li>
            <li>Stuttering Treatment</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <div className="contact-item">
            <FiPhone />
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-item">
            <FiMail />
            <span>varsha@speechcare.com</span>
          </div>
          <div className="contact-item">
            <FiMapPin />
            <span>Bangalore, Karnataka, India</span>
          </div>
          <Link to="/contact" className="footer-cta">Book a Session</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Varsha — Speech Language Pathologist. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
