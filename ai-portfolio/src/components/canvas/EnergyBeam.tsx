'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { beamVertex, beamFragment } from '../../shaders/beam';

export default function EnergyBeam({
  scrollProgress,
  mouseX,
  mouseY,
  pulse
}: {
  scrollProgress: { current: number };
  mouseX: { current: number };
  mouseY: { current: number };
  pulse: { current: number };
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uScroll.value = scrollProgress.current;
      materialRef.current.uniforms.uMouseX.value = mouseX.current;
      materialRef.current.uniforms.uMouseY.value = mouseY.current;
      materialRef.current.uniforms.uPulse.value = pulse.current;
    }
  });

  return (
    <mesh position={[0, 0, 0]}>
      {/* A tall plane covering the vertical space */}
      <planeGeometry args={[2, 10]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={beamVertex}
        fragmentShader={beamFragment}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uScroll: { value: 0 },
          uMouseX: { value: 0.5 },
          uMouseY: { value: 0.5 },
          uPulse: { value: 0 },
        }}
      />
    </mesh>
  );
}
