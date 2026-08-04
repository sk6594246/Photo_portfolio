import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';

export default function ContactSection({ config, selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
    }, 6000);
  };

  const whatsappClean = config.contact.whatsapp ? config.contact.whatsapp.replace(/[^0-9]/g, '') : '';

  return (
    <section id="contact" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>
            Get In Touch
          </span>
          <h2>Contact Details & Booking</h2>
          <p>
            Ready to capture your story? Call us directly, send a WhatsApp message, or complete the booking form below.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="contact-grid">
          
          {/* Contact Details Column */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#ffffff' }}>
              Direct Contact
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              
              {/* Phone Card */}
              {config.contact.phone && (
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(229, 193, 88, 0.12)',
                    border: '1px solid var(--border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-gold)',
                    flexShrink: 0
                  }}>
                    <PhoneCall size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Phone / Mobile
                    </div>
                    <a
                      href={`tel:${config.contact.phone.replace(/[^0-9+]/g, '')}`}
                      style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-gold)', textDecoration: 'none' }}
                    >
                      {config.contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* WhatsApp Card */}
              {whatsappClean && (
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(34, 197, 94, 0.12)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4ade80',
                    flexShrink: 0
                  }}>
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Instant WhatsApp
                    </div>
                    <a
                      href={`https://wa.me/${whatsappClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '1.05rem', fontWeight: 600, color: '#4ade80', textDecoration: 'none' }}
                    >
                      Chat on WhatsApp ↗
                    </a>
                  </div>
                </div>
              )}

              {/* Email */}
              {config.contact.email && (
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-main)',
                    flexShrink: 0
                  }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Email Address
                    </div>
                    <a href={`mailto:${config.contact.email}`} style={{ fontSize: '1rem', color: 'var(--text-main)', textDecoration: 'none' }}>
                      {config.contact.email}
                    </a>
                  </div>
                </div>
              )}

              {/* Address */}
              {config.contact.address && (
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-main)',
                    flexShrink: 0
                  }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Studio Location
                    </div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                      {config.contact.address}
                    </div>
                  </div>
                </div>
              )}

              {/* Working Hours */}
              {config.contact.workingHours && (
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-main)',
                    flexShrink: 0
                  }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Working Hours
                    </div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
                      {config.contact.workingHours}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Booking Inquiry Form */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#ffffff' }}>
              Send Commission Inquiry
            </h3>

            {submitted ? (
              <div style={{
                background: 'rgba(34, 197, 94, 0.12)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                padding: '2.5rem',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={48} style={{ color: '#4ade80', marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#ffffff' }}>
                  Inquiry Received!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Thank you for reaching out. We will get back to you within 24 hours at <strong>{config.contact.phone}</strong> or email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      className="form-control"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="form-control"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Service Requested</label>
                    <select
                      className="form-control"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select a service...</option>
                      {config.services.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Estimated Event Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Session Details & Notes</label>
                  <textarea
                    className="form-control"
                    placeholder="Tell us about your event, location, duration, and vision..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Submit Inquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
