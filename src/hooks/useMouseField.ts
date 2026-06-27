'use client';
import { useRef, useEffect } from 'react';

export function useMouseField() {
  const mouseX = useRef(0.5);
  const mouseY = useRef(0.5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates (0 to 1)
      mouseX.current = e.clientX / window.innerWidth;
      mouseY.current = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { mouseX, mouseY };
}
