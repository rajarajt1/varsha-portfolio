import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="section-tag">👋 Welcome</span>
          <h1 className="hero-name">Hi, I'm <span>Varsha</span></h1>
          <h2 className="hero-role">Certified Speech-Language Pathologist</h2>
          <div className="hero-badge">
            <span>🎓</span>
            B.A.S.L.P — Bachelor of Audiology &amp; Speech-Language Pathology
          </div>
          <p className="hero-desc">
            Empowering children and adults to communicate with confidence through
            personalised, evidence-based speech and language therapy.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">
              Book a Consultation <FiArrowRight style={{ marginLeft: 6 }} />
            </Link>
            <a href="tel:+919876543210" className="btn-outline">
              <FiPhone style={{ marginRight: 6 }} /> Call Now
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">200+</span>
              <span className="stat-lbl">Patients Helped</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">5+</span>
              <span className="stat-lbl">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">98%</span>
              <span className="stat-lbl">Success Rate</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar">
            <div className="avatar-circle">
              <span className="avatar-emoji">👩‍⚕️</span>
            </div>
            <div className="avatar-ring ring-1" />
            <div className="avatar-ring ring-2" />
          </div>
          <div className="floating-badge badge-1">
            <span>🗣️</span> Speech Therapy
          </div>
          <div className="floating-badge badge-2">
            <span>👂</span> Audiology
          </div>
          <div className="floating-badge badge-3">
            <span>🧒</span> Pediatric Care
          </div>
          <div className="floating-badge badge-4">
            <span>⭐</span> Top Rated
          </div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
