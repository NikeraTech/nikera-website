'use client';

import { FormEvent, useState } from 'react';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FBFF] text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-500 mb-3">
            Let’s Talk
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Get in touch with our team and let's discuss how we can help you achieve your digital transformation goals.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] items-start">
          <div className="space-y-6">
            {[
              { icon: '📧', label: 'Email', value: 'contact@nikera.co.uk' },
              { icon: '🌐', label: 'Website', value: 'nikera.co.uk' },
              { icon: '💼', label: 'Focus', value: 'Digital Transformation' },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-slate-200 bg-white/90 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.18)]">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-sm font-semibold text-slate-950 mb-2">{item.label}</p>
                <p className="text-slate-600">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.18)]">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-slate-950 mb-2">Thank You!</h3>
                <p className="text-slate-600">
                  We'll be in touch shortly. Check your email for our response.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-950 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-950 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-950 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            {[
              { icon: '📧', label: 'Email', value: 'contact@nikera.co.uk' },
              { icon: '🌐', label: 'Website', value: 'nikera.co.uk' },
              { icon: '💼', label: 'Focus', value: 'Digital Transformation' },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-slate-200 bg-white/90 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.18)]">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-sm font-semibold text-slate-950 mb-2">{item.label}</p>
                <p className="text-slate-600">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
