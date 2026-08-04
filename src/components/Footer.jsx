import React from 'react';
import { Camera, Heart, Phone, Mail, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer({ config, onOpenSettings }) {
  return (
    <footer style={{
      background: '#07090c',
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 0 2rem 0',
      color: 'var(--text-muted)',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem'
        }} className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #e5c158 0%, #a68128 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0a0c10'
              }}>
                <Camera size={20} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>
                {config.photographer.name}
              </h3>
            </div>
            <p style={{ lineHeight: 1.6, marginBottom: '1.2rem', color: 'var(--text-dim)' }}>
              {config.photographer.tagline}
            </p>
            {config.contact.phone && (
              <a
                href={`tel:${config.contact.phone.replace(/[^0-9+]/g, '')}`}
                style={{ color: 'var(--primary-gold)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, textDecoration: 'none' }}
              >
                <Phone size={15} /> {config.contact.phone}
              </a>
            )}
          </div>

          {/* Direct Navigation */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '1.2rem' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><a href="#album" style={footerLinkStyle}>Google Album Sync</a></li>
              <li><a href="#gallery" style={footerLinkStyle}>Portfolio Gallery</a></li>
              <li><a href="#services" style={footerLinkStyle}>Services & Pricing</a></li>
              <li><a href="#terms" style={footerLinkStyle}>Terms of Business</a></li>
              <li><a href="#contact" style={footerLinkStyle}>Booking & Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '1.2rem' }}>
              Services Offered
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {config.services.map((svc) => (
                <li key={svc.id}>
                  <a href="#services" style={footerLinkStyle}>{svc.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Album & Legal */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '1.2rem' }}>
              Google Album & Admin
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {config.googlePhotos.albumUrl && (
                <li>
                  <a
                    href={config.googlePhotos.albumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ ...footerLinkStyle, color: 'var(--primary-gold)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    Open Google Photos <ExternalLink size={14} />
                  </a>
                </li>
              )}
              <li>
                <button
                  onClick={onOpenSettings}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0, fontSize: '0.9rem', textAlign: 'left' }}
                >
                  ⚙ Configure Site Details
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem'
        }}>
          <div>
            © {new Date().getFullYear()} {config.photographer.name}. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-dim)' }}>
            Crafted with <Heart size={14} style={{ color: 'var(--primary-gold)' }} /> & Google Photos Album Sync
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

const footerLinkStyle = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  transition: 'color 0.2s ease'
};
