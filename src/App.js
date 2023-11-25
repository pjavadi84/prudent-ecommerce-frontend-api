import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import HomePage from './components/HomePage';
// import ProductPage from './components/ProductPage';
// import LoginPage from './components/LoginPage';
// import CartPage from './components/CartPage';
// import NotFoundPage from './components/NotFoundPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/product/:productId" element={<ProductDetails />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/cart" element={<CartPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
