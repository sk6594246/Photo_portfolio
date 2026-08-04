import React, { useState, useEffect } from 'react';
import { defaultConfig } from './data/defaultConfig';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AlbumShowcase from './components/AlbumShowcase';
import Gallery from './components/Gallery';
import ServicesSection from './components/ServicesSection';
import TermsSection from './components/TermsSection';
import ContactSection from './components/ContactSection';
import ConfigModal from './components/ConfigModal';
import Footer from './components/Footer';

const STORAGE_KEY = 'photoportfolio_config_v1';

export default function App() {
  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultConfig;
    } catch (e) {
      console.error('Failed to load saved config:', e);
      return defaultConfig;
    }
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  // Persist state changes to localStorage
  const handleSaveConfig = (newConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.error('Failed to save config to localStorage:', e);
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm("Are you sure you want to reset all configuration to original defaults?")) {
      setConfig(defaultConfig);
      localStorage.removeItem(STORAGE_KEY);
      setIsSettingsOpen(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Navbar
        config={config}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        <Hero
          config={config}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        <AlbumShowcase
          config={config}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        <Gallery
          config={config}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        <ServicesSection
          config={config}
          onSelectService={(serviceTitle) => setSelectedServiceForBooking(serviceTitle)}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        <TermsSection
          config={config}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        <ContactSection
          config={config}
          selectedService={selectedServiceForBooking}
        />
      </main>

      {/* Footer */}
      <Footer
        config={config}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Config Settings Modal */}
      {isSettingsOpen && (
        <ConfigModal
          config={config}
          onSave={handleSaveConfig}
          onReset={handleResetDefaults}
          onClose={() => setIsSettingsOpen(false)}
        />
      )}
    </div>
  );
}
