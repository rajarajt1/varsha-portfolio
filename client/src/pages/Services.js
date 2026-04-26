import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './Services.css';

const services = [
  {
    icon: '🗣️',
    title: 'Speech Therapy',
    color: '#6c63ff',
    bg: '#f0eeff',
    desc: 'Speech therapy helps individuals improve clarity, articulation, and pronunciation. Suitable for children with lisps, adults with accent modification needs, and anyone dealing with unclear speech.',
    for: ['Children with articulation disorders', 'Adults post-stroke', 'Accent modification', 'Apraxia of speech'],
  },
  {
    icon: '📖',
    title: 'Language Therapy',
    color: '#2ec4b6',
    bg: '#e0faf8',
    desc: 'Language therapy targets comprehension, expression, vocabulary, grammar, and narrative skills. Vital for children with language delays and adults with aphasia.',
    for: ['Language delay in children', 'Reading & writing difficulties', 'Aphasia recovery', 'Cognitive-communication disorders'],
  },
  {
    icon: '👂',
    title: 'Audiology Services',
    color: '#ff6584',
    bg: '#fff0f3',
    desc: 'Comprehensive hearing assessments including pure tone audiometry, speech audiometry, and auditory processing evaluations to identify and manage hearing-related issues.',
    for: ['Hearing screening', 'Auditory processing disorders', 'Tinnitus management', 'Hearing aid guidance'],
  },
  {
    icon: '🧒',
    title: 'Pediatric Therapy',
    color: '#f7b731',
    bg: '#fff9ec',
    desc: 'Specialised therapy for children at every stage of development. Addressing speech delays, autism, Down syndrome, ADHD, and other developmental communication challenges.',
    for: ['Autism Spectrum Disorder (ASD)', 'Developmental delay', 'ADHD & attention issues', 'Early intervention (0–5 years)'],
  },
  {
    icon: '🎙️',
    title: 'Voice Therapy',
    color: '#a29bfe',
    bg: '#f5f3ff',
    desc: 'Voice therapy treats disorders that affect pitch, loudness, resonance, and quality of the voice. Ideal for teachers, singers, public speakers, and anyone experiencing vocal fatigue.',
    for: ['Vocal nodules & polyps', 'Hoarseness & voice fatigue', 'Spasmodic dysphonia', 'Professional voice users'],
  },
  {
    icon: '🔁',
    title: 'Stuttering Treatment',
    color: '#55efc4',
    bg: '#eafdf8',
    desc: 'Evidence-based fluency therapy using stuttering modification and fluency shaping techniques to build confidence and effective communication strategies.',
    for: ['Childhood stuttering', 'Adult fluency disorders', 'Cluttering', 'Situational avoidance'],
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-inner">
          <span className="section-tag">What I Offer</span>
          <h1 className="section-title text-center">Therapy Services</h1>
          <p className="section-subtitle text-center">
            Each service is delivered with expertise, empathy, and a genuine commitment to your progress.
          </p>
        </div>
      </section>

      <section className="services-detail">
        <div className="services-detail-inner">
          {services.map((s, i) => (
            <div key={i} className={`service-detail-card ${i % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="sd-visual" style={{ background: s.bg }}>
                <span className="sd-icon">{s.icon}</span>
              </div>
              <div className="sd-text">
                <h3 style={{ color: s.color }}>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="sd-list">
                  {s.for.map((f, j) => (
                    <li key={j} style={{ '--li-color': s.color }}>
                      <span className="sd-bullet" style={{ background: s.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta-section">
        <div className="services-cta-inner">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Book a free 15-minute consultation to discuss your needs and goals.</p>
          <Link to="/contact" className="btn-primary">
            Get in Touch <FiArrowRight style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
