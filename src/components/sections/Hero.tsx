import Logo from '@/components/ui/Logo';
import HeroIllustration from '@/components/ui/HeroIllustration';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#02111a] via-[#031724] to-[#041226] text-white py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.14),_transparent_28%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-white/5 px-4 py-2 text-sm text-sky-200 backdrop-blur-sm">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-950/40 flex items-center justify-center">
                <Logo size={36} />
              </div>
              <span className="font-medium text-sky-100">Software-first digital transformation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight leading-tight fade-up fade-up-delay-200">
              Helping Businesses Transform Through
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Intelligent Digital Solutions</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 leading-8 mt-4 fade-up fade-up-delay-400">
              Nikera designs software, automates workflows, builds AI-powered solutions, and creates modern digital experiences that help businesses grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 fade-up fade-up-delay-500">
                Start Your Project
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-full border border-sky-400/40 bg-white/5 px-8 py-3 text-sm font-semibold text-sky-200 transition hover:bg-white/10 fade-up fade-up-delay-600">
                Explore Our Work
              </a>
            </div>

            <div className="mt-8 flex items-center gap-8 text-sm text-slate-300">
              <div className="inline-flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-300">✓</div>
                <span>Business First</span>
              </div>
              <div className="inline-flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-300">★</div>
                <span>Future Ready</span>
              </div>
              <div className="inline-flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-300">⚡</div>
                <span>Results Driven</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
