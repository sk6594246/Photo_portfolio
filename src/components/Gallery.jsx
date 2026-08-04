import React, { useState } from 'react';
import { Maximize2, ExternalLink, X, Camera, Plus, Share2 } from 'lucide-react';

export default function Gallery({ config, onOpenSettings }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = ['All', ...new Set(config.photos.map(p => p.category).filter(Boolean))];

  const filteredPhotos = selectedCategory === 'All'
    ? config.photos
    : config.photos.filter(p => p.category === selectedCategory);

  return (
    <section id="gallery" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>
            Portfolio Gallery
          </span>
          <h2>Visual Masterpieces</h2>
          <p>
            Curated high-resolution selection from our Google Photos album collection. Click any photo to view in full screen.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
              style={{
                padding: '0.45rem 1.25rem',
                fontSize: '0.88rem',
                borderRadius: 'var(--radius-full)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredPhotos.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}>
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="glass-panel"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  group: 'photo-card'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '280px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img
                    src={photo.url}
                    alt={photo.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />

                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 12, 16, 0.9) 0%, rgba(10, 12, 16, 0.2) 50%, transparent 100%)',
                    opacity: 0.9,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.25rem',
                    transition: 'var(--transition)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <div>
                        <span className="badge badge-gold" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', marginBottom: '0.4rem' }}>
                          {photo.category}
                        </span>
                        <h4 style={{ fontSize: '1.15rem', color: '#ffffff', margin: 0 }}>
                          {photo.title}
                        </h4>
                      </div>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(229, 193, 88, 0.2)',
                        border: '1px solid var(--border-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-gold)'
                      }}>
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-panel" style={{ textCenter: 'center', padding: '4rem 2rem', textAlign: 'center' }}>
            <Camera size={48} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>No Photos In Category</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Add photos or sync with your Google Album in site configuration.</p>
            <button onClick={onOpenSettings} className="btn btn-primary">
              <Plus size={16} /> Add Photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="modal-overlay" onClick={() => setActivePhoto(null)}>
          <div
            className="modal-content"
            style={{ maxWidth: '1000px', background: '#0a0c10', border: '1px solid rgba(229, 193, 88, 0.3)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="badge badge-gold">{activePhoto.category}</span>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{activePhoto.title}</h3>
              </div>
              <button className="close-btn" onClick={() => setActivePhoto(null)}>
                <X size={24} />
              </button>
            </div>

            <div className="modal-body" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              />
              {activePhoto.description && (
                <p style={{ marginTop: '1.25rem', color: 'var(--text-muted)', textAlign: 'center', maxWidth: '700px' }}>
                  {activePhoto.description}
                </p>
              )}
            </div>

            <div className="modal-footer" style={{ justifyContent: 'space-between' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Share2 size={14} /> High-Resolution Master Render
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {config.googlePhotos.albumUrl && (
                  <a
                    href={activePhoto.googlePhotoUrl || config.googlePhotos.albumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}
                  >
                    Open in Google Photos <ExternalLink size={14} />
                  </a>
                )}
                <button className="btn btn-secondary" onClick={() => setActivePhoto(null)} style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
