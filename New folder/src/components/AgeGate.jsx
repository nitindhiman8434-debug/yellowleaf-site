import React from 'react';

export default function AgeGate({ onVerify }) {
  return (
    <div className="age-overlay">
      <div className="age-card">
        <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
        <h2>Age Verification Required</h2>
        <p>
          You must be 19 years of age or older to access this website.
          By entering, you confirm you meet the legal age requirement in your jurisdiction.
        </p>
        <div className="age-btns">
          <button className="age-yes" onClick={() => onVerify(true)}>I am 19+</button>
          <button className="age-no" onClick={() => onVerify(false)}>I am under 19</button>
        </div>
      </div>
    </div>
  );
}
