"use client";

import React, { useState } from 'react';
import { ArrowRight, Search, Menu, X } from 'lucide-react';

const NAV_LINKS = ['Home', 'Websites', 'AI Automation', 'AI Agents', 'Workflows', 'About', 'Contact'];

export function Logo({ variant = 'sm' }: { variant?: 'sm' | 'lg' }) {
  const isLg = variant === 'lg';
  return (
    <div className={`relative flex items-center justify-center ${isLg ? 'h-28 w-28' : 'h-10 w-10'}`}>
      {isLg && (
        <>
          <span className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-2xl" />
          <span className="absolute inset-2 rounded-full border border-blue-500/30" />
          <span className="absolute inset-0 rounded-full border border-purple-500/20" />
        </>
      )}
      <div
        className={`relative z-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-900/50 ${isLg ? 'h-16 w-16 rounded-3xl' : 'h-10 w-10 rounded-xl'
          }`}
      >
        <span className={`font-extrabold text-white ${isLg ? 'text-3xl' : 'text-lg'}`}>S</span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-3">
          <img src="/logo_custom.png" alt="SD Logo" className="h-10 w-auto" />
        </div>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`border-b-2 pb-1 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${activeLink === link ? 'border-purple-500 text-white' : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-400 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400">
            <Search className="h-3.5 w-3.5" />
            <span>Ctrl</span>
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-xs font-semibold text-gray-300">K</span>
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400">
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <button
          className="text-gray-300 lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/5 bg-black px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActiveLink(link);
                  setMenuOpen(false);
                }}
                className={`text-left text-sm font-medium ${activeLink === link ? 'text-white' : 'text-gray-400'}`}
              >
                {link}
              </button>
            ))}
            <button className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white">
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
