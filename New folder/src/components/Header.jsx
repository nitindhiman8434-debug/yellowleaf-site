import React, { useState } from 'react';
import { Link, useNavigate } from '../router';
import { ANNOUNCE_BAR } from '../data/products';

export default function Header({ cartCount, onCartOpen, onSearch }) {
  const [searchVal, setSearchVal] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
    onSearch(e.target.value);
    if (e.target.value) navigate('/');
  };

  return (
    <>
      <div className="announce-bar" dangerouslySetInnerHTML={{ __html: ANNOUNCE_BAR }} />

      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo" onClick={() => { setSearchVal(''); onSearch(''); }}>
            Yellow Leaf <em>Cafe</em>
          </Link>

          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search strains, edibles, accessories..."
              value={searchVal}
              onChange={handleSearch}
            />
          </div>

          <div className="header-actions">
            <Link to="/signin" className="hdr-link">Sign In</Link>
            <Link to="/register" className="hdr-link accent">Register</Link>
            <button className="cart-btn" onClick={onCartOpen}>
              🛒 Cart
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      <nav className="main-nav">
        <div className="main-nav-inner">
          <Link to="/" className="nav-link" onClick={() => { setSearchVal(''); onSearch(''); }}>Home</Link>
          <Link to="/shop/flowers" className="nav-link">Flowers <span className="arr">▾</span></Link>
          <Link to="/shop/edibles" className="nav-link">Edibles <span className="arr">▾</span></Link>
          <Link to="/shop/accessories" className="nav-link">Accessories <span className="arr">▾</span></Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
          <Link to="/shipping" className="nav-link">Shipping</Link>
          <Link to="/returns" className="nav-link">Returns</Link>
          <Link to="/loyalty" className="nav-link">Loyalty</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>
      </nav>
    </>
  );
}
