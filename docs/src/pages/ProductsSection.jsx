import React from 'react';
import ProductCard from '../components/ProductCard';

export default function ProductsSection() {
  const products = [
    { id: 1, name: 'Product 1', description: 'High quality', price: '$100' },
    { id: 2, name: 'Product 2', description: 'Reliable and fast', price: '$200' },
    { id: 3, name: 'Product 3', description: 'Innovative', price: '$300' },
  ];

  return (
    <section id="products" style={{ padding: '60px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
