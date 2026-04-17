import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingShapes from './FloatingShapes';

export default function HeroScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5.5], fov: 60 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#0A0A0F']} />
        <Suspense fallback={null}>
          <FloatingShapes />
        </Suspense>
      </Canvas>
    </div>
  );
}
