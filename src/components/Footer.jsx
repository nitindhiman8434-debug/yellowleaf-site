import React from 'react';
import { Link } from '../router';
import { VERIFY_EMAIL } from '../data/products';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Yellow Leaf <em>Cafe</em></h3>
            <p>Canada's trusted online dispensary specializing in Mail Order Marijuana. Lab-tested, discreetly delivered, and backed by our satisfaction guarantee. Serving all provinces and territories since 2017.</p>
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

        <div className="footer-notice">
          <strong className="gold">⚠️ ID Verification Required:</strong> Submit proper identification to{' '}
          <strong className="grn">{VERIFY_EMAIL}</strong> for account approval. | Minimum order: $100 | Free shipping over $150 | Canada only
        </div>

        <div className="footer-bottom">
          <span>© 2026 Yellow Leaf Cafe. All rights reserved. Canadian Online Dispensary.</span>
          <span>Licensed & Regulated · Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
