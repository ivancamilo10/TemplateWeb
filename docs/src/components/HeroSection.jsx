import React from 'react';
import AnimatedScene from './AnimatedScene';

export default function HeroSection() {
  return (
    <section style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', color: '#fff' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem' }}>Welcome to MyBusiness</h1>
        <p>High-tech solutions for your business</p>
      </div>
      <AnimatedScene />
    </section>
  );
}
