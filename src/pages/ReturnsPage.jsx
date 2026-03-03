import React from 'react';
import { RETURNS_PAGE, SUPPORT_EMAIL } from '../data/products';

export default function ReturnsPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">{RETURNS_PAGE.title}</h1>
      <p className="page-subtitle">{RETURNS_PAGE.intro}</p>

      <div className="info-card">
        {RETURNS_PAGE.policies.map((p, i) => (
          <p key={i} style={{ padding: '8px 0', borderBottom: '1px solid var(--grey-100)', color: 'var(--grey-500)' }}>
            {i + 1}. {p}
          </p>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 24, padding: 20, background: 'var(--grey-50)', borderRadius: 'var(--radius)' }}>
        <p>Need help? Email <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'var(--green)' }}>{SUPPORT_EMAIL}</a></p>
      </div>
    </div>
  );
}
