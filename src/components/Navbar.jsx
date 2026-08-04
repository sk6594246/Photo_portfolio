import React, { useState, useEffect } from 'react';
import { Camera, Settings, Phone, ExternalLink, Menu, X, Shield, Layers } from 'lucide-react';

export default function Navbar({ config, onOpenSettings }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 12, 16, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '0.9rem 0' : '1.4rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #e5c158 0%, #a68128 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0a0c10',
            boxShadow: '0 4px 15px rgba(229, 193, 88, 0.3)'
          }}>
            <Camera size={22} strokeWidth={2.3} />
          </div>
          <div>
            <h1 className="brand-title" style={{ fontSize: '1.25rem', margin: 0, lineHeight: 1.1 }}>
              {config.photographer.name}
            </h1>
            <span style={{ fontSize: '0.7rem', color: 'var(--primary-gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Google Album Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }}>
          <a href="#album" style={navLinkStyle}>
            Album Sync
          </a>
          <a href="#gallery" style={navLinkStyle}>
            Portfolio
          </a>
          <a href="#services" style={navLinkStyle}>
            Services
          </a>
          <a href="#terms" style={navLinkStyle}>
            Terms
          </a>
          <a href="#contact" style={navLinkStyle}>
            Contact
          </a>

          {/* Quick Direct Link to Google Photos */}
          {config.googlePhotos.albumUrl && (
            <a
              href={config.googlePhotos.albumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-gold"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
              title="Open Google Photos Shared Album"
            >
              Google Photos <ExternalLink size={14} />
            </a>
          )}

          {/* Call Direct */}
          {config.contact.phone && (
            <a
              href={`tel:${config.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="btn btn-primary"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}
            >
              <Phone size={15} /> {config.contact.phone}
            </a>
          )}

          {/* Config Settings Trigger */}
          <button
            onClick={onOpenSettings}
            className="btn btn-secondary"
            style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem', cursor: 'pointer' }}
            title="Configure Website Settings (Album, Phone, Services, Terms)"
            id="open-settings-btn"
          >
            <Settings size={16} /> Config
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div style={{ display: 'none' }} className="mobile-toggle-wrapper">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="close-btn"
            style={{ color: 'var(--text-main)' }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: '#0e1218',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <a href="#album" onClick={() => setMobileMenuOpen(false)} style={navLinkStyle}>Google Album Sync</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} style={navLinkStyle}>Portfolio Showcase</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={navLinkStyle}>Services Offered</a>
          <a href="#terms" onClick={() => setMobileMenuOpen(false)} style={navLinkStyle}>Terms of Business</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={navLinkStyle}>Contact & Bookings</a>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button onClick={() => { setMobileMenuOpen(false); onOpenSettings(); }} className="btn btn-secondary" style={{ flex: 1 }}>
              <Settings size={16} /> Configure Site
            </button>
            <a href={`tel:${config.contact.phone}`} className="btn btn-primary" style={{ flex: 1 }}>
              <Phone size={16} /> Call
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle-wrapper { display: block !important; }
        }
      `}</style>
    </header>
  );
}

const navLinkStyle = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontSize: '0.92rem',
  fontWeight: '500',
  transition: 'color 0.2s ease',
  cursor: 'pointer'
};
