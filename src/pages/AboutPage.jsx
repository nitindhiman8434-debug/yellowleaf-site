import React from 'react';
import { ABOUT_PAGE, SERVICE_PILLARS, SUPPORT_EMAIL } from '../data/products';

export default function AboutPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">{ABOUT_PAGE.title}</h1>
      <p className="page-subtitle">{ABOUT_PAGE.intro}</p>

      {ABOUT_PAGE.sections.map((s, i) => (
        <div key={i} style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{s.heading}</h2>
          <p style={{ color: 'var(--grey-500)', lineHeight: 1.7 }}>{s.content}</p>
        </div>
      ))}

      <div className="pillars-section" style={{ marginTop: 32 }}>
        <h2 className="section-title" style={{ marginBottom: 16 }}>Why Choose Us</h2>
        <div className="pillars-grid">
          {SERVICE_PILLARS.map(s => (
            <div className="pillar-card" key={s.title}>
              <div className="pillar-icon">{s.icon}</div>
              <div className="pillar-title">{s.title}</div>
              <div className="pillar-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 32, padding: 24, background: 'var(--grey-50)', borderRadius: 'var(--radius)' }}>
        <p>Questions? Contact us at <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'var(--green)' }}>{SUPPORT_EMAIL}</a></p>
      </div>
    </div>
  );
}
