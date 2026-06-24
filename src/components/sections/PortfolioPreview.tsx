interface Project {
  title: string;
  category: string;
  description: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    category: 'Software Engineering',
    description: 'Full-stack e-commerce solution with advanced inventory and payment integration.',
  },
  {
    title: 'AI Analytics Dashboard',
    category: 'AI Solutions',
    description: 'Machine learning-powered analytics platform for real-time business insights.',
  },
  {
    title: 'Workflow Automation System',
    category: 'Business Automation',
    description: 'Custom automation solution that reduced manual processing by 80%.',
  },
];

export default function PortfolioPreview() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#061226] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-400 mb-3">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Explore some of our recent work and the impact we've delivered for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900/90 to-slate-800/90 p-0 shadow-2xl transition hover:-translate-y-1"
            >
              <div className="h-40 bg-slate-800/40 flex items-center justify-center text-slate-400">Screenshot</div>
              <div className="p-6">
                <span className="text-sky-300 text-sm font-semibold">{project.category}</span>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
                <div className="mt-6">
                  <a className="inline-flex items-center gap-2 text-sky-300 font-semibold hover:text-white" href="#portfolio">View Project →</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
