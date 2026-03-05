import React, { useState } from 'react';
import { FAQ_DATA, FAQ_PAGE, SUPPORT_EMAIL, WHATSAPP_NUMBER, ADDRESS } from '../data/products';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState(null);
  const [searchQ, setSearchQ] = useState('');

  const filtered = searchQ
    ? FAQ_DATA.filter(item =>
        item.q.toLowerCase().includes(searchQ.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQ.toLowerCase())
      )
    : FAQ_DATA;

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <div className="faq-hero">
        <div className="faq-hero-inner">
          <span className="faq-hero-badge">💬 HELP CENTER</span>
          <h1>{FAQ_PAGE.title}</h1>
          <p>{FAQ_PAGE.subtitle}</p>
          <div className="faq-search-box">
            <span className="faq-search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search your question..."
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="faq-quick-cards">
        <div className="faq-quick-card">
          <div className="faq-quick-icon">📦</div>
          <div className="faq-quick-title">Fast Delivery</div>
          <div className="faq-quick-desc">Same-day in Pattaya, 1-5 days nationwide</div>
        </div>
        <div className="faq-quick-card">
          <div className="faq-quick-icon">💳</div>
          <div className="faq-quick-title">Easy Payment</div>
          <div className="faq-quick-desc">Bank transfer, PromptPay, Crypto accepted</div>
        </div>
        <div className="faq-quick-card">
          <div className="faq-quick-icon">🧪</div>
          <div className="faq-quick-title">Lab Tested</div>
          <div className="faq-quick-desc">All products tested for purity & potency</div>
        </div>
        <div className="faq-quick-card">
          <div className="faq-quick-icon">🔒</div>
          <div className="faq-quick-title">Discreet Shipping</div>
          <div className="faq-quick-desc">Sealed, unmarked packaging every time</div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="faq-content">
        <div className="faq-count">
          {searchQ ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''} found` : `${FAQ_DATA.length} frequently asked questions`}
        </div>

        <div className="faq-list-pro">
          {filtered.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div className={`faq-item-pro ${isOpen ? 'open' : ''}`} key={idx}>
                <button className="faq-q-pro" onClick={() => setOpenIdx(isOpen ? null : idx)}>
                  <div className="faq-q-left">
                    <span className="faq-q-num">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="faq-q-text">{item.q}</span>
                  </div>
                  <span className={`faq-chevron ${isOpen ? 'rotate' : ''}`}>›</span>
                </button>
                {isOpen && (
                  <div className="faq-a-pro">
                    {item.a.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="faq-no-results">
            <div style={{ fontSize: 48, marginBottom: 12 }}>🤔</div>
            <p>No questions found for "{searchQ}"</p>
            <p style={{ fontSize: 13, color: 'var(--grey-400)' }}>Try different keywords or contact us directly</p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="faq-contact-section">
        <h2>Still Have Questions?</h2>
        <p>Our team is here to help you with anything you need</p>
        <div className="faq-contact-grid">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="faq-contact-card">
            <div className="faq-contact-icon">💬</div>
            <div className="faq-contact-label">WhatsApp</div>
            <div className="faq-contact-value">Chat with us</div>
          </a>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="faq-contact-card">
            <div className="faq-contact-icon">📧</div>
            <div className="faq-contact-label">Email</div>
            <div className="faq-contact-value">{SUPPORT_EMAIL}</div>
          </a>
          <div className="faq-contact-card">
            <div className="faq-contact-icon">📍</div>
            <div className="faq-contact-label">Visit Us</div>
            <div className="faq-contact-value" style={{ fontSize: 11 }}>{ADDRESS}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
