import React from 'react';
import { calcDiscount, calcPoints } from '../utils/checkout';

export default function ProductCard({ product, onAdd, onClick }) {
  const disc = calcDiscount(product.price, product.sale);
  const pts = calcPoints(product.sale);

  const badgeClass = product.badge === 'Best Seller' ? 'best'
    : product.badge === 'Premium' ? 'premium' : '';

  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <div className="product-card-img">
        {product.badge && (
          <span className={`product-badge ${badgeClass}`}>{product.badge}</span>
        )}
        {product.img && product.img.startsWith('/') ? (
          <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          product.img
        )}
      </div>
      <div className="product-card-info">
        <div className="product-meta">
          <span className="product-cat">{product.sub}</span>
          {product.thc != null && (
            <span className="product-thc">THC {product.thc}{product.thc > 100 ? 'mg' : '%'}</span>
          )}
          {product.weight && <span className="product-thc">· {product.weight}</span>}
        </div>
        <div className="product-name">{product.name}</div>
        <div className="product-rating">
          <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
          <span className="rating-num">{product.rating}</span>
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-pricing">
          <span className="price-sale">${product.sale}</span>
          <span className="price-orig">${product.price}</span>
          {disc > 0 && <span className="discount-pct">-{disc}%</span>}
        </div>
        <div className="product-footer">
          <span className="points-badge">Earn {pts} pts</span>
          <button
            className="add-cart-btn"
            onClick={(e) => { e.stopPropagation(); onAdd(product); }}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
