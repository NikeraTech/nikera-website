'use client';

import { Dispatch, SetStateAction } from 'react';
import Logo from '@/components/ui/Logo';

export default function MobileNav({ open, setOpen }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#02111f]/95 backdrop-blur-sm">
      <div className="max-w-md mx-auto mt-20 bg-transparent p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Logo size={40} />
            <div>
              <p className="text-white font-semibold tracking-[0.12em]">NIKERA</p>
              <p className="text-xs text-sky-300">Innovating for a Digital Future</p>
            </div>
          </div>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-white text-2xl">✕</button>
        </div>

        <nav className="flex flex-col gap-6 text-white text-lg">
          <a href="#services" onClick={() => setOpen(false)} className="hover:underline">Services</a>
          <a href="#portfolio" onClick={() => setOpen(false)} className="hover:underline">Portfolio</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:underline">Contact</a>
          <a href="#" onClick={() => setOpen(false)} className="mt-4 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2 text-slate-900 font-semibold">Get Started</a>
        </nav>
      </div>
    </div>
  );
}
