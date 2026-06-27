'use client';
import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';

export default function AnimatedDivider() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to this container (the Hero section)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute top-0 -bottom-[100px] left-1/2 hidden -translate-x-1/2 lg:block w-full z-10"
    >
      {/* ── VERTICAL DIVIDER LINE ── */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px]">
        {/* Base subtle dark line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-800/80 to-transparent" />

        {/* Glowing accent line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 via-purple-500/10 to-transparent blur-[1px]" />

        {/* Animated glowing neon line */}
        <motion.div
          className="absolute top-0 left-[-1px] w-[3px] bg-gradient-to-b from-blue-500 via-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6),0_0_20px_rgba(168,85,247,0.6)]"
          initial={{ height: "0%" }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.5
          }}
        />
      </div>
    </div>
  );
}
