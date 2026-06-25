const trustCards = [
  {
    title: 'Real Projects',
    text: 'Our portfolio is built from real products and client websites developed for growing businesses.',
  },
  {
    title: 'Clear Communication',
    text: 'We keep clients informed, explain decisions clearly and focus on long-term relationships.',
  },
  {
    title: 'Quality Delivery',
    text: 'We care about usability, performance, maintainability and the business outcome behind every solution.',
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#001120] py-10 text-white md:py-12" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-[1060px] px-6">
        <div className="mb-7 max-w-[700px]">
          <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Trust</p>
          <h2 id="trust-heading" className="text-[30px] font-extrabold leading-tight md:text-[36px]">
            Built on Trust, Quality and Long-Term Partnership
          </h2>
          <p className="mt-3 text-[15px] font-medium leading-6 text-white/82">
            Every project is an opportunity to build lasting value, not just deliver software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {trustCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-white/12 bg-white/[0.055] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.2)] transition duration-200 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.075]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#0d6efd]/18 text-cyan-300">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="m4 11.4 4.1 4.1L18 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[19px] font-extrabold text-white">{card.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-white/76">{card.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-lg border border-cyan-300/18 bg-[#071b2e] px-5 py-4">
          <p className="text-[13px] font-semibold leading-5 text-white/78">
            Client testimonials will be added as we collect approved feedback from businesses we support.
          </p>
        </div>
      </div>
    </section>
  );
}

