import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import FAQ from './components/FAQ';
import LocationPage from './components/LocationPage';
import Section from './components/Section';
import CategoryPage from './components/CategoryPage';

function App() {
  const [activeCategory, setActiveCategory] = useState("all");



  return (
    <Router>
      <Header setActiveCategory={setActiveCategory} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/pcs" element={<Section activeCategory={activeCategory} />} />
          <Route path="/consolas" element={<Section activeCategory={activeCategory} />} />
          <Route path="/graficas" element={<Section activeCategory={activeCategory} />} />
          <Route path="/perifericos" element={<Section activeCategory={activeCategory} />} />
          <Route path="/utilidades" element={<Section activeCategory={activeCategory} />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
