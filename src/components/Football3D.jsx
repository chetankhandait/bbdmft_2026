import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';

export default function Football3D() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#cc0000" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#00ff87" />
      <Icosahedron ref={meshRef} args={[1.5, 2]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#111111"
          emissive="#cc0000"
          emissiveIntensity={0.2}
          wireframe={true}
          distort={0.2}
          speed={2}
          roughness={0.2}
          metalness={1}
        />
      </Icosahedron>
      {/* Glow Layer */}
      <Icosahedron args={[1.55, 2]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#cc0000" transparent opacity={0.05} wireframe />
      </Icosahedron>
    </group>
  );
}
