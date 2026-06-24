'use client';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Helping Businesses Transform Through{' '}
              <span className="text-blue-400">Intelligent Digital Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Nikera designs software, automates workflows, builds AI-powered solutions, and creates modern digital experiences that help businesses grow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Our Work
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg p-12 border border-blue-400/30">
              <div className="aspect-square bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-lg flex items-center justify-center">
                <div className="text-blue-300 text-center">
                  <p className="text-6xl mb-2">→</p>
                  <p className="text-xl font-semibold">Digital Transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
