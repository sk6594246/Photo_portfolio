import React from 'react';
import { Share2, ExternalLink, RefreshCw, Link as LinkIcon, Edit3, Image as ImageIcon } from 'lucide-react';

export default function AlbumShowcase({ config, onOpenSettings }) {
  const { albumUrl, albumTitle, lastSynced } = config.googlePhotos;

  return (
    <section id="album" style={{ padding: '3rem 0', position: 'relative' }}>
      <div className="container">
        <div className="glass-panel album-card" style={{
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(25, 32, 45, 0.9) 0%, rgba(15, 18, 26, 0.9) 100%)',
          border: '1px solid rgba(229, 193, 88, 0.25)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: '2rem'
        }}>
          
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'rgba(229, 193, 88, 0.12)',
              border: '1px solid rgba(229, 193, 88, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-gold)',
              flexShrink: 0
            }}>
              <Share2 size={28} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>
                  Google Photos Album Link
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <RefreshCw size={12} className="spin-slow" /> Synced: {lastSynced || 'Active'}
                </span>
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#ffffff' }}>
                {albumTitle || 'Google Photos Portfolio Album'}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '720px', wordBreak: 'break-all' }}>
                <LinkIcon size={14} style={{ display: 'inline', marginRight: '6px' }} />
                {albumUrl ? (
                  <a href={albumUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-gold)', textDecoration: 'underline' }}>
                    {albumUrl}
                  </a>
                ) : (
                  <span style={{ color: '#ef4444' }}>No Google Photos album link configured yet. Click Configure to add yours.</span>
                )}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {albumUrl && (
              <a
                href={albumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ whiteSpace: 'nowrap' }}
              >
                Open Google Album <ExternalLink size={16} />
              </a>
            )}
            <button
              onClick={onOpenSettings}
              className="btn btn-secondary"
              style={{ whiteSpace: 'nowrap' }}
            >
              <Edit3 size={16} /> Edit Link
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .album-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
