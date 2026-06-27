"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Code2, Monitor, Zap, Search } from "lucide-react";

export default function BrowserMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      transition={{ duration: 1, delay: 2.0, ease: "easeOut" }}
      className="relative w-full aspect-[4/3] max-w-2xl mx-auto xl:mr-auto rounded-xl border border-blue-500/20 bg-[#0C0C0E] shadow-2xl shadow-blue-500/20 overflow-hidden flex flex-col perspective-1000 group-hover:-rotate-y-2 group-hover:rotate-x-2 transition-transform duration-700"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Browser Header */}
      <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-4">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex-1 max-w-md bg-black/40 h-6 rounded-md border border-white/5 flex items-center px-3 text-[10px] text-gray-500 gap-2">
          <Search size={10} />
          <span>https://suyashdev.com</span>
        </div>
      </div>

      {/* Browser Content */}
      <div className="flex-1 p-6 relative overflow-hidden flex flex-col">
        {/* Fake Nav */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-between items-center mb-10"
        >
          <div className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
            <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center text-[10px]">S</div>
            ClientSite
          </div>
          <div className="flex gap-4 text-[10px] text-gray-400">
            <span>Features</span>
            <span>Pricing</span>
            <span>About</span>
          </div>
        </motion.div>

        {/* Hero Section of Mockup */}
        <div className="flex-1 flex items-center relative z-10">
          <div className="w-1/2 space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="text-2xl font-bold text-white leading-tight"
            >
              Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Online Presence
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-xs text-gray-400"
            >
              Modern. Fast. Responsive.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex gap-3 pt-2"
            >
              <div className="px-3 py-1.5 bg-blue-500 text-white text-[10px] font-medium rounded">Get Started</div>
              <div className="px-3 py-1.5 bg-white/5 border border-white/10 text-white text-[10px] font-medium rounded">
                Learn More
              </div>
            </motion.div>
          </div>

          <div className="w-1/2 flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, type: "spring" }}
              className="w-40 h-32 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 relative overflow-hidden"
            >
               {/* Abstract Mountains */}
               <div className="absolute bottom-0 w-full h-2/3 bg-blue-900/50 clip-path-polygon-[0_100%,50_0%,100_100%]"></div>
               <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-purple-900/50 clip-path-polygon-[0_100%,50_0%,100_100%]"></div>
               <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full blur-[2px]"></div>
            </motion.div>
          </div>
        </div>

        {/* Feature Cards below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="grid grid-cols-3 gap-3 mt-auto"
        >
          <div className="bg-white/5 border border-white/5 rounded p-3 flex gap-2 items-center">
            <Zap className="text-blue-400" size={14} />
            <div>
              <div className="text-[10px] text-white font-medium">Lightning Fast</div>
              <div className="text-[8px] text-gray-500">Optimized for speed</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/5 rounded p-3 flex gap-2 items-center">
            <Monitor className="text-indigo-400" size={14} />
            <div>
              <div className="text-[10px] text-white font-medium">Fully Responsive</div>
              <div className="text-[8px] text-gray-500">Perfect on any device</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/5 rounded p-3 flex gap-2 items-center">
            <Code2 className="text-purple-400" size={14} />
            <div>
              <div className="text-[10px] text-white font-medium">SEO Optimized</div>
              <div className="text-[8px] text-gray-500">Rank higher, grow faster</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Progress & Badge */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.5, type: "spring" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500/20 border border-green-500/50 text-green-400 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 backdrop-blur-md shadow-lg"
      >
        <CheckCircle2 size={12} /> Deployment Ready
      </motion.div>
    </motion.div>
  );
}
