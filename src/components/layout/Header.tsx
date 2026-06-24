'use client';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold text-white">
            NIKERA
          </h1>
          <p className="text-xs text-blue-400">Innovating for a Digital Future</p>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#services" className="text-slate-300 hover:text-white transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-slate-300 hover:text-white transition-colors">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-medium">
          Get Started
        </button>
      </nav>
    </header>
  );
}
