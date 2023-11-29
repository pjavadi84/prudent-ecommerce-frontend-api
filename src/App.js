import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import CategoryDetails from './components/CategoryDetails';

// import ProductPage from './components/ProductPage';
// import LoginPage from './components/LoginPage';
// import CartPage from './components/CartPage';
// import NotFoundPage from './components/NotFoundPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/categories" component={CategoryPage} />
        <Route path="/categories/scales" component={CategoryDetails} />
      </Routes>
    </Router>
  );
}

export default App;
