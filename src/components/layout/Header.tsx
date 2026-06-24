"use client";

import Logo from '@/components/ui/Logo';
import MobileNav from './MobileNav';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#031724] border-b border-slate-900/40 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12">
            <Logo size={48} />
          </div>
          <div>
            <p className="text-base font-semibold text-white tracking-[0.15em]">NIKERA</p>
            <p className="text-xs text-sky-300 uppercase tracking-[0.24em]">Innovating for a Digital Future</p>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-sm text-slate-300">
          <li>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="transition hover:text-white">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            Get Started
          </button>

          <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center rounded p-2 bg-white/5 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <MobileNav open={open} setOpen={setOpen} />
      </nav>
    </header>
  );
}
