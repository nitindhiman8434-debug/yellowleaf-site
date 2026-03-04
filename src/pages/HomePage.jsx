import React from 'react';
import { Link } from '../router';
import ProductGrid from '../components/ProductGrid';
import { FLASH_DEALS, BEST_SELLERS, SERVICE_PILLARS, ALL_PRODUCTS, HERO, ADDRESS } from '../data/products';

export default function HomePage({ onAdd, onProductClick, searchQuery }) {
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    const results = ALL_PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.sub?.toLowerCase().includes(q) ||
      p.desc?.toLowerCase().includes(q)
    );
    return (
      <div className="section">
        <h2 className="section-title" style={{ marginBottom: 16 }}>
          Search results for "{searchQuery}"
        </h2>
        {results.length > 0 ? (
          <ProductGrid products={results} onAdd={onAdd} onProductClick={onProductClick} />
        ) : (
          <p style={{ color: 'var(--grey-500)', textAlign: 'center', padding: 40 }}>
            No products found for "{searchQuery}"
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      {/* ── HERO BANNER ── */}
      <div className="hero" style={{ backgroundImage: 'url(/images/hero/banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(15,45,15,0.88) 0%, rgba(0,0,0,0.75) 100%)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
        <div className="hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-text">
            <div style={{ display: 'inline-block', background: 'linear-gradient(90deg, #ff4444, #ff6b00)', color: '#fff', padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 700, marginBottom: 12, letterSpacing: 1 }}>
              🔥 GRAND OPENING — UP TO 60% OFF
            </div>
            <h1>{HERO.title.split('\n').map((line, i) => <span key={i}>{i > 0 && <br />}{line}</span>)}</h1>
            <p>{HERO.subtitle}</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
              <Link to={HERO.cta_link} className="hero-cta">{HERO.cta_text}</Link>
              <Link to="/shop/edibles" className="hero-cta" style={{ background: 'transparent', border: '2px solid #fff' }}>Browse Edibles</Link>
            </div>
          </div>
          <div className="hero-visual" style={{ fontSize: 80 }}>🌿</div>
        </div>
      </div>

      {/* ── FLASH DEALS (8 products) ── */}
      <div className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">⚡ <span className="red">Flash Deals</span></h2>
            <p className="section-subtitle">Limited time offers — grab them before they're gone</p>
          </div>
          <Link to="/shop/flowers" className="view-all-btn">View All</Link>
        </div>
        <ProductGrid products={FLASH_DEALS.slice(0, 8)} onAdd={onAdd} onProductClick={onProductClick} />
      </div>

      {/* ── SERVICE PILLARS ── */}
      <div className="pillars-section">
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

      {/* ── BEST SELLERS (12 products) ── */}
      <div className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">🏆 Best Sellers</h2>
            <p className="section-subtitle">Top-rated products loved by 50,000+ customers</p>
          </div>
        </div>
        <ProductGrid products={BEST_SELLERS.slice(0, 12)} onAdd={onAdd} onProductClick={onProductClick} />
      </div>

      {/* ── WHY CHOOSE US / INFO SECTION ── */}
      <div className="why-section">
        <div className="why-inner">
          <h2 className="why-title">Why Choose Yellow Leaf Cafe?</h2>
          <p className="why-subtitle">Pattaya's most trusted cannabis dispensary</p>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🧪</div>
              <h3>Lab-Tested & Certified</h3>
              <p>Every product undergoes rigorous third-party lab testing for potency, purity, and safety. We never compromise on quality.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🚚</div>
              <h3>Fast Thailand-Wide Delivery</h3>
              <p>Same-day delivery in Pattaya. 1-3 days to Bangkok. 3-5 days nationwide. Discreet, sealed packaging on every order.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🌿</div>
              <h3>30+ Premium Strains</h3>
              <p>From legendary Indicas to energizing Sativas and balanced Hybrids — we stock only the finest hand-selected cannabis.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💎</div>
              <h3>Loyalty Rewards</h3>
              <p>Earn points on every purchase. New members get 500 bonus points (฿875 value). Redeem for discounts on future orders.</p>
            </div>
          </div>

          <div className="why-cta-row">
            <Link to="/shop/flowers" className="hero-cta" style={{ background: 'var(--green)' }}>Shop All Strains →</Link>
            <Link to="/about" className="hero-cta" style={{ background: 'transparent', border: '2px solid var(--green)', color: 'var(--green)' }}>Learn More About Us</Link>
          </div>

          {ADDRESS && (
            <div className="why-address">
              📍 Visit us: <strong>{ADDRESS}</strong>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
