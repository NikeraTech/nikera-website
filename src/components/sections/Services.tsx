interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Software Engineering',
    description: 'Custom software solutions built with modern technologies and best practices.',
    icon: '💻',
  },
  {
    title: 'AI Solutions',
    description: 'Intelligent AI-powered applications that drive automation and insights.',
    icon: '🤖',
  },
  {
    title: 'CRM & Workflow Systems',
    description: 'Streamlined customer management and business workflow automation.',
    icon: '🔄',
  },
  {
    title: 'Business Automation',
    description: 'Automate repetitive tasks and optimize your business processes.',
    icon: '⚙️',
  },
  {
    title: 'Websites & Portals',
    description: 'Modern, responsive web applications designed for performance.',
    icon: '🌐',
  },
  {
    title: 'Digital Growth',
    description: 'Strategic digital solutions to accelerate your business growth.',
    icon: '📈',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F7FAFF] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-500 mb-3">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Enterprise-grade services for modern digital businesses
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Comprehensive digital solutions designed to transform your business and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg border border-slate-100 transition hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-3xl text-sky-500">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-7">{service.description}</p>
                </div>
              </div>

              <div className="mt-6 text-right">
                <a className="inline-flex items-center gap-2 text-sky-500 font-semibold hover:text-sky-600" href="#services">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
