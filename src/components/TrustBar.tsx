import { Zap, Globe, Bot, Rocket, Atom, Wind, Feather, Sparkles, Link2, GitBranch } from 'lucide-react';

const bottomItems = [
  { dot: true, title: 'Available', subtitle: 'New Projects', icon: null, color: '' },
  { dot: false, icon: Zap, color: 'blue', title: 'Reply', subtitle: '< 1 Hour' },
  { dot: false, icon: Globe, color: 'purple', title: 'Worldwide', subtitle: 'Remote' },
  { dot: false, icon: Bot, color: 'indigo', title: 'AI Stack', subtitle: 'Online' },
  { dot: false, icon: Rocket, color: 'pink', title: 'Deployment', subtitle: 'Ready' },
];

const CHIP_MAP: Record<string, string> = {
  purple: 'border-purple-500/20 bg-purple-500/10 text-purple-400',
  blue: 'border-blue-500/20 bg-blue-500/10 text-blue-400',
  indigo: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-400',
  pink: 'border-pink-500/20 bg-pink-500/10 text-pink-400',
};

export default function TrustBar() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-16 lg:px-12">
      {/* ── NEW TECH BADGES ROW ── */}
      <div className="mb-12 grid gap-y-6 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
        {/* Left Side (Web Dev) */}
        <div className="flex flex-wrap gap-2.5">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-[10px]">N</span>
            Next.js
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10">
            <Atom className="h-4 w-4 text-cyan-400" />
            React
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-blue-500 text-[10px] text-white">Ts</span>
            TypeScript
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10">
            <Wind className="h-4 w-4 text-cyan-400" />
            Tailwind CSS
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10">
            <Feather className="h-4 w-4 text-gray-300" />
            Framer Motion
          </div>
        </div>

        {/* Right Side (AI) */}
        <div className="flex flex-wrap gap-2.5">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10">
            <Sparkles className="h-4 w-4 text-gray-300" />
            OpenAI
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10">
            <Link2 className="h-4 w-4 text-green-400" />
            LangChain
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10">
            <GitBranch className="h-4 w-4 text-rose-400" />
            n8n
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10">
            <Zap className="h-4 w-4 text-orange-400 fill-orange-400" />
            Zapier
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10">
            <span className="flex h-4 items-center font-bold text-purple-400">/ / /</span>
            Make.com
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#030303] shadow-2xl">
        {/* Subtle premium background glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50" />

        <div className="relative grid grid-cols-2 divide-y divide-white/5 sm:grid-cols-3 sm:divide-y-0 sm:divide-x lg:grid-cols-5">
          {bottomItems.map((item) => (
            <div key={item.title} className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-white/[0.03]">
              {item.dot ? (
                <span className="relative flex h-9 w-9 items-center justify-center">
                  <span className="absolute h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </span>
              ) : (
                item.icon && (
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-110 ${CHIP_MAP[item.color]}`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                )
              )}
              <div>
                <p className="text-sm font-bold text-white tracking-wide transition-colors group-hover:text-gray-100">{item.title}</p>
                <p className="text-xs font-medium text-gray-500 transition-colors group-hover:text-gray-400">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
