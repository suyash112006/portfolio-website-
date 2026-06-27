'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { waveVertex, waveFragment } from '../../shaders/wave';

export default function HorizontalWave({
  scrollProgress,
  pulse
}: {
  scrollProgress: { current: number };
  pulse: { current: number };
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uScroll.value = scrollProgress.current;
      materialRef.current.uniforms.uPulse.value = pulse.current;
    }
  });

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[25, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={waveVertex}
        fragmentShader={waveFragment}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uScroll: { value: 0 },
          uPulse: { value: 0 },
        }}
      />
    </mesh>
  );
}
