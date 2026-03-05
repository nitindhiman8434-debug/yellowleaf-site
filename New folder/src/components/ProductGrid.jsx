import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onAdd, onProductClick }) {
  return (
    <div className="product-grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} onClick={onProductClick} />
      ))}
    </div>
  );
}
