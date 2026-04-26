import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of a 6-year-old',
    text: "Varsha has been absolutely incredible with my son. After just 3 months of sessions, his speech improved dramatically. She is patient, professional, and truly caring.",
    rating: 5,
    initials: 'PS',
  },
  {
    name: 'Rahul Mehta',
    role: 'Adult patient — Fluency disorder',
    text: "I struggled with stuttering for years and lost confidence in myself. Varsha's approach was scientific yet compassionate. I now speak confidently in meetings. Forever grateful!",
    rating: 5,
    initials: 'RM',
  },
  {
    name: 'Anita Verma',
    role: 'Parent of an autistic child',
    text: "The progress my daughter has made under Varsha's guidance is beyond anything we hoped for. She truly understands each child and customises her therapy beautifully.",
    rating: 5,
    initials: 'AV',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <span className="section-tag">Testimonials</span>
        <h2 className="section-title text-center">What Patients Say</h2>
        <p className="section-subtitle text-center">
          Real stories from people whose lives were changed through better communication.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="t-stars">
                {'★'.repeat(t.rating)}
                {'☆'.repeat(5 - t.rating)}
              </div>
              <p className="t-text">"{t.text}"</p>
              <div className="t-author">
                <div className="t-avatar">{t.initials}</div>
                <div>
                  <p className="t-name">{t.name}</p>
                  <p className="t-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
