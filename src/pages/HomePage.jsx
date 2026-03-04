import React from 'react';
import { Link } from '../router';
import ProductGrid from '../components/ProductGrid';
import { FLASH_DEALS, BEST_SELLERS, SERVICE_PILLARS, ALL_PRODUCTS, HERO } from '../data/products';

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

      <div className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">⚡ <span className="red">Flash Deals</span></h2>
            <p className="section-subtitle">Limited time offers — grab them before they're gone</p>
          </div>
          <Link to="/shop/flowers" className="view-all-btn">View All</Link>
        </div>
        <ProductGrid products={FLASH_DEALS} onAdd={onAdd} onProductClick={onProductClick} />
      </div>

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

      <div className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">🏆 Best Sellers</h2>
            <p className="section-subtitle">Top-rated products loved by 50,000+ customers</p>
          </div>
        </div>
        <ProductGrid products={BEST_SELLERS} onAdd={onAdd} onProductClick={onProductClick} />
      </div>
    </>
  );
}
