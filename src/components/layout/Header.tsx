"use client";

import { useState } from 'react';
import Logo from '@/components/ui/Logo';
import MobileNav from './MobileNav';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent text-white">
      <nav className="mx-auto flex h-[92px] max-w-[1180px] items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-4" aria-label="Nikera home">
          <Logo size={64} />
          <div className="leading-none">
            <p className="text-[30px] font-extrabold tracking-[0.16em]">NIKERA</p>
            <p className="mt-1 text-[15px] font-semibold tracking-[0.19em] text-white">
              TECHNOLOGIES <span className="text-cyan-300">LTD</span>
            </p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              Innovating for a Digital Future
            </p>
          </div>
        </a>

        <ul className="hidden items-center gap-10 text-[14px] font-semibold text-white lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-3 rounded-md bg-[#0d6efd] px-6 py-4 text-[14px] font-bold text-white shadow-[0_16px_36px_rgba(13,110,253,0.36)] transition hover:bg-[#2382ff] md:inline-flex"
          >
            Get Started
            <span aria-hidden="true">-&gt;</span>
          </a>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <MobileNav open={open} setOpen={setOpen} items={navItems} />
      </nav>
    </header>
  );
}
