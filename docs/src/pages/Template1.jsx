// src/pages/Template1.js
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import { MeshStandardMaterial, Mesh } from 'three';

export default function Template1() {
  const meshRef = useRef();
  const [position, setPosition] = useState([0, 0, 0]);

  const bind = useDrag(({ offset: [x, y] }) => {
    setPosition([x / 100, -y / 100, 0]); // escala para que no se vaya muy lejos
  });

  return (
    <div style={{ height: '400px', border: '1px solid #ccc', margin: '20px 0' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
  <boxGeometry args={[1, 1, 1]} />
  <meshStandardMaterial color="orange" />
</mesh>

      </Canvas>
    </div>
  );
}
