import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProductsSection from './pages/ProductsSection';
import AboutSection from './pages/AboutSection';
import ContactSection from './pages/ContactSection';
import AnimatedScene from './components/AnimatedScene';
import TextType from './components/TextType';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

