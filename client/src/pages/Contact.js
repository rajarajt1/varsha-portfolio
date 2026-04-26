import React, { useState } from 'react';
import axios from 'axios';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import './Contact.css';

const contactInfo = [
  { icon: <FiPhone />, label: 'Phone', value: '+91 73581 93901', href: 'tel:+917358193901' },
  { icon: <FiMail />, label: 'Email', value: 'aarthi4372@gmail.com', href: 'mailto:aarthi4372@gmail.com' },
  { icon: <FiMapPin />, label: 'Location', value: 'ChennaiS, Tamilnadu, India', href: null },
  { icon: <FiClock />, label: 'Working Hours', value: 'Mon – Sat: 9 AM – 7 PM', href: null },
];

const initialForm = { name: '', email: '', phone: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="section-tag">Contact Me</span>
          <h1 className="section-title text-center">Let's Talk</h1>
          <p className="section-subtitle text-center">
            Reach out to book a session, ask a question, or simply learn more about how I can help.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-main-inner">
          {/* Info */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p className="contact-info-desc">
              I'm here to help. Fill in the form or use any of the contact details below.
            </p>
            <div className="contact-info-list">
              {contactInfo.map((item, i) => (
                <div key={i} className="contact-info-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <p className="info-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="info-value link">{item.value}</a>
                    ) : (
                      <p className="info-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h2>Send a Message</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your concerns or what you'd like help with..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === 'success' && (
              <div className="form-alert success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-alert error">
                ❌ Something went wrong. Please try again or call directly.
              </div>
            )}

            <button type="submit" className="btn-primary submit-btn" disabled={loading}>
              {loading ? 'Sending...' : (<><FiSend style={{ marginRight: 8 }} />Send Message</>)}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
