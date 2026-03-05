import React from 'react';
import { Link } from '../router';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Yellow Leaf <em>Cafe</em></h3>
            <p>Thailand's premium cannabis cafe & dispensary. Lab-tested flowers, edibles & accessories delivered to your door. Serving Pattaya and all of Thailand.</p>
            <p style={{ marginTop: 8, fontSize: 13, color: 'var(--grey-400)' }}>
              📍 361/4-5, Bang Lamung, Pattaya City, Chon Buri 20150, Thailand
            </p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <Link to="/">Flash Deals</Link>
            <Link to="/shop/flowers">Flowers</Link>
            <Link to="/shop/edibles">Edibles</Link>
            <Link to="/shop/accessories">Accessories</Link>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <Link to="/faq">FAQ</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/returns">Returns</Link>
            <Link to="/loyalty">Loyalty Program</Link>
          </div>
          <div className="footer-col">
            <h4>Account</h4>
            <Link to="/signin">Sign In</Link>
            <Link to="/register">Register</Link>
            <Link to="/about">About Us</Link>
            <a href="mailto:support@yellowleaf.club">Contact Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Yellow Leaf Cafe. All rights reserved.</span>
          <span>Premium Cannabis Dispensary · Pattaya, Thailand</span>
        </div>
      </div>
    </footer>
  );
}
