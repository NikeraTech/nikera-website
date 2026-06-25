import Logo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#001120] text-white">
      <div className="mx-auto max-w-[1020px] px-6 py-4">
        <div className="grid grid-cols-1 gap-8 border-b border-white/8 pb-4 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo size={50} />
              <div className="leading-none">
                <p className="text-[21px] font-extrabold tracking-[0.2em]">NIKERA</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">Technologies Ltd</p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-cyan-300">Innovating for a Digital Future</p>
              </div>
            </div>
            <p className="mt-4 max-w-[230px] text-[13px] leading-5 text-white/75">
              Software-first digital transformation solutions.
            </p>
            <a href="https://nikera.co.uk" className="mt-2 inline-block text-[13px] font-semibold text-cyan-300">
              nikera.co.uk
            </a>
          </div>

          <div>
            <h4 className="mb-2 text-[13px] font-extrabold">Services</h4>
            <ul className="space-y-1 text-[12px] leading-5 text-white/75">
              <li><a href="#services" className="hover:text-cyan-300">Software Engineering</a></li>
              <li><a href="#services" className="hover:text-cyan-300">AI Solutions</a></li>
              <li><a href="#services" className="hover:text-cyan-300">Business Automation</a></li>
              <li><a href="#services" className="hover:text-cyan-300">Websites &amp; Portals</a></li>
              <li><a href="#services" className="hover:text-cyan-300">CRM &amp; Workflow Systems</a></li>
              <li><a href="#services" className="hover:text-cyan-300">Digital Growth</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[13px] font-extrabold">Company</h4>
            <ul className="space-y-1 text-[12px] leading-5 text-white/75">
              <li><a href="#about" className="hover:text-cyan-300">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-300">Our Work</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-300">Blog</a></li>
              <li><a href="#contact" className="hover:text-cyan-300">Careers</a></li>
              <li><a href="#contact" className="hover:text-cyan-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[13px] font-extrabold">Legal</h4>
            <ul className="space-y-1 text-[12px] leading-5 text-white/75">
              <li><a href="#" className="hover:text-cyan-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-300">Cookie Policy</a></li>
            </ul>
            <h4 className="mt-5 text-[13px] font-extrabold">Follow Us</h4>
            <div className="mt-2 flex gap-3">
              {['in', 'gh'].map((item) => (
                <a
                  key={item}
                  href="#"
                  aria-label={item === 'in' ? 'LinkedIn' : 'GitHub'}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/45 text-[10px] font-bold uppercase text-white transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="pt-3 text-center text-[11px] text-white/55">
          &copy; 2024 Nikera Technologies Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
