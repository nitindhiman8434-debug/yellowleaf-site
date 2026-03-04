import React from 'react';
import { LOYALTY_PAGE } from '../data/products';

export default function LoyaltyPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">{LOYALTY_PAGE.title}</h1>
      <p className="page-subtitle">{LOYALTY_PAGE.intro}</p>

      <div className="info-card" style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 12 }}>How It Works</h3>
        <p>🎁 Earn <strong>{LOYALTY_PAGE.points_per_dollar} point</strong> per ฿35 spent</p>
        <p>💰 Redeem: <strong>{LOYALTY_PAGE.points_value}</strong></p>
        <p>🎉 Sign up bonus: <strong>{LOYALTY_PAGE.signup_bonus} points</strong> (${(LOYALTY_PAGE.signup_bonus / 20).toFixed(0)} value!)</p>
      </div>

      <h3 style={{ marginBottom: 16, fontSize: 18 }}>Loyalty Tiers</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {LOYALTY_PAGE.tiers.map((tier, i) => (
          <div key={i} className="info-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--green)', marginBottom: 4 }}>{tier.name}</div>
            <div style={{ fontSize: 13, color: 'var(--grey-500)', marginBottom: 8 }}>
              {tier.min_spend === 0 ? 'Starting tier' : `฿${tier.min_spend}+ lifetime spend`}
            </div>
            <div style={{ fontSize: 14 }}>{tier.perk}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
