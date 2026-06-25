interface Project {
  title: string;
  category: string;
  description: string;
  tone: 'light' | 'dark' | 'white';
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    category: 'Software Engineering',
    description: 'Full-stack e-commerce solution with advanced inventory and payment integration.',
    tone: 'light',
  },
  {
    title: 'AI Analytics Dashboard',
    category: 'AI Solutions',
    description: 'Machine learning-powered analytics platform for real-time business insights.',
    tone: 'dark',
  },
  {
    title: 'Workflow Automation System',
    category: 'Business Automation',
    description: 'Custom automation solution that reduced manual processing by 80%.',
    tone: 'white',
  },
];

function MockScreenshot({ tone }: { tone: Project['tone'] }) {
  const dark = tone === 'dark';

  return (
    <div className={`h-[126px] overflow-hidden rounded ${dark ? 'bg-[#071426]' : 'bg-[#f7fbff]'}`}>
      <div className={`flex h-full border ${dark ? 'border-white/8' : 'border-[#d9e4f2]'}`}>
        <div className={`w-12 p-2 ${dark ? 'bg-[#0b1c32]' : 'bg-white'}`}>
          <div className="mb-3 h-2 rounded bg-[#0d6efd]" />
          {[0, 1, 2, 3, 4].map((item) => (
            <div key={item} className={`mb-2 h-1.5 rounded ${dark ? 'bg-emerald-400/70' : 'bg-slate-300'}`} />
          ))}
        </div>
        <div className="flex-1 p-3">
          <div className={`mb-3 h-4 w-28 rounded ${dark ? 'bg-white/12' : 'bg-[#dfe8f4]'}`} />
          <div className="grid h-[76px] grid-cols-3 gap-2">
            {[0, 1, 2].map((item) => (
              <div key={item} className={`rounded ${dark ? 'bg-[#102845]' : 'bg-white'} p-2 shadow-sm`}>
                <div className={`mb-2 h-2 rounded ${item === 1 ? 'bg-[#0d6efd]' : dark ? 'bg-cyan-300/50' : 'bg-slate-200'}`} />
                <div className={`h-8 rounded ${dark ? 'bg-gradient-to-t from-[#0d6efd]/50 to-transparent' : 'bg-[#eef4fb]'}`} />
              </div>
            ))}
          </div>
          {dark && <div className="mt-[-48px] ml-auto h-16 w-16 rounded-full border-8 border-[#0d6efd]/50" />}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPreview() {
  return (
    <section id="portfolio" className="bg-[#001120] py-5 text-white md:py-6">
      <div className="mx-auto max-w-[1060px] px-6">
        <div className="mb-2 text-center">
          <p className="mb-1 text-[11px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Our Work</p>
          <h2 className="text-[28px] font-extrabold leading-tight md:text-[32px]">Featured Projects</h2>
          <p className="mx-auto mt-1 max-w-[620px] text-[13px] font-medium text-white/90">
            Explore some of our recent work and the impact we&apos;ve delivered for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-white/12 bg-white/[0.055] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.22)]"
            >
              <MockScreenshot tone={project.tone} />
              <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-[#0dbbff]">{project.category}</p>
              <h3 className="mt-1 text-[18px] font-extrabold text-white">{project.title}</h3>
              <p className="mt-2 min-h-[44px] text-[13px] leading-5 text-white/86">{project.description}</p>
              <a className="mt-3 inline-flex items-center gap-2 text-[13px] font-extrabold text-[#0dbbff]" href="#portfolio">
                View Project <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-3 text-center">
          <a
            href="#portfolio"
            className="inline-flex min-w-[200px] items-center justify-center gap-3 rounded-md bg-[#0d6efd] px-7 py-3 text-[14px] font-bold text-white shadow-[0_12px_30px_rgba(13,110,253,0.32)]"
          >
            View All Projects
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
