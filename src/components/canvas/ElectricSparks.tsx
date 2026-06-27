'use client';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { sparksVertex, sparksFragment } from '../../shaders/sparks';

export default function ElectricSparks() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  const sparkCount = 15;

  const [positions, sizes, lifetimes, offsets, velocities] = useMemo(() => {
    const p = new Float32Array(sparkCount * 3);
    const s = new Float32Array(sparkCount);
    const l = new Float32Array(sparkCount);
    const o = new Float32Array(sparkCount);
    const v = new Float32Array(sparkCount * 3);

    for (let i = 0; i < sparkCount; i++) {
      // Start near the center line
      p[i * 3 + 0] = (Math.random() - 0.5) * 0.1;
      p[i * 3 + 1] = (Math.random() - 0.5) * 3.0; // anywhere along the beam
      p[i * 3 + 2] = (Math.random() - 0.5) * 0.1;

      s[i] = Math.random() * 30 + 10; // Size
      l[i] = Math.random() * 0.3 + 0.3; // Lifetime 0.3 - 0.6 sec
      o[i] = Math.random() * 100.0; // Offset
      
      // Explosive velocity outwards
      v[i * 3 + 0] = (Math.random() - 0.5) * 2.0;
      v[i * 3 + 1] = (Math.random() - 0.5) * 2.0;
      v[i * 3 + 2] = (Math.random() - 0.5) * 2.0;
    }
    return [p, s, l, o, v];
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aLife" args={[lifetimes, 1]} />
        <bufferAttribute attach="attributes-aOffset" args={[offsets, 1]} />
        <bufferAttribute attach="attributes-aVelocity" args={[velocities, 3]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={sparksVertex}
        fragmentShader={sparksFragment}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
        }}
      />
    </points>
  );
}
