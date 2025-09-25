// src/pages/Template3.js
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';

export default function Template3() {
  const meshRef = useRef();
  const [rotation, setRotation] = useState([0, 0, 0]);

  const bind = useDrag(({ offset: [x, y] }) => {
    setRotation([y / 100, x / 100, 0]); // rota según el arrastre
  });

  return (
    <div style={{ height: '400px', border: '1px solid #ccc', margin: '20px 0' }}>
      <Canvas>
        <ambientLight />
        <directionalLight position={[0, 5, 5]} />
        <mesh ref={meshRef} rotation={rotation} {...bind()}>
          <planeGeometry args={[2, 2]} />
          <meshStandardMaterial color="green" side={2} />
        </mesh>
      </Canvas>
    </div>
  );
}
