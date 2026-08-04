import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp, FileText, Lock, Edit3 } from 'lucide-react';

export default function TermsSection({ config, onOpenSettings }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleTerm = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="terms" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>
            Legal & Transparency
          </span>
          <h2>Terms of Business</h2>
          <p>
            Standard contractual guidelines, payment schedules, copyright licensing, and cancellation policies for all photo commissions.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          {config.termsOfBusiness.map((term, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={term.id || index}
                className="glass-panel"
                style={{
                  marginBottom: '1rem',
                  overflow: 'hidden',
                  borderColor: isOpen ? 'rgba(229, 193, 88, 0.4)' : 'var(--border-color)',
                  transition: 'var(--transition)'
                }}
              >
                <button
                  onClick={() => toggleTerm(index)}
                  style={{
                    width: '100%',
                    padding: '1.4rem 1.75rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                    <ShieldCheck size={20} style={{ color: 'var(--primary-gold)', flexShrink: 0 }} />
                    <span style={{ color: isOpen ? 'var(--primary-gold)' : '#ffffff' }}>
                      {term.title}
                    </span>
                  </div>
                  {isOpen ? <ChevronUp size={20} style={{ color: 'var(--primary-gold)' }} /> : <ChevronDown size={20} style={{ color: 'var(--text-muted)' }} />}
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.75rem 1.6rem 1.75rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.98rem',
                    lineHeight: '1.7',
                    borderTop: '1px dashed rgba(255, 255, 255, 0.08)',
                    paddingTop: '1rem'
                  }}>
                    {term.content}
                  </div>
                )}
              </div>
            );
          })}

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '2rem',
            padding: '1.25rem 1.5rem',
            background: 'rgba(229, 193, 88, 0.05)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-gold)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
              <Lock size={18} style={{ color: 'var(--primary-gold)' }} />
              Need custom terms for corporate licensing?
            </div>
            <button onClick={onOpenSettings} className="btn btn-outline-gold" style={{ padding: '0.4rem 1rem', fontSize: '0.82rem' }}>
              <Edit3 size={14} /> Update Terms in Config
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
