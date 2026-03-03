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
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>{HERO.title.split('\n').map((line, i) => <span key={i}>{i > 0 && <br />}{line}</span>)}</h1>
            <p>{HERO.subtitle}</p>
            <Link to={HERO.cta_link} className="hero-cta">{HERO.cta_text}</Link>
          </div>
          <div className="hero-visual">🌿</div>
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
