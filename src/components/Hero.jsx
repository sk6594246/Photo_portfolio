import React from 'react';
import { ExternalLink, Phone, Sparkles, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero({ config, onOpenSettings }) {
  return (
    <section style={{
      paddingTop: '9rem',
      paddingBottom: '5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(229, 193, 88, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        filter: 'blur(80px)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-grid">
          {/* Left Text */}
          <div className="animate-fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
              <span className="badge badge-gold">
                <Sparkles size={14} /> Luxury Photography Studio
              </span>
              <span className="badge badge-green">
                <CheckCircle2 size={14} /> Google Photos Linked
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
              lineHeight: '1.15',
              marginBottom: '1.2rem',
              fontWeight: 700
            }}>
              {config.photographer.name}
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'var(--primary-gold)',
              fontFamily: 'var(--font-heading)',
              marginBottom: '1rem',
              letterSpacing: '0.3px'
            }}>
              "{config.photographer.tagline}"
            </p>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: '1.7',
              marginBottom: '2rem',
              maxWidth: '560px'
            }}>
              {config.photographer.bio}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {config.googlePhotos.albumUrl && (
                <a
                  href={config.googlePhotos.albumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Google Photos Album <ExternalLink size={18} />
                </a>
              )}

              {config.contact.phone && (
                <a
                  href={`tel:${config.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="btn btn-secondary"
                >
                  <Phone size={18} /> {config.contact.phone}
                </a>
              )}
            </div>

            {/* Quick stats / Features bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-color)'
            }} className="hero-stats">
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>High-Res Digital Delivery</div>
              </div>

              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary-gold)', fontFamily: 'var(--font-heading)' }}>
                  Synced
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Google Cloud Album</div>
              </div>

              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
                  Verified
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Terms of Business</div>
              </div>
            </div>
          </div>

          {/* Right Image Feature Stack */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(229, 193, 88, 0.25)'
            }}>
              <img
                src={config.photographer.heroImage || config.photos[0]?.url || '/images/wedding.jpg'}
                alt="Photography Portfolio Showcase"
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10, 12, 16, 0.9) 0%, transparent 60%)'
              }} />

              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(18, 22, 30, 0.85)',
                backdropFilter: 'blur(12px)',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)'
              }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary-gold)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Connected Album
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>
                    {config.googlePhotos.albumTitle || 'Google Photos Portfolio'}
                  </div>
                </div>
                <button
                  onClick={onOpenSettings}
                  className="btn btn-outline-gold"
                  style={{ padding: '0.35rem 0.8rem', fontSize: '0.78rem' }}
                >
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-stats {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
