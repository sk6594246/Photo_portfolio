import React, { useState } from 'react';
import { X, Save, RefreshCw, Download, Upload, Plus, Trash2, Link, Phone, Briefcase, FileText, Image, Check, AlertCircle } from 'lucide-react';

export default function ConfigModal({ config, onSave, onReset, onClose }) {
  const [activeTab, setActiveTab] = useState('album');
  const [localConfig, setLocalConfig] = useState(JSON.parse(JSON.stringify(config)));
  const [saveToast, setSaveToast] = useState(false);

  const handleSave = () => {
    onSave(localConfig);
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onClose();
    }, 1200);
  };

  // Export JSON Config
  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(localConfig, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "photoportfolio-config.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON Config
  const handleImport = (e) => {
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          setLocalConfig(parsed);
          alert("Configuration loaded successfully!");
        } catch (err) {
          alert("Invalid JSON configuration file format.");
        }
      };
    }
  };

  // Service Helpers
  const addService = () => {
    const newService = {
      id: `service-${Date.now()}`,
      title: "New Custom Service",
      tagline: "Brief service tagline",
      price: "Starting at $500",
      icon: "Camera",
      description: "Description of the new photography service offered...",
      features: ["Feature 1", "Feature 2"]
    };
    setLocalConfig({
      ...localConfig,
      services: [...localConfig.services, newService]
    });
  };

  const updateService = (index, field, value) => {
    const updated = [...localConfig.services];
    updated[index][field] = value;
    setLocalConfig({ ...localConfig, services: updated });
  };

  const deleteService = (index) => {
    const updated = localConfig.services.filter((_, i) => i !== index);
    setLocalConfig({ ...localConfig, services: updated });
  };

  // Terms Helpers
  const addTerm = () => {
    const newTerm = {
      id: `term-${Date.now()}`,
      title: `${localConfig.termsOfBusiness.length + 1}. Custom Business Term`,
      content: "Details of terms, cancellation rules, or copyright policies..."
    };
    setLocalConfig({
      ...localConfig,
      termsOfBusiness: [...localConfig.termsOfBusiness, newTerm]
    });
  };

  const updateTerm = (index, field, value) => {
    const updated = [...localConfig.termsOfBusiness];
    updated[index][field] = value;
    setLocalConfig({ ...localConfig, termsOfBusiness: updated });
  };

  const deleteTerm = (index) => {
    const updated = localConfig.termsOfBusiness.filter((_, i) => i !== index);
    setLocalConfig({ ...localConfig, termsOfBusiness: updated });
  };

  // Photo Helpers
  const addPhoto = () => {
    const newPhoto = {
      id: `photo-${Date.now()}`,
      title: "New Gallery Photograph",
      category: "Wedding",
      url: "/images/wedding.jpg",
      description: "Photo description or story behind shot.",
      googlePhotoUrl: localConfig.googlePhotos.albumUrl || ""
    };
    setLocalConfig({
      ...localConfig,
      photos: [...localConfig.photos, newPhoto]
    });
  };

  const updatePhoto = (index, field, value) => {
    const updated = [...localConfig.photos];
    updated[index][field] = value;
    setLocalConfig({ ...localConfig, photos: updated });
  };

  const deletePhoto = (index) => {
    const updated = localConfig.photos.filter((_, i) => i !== index);
    setLocalConfig({ ...localConfig, photos: updated });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#ffffff' }}>
              PhotoPortfolio Site Configuration
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--primary-gold)' }}>
              Configure Album Link, Phone Contact, Services & Terms
            </span>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-color)',
          background: 'rgba(10, 12, 16, 0.4)',
          overflowX: 'auto'
        }}>
          <button
            onClick={() => setActiveTab('album')}
            style={tabStyle(activeTab === 'album')}
          >
            <Link size={16} /> Google Photos Album
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            style={tabStyle(activeTab === 'contact')}
          >
            <Phone size={16} /> Phone & Contact
          </button>

          <button
            onClick={() => setActiveTab('services')}
            style={tabStyle(activeTab === 'services')}
          >
            <Briefcase size={16} /> Services Offered ({localConfig.services.length})
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            style={tabStyle(activeTab === 'terms')}
          >
            <FileText size={16} /> Terms of Business ({localConfig.termsOfBusiness.length})
          </button>

          <button
            onClick={() => setActiveTab('photos')}
            style={tabStyle(activeTab === 'photos')}
          >
            <Image size={16} /> Gallery Photos ({localConfig.photos.length})
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {saveToast && (
            <div style={{
              background: 'rgba(34, 197, 94, 0.2)',
              border: '1px solid rgba(34, 197, 94, 0.4)',
              color: '#4ade80',
              padding: '0.8rem 1rem',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <Check size={18} /> Settings updated and saved successfully!
            </div>
          )}

          {/* TAB 1: GOOGLE PHOTOS ALBUM */}
          {activeTab === 'album' && (
            <div>
              <div style={{
                background: 'rgba(229, 193, 88, 0.08)',
                border: '1px solid var(--border-gold)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem'
              }}>
                <h4 style={{ color: 'var(--primary-gold)', marginBottom: '0.4rem', fontSize: '1.05rem' }}>
                  Link Google Photos Shared Album
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                  Paste your Google Photos shared album URL below. Visitors will be able to click directly through to your full Google Photos album collection.
                </p>
              </div>

              <div className="form-group">
                <label>Google Photos Album URL *</label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="https://photos.app.goo.gl/your-album-code"
                  value={localConfig.googlePhotos.albumUrl}
                  onChange={(e) => setLocalConfig({
                    ...localConfig,
                    googlePhotos: { ...localConfig.googlePhotos, albumUrl: e.target.value }
                  })}
                />
              </div>

              <div className="form-group">
                <label>Album Display Name / Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Master Photography Portfolio (Google Photos)"
                  value={localConfig.googlePhotos.albumTitle}
                  onChange={(e) => setLocalConfig({
                    ...localConfig,
                    googlePhotos: { ...localConfig.googlePhotos, albumTitle: e.target.value }
                  })}
                />
              </div>

              <div className="form-group">
                <label>Last Synced Note</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Synced 2 hours ago"
                  value={localConfig.googlePhotos.lastSynced}
                  onChange={(e) => setLocalConfig({
                    ...localConfig,
                    googlePhotos: { ...localConfig.googlePhotos, lastSynced: e.target.value }
                  })}
                />
              </div>
            </div>
          )}

          {/* TAB 2: CONTACT & PHONE */}
          {activeTab === 'contact' && (
            <div>
              <div className="form-group">
                <label>Photographer / Studio Name *</label>
                <input
                  type="text"
                  className="form-control"
                  value={localConfig.photographer.name}
                  onChange={(e) => setLocalConfig({
                    ...localConfig,
                    photographer: { ...localConfig.photographer, name: e.target.value }
                  })}
                />
              </div>

              <div className="form-group">
                <label>Tagline / Motto</label>
                <input
                  type="text"
                  className="form-control"
                  value={localConfig.photographer.tagline}
                  onChange={(e) => setLocalConfig({
                    ...localConfig,
                    photographer: { ...localConfig.photographer, tagline: e.target.value }
                  })}
                />
              </div>

              <div className="form-group">
                <label>Bio / About Summary</label>
                <textarea
                  className="form-control"
                  rows={3}
                  value={localConfig.photographer.bio}
                  onChange={(e) => setLocalConfig({
                    ...localConfig,
                    photographer: { ...localConfig.photographer, bio: e.target.value }
                  })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Primary Phone Number *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="+1 (555) 000-0000"
                    value={localConfig.contact.phone}
                    onChange={(e) => setLocalConfig({
                      ...localConfig,
                      contact: { ...localConfig.contact, phone: e.target.value }
                    })}
                  />
                </div>

                <div className="form-group">
                  <label>WhatsApp Number (with country code)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="+15550000000"
                    value={localConfig.contact.whatsapp}
                    onChange={(e) => setLocalConfig({
                      ...localConfig,
                      contact: { ...localConfig.contact, whatsapp: e.target.value }
                    })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    value={localConfig.contact.email}
                    onChange={(e) => setLocalConfig({
                      ...localConfig,
                      contact: { ...localConfig.contact, email: e.target.value }
                    })}
                  />
                </div>

                <div className="form-group">
                  <label>Working Hours</label>
                  <input
                    type="text"
                    className="form-control"
                    value={localConfig.contact.workingHours}
                    onChange={(e) => setLocalConfig({
                      ...localConfig,
                      contact: { ...localConfig.contact, workingHours: e.target.value }
                    })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Studio Address / Location</label>
                <input
                  type="text"
                  className="form-control"
                  value={localConfig.contact.address}
                  onChange={(e) => setLocalConfig({
                    ...localConfig,
                    contact: { ...localConfig.contact, address: e.target.value }
                  })}
                />
              </div>
            </div>
          )}

          {/* TAB 3: SERVICES OFFERED */}
          {activeTab === 'services' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#ffffff', margin: 0 }}>Configure Services Offered</h4>
                <button onClick={addService} className="btn btn-primary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}>
                  <Plus size={15} /> Add Service
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {localConfig.services.map((svc, idx) => (
                  <div key={svc.id || idx} className="glass-panel" style={{ padding: '1.5rem', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span className="badge badge-gold">Service #{idx + 1}</span>
                      <button onClick={() => deleteService(idx)} className="close-btn" style={{ color: '#ef4444' }} title="Delete Service">
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label>Service Title</label>
                        <input
                          type="text"
                          className="form-control"
                          value={svc.title}
                          onChange={(e) => updateService(idx, 'title', e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label>Price Display</label>
                        <input
                          type="text"
                          className="form-control"
                          value={svc.price}
                          onChange={(e) => updateService(idx, 'price', e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label>Icon</label>
                        <select
                          className="form-control"
                          value={svc.icon}
                          onChange={(e) => updateService(idx, 'icon', e.target.value)}
                        >
                          <option value="Heart">Heart (Wedding)</option>
                          <option value="User">User (Portrait)</option>
                          <option value="Image">Image (Landscape)</option>
                          <option value="Camera">Camera (Commercial/Event)</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Tagline</label>
                      <input
                        type="text"
                        className="form-control"
                        value={svc.tagline}
                        onChange={(e) => updateService(idx, 'tagline', e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Service Description</label>
                      <textarea
                        className="form-control"
                        rows={2}
                        value={svc.description}
                        onChange={(e) => updateService(idx, 'description', e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: TERMS OF BUSINESS */}
          {activeTab === 'terms' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#ffffff', margin: 0 }}>Configure Terms of Business</h4>
                <button onClick={addTerm} className="btn btn-primary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}>
                  <Plus size={15} /> Add Term Clause
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {localConfig.termsOfBusiness.map((term, idx) => (
                  <div key={term.id || idx} className="glass-panel" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                      <span className="badge badge-gold">Clause #{idx + 1}</span>
                      <button onClick={() => deleteTerm(idx)} className="close-btn" style={{ color: '#ef4444' }} title="Delete Term">
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="form-group">
                      <label>Term Header / Title</label>
                      <input
                        type="text"
                        className="form-control"
                        value={term.title}
                        onChange={(e) => updateTerm(idx, 'title', e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Term Clause Content</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        value={term.content}
                        onChange={(e) => updateTerm(idx, 'content', e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: GALLERY PHOTOS */}
          {activeTab === 'photos' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#ffffff', margin: 0 }}>Manage Portfolio Photos</h4>
                <button onClick={addPhoto} className="btn btn-primary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}>
                  <Plus size={15} /> Add Photo
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {localConfig.photos.map((photo, idx) => (
                  <div key={photo.id || idx} className="glass-panel" style={{ padding: '1.25rem', display: 'grid', gridTemplateColumns: '100px 1fr auto', gap: '1rem', alignItems: 'center' }}>
                    <img src={photo.url} alt={photo.title} style={{ width: '100px', height: '70px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />

                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Title</label>
                        <input
                          type="text"
                          className="form-control"
                          style={{ padding: '0.4rem 0.6rem', fontSize: '0.85rem' }}
                          value={photo.title}
                          onChange={(e) => updatePhoto(idx, 'title', e.target.value)}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Category</label>
                        <input
                          type="text"
                          className="form-control"
                          style={{ padding: '0.4rem 0.6rem', fontSize: '0.85rem' }}
                          value={photo.category}
                          onChange={(e) => updatePhoto(idx, 'category', e.target.value)}
                        />
                      </div>
                      <div style={{ gridColumn: 'span 2' }}>
                        <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Image URL (local path or online link)</label>
                        <input
                          type="text"
                          className="form-control"
                          style={{ padding: '0.4rem 0.6rem', fontSize: '0.85rem' }}
                          value={photo.url}
                          onChange={(e) => updatePhoto(idx, 'url', e.target.value)}
                        />
                      </div>
                    </div>

                    <button onClick={() => deletePhoto(idx)} className="close-btn" style={{ color: '#ef4444' }}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer" style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={handleExport} className="btn btn-secondary" style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }}>
              <Download size={14} /> Export JSON
            </button>
            <label className="btn btn-secondary" style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem', cursor: 'pointer', margin: 0 }}>
              <Upload size={14} /> Import JSON
              <input type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
            </label>
            <button onClick={onReset} className="btn btn-secondary" style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem', color: '#f87171' }}>
              <RefreshCw size={14} /> Reset Defaults
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              <Save size={16} /> Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const tabStyle = (active) => ({
  padding: '1rem 1.4rem',
  background: active ? '#121620' : 'transparent',
  border: 'none',
  borderBottom: active ? '2px solid var(--primary-gold)' : '2px solid transparent',
  color: active ? 'var(--primary-gold)' : 'var(--text-muted)',
  fontWeight: active ? 600 : 400,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '0.88rem',
  whiteSpace: 'nowrap',
  transition: 'all 0.2s ease'
});
