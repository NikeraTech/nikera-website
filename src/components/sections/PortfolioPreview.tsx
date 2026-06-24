'use client';

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
    <section id="portfolio" className="py-20 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore some of our recent work and the impact we've delivered for our clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 hover:border-blue-400 rounded-lg p-8 transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 group"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 h-32 rounded-lg mb-6 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-600/20 transition-colors">
                <p className="text-4xl">📦</p>
              </div>
              <span className="text-blue-400 text-sm font-semibold">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-3 mt-2">
                {project.title}
              </h3>
              <p className="text-slate-300">
                {project.description}
              </p>
              <button className="mt-6 text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
