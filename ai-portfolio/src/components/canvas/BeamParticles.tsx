'use client';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { particlesVertex, particlesFragment } from '../../shaders/particles';

export default function BeamParticles({
  scrollProgress,
  mouseX,
  mouseY
}: {
  scrollProgress: { current: number };
  mouseX: { current: number };
  mouseY: { current: number };
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  const particleCount = 350;

  const [positions, sizes, speeds, offsets] = useMemo(() => {
    const p = new Float32Array(particleCount * 3);
    const s = new Float32Array(particleCount);
    const sp = new Float32Array(particleCount);
    const o = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      p[i * 3 + 0] = (Math.random() - 0.5) * 0.4; // x near center
      p[i * 3 + 1] = (Math.random() - 0.5) * 4.0; // y
      p[i * 3 + 2] = (Math.random() - 0.5) * 0.2; // z

      s[i] = Math.random() * 20 + 5; // Size
      sp[i] = Math.random() * 0.5 + 0.2; // Speed multiplier
      o[i] = Math.random() * 100.0; // Random offset for noise
    }
    return [p, s, sp, o];
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uScroll.value = scrollProgress.current;
      materialRef.current.uniforms.uMouseX.value = mouseX.current;
      materialRef.current.uniforms.uMouseY.value = mouseY.current;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
        <bufferAttribute attach="attributes-aOffset" args={[offsets, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={particlesVertex}
        fragmentShader={particlesFragment}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uScroll: { value: 0 },
          uMouseX: { value: 0.5 },
          uMouseY: { value: 0.5 },
        }}
      />
    </points>
  );
}
