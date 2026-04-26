import React from 'react';
import './WhyChoose.css';

const reasons = [
  {
    icon: '🎓',
    title: 'Qualified & Certified',
    desc: 'B.A.S.L.P degree holder with certified training from recognised institutions.',
  },
  {
    icon: '❤️',
    title: 'Patient-Centred Care',
    desc: 'Every therapy plan is uniquely designed to match the individual\'s goals and comfort.',
  },
  {
    icon: '📊',
    title: 'Evidence-Based Methods',
    desc: 'All interventions are grounded in the latest clinical research and best practices.',
  },
  {
    icon: '🏠',
    title: 'Home & Online Sessions',
    desc: 'Flexible in-clinic, at-home, and online sessions to fit your busy schedule.',
  },
];

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <div className="why-choose-inner">
        <div className="why-text">
          <span className="section-tag">Why Choose Me</span>
          <h2 className="section-title">
            Committed to Your <br />
            <span>Communication Journey</span>
          </h2>
          <p className="why-desc">
            With a deep passion for helping people find their voice, I combine
            clinical expertise with genuine compassion to deliver results that truly matter.
          </p>
          <div className="why-reasons">
            {reasons.map((r, i) => (
              <div key={i} className="reason-item">
                <div className="reason-icon">{r.icon}</div>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-visual">
          <div className="why-card main-card">
            <div className="why-card-avatar">👩‍⚕️</div>
            <h4>Varsha</h4>
            <p>Speech-Language Pathologist</p>
            <div className="why-card-degree">B.A.S.L.P</div>
          </div>
          <div className="why-card stat-card stat-card-1">
            <span className="big-num">200+</span>
            <span>Happy Patients</span>
          </div>
          <div className="why-card stat-card stat-card-2">
            <span className="big-num">5+</span>
            <span>Years of Practice</span>
          </div>
          <div className="why-card stat-card stat-card-3">
            <span className="big-num">6</span>
            <span>Therapy Specialties</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
