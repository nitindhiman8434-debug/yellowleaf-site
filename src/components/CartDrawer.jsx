import React from 'react';
import { generateWhatsAppCheckout } from '../utils/checkout';
import { MIN_ORDER, FREE_SHIP_MIN } from '../data/products';

export default function CartDrawer({ cart, onClose, onUpdateQty, onRemove }) {
  const subtotal = cart.reduce((s, i) => s + i.sale * i.qty, 0);
  const freeShipping = subtotal >= FREE_SHIP_MIN;
  const total = subtotal + (freeShipping ? 0 : 15);
  const pts = Math.floor(subtotal);
  const canCheckout = subtotal >= MIN_ORDER;

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-drawer">
        <div className="cart-header">
          <h2 className="cart-title">Your Cart ({cart.length})</h2>
          <button className="cart-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <p>Your cart is empty</p>
              <p style={{ fontSize: 12, marginTop: 4 }}>$100 minimum order required</p>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-img">{item.img}</div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${(item.sale * item.qty).toFixed(2)}</div>
                  <div className="cart-item-qty">
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, -1)}>−</button>
                    <span className="qty-num">{item.qty}</span>
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => onRemove(item.id)}>✕</button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-row">
              <span className="cart-row-label">Subtotal</span>
              <span className="cart-row-value">${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-row">
              <span className="cart-row-label">Shipping</span>
              <span className="cart-row-value" style={{ color: freeShipping ? 'var(--green)' : 'inherit' }}>
                {freeShipping ? 'FREE' : '$15.00'}
              </span>
            </div>
            {freeShipping && (
              <div className="cart-row">
                <span className="cart-row-label">🎁 Free Gift</span>
                <span className="cart-row-value" style={{ color: 'var(--green)' }}>Included</span>
              </div>
            )}
            <div className="cart-grand">
              <span className="cart-grand-label">Total</span>
              <span className="cart-grand-value">${total.toFixed(2)}</span>
            </div>
            <div className="cart-points">
              🎁 You'll earn {pts} Loyalty Points (${(pts / 20).toFixed(2)} value)
            </div>
            {!canCheckout && (
              <div className="cart-min-warning">
                ⚠️ Minimum order is ${MIN_ORDER}. Add ${(MIN_ORDER - subtotal).toFixed(2)} more to checkout.
              </div>
            )}
            <button
              className="wa-checkout-btn"
              onClick={() => window.open(generateWhatsAppCheckout(cart), '_blank')}
              disabled={!canCheckout}
            >
              💬 Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
