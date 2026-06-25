import Link from 'next/link';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#001120] text-white">
      <div className="mx-auto max-w-[1060px] px-6 py-8">
        <div className="grid grid-cols-1 gap-8 border-b border-white/8 pb-7 md:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo size={50} />
              <div className="leading-none">
                <p className="text-[21px] font-extrabold tracking-[0.2em]">NIKERA</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">Technologies Ltd</p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-cyan-300">Innovating for a Digital Future</p>
              </div>
            </div>
            <p className="mt-4 max-w-[260px] text-[13px] leading-5 text-white/75">
              Software-first digital transformation for growing businesses.
            </p>
            <a href="https://nikera.co.uk" className="mt-2 inline-block text-[13px] font-semibold text-cyan-300 transition hover:text-white">
              nikera.co.uk
            </a>
            <a href="mailto:hello@nikera.co.uk" className="mt-1 block text-[13px] font-semibold text-cyan-300 transition hover:text-white">
              hello@nikera.co.uk
            </a>
          </div>

          <div>
            <h4 className="mb-2 text-[13px] font-extrabold">Services</h4>
            <ul className="space-y-1 text-[12px] leading-5 text-white/75">
              <li><a href="#services" className="hover:text-cyan-300">Software Engineering</a></li>
              <li><a href="#services" className="transition hover:text-cyan-300">AI &amp; Automation</a></li>
              <li><a href="#services" className="hover:text-cyan-300">Business Automation</a></li>
              <li><a href="#services" className="hover:text-cyan-300">Websites &amp; Portals</a></li>
              <li><a href="#services" className="hover:text-cyan-300">Custom CRM Platforms</a></li>
              <li><a href="#services" className="hover:text-cyan-300">Digital Growth</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[13px] font-extrabold">Company</h4>
            <ul className="space-y-1 text-[12px] leading-5 text-white/75">
              <li><Link href="/about" className="transition hover:text-cyan-300">About Us</Link></li>
              <li><Link href="/services" className="transition hover:text-cyan-300">Services</Link></li>
              <li><Link href="/#why-nikera" className="transition hover:text-cyan-300">Why Nikera</Link></li>
              <li><Link href="/portfolio" className="transition hover:text-cyan-300">Our Work</Link></li>
              <li><Link href="/#contact" className="transition hover:text-cyan-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[13px] font-extrabold">Legal</h4>
            <p className="max-w-[150px] text-[12px] leading-5 text-white/60">Policy pages coming soon.</p>
            <h4 className="mt-5 text-[13px] font-extrabold">Follow Us</h4>
            <div className="mt-2 flex gap-3">
              {['in', 'gh'].map((item) => (
                <span
                  key={item}
                  aria-label={`${item === 'in' ? 'LinkedIn' : 'GitHub'} profile coming soon`}
                  className="flex h-7 w-7 cursor-not-allowed items-center justify-center rounded-full border border-white/20 text-[10px] font-bold uppercase text-white/45"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="pt-5 text-center text-[11px] text-white/55">
          &copy; 2026 Nikera Technologies Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
