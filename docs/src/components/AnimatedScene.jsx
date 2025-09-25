import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import { MeshWobbleMaterial } from '@react-three/drei';

function FloatingBox({ color, position }) {
  const meshRef = useRef();
  const [pos, setPos] = useState(position);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = pos[1] + Math.sin(Date.now() * 0.002) * 0.2;
    }
  });

  useDrag((state) => {
    setPos([state.offset[0] / 50, state.offset[1] / 50, pos[2]]);
  }, { pointerEvents: true });

  return (
    <mesh ref={meshRef} position={pos}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshWobbleMaterial attach="material" color={color} speed={2} factor={0.6} />
    </mesh>
  );
}

export default function AnimatedScene() {
  return (
    <Canvas style={{ width: '100%', height: '400px' }} camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingBox color="#FF0066" position={[-2, 0, 0]} />
      <FloatingBox color="#00FFFF" position={[2, 0, 0]} />
    </Canvas>
  );
}
