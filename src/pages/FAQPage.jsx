import React, { useState } from 'react';
import { FAQ_DATA, FAQ_PAGE, SUPPORT_EMAIL } from '../data/products';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="page-container">
      <h1 className="page-title">{FAQ_PAGE.title}</h1>
      <p className="page-subtitle">{FAQ_PAGE.subtitle}</p>
      <div className="faq-list">
        {FAQ_DATA.map((item, idx) => (
          <div className={`faq-item ${openIdx === idx ? 'open' : ''}`} key={idx} onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
            <div className="faq-q">
              <span>{item.q}</span>
              <span className="faq-toggle">{openIdx === idx ? '−' : '+'}</span>
            </div>
            {openIdx === idx && (
              <div className="faq-a">{item.a.split('\n').map((line, i) => <p key={i}>{line}</p>)}</div>
            )}
          </div>
        ))}
      </div>
      <div className="faq-contact">
        <p>Still have questions? Email us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
      </div>
    </div>
  );
}
