import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null!);
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.12,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.08,
        0.04
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* TEST: bright white sphere - must be visible */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#ff00ff" />
      </mesh>

      <mesh position={[3, 1, -1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#00ff00" />
      </mesh>
    </group>
  );
}
