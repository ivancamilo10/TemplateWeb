// src/components/Sidebar.js
import React from 'react';

export default function Sidebar({ templates, current, setCurrent }) {
  return (
    <div style={{
      width: '200px',
      background: '#111',
      color: '#fff',
      padding: '20px',
      height: '100vh',
      boxSizing: 'border-box'
    }}>
      <h2>Templates</h2>
      {templates.map((t, i) => (
        <div
          key={i}
          onClick={() => setCurrent(i)}
          style={{
            cursor: 'pointer',
            padding: '10px',
            margin: '5px 0',
            background: current === i ? '#333' : 'transparent',
            borderRadius: '5px'
          }}
        >
          {t.name}
        </div>
      ))}
    </div>
  );
}
