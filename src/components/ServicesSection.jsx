import React from 'react';
import { Heart, User, Image as ImageIcon, Camera, Check, ArrowRight, Sparkles, Edit3 } from 'lucide-react';

const iconMap = {
  Heart: Heart,
  User: User,
  Image: ImageIcon,
  Camera: Camera
};

export default function ServicesSection({ config, onSelectService, onOpenSettings }) {
  return (
    <section id="services" style={{ padding: '5rem 0', position: 'relative', background: 'rgba(12, 15, 22, 0.6)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>
            Tailored Experiences
          </span>
          <h2>Services Offered</h2>
          <p>
            Comprehensive photography packages designed to preserve your most meaningful memories with artistic precision.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {config.services.map((service) => {
            const IconComponent = iconMap[service.icon] || Camera;

            return (
              <div
                key={service.id}
                className="glass-panel"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Service Icon & Price */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(229, 193, 88, 0.12)',
                      border: '1px solid var(--border-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-gold)'
                    }}>
                      <IconComponent size={24} />
                    </div>

                    <span style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--primary-gold)',
                      background: 'rgba(229, 193, 88, 0.08)',
                      padding: '0.35rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(229, 193, 88, 0.2)'
                    }}>
                      {service.price}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.4rem', color: '#ffffff' }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'var(--primary-gold)', marginBottom: '1rem', fontWeight: 500 }}>
                    {service.tagline}
                  </p>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {service.description}
                  </p>

                  {/* Features Bullet List */}
                  {service.features && service.features.length > 0 && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {service.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                          <Check size={15} style={{ color: 'var(--primary-gold)', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '0.5rem' }}>
                  <a
                    href="#contact"
                    onClick={() => onSelectService && onSelectService(service.title)}
                    className="btn btn-primary"
                    style={{ flex: 1, fontSize: '0.88rem' }}
                  >
                    Inquire Service <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Config Edit Hint Banner */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button onClick={onOpenSettings} className="btn btn-secondary" style={{ fontSize: '0.85rem' }}>
            <Edit3 size={15} /> Customize Services & Pricing in Site Config
          </button>
        </div>
      </div>
    </section>
  );
}
