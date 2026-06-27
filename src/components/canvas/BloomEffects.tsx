'use client';
import { EffectComposer, Bloom, Noise, ChromaticAberration, SMAA } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Vector2 } from 'three';

export default function BloomEffects() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={1.2}
        luminanceThreshold={0.4}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <Noise
        premultiply
        blendFunction={BlendFunction.SCREEN}
        opacity={0.015} // Subtle noise
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={new Vector2(0.0003, 0.0003)} // Very subtle
      />
      <SMAA />
    </EffectComposer>
  );
}
