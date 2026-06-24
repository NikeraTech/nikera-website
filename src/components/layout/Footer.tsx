export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02091a] border-t border-slate-900/40 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <div>
                <p className="text-base font-semibold text-white tracking-[0.18em]">NIKERA</p>
                <p className="text-xs text-sky-300 uppercase tracking-[0.24em]">Innovating for a Digital Future</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-400 max-w-xs">
              Innovating for a Digital Future with premium digital transformation services.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="transition hover:text-white">Software Engineering</a></li>
              <li><a href="#services" className="transition hover:text-white">AI Solutions</a></li>
              <li><a href="#services" className="transition hover:text-white">Business Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:contact@nikera.co.uk" className="transition hover:text-white">contact@nikera.co.uk</a></li>
              <li><a href="https://nikera.co.uk" className="transition hover:text-white">nikera.co.uk</a></li>
              <li><span>United Kingdom</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900/40 pt-8">
          <p className="text-center text-sm text-slate-500">
            © {currentYear} Nikera Technologies Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
