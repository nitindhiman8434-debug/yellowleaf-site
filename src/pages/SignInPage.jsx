import React, { useState } from 'react';
import { Link, useNavigate } from '../router';

export default function SignInPage() {
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  if (done) {
    return (
      <div className="page-container">
        <div className="form-card" style={{ textAlign: 'center', padding: 48 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>👋</div>
          <h2>Welcome Back!</h2>
          <p style={{ color: 'var(--grey-500)', fontSize: 14 }}>You're now signed in. Happy shopping!</p>
          <button className="form-submit" style={{ marginTop: 20, maxWidth: 200, marginLeft: 'auto', marginRight: 'auto' }} onClick={() => navigate('/')}>
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="form-card">
        <h2>Sign In</h2>
        <p className="form-subtitle">Welcome back to Yellow Leaf Cafe</p>

        <div className="form-group"><label>Email Address</label><input type="email" placeholder="you@email.com" /></div>
        <div className="form-group"><label>Password</label><input type="password" placeholder="Your password" /></div>

        <button className="form-submit" onClick={() => setDone(true)}>Sign In</button>

        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <button style={{ background: 'none', border: 'none', color: 'var(--green)', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>
            Forgot Password?
          </button>
        </div>

        <div className="form-switch">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
