import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '200px', textAlign: 'center' }}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>{product.price}</strong>
    </div>
  );
}
