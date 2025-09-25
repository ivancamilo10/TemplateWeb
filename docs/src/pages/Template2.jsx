// src/pages/Template2.js
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';

export default function Template2() {
  const meshRef = useRef();
  const [color, setColor] = useState('blue');
  const [position, setPosition] = useState([0, 0, 0]);

  const bind = useDrag(({ offset: [x, y] }) => {
    setPosition([x / 100, -y / 100, 0]);
    setColor(`hsl(${(x + y) % 360}, 100%, 50%)`); // cambia color con la posición
  });

  return (
    <div style={{ height: '400px', border: '1px solid #ccc', margin: '20px 0' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <mesh ref={meshRef} position={position} {...bind()}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </Canvas>
    </div>
  );
}
