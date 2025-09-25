import React from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#111', color: '#fff' }}>
      <img src={logo} alt="Logo" style={{ height: '40px' }} />
      <nav>
        <a href="#about" style={{ margin: '0 10px' }}>About</a>
        <a href="#products" style={{ margin: '0 10px' }}>Products</a>
        <a href="#contact" style={{ margin: '0 10px' }}>Contact</a>
      </nav>
    </header>
  );
}
