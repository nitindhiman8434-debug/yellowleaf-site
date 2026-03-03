import React, { useState, useEffect } from 'react';
import { useParams } from '../router';
import ProductGrid from '../components/ProductGrid';
import { PRODUCTS } from '../data/products';

export default function CategoryPage({ onAdd, onProductClick }) {
  const { category } = useParams();
  const [activeSub, setActiveSub] = useState('all');

  useEffect(() => { setActiveSub('all'); }, [category]);

  const catData = PRODUCTS[category];
  if (!catData) {
    return (
      <div className="section">
        <p style={{ textAlign: 'center', padding: 40, color: 'var(--grey-500)' }}>Category not found.</p>
      </div>
    );
  }

  const subCategories = Object.keys(catData);
  const products = activeSub === 'all'
    ? Object.values(catData).flat()
    : catData[activeSub] || [];

  return (
    <div className="section">
      <h2 className="section-title" style={{ marginBottom: 6 }}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      <p className="section-subtitle" style={{ marginBottom: 16 }}>
        Browse our curated selection of premium {category}
      </p>

      <div className="filter-bar">
        <button
          className={`filter-chip ${activeSub === 'all' ? 'active' : ''}`}
          onClick={() => setActiveSub('all')}
        >
          All
        </button>
        {subCategories.map(sub => (
          <button
            key={sub}
            className={`filter-chip ${activeSub === sub ? 'active' : ''}`}
            onClick={() => setActiveSub(sub)}
          >
            {sub.charAt(0).toUpperCase() + sub.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>

      {products.length > 0 ? (
        <ProductGrid products={products} onAdd={onAdd} onProductClick={onProductClick} />
      ) : (
        <p style={{ color: 'var(--grey-500)', textAlign: 'center', padding: 40 }}>
          No products in this category
        </p>
      )}
    </div>
  );
}
