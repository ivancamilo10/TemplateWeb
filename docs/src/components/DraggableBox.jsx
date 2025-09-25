import React from "react";
import { useGesture } from "@use-gesture/react";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function DraggableBox(props) {
  const mesh = useRef();
  const [position, setPosition] = useState([0, 0, 0]);

  useGesture({
    onDrag: ({ offset: [x, y] }) => setPosition([x / 100, -y / 100, 0]),
  });

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.y += 0.01;
  });

  return (
   <mesh>
  <boxGeometry args={[1, 1, 1]} />
  <meshStandardMaterial color="orange" />
</mesh>

  );
}
