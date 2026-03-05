import React, { useState } from 'react';
import { calcDiscount, calcPoints, calcPricePerGram, generateWhatsAppCheckout } from '../utils/checkout';

export default function ProductDetail({ product, onClose, onAdd }) {
  const [tab, setTab] = useState('desc');
  if (!product) return null;

  const disc = calcDiscount(product.price, product.sale);
  const pts = calcPoints(product.sale);
  const ppg = calcPricePerGram(product.sale, product.weight);

  return (
    <div className="pd-overlay" onClick={onClose}>
      <div className="pd-card" onClick={e => e.stopPropagation()}>
        <div className="pd-top">
          <button className="pd-close" onClick={onClose}>✕</button>
          <div className="pd-image">{product.img && product.img.startsWith('/') ? <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} /> : product.img}</div>
          <div className="pd-info">
            <div className="pd-breadcrumb">{product.cat} / {product.sub} / {product.name}</div>
            <h2 className="pd-name">{product.name}</h2>
            <div className="product-rating" style={{ marginBottom: 10 }}>
              <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
              <span className="rating-num">{product.rating}</span>
              <span className="rating-count">({product.reviews} reviews)</span>
            </div>
            <div className="pd-prices">
              <span className="pd-sale">฿{product.sale}</span>
              <span className="pd-orig">฿{product.price}</span>
              {disc > 0 && <span className="discount-pct">-{disc}%</span>}
            </div>
            <div className="pd-stats">
              {product.thc != null && (
                <div className="pd-stat">
                  <div className="pd-stat-val">{product.thc}{product.thc > 100 ? 'mg' : '%'}</div>
                  <div className="pd-stat-label">THC</div>
                </div>
              )}
              {product.cbd != null && (
                <div className="pd-stat">
                  <div className="pd-stat-val">{product.cbd}%</div>
                  <div className="pd-stat-label">CBD</div>
                </div>
              )}
              {ppg && (
                <div className="pd-stat">
                  <div className="pd-stat-val">฿{ppg}</div>
                  <div className="pd-stat-label">/gram</div>
                </div>
              )}
              <div className="pd-stat">
                <div className="pd-stat-val" style={{ color: 'var(--green)' }}>{pts}</div>
                <div className="pd-stat-label">Points</div>
              </div>
            </div>
            <div className="pd-actions">
              <button className="pd-add-btn" onClick={() => onAdd(product)}>Add to Cart</button>
              <button className="pd-buy-btn" onClick={() => {
                window.open(generateWhatsAppCheckout([{ ...product, qty: 1 }]), '_blank');
              }}>
                💬 Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="pd-tabs">
          <div className="pd-tab-btns">
            {[['desc', 'Description'], ['effects', 'Strain Effects'], ['specs', 'Specifications']].map(([key, label]) => (
              <button key={key} className={`pd-tab-btn ${tab === key ? 'active' : ''}`} onClick={() => setTab(key)}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="pd-tab-content">
          {tab === 'desc' && (
            <div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--grey-700)', marginBottom: 14 }}>{product.desc}</p>
              {product.lineage && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                  <div><strong style={{ fontSize: 11, color: 'var(--grey-500)' }}>LINEAGE</strong><br /><span style={{ fontSize: 13 }}>{product.lineage}</span></div>
                  <div><strong style={{ fontSize: 11, color: 'var(--grey-500)' }}>AROMA</strong><br /><span style={{ fontSize: 13 }}>{product.aroma}</span></div>
                  <div><strong style={{ fontSize: 11, color: 'var(--grey-500)' }}>FLAVOR</strong><br /><span style={{ fontSize: 13 }}>{product.flavor}</span></div>
                </div>
              )}
            </div>
          )}
          {tab === 'effects' && product.effects && (
            <div>
              {Object.entries(product.effects).map(([key, val]) => (
                <div className="effect-row" key={key}>
                  <span className="effect-label">{key}</span>
                  <div className="effect-track">
                    <div className="effect-fill" style={{ width: `${val}%` }} />
                  </div>
                  <span className="effect-value">{val}%</span>
                </div>
              ))}
            </div>
          )}
          {tab === 'specs' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, fontSize: 13 }}>
              <div style={{ padding: 10, background: 'var(--grey-50)', borderRadius: 8 }}><strong>Category</strong><br />{product.cat}</div>
              <div style={{ padding: 10, background: 'var(--grey-50)', borderRadius: 8 }}><strong>Type</strong><br />{product.sub}</div>
              {product.thc != null && <div style={{ padding: 10, background: 'var(--grey-50)', borderRadius: 8 }}><strong>THC</strong><br />{product.thc}{product.thc > 100 ? 'mg' : '%'}</div>}
              {product.cbd != null && <div style={{ padding: 10, background: 'var(--grey-50)', borderRadius: 8 }}><strong>CBD</strong><br />{product.cbd}%</div>}
              {product.weight && <div style={{ padding: 10, background: 'var(--grey-50)', borderRadius: 8 }}><strong>Weight</strong><br />{product.weight}</div>}
              <div style={{ padding: 10, background: 'var(--grey-50)', borderRadius: 8 }}><strong>Loyalty</strong><br />{pts} pts earned</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
