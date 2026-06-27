"use client";

import { motion } from "framer-motion";
import { Zap, Bot, Mail, Database, Users, MessageSquare, Check, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const nodes = [
  { id: 1, label: "Trigger", desc: "New Lead", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
  { id: 2, label: "AI Agent", desc: "Process Lead", icon: Bot, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
  { id: 3, label: "Decision", desc: "Check Data", icon: Database, color: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/20" },
  { id: 4, label: "Email", desc: "Send Email", icon: Mail, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
  { id: 5, label: "CRM", desc: "Create Lead", icon: Users, color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20" },
  { id: 6, label: "WhatsApp", desc: "Send Message", icon: MessageSquare, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
  { id: 7, label: "Completed", desc: "Workflow Done", icon: Check, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
];

export default function WorkflowGraph() {
  const [activeNode, setActiveNode] = useState(-1); // -1 means waiting to start

  useEffect(() => {
    // Start after 2s
    const timeout = setTimeout(() => {
      setActiveNode(0);
      const interval = setInterval(() => {
        setActiveNode((prev) => (prev + 1) % (nodes.length + 1));
      }, 1000); // loop through nodes
      return () => clearInterval(interval);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 2.0, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto xl:ml-auto aspect-[4/3] relative rounded-xl border border-purple-500/20 bg-[#0C0C0E] shadow-2xl shadow-purple-500/20 p-6 flex flex-col group-hover:scale-105 transition-transform duration-700"
    >
      <div className="flex justify-between items-center mb-8">
        <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">AI Automation Workflow</div>
        <div className="flex items-center gap-2 px-2 py-1 rounded bg-green-500/10 border border-green-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] text-green-400 font-medium">Live</span>
        </div>
      </div>

      <div className="flex-1 relative">
        {/* Draw curving path between nodes visually (simplified with SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <motion.path
            d="M 50,30 Q 150,30 150,80 T 250,80"
            fill="transparent"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            className="hidden" // Simplified line drawing; using flex layout for nodes instead for reliability
          />
        </svg>

        <div className="relative z-10 h-full flex flex-col justify-around">
          {/* Top Row */}
          <div className="flex justify-between items-center px-4">
            {[nodes[0], nodes[1], nodes[2]].map((node, i) => (
              <NodeCard key={node.id} node={node} isActive={activeNode >= i + 1} isCurrent={activeNode === i + 1} />
            ))}
          </div>
          
          {/* Middle Row (Reverse order to form S shape) */}
          <div className="flex justify-between items-center px-4 flex-row-reverse">
            {[nodes[3], nodes[4]].map((node, i) => (
              <NodeCard key={node.id} node={node} isActive={activeNode >= i + 4} isCurrent={activeNode === i + 4} />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex justify-start gap-[20%] items-center px-4">
            {[nodes[5], nodes[6]].map((node, i) => (
              <NodeCard key={node.id} node={node} isActive={activeNode >= i + 6} isCurrent={activeNode === i + 6} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NodeCard({ node, isActive, isCurrent }: { node: any; isActive: boolean; isCurrent: boolean }) {
  const Icon = node.icon;
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: isActive ? 1.05 : 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative p-3 rounded-lg border transition-all duration-500 w-[120px] ${
        isActive
          ? `bg-[#131316] ${node.border} shadow-[0_0_15px_rgba(0,0,0,0.5)] shadow-${node.color.split("-")[1]}-500/20`
          : "bg-white/5 border-white/5 opacity-50"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-md ${isActive ? node.bg : "bg-white/10"}`}>
          <Icon size={16} className={isActive ? node.color : "text-gray-500"} />
        </div>
        <div>
          <div className={`text-xs font-semibold ${isActive ? "text-white" : "text-gray-400"}`}>{node.label}</div>
          <div className="text-[9px] text-gray-500">{node.desc}</div>
        </div>
      </div>

      {isCurrent && (
        <motion.div
          layoutId="activeGlow"
          className="absolute -inset-0.5 rounded-lg border border-white/20 z-[-1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
}
