import React, { useState } from 'react';
import { Link, useNavigate } from '../router';
import { VERIFY_EMAIL, SHIPPING_PROVINCES } from '../data/products';

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  if (submitted) {
    return (
      <div className="page-container">
        <div className="form-card" style={{ textAlign: 'center', padding: 48 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
          <h2>Registration Submitted!</h2>
          <p style={{ color: 'var(--grey-500)', fontSize: 14, lineHeight: 1.7 }}>
            Your account has been created successfully! You can now browse and shop our premium selection.
          </p>
          <p style={{ color: 'var(--grey-500)', fontSize: 14 }}>
            Once approved, you'll receive <strong style={{ color: 'var(--green)' }}>500 bonus points (฿875)</strong> credit!
          </p>
          <button className="form-submit" style={{ marginTop: 20, maxWidth: 200, marginLeft: 'auto', marginRight: 'auto' }} onClick={() => navigate('/')}>
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="form-card">
        <h2>Create Account</h2>
        <p className="form-subtitle">Join Yellow Leaf Cafe and get 500 bonus points (฿875)</p>

        <div className="form-group"><label>First Name</label><input type="text" placeholder="John" /></div>
        <div className="form-group"><label>Last Name</label><input type="text" placeholder="Doe" /></div>
        <div className="form-group"><label>Email Address</label><input type="email" placeholder="you@email.com" /></div>
        <div className="form-group"><label>Password</label><input type="password" placeholder="Min 8 characters" /></div>
        <div className="form-group">
          <label>Province</label>
          <select>
            <option value="">Select your province</option>
            {SHIPPING_PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div className="form-group"><label>Date of Birth</label><input type="date" /></div>

        <button className="form-submit" onClick={() => setSubmitted(true)}>Create Account</button>

        <div className="id-notice">
          <strong>Welcome!</strong> Create your account and start shopping. You'll receive <strong style={{ color: 'var(--green)' }}>500 bonus points (฿875)</strong> credit!
        </div>

        <div className="form-switch">
          Already have an account? <Link to="/signin">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
