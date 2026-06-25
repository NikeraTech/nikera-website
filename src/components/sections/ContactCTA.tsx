'use client';

import { FormEvent, useState } from 'react';

const contactItems = [
  { label: 'Email Us', value: 'contact@nikera.co.uk', icon: 'mail' },
  { label: 'Visit Our Website', value: 'nikera.co.uk', icon: 'globe' },
  { label: 'Business Enquiries', value: "We're here to help your business grow", icon: 'briefcase' },
];

function ContactIcon({ icon }: { icon: string }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#0d6efd] text-white">
      <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        {icon === 'mail' && (
          <>
            <rect x="3" y="5" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
            <path d="m4 6 6 5 6-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
        {icon === 'globe' && (
          <>
            <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.7" />
            <path d="M3 10h14M10 3c2.2 2.4 2.2 11.6 0 14M10 3c-2.2 2.4-2.2 11.6 0 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </>
        )}
        {icon === 'briefcase' && (
          <>
            <rect x="3" y="7" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
            <path d="M7 7V5.5A1.5 1.5 0 0 1 8.5 4h3A1.5 1.5 0 0 1 13 5.5V7M3 10h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </>
        )}
      </svg>
    </span>
  );
}

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
    <section id="contact" className="bg-[#f5f7fa] py-6 text-[#071024] md:py-7">
      <div className="mx-auto grid max-w-[1020px] grid-cols-1 gap-8 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="pt-1">
          <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Let&apos;s Work Together</p>
          <h2 className="max-w-[340px] text-[32px] font-extrabold leading-[1.02] md:text-[38px]">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-3 max-w-[390px] text-[14px] leading-5 text-[#26344f]">
            Get in touch with our team and let&apos;s discuss how we can help you achieve your digital transformation goals.
          </p>

          <div className="mt-5 space-y-3">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <ContactIcon icon={item.icon} />
                <div>
                  <p className="text-[14px] font-extrabold">{item.label}</p>
                  <p className="text-[13px] leading-4 text-[#26344f]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_14px_38px_rgba(7,16,36,0.08)]">
          {submitted ? (
            <div className="py-10 text-center">
              <h3 className="text-2xl font-extrabold text-[#071024]">Thank You</h3>
              <p className="mt-2 text-[#26344f]">We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[13px] font-extrabold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-11 w-full rounded-md border border-[#cfd8e6] bg-white px-4 text-[14px] text-[#071024] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd]/15"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-[13px] font-extrabold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-11 w-full rounded-md border border-[#cfd8e6] bg-white px-4 text-[14px] text-[#071024] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd]/15"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-[13px] font-extrabold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-md border border-[#cfd8e6] bg-white px-4 py-3 text-[14px] text-[#071024] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd]/15"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-3 rounded-md bg-[#0d6efd] px-8 text-[14px] font-bold text-white transition hover:bg-[#2382ff]"
              >
                Send Message
                <span aria-hidden="true">-&gt;</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
