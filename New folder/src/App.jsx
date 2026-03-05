import React, { useState, useCallback } from 'react';
import { HashRouter, Routes, Route } from './router';

import Header from './components/Header';
import Footer from './components/Footer';
import AgeGate from './components/AgeGate';
import CartDrawer from './components/CartDrawer';
import ProductDetail from './components/ProductDetail';

import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import RegisterPage from './pages/RegisterPage';
import SignInPage from './pages/SignInPage';
import FAQPage from './pages/FAQPage';
import ShippingPage from './pages/ShippingPage';
import ReturnsPage from './pages/ReturnsPage';
import LoyaltyPage from './pages/LoyaltyPage';
import AboutPage from './pages/AboutPage';

function AppContent() {
  const [verified, setVerified] = useState(false);
  const [denied, setDenied] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState(null);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  }, []);

  const addToCart = useCallback((product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`✅ ${product.name} added to cart`);
  }, [showToast]);

  const updateQty = useCallback((id, delta) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0));
  }, []);

  const removeItem = useCallback((id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  }, []);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  if (!verified) {
    if (denied) {
      return (
        <div className="age-overlay">
          <div className="age-card">
            <div style={{ fontSize: 48, marginBottom: 16 }}>🚫</div>
            <h2>Access Denied</h2>
            <p>You must be 19 or older to access this website.</p>
          </div>
        </div>
      );
    }
    return <AgeGate onVerify={(yes) => yes ? setVerified(true) : setDenied(true)} />;
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onSearch={setSearchQuery}
      />

      <Routes>
        <Route path="/" element={
          <HomePage onAdd={addToCart} onProductClick={setSelectedProduct} searchQuery={searchQuery} />
        } />
        <Route path="/shop/:category" element={
          <CategoryPage onAdd={addToCart} onProductClick={setSelectedProduct} />
        } />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/loyalty" element={<LoyaltyPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAdd={(p) => { addToCart(p); setSelectedProduct(null); setCartOpen(true); }}
        />
      )}

      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateQty}
          onRemove={removeItem}
        />
      )}

      {toast && <div className="toast">{toast}</div>}
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
