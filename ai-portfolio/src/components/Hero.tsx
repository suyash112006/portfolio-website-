import React from 'react';
import {
  ArrowRight, Play, Zap, Monitor, TrendingUp, Mail, UserPlus, Bot,
  Diamond, MessageCircle, CheckCircle2, ChevronDown, Table,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from './Navbar'; // Reuse the exported Logo
import AnimatedDivider from './AnimatedDivider';

const CHIP_MAP: Record<string, string> = {
  purple: 'border-purple-500/20 bg-purple-500/10 text-purple-400',
  violet: 'border-violet-500/20 bg-violet-500/10 text-violet-400',
  blue: 'border-blue-500/20 bg-blue-500/10 text-blue-400',
  green: 'border-green-500/20 bg-green-500/10 text-green-400',
  emerald: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
  orange: 'border-orange-500/20 bg-orange-500/10 text-orange-400',
  yellow: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-400',
  pink: 'border-pink-500/20 bg-pink-500/10 text-pink-400',
  indigo: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-400',
};

const TEXT_MAP: Record<string, string> = {
  rose: 'text-rose-400',
  gray: 'text-gray-300',
  green: 'text-green-400',
  orange: 'text-orange-400',
  pink: 'text-pink-400',
};

const STARS = [
  { top: '6%', left: '4%', size: 2, delay: '0s' },
  { top: '12%', left: '18%', size: 1, delay: '0.8s' },
  { top: '20%', left: '46%', size: 2, delay: '1.4s' },
  { top: '9%', left: '63%', size: 1, delay: '0.3s' },
  { top: '16%', left: '91%', size: 2, delay: '1.9s' },
  { top: '33%', left: '8%', size: 1, delay: '2.4s' },
  { top: '40%', left: '36%', size: 1, delay: '1.1s' },
  { top: '28%', left: '74%', size: 2, delay: '0.6s' },
  { top: '47%', left: '95%', size: 1, delay: '2.0s' },
  { top: '58%', left: '14%', size: 2, delay: '0.2s' },
  { top: '65%', left: '40%', size: 1, delay: '1.6s' },
  { top: '54%', left: '83%', size: 1, delay: '2.8s' },
  { top: '74%', left: '6%', size: 1, delay: '1.0s' },
  { top: '80%', left: '60%', size: 2, delay: '0.5s' },
  { top: '88%', left: '28%', size: 1, delay: '2.2s' },
  { top: '92%', left: '88%', size: 2, delay: '1.3s' },
];

const features = [
  { icon: Zap, color: 'yellow', title: 'Lightning Fast', subtitle: 'Optimized for speed' },
  { icon: Monitor, color: 'blue', title: 'Fully Responsive', subtitle: 'Perfect on any device' },
  { icon: TrendingUp, color: 'green', title: 'SEO Optimized', subtitle: 'Rank higher, grow faster' },
];

const workflowRows = [
  [
    { icon: Zap, color: 'purple', title: 'Trigger', subtitle: 'New Lead' },
    { icon: Bot, color: 'blue', title: 'AI Agent', subtitle: 'Process Lead' },
    { icon: Diamond, color: 'violet', title: 'Decision', subtitle: 'Check Data' },
  ],
  [
    { icon: Mail, color: 'blue', title: 'Email', subtitle: 'Send Email' },
    { icon: Table, color: 'green', title: 'Google Sheets', subtitle: 'Add Data' },
    { icon: UserPlus, color: 'orange', title: 'CRM', subtitle: 'Create Lead' },
  ],
  [
    { icon: MessageCircle, color: 'green', title: 'WhatsApp', subtitle: 'Send Message' },
    { icon: CheckCircle2, color: 'emerald', title: 'Completed', subtitle: 'Workflow Done' },
  ],
];

function Star({ top, left, size, delay }: { top: string, left: string, size: number, delay: string }) {
  return (
    <span
      className="absolute rounded-full bg-white"
      style={{
        top,
        left,
        width: size,
        height: size,
        animation: `twinkle 3.6s ease-in-out ${delay} infinite`,
      }}
    />
  );
}

function NodeCard({ icon: Icon, color, title, subtitle }: { icon: any, color: string, title: string, subtitle: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${CHIP_MAP[color]}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm font-semibold leading-tight text-white">{title}</p>
        <p className="text-xs leading-tight text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}

function Connector() {
  return <div className="hidden h-px flex-1 bg-gradient-to-r from-purple-500/30 to-purple-500/5 sm:block" />;
}

function FeaturePill({ icon: Icon, color, title, subtitle }: { icon: any, color: string, title: string, subtitle: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
      <div className={`mb-2 flex h-7 w-7 items-center justify-center rounded-md border ${CHIP_MAP[color]}`}>
        <Icon className="h-3.5 w-3.5" />
      </div>
      <p className="text-xs font-semibold text-white">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300">
      {children}
    </div>
  );
}

function ToolBadge({ icon: Icon, color, label }: { icon: any, color: string, label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 transition-colors hover:bg-white/10 cursor-default">
      <Icon className={`h-3.5 w-3.5 ${TEXT_MAP[color]}`} />
      <span>{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
        {STARS.map((s, i) => (
          <Star key={i} {...s} />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 pt-16 pb-10 lg:px-12">
        <div className="relative grid gap-y-20 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          {/* center animated divider (desktop only) */}
          <AnimatedDivider />

          {/* LEFT COLUMN */}
          <div>
            <div className="mb-6 text-[12px] font-bold tracking-[0.2em] text-cyan-400">
              01 / WEB DEVELOPMENT
            </div>

            <div className="flex flex-col justify-start lg:h-[200px]">
              <h1 className="text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-[40px] xl:text-[46px]">
                I Build Modern
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Websites &amp; Applications
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-gray-400">
                High-performance websites, SaaS platforms, and web applications built with modern technologies for exceptional user experiences.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="/index.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] w-fit">
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
              <button className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-gray-200 transition-colors hover:bg-white/10">
                <Play className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                Watch Showreel
              </button>
            </div>

            {/* Browser mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, rotateY: -2, rotateX: 2 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative mt-8 overflow-hidden rounded-2xl border border-blue-500/40 bg-[#060913] shadow-[0_0_60px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/20"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-sm font-bold text-gray-300">S.</span>
                </div>

                <div className="hidden items-center gap-6 text-[11px] font-medium text-gray-400 sm:flex">
                  <span className="border-b-2 border-white pb-1 text-white">Home</span>
                  <span>Features</span>
                  <span>Pricing</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>

                <div>
                  <div className="cursor-default rounded-full border border-blue-500/30 px-4 py-1.5 text-[11px] font-semibold text-gray-300">
                    Get Started
                  </div>
                </div>
              </div>

              {/* Mockup Body */}
              <div className="relative p-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_1.2fr]">

                  {/* Left Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col justify-center"
                  >
                    <h3 className="text-[22px] font-bold leading-tight text-white">
                      Building Digital
                      <br />
                      Experiences That
                      <br />
                      <span className="text-blue-500">Drive Growth</span>
                    </h3>
                    <p className="mt-4 max-w-[200px] text-[11px] leading-relaxed text-gray-500">
                      We create digital solutions that help businesses grow, scale and succeed in the digital world.
                    </p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="mt-6"
                    >
                      <div className="inline-block cursor-default rounded bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        Get Started
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Right Content (Charts) */}
                  <div className="flex flex-col gap-3">
                    {/* Main Chart */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-4"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-gray-300">Analytics Overview</span>
                        <span className="rounded bg-green-500/10 px-1.5 py-0.5 text-[10px] font-bold text-green-400">+24.5%</span>
                      </div>
                      <div className="relative h-20 w-full mt-2">
                        {/* Background Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between border-b border-white/5 pb-4">
                          <div className="w-full border-t border-white/5 border-dashed" />
                          <div className="w-full border-t border-white/5 border-dashed" />
                          <div className="w-full border-t border-white/5 border-dashed" />
                        </div>

                        {/* Faux Chart Area */}
                        <div className="absolute inset-0 pb-4">
                          <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-full w-full stroke-blue-500 stroke-[0.5] drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                            <motion.path
                              initial={{ pathLength: 0, opacity: 0 }}
                              whileInView={{ pathLength: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                              d="M0,30 L0,20 C10,15 15,25 25,20 C35,15 40,5 50,15 C60,25 65,10 75,15 C85,20 90,5 100,2 L100,30 Z"
                              fill="url(#blue-gradient)"
                              stroke="none"
                            />
                            <motion.path
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                              d="M0,20 C10,15 15,25 25,20 C35,15 40,5 50,15 C60,25 65,10 75,15 C85,20 90,5 100,2"
                              fill="none"
                            />
                            {/* Animated dot at the end of the line */}
                            <motion.circle
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 2.5 }}
                              cx="100" cy="2" r="1.5"
                              fill="white"
                              stroke="none"
                              className="drop-shadow-[0_0_4px_rgba(255,255,255,1)]"
                            />
                            <defs>
                              <linearGradient id="blue-gradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
                                <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>

                        {/* X-axis Labels */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1 text-[8px] font-medium text-gray-500">
                          <span>Jan</span>
                          <span>Feb</span>
                          <span>Mar</span>
                          <span>Apr</span>
                          <span>May</span>
                          <span>Jun</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Small Stats Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
                      >
                        <p className="text-[9px] text-gray-500">Users</p>
                        <p className="mt-1 flex items-baseline gap-1 text-[13px] font-bold text-white">
                          12.5K <span className="text-[8px] font-semibold text-green-400">+12.5%</span>
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                        className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
                      >
                        <p className="text-[9px] text-gray-500">Sessions</p>
                        <p className="mt-1 flex items-baseline gap-1 text-[13px] font-bold text-white">
                          32.8K <span className="text-[8px] font-semibold text-green-400">+18.2%</span>
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.0 }}
                        className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
                      >
                        <p className="text-[9px] text-gray-500">Conversion</p>
                        <p className="mt-1 flex items-baseline gap-1 text-[13px] font-bold text-white">
                          8.67% <span className="text-[8px] font-semibold text-green-400">+7.1%</span>
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom Mockup Features */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                    className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3"
                  >
                    <div className="flex shrink-0 items-center justify-center rounded bg-blue-500/10 p-1.5 text-blue-400">
                      <Zap className="h-3.5 w-3.5 fill-current" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white">Lightning Fast</p>
                      <p className="mt-0.5 text-[9px] text-gray-500">Optimized for speed</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3"
                  >
                    <div className="flex shrink-0 items-center justify-center rounded bg-blue-500/10 p-1.5 text-blue-400">
                      <Monitor className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white">Fully Responsive</p>
                      <p className="mt-0.5 text-[9px] text-gray-500">Perfect on any device</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3 }}
                    className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3"
                  >
                    <div className="flex shrink-0 items-center justify-center rounded bg-purple-500/10 p-1.5 text-purple-400">
                      <TrendingUp className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white">SEO Optimized</p>
                      <p className="mt-0.5 text-[9px] text-gray-500">Higher rankings, more traffic</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="mb-6 text-[12px] font-bold tracking-[0.2em] text-purple-400">
              02 / AI AUTOMATION &amp; AI AGENTS
            </div>

            <div className="flex flex-col justify-start lg:h-[200px]">
              <h1 className="text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-[40px] xl:text-[46px]">
                I Automate Workflows
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  with AI Agents
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-gray-400">
                Intelligent automation, AI agents, and integrations that save time, reduce manual work, and scale your business operations.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]">
                Explore Automations <ArrowRight className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-gray-200 transition-colors hover:bg-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Live Demo
              </button>
            </div>

            {/* Workflow card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative mt-8 overflow-hidden rounded-2xl border border-purple-500/40 bg-[#060913] p-6 shadow-[0_0_60px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/20"
            >
              <div className="mb-8">
                <p className="text-[11px] font-semibold tracking-widest text-gray-400">
                  AI WORKFLOW EXAMPLE
                </p>
              </div>

              {/* Workflow Graph UI - Clean self-contained layout */}
              <div className="relative mx-auto w-full mt-4 px-2">

                {/* ── ROW 1 ── */}
                <div className="flex items-center justify-between gap-0">
                  {/* Card: Trigger */}
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                    className="flex w-[130px] shrink-0 items-center gap-2.5 rounded-xl border border-green-500/40 bg-black/70 p-3 shadow-[0_0_20px_rgba(34,197,94,0.2)] backdrop-blur-md">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/15 text-green-400">
                      <Zap className="h-4 w-4 fill-current" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white">Trigger</p>
                      <p className="text-[10px] text-gray-400">New Lead</p>
                    </div>
                  </motion.div>

                  {/* Line: Trigger → AI Agent */}
                  <div className="relative flex-1 h-[2px] mx-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/60 via-purple-500/60 to-purple-500/60 rounded-full" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'linear-gradient(90deg, transparent 0%, #a855f7 50%, transparent 100%)', backgroundSize: '200% 100%' }}
                      animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>

                  {/* Card: AI Agent */}
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
                    className="flex w-[130px] shrink-0 items-center gap-2.5 rounded-xl border border-purple-500/40 bg-black/70 p-3 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white">AI Agent</p>
                      <p className="text-[10px] text-gray-400">Process Lead</p>
                    </div>
                  </motion.div>

                  {/* Line: AI Agent → Decision */}
                  <div className="relative flex-1 h-[2px] mx-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/60 via-orange-500/60 to-orange-500/60 rounded-full" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'linear-gradient(90deg, transparent 0%, #f97316 50%, transparent 100%)', backgroundSize: '200% 100%' }}
                      animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.3 }}
                    />
                  </div>

                  {/* Card: Decision */}
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
                    className="flex w-[130px] shrink-0 items-center gap-2.5 rounded-xl border border-orange-500/40 bg-black/70 p-3 shadow-[0_0_20px_rgba(249,115,22,0.2)] backdrop-blur-md">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-400">
                      <Diamond className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white">Decision</p>
                      <p className="text-[10px] text-gray-400">Check Intent</p>
                    </div>
                  </motion.div>
                </div>

                {/* ── VERTICAL CONNECTOR: Row1 → Row2 ── */}
                <div className="relative flex justify-between items-stretch" style={{ height: '44px' }}>
                  {/* Left vertical (Trigger -> Email) */}
                  <div className="flex justify-center" style={{ width: '130px' }}>
                    <div className="relative w-[2px] h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-green-500/40 to-blue-500/40 rounded-full" />
                      <motion.div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(180deg, #3b82f6 0%, transparent 100%)', backgroundSize: '100% 200%' }}
                        animate={{ backgroundPosition: ['0 -200%', '0 200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
                    </div>
                  </div>
                  {/* Center vertical (AI Agent -> Google Sheets) */}
                  <div className="flex justify-center" style={{ width: '130px' }}>
                    <div className="relative w-[2px] h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/40 to-green-500/40 rounded-full" />
                      <motion.div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(180deg, #22c55e 0%, transparent 100%)', backgroundSize: '100% 200%' }}
                        animate={{ backgroundPosition: ['0 -200%', '0 200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.4 }} />
                    </div>
                  </div>
                  {/* Right vertical (Decision -> CRM) */}
                  <div className="flex justify-center" style={{ width: '130px' }}>
                    <div className="relative w-[2px] h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/40 to-pink-500/40 rounded-full" />
                      <motion.div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(180deg, #ec4899 0%, transparent 100%)', backgroundSize: '100% 200%' }}
                        animate={{ backgroundPosition: ['0 -200%', '0 200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.8 }} />
                    </div>
                  </div>
                </div>

                {/* ── ROW 2 ── */}
                <div className="flex items-center justify-between gap-0">
                  {/* Card: Email */}
                  <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.2 }}
                    className="flex w-[130px] shrink-0 items-center gap-2.5 rounded-xl border border-blue-500/40 bg-black/70 p-3 shadow-[0_0_20px_rgba(59,130,246,0.2)] backdrop-blur-md">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white">Email</p>
                      <p className="text-[10px] text-gray-400">Send Email</p>
                    </div>
                  </motion.div>

                  {/* Spacer between Email and Sheets */}
                  <div className="flex-1" />

                  {/* Card: Google Sheets */}
                  <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.4 }}
                    className="flex w-[130px] shrink-0 items-center gap-2.5 rounded-xl border border-green-500/40 bg-black/70 p-3 shadow-[0_0_20px_rgba(34,197,94,0.2)] backdrop-blur-md">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/15 text-green-400">
                      <Table className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white">Google Sheets</p>
                      <p className="text-[10px] text-gray-400">Add Data</p>
                    </div>
                  </motion.div>

                  {/* Spacer between Sheets and CRM */}
                  <div className="flex-1" />

                  {/* Card: CRM */}
                  <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.6 }}
                    className="flex w-[130px] shrink-0 items-center gap-2.5 rounded-xl border border-pink-500/40 bg-black/70 p-3 shadow-[0_0_20px_rgba(236,72,153,0.2)] backdrop-blur-md">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-500/15 text-pink-400">
                      <UserPlus className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white">CRM</p>
                      <p className="text-[10px] text-gray-400">Create Lead</p>
                    </div>
                  </motion.div>
                </div>

                {/* ── VERTICAL CONNECTOR: Row2 → Row3 ── branches from center Sheets */}
                <div className="relative flex justify-center" style={{ height: '44px' }}>
                  {/* The center vertical down from Sheets */}
                  <div className="relative w-[2px]" style={{ height: '22px' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-green-500/40 to-green-500/40 rounded-full" />
                    <motion.div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(180deg, #22c55e 0%, transparent 100%)', backgroundSize: '100% 200%' }}
                      animate={{ backgroundPosition: ['0 -200%', '0 200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 1 }} />
                  </div>
                  {/* Horizontal branch to left (WhatsApp) */}
                  <div className="absolute left-[calc(50%-89px)] right-[50%] top-[22px] h-[2px]">
                    <div className="absolute inset-0 bg-gradient-to-l from-green-500/40 to-green-500/40 rounded-full" />
                    <motion.div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(270deg, #22c55e 0%, transparent 100%)', backgroundSize: '200% 100%' }}
                      animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 1.2 }} />
                  </div>
                  {/* Horizontal branch to right (Completed) */}
                  <div className="absolute left-[50%] right-[calc(50%-89px)] top-[22px] h-[2px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 to-purple-500/40 rounded-full" />
                    <motion.div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(90deg, #a855f7 0%, transparent 100%)', backgroundSize: '200% 100%' }}
                      animate={{ backgroundPosition: ['-200% 0', '200% 0'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 1.4 }} />
                  </div>
                  {/* Left down stub into WhatsApp */}
                  <div className="absolute w-[2px] bg-green-500/40 rounded-full overflow-hidden" style={{ left: 'calc(50% - 89px)', bottom: 0, height: '22px' }}>
                    <motion.div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(180deg, #22c55e 0%, transparent 100%)', backgroundSize: '100% 200%' }}
                      animate={{ backgroundPosition: ['0 -200%', '0 200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 1.4 }} />
                  </div>
                  {/* Right down stub into Completed */}
                  <div className="absolute w-[2px] bg-purple-500/40 rounded-full overflow-hidden" style={{ right: 'calc(50% - 89px)', bottom: 0, height: '22px' }}>
                    <motion.div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(180deg, #a855f7 0%, transparent 100%)', backgroundSize: '100% 200%' }}
                      animate={{ backgroundPosition: ['0 -200%', '0 200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 1.6 }} />
                  </div>
                </div>

                {/* ── ROW 3 ── */}
                <div className="flex items-center justify-center gap-0">
                  {/* Card: WhatsApp */}
                  <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.8 }}
                    className="flex w-[130px] shrink-0 items-center gap-2.5 rounded-xl border border-green-500/40 bg-black/70 p-3 shadow-[0_0_20px_rgba(34,197,94,0.2)] backdrop-blur-md">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/15 text-green-400">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white">WhatsApp</p>
                      <p className="text-[10px] text-gray-400">Send Message</p>
                    </div>
                  </motion.div>

                  {/* Line: WhatsApp → Completed */}
                  <div className="relative w-[48px] h-[2px] shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/60 via-purple-500/60 to-purple-500/60 rounded-full" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'linear-gradient(90deg, transparent 0%, #a855f7 50%, transparent 100%)', backgroundSize: '200% 100%' }}
                      animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 1.6 }}
                    />
                  </div>

                  {/* Card: Completed */}
                  <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 2.0 }}
                    className="flex w-[130px] shrink-0 items-center gap-2.5 rounded-xl border border-purple-500/40 bg-black/70 p-3 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white">Completed</p>
                      <p className="text-[10px] text-gray-400">Workflow Done</p>
                    </div>
                  </motion.div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </main>
  );
}
