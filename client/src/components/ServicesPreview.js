import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './ServicesPreview.css';

const services = [
  {
    icon: '🗣️',
    title: 'Speech Therapy',
    desc: 'Improving articulation, fluency, voice, and overall speech clarity for children and adults.',
    color: '#6c63ff',
    bg: '#f0eeff',
  },
  {
    icon: '📖',
    title: 'Language Therapy',
    desc: 'Building vocabulary, grammar, and comprehension skills to enhance effective communication.',
    color: '#2ec4b6',
    bg: '#e0faf8',
  },
  {
    icon: '👂',
    title: 'Audiology Services',
    desc: 'Comprehensive hearing assessment and auditory processing disorder evaluation and management.',
    color: '#ff6584',
    bg: '#fff0f3',
  },
  {
    icon: '🧒',
    title: 'Pediatric Therapy',
    desc: 'Specialised therapy for children with speech delays, autism spectrum disorder, and developmental needs.',
    color: '#f7b731',
    bg: '#fff9ec',
  },
  {
    icon: '🎙️',
    title: 'Voice Therapy',
    desc: 'Treatment for voice disorders including hoarseness, vocal nodules, and misuse of voice.',
    color: '#a29bfe',
    bg: '#f5f3ff',
  },
  {
    icon: '🔁',
    title: 'Stuttering Treatment',
    desc: 'Evidence-based fluency shaping and stuttering modification techniques for lasting results.',
    color: '#55efc4',
    bg: '#eafdf8',
  },
];

const ServicesPreview = () => {
  return (
    <section className="services-preview">
      <div className="services-preview-inner">
        <span className="section-tag">What I Offer</span>
        <h2 className="section-title text-center">Therapy Services</h2>
        <p className="section-subtitle text-center">
          Comprehensive, compassionate care tailored to each individual's unique communication needs.
        </p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card" style={{ '--card-color': s.color }}>
              <div className="service-icon-wrap" style={{ background: s.bg }}>
                <span>{s.icon}</span>
              </div>
              <h3 style={{ color: s.color }}>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <Link to="/services" className="btn-primary">
            Explore All Services <FiArrowRight style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
