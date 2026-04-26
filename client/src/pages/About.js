import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import './About.css';

const skills = [
  'Articulation & Phonological Disorders',
  'Language Delay & Disorders',
  'Stuttering & Fluency Therapy',
  'Voice & Resonance Disorders',
  'Augmentative & Alternative Communication (AAC)',
  'Autism Spectrum Disorder (ASD)',
  'Aphasia & Neurological Communication Disorders',
  'Hearing Assessment & Auditory Processing',
];

const education = [
  {
    degree: 'Clinical Internship',
    institution: 'Vidhyasagar Special School, Chennai',
    year: '2025',
  },
  {
    degree: 'Clinical Internship',
    institution: 'NIEPMD, Chennai',
    year: '2025',
  },
  {
    degree: 'Clinical Internship',
    institution: 'Rajiv Gandhi government hospital (MMC), Chennai',
    year: '2024',
  },
  {
    degree: 'B.A.S.L.P — Bachelor of Audiology & Speech-Language Pathology',
    institution: 'SRM medical college and research centre, Chennai',
    year: '2021 – 2025',
  },
];

const About = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-visual">
            <div className="about-avatar">👩‍⚕️</div>
          </div>
          <div className="about-hero-text">
            <span className="section-tag">About Me</span>
            <h1 className="section-title">
              Hi, I'm <span>Varsha</span>
            </h1>
            <h3 className="about-role">Certified Speech-Language Pathologist</h3>
            <div className="about-degree-badge">🎓 B.A.S.L.P — Bachelor of Audiology &amp; Speech-Language Pathology</div>
            <p className="about-bio">
              I am a passionate and dedicated Speech-Language Pathologist with over 5 years of
              clinical experience helping individuals of all ages discover their voice. From toddlers
              with speech delays to adults recovering from strokes, I believe every person deserves
              to be heard and understood.
            </p>
            <p className="about-bio">
              My approach combines evidence-based clinical techniques with genuine empathy — because
              real progress happens when clients feel safe, supported, and motivated.
            </p>
            <Link to="/contact" className="btn-primary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="about-skills">
        <div className="about-skills-inner">
          <span className="section-tag">Areas of Expertise</span>
          <h2 className="section-title text-center">Clinical Specialties</h2>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-chip">
                <FiCheckCircle className="skill-icon" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="about-education">
        <div className="about-education-inner">
          <span className="section-tag">Education &amp; Training</span>
          <h2 className="section-title text-center">Academic Background</h2>
          <div className="education-list">
            {education.map((e, i) => (
              <div key={i} className="edu-card">
                <div className="edu-dot" />
                <div className="edu-content">
                  <span className="edu-year">{e.year}</span>
                  <h4>{e.degree}</h4>
                  <p>{e.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
