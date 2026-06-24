'use client';

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
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-blue-300 rounded-lg p-8 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-950 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
