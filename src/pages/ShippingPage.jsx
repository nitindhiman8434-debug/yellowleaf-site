import React from 'react';
import { SHIPPING_PAGE } from '../data/products';

export default function ShippingPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">{SHIPPING_PAGE.title}</h1>
      <p className="page-subtitle">{SHIPPING_PAGE.intro}</p>

      <div className="info-card" style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 12 }}>Shipping Details</h3>
        <p>📦 Free shipping on orders over <strong>${SHIPPING_PAGE.free_shipping_min}</strong></p>
        <p>💰 Standard shipping fee: <strong>${SHIPPING_PAGE.shipping_fee}</strong></p>
        <p>🚀 Delivery: <strong>{SHIPPING_PAGE.delivery_days} business days</strong></p>
      </div>

      <div className="info-card" style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 12 }}>Policies</h3>
        {SHIPPING_PAGE.policies.map((p, i) => (
          <p key={i} style={{ padding: '6px 0', color: 'var(--grey-500)' }}>✓ {p}</p>
        ))}
      </div>

      <div className="info-card">
        <h3 style={{ marginBottom: 12 }}>We Ship To</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {SHIPPING_PAGE.provinces.map(p => (
            <span key={p} style={{ background: 'var(--green-light)', color: 'var(--green-dark)', padding: '4px 12px', borderRadius: 20, fontSize: 13 }}>{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
