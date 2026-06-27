'use client';
import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import * as THREE from 'three';

import EnergyBeam from './EnergyBeam';
import BeamParticles from './BeamParticles';
import InnerParticles from './InnerParticles';
import ElectricSparks from './ElectricSparks';
import HorizontalWave from './HorizontalWave';

function SceneContent({
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
  const { viewport } = useThree();
  
  // Pulse logic
  useFrame((state) => {
    // Pulse every 2.5 seconds
    const time = state.clock.elapsedTime;
    const pulseValue = Math.max(0, Math.sin(time * (Math.PI / 1.25)) * 1.5 - 0.5); 
    pulse.current = pulseValue;
  });

  return (
    <group scale={[viewport.height / 10, viewport.height / 10, 1]}>
      <EnergyBeam scrollProgress={scrollProgress} mouseX={mouseX} mouseY={mouseY} pulse={pulse} />
      <HorizontalWave scrollProgress={scrollProgress} pulse={pulse} />
      <BeamParticles scrollProgress={scrollProgress} mouseX={mouseX} mouseY={mouseY} />
      <InnerParticles scrollProgress={scrollProgress} mouseX={mouseX} mouseY={mouseY} />
      <ElectricSparks />
    </group>
  );
}

export default function NeonScene({ scrollProgress }: { scrollProgress: { current: number } }) {
  const mouseX = useRef(0.5);
  const mouseY = useRef(0.5);
  const pulse = useRef(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX / window.innerWidth;
      mouseY.current = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <PerformanceMonitor onDecline={() => console.log('FPS drop detected, lowering quality.')}>
        <SceneContent scrollProgress={scrollProgress} mouseX={mouseX} mouseY={mouseY} pulse={pulse} />
      </PerformanceMonitor>
    </Canvas>
  );
}
