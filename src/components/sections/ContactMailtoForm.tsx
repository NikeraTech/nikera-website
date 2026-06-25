'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';

const contactEmail = 'hello@nikera.co.uk';

function inputValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export default function ContactMailtoForm() {
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = inputValue(formData, 'name');
    const email = inputValue(formData, 'email');
    const company = inputValue(formData, 'company');
    const message = inputValue(formData, 'message');

    if (!name || !email || !message) {
      setError('Please provide your name, email and message.');
      return;
    }

    setError('');

    const subject = 'New enquiry from Nikera website';
    const body = [
      'New enquiry from Nikera website',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / Business Name: ${company || 'Not provided'}`,
      '',
      'Message:',
      message,
    ].join('\n');

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_18px_48px_rgba(7,16,36,0.1)] md:p-7">
      <div className="mb-5">
        <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Contact Form</p>
        <h2 className="text-[26px] font-extrabold leading-tight text-[#071024]">Tell us about your project</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[13px] font-extrabold text-[#071024]">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="h-11 w-full rounded-md border border-[#cfd8e6] bg-white px-4 text-[14px] text-[#071024] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd]/15"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[13px] font-extrabold text-[#071024]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-11 w-full rounded-md border border-[#cfd8e6] bg-white px-4 text-[14px] text-[#071024] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd]/15"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="company" className="mb-2 block text-[13px] font-extrabold text-[#071024]">
          Company / Business Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="h-11 w-full rounded-md border border-[#cfd8e6] bg-white px-4 text-[14px] text-[#071024] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd]/15"
          placeholder="Your company"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-[13px] font-extrabold text-[#071024]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full resize-none rounded-md border border-[#cfd8e6] bg-white px-4 py-3 text-[14px] text-[#071024] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd]/15"
          placeholder="Tell us what you want to build, improve or automate."
        />
      </div>

      <p aria-live="polite" className={`mt-3 rounded-md px-4 py-3 text-[13px] font-semibold leading-5 ${error ? 'bg-[#fff1f1] text-[#9f1d1d]' : 'bg-[#eef5ff] text-[#26344f]'}`}>
        {error || 'Submitting opens your email app with the message ready to send.'}
      </p>

      <button
        type="submit"
        className="mt-4 flex h-11 w-full items-center justify-center gap-3 rounded-md bg-[#0d6efd] px-8 text-[14px] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#2382ff] hover:shadow-[0_14px_34px_rgba(13,110,253,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0d6efd]"
      >
        Open email enquiry
        <span aria-hidden="true">-&gt;</span>
      </button>
    </form>
  );
}

