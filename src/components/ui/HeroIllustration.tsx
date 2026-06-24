export default function HeroIllustration() {
  return (
    <div className="relative w-full">
      {/* Desktop: animated inline SVG (hidden on small screens) */}
      <div className="hidden lg:flex items-center justify-center">
        <svg
          viewBox="0 0 600 400"
          width="560"
          height="360"
          className="max-w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Animated digital transformation illustration"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          <style>{`\n            .floating { animation: float 5s ease-in-out infinite; transform-origin: center; }\n            .float-slow { animation-duration: 8s; }\n            .pulse { animation: pulse 2.2s ease-in-out infinite; transform-origin: center; }\n            @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }\n            @keyframes pulse { 0% { opacity: 0.95; transform: scale(1);} 50% { opacity: 0.7; transform: scale(1.03);} 100% { opacity: 0.95; transform: scale(1);} }\n            @media (prefers-reduced-motion: reduce) { .floating, .pulse { animation: none !important; } }\n          `}</style>

          <g transform="translate(60,40)">
            <rect x="0" y="0" width="420" height="320" rx="28" fill="#021827" />

            <g transform="translate(28,26)">
              <rect x="0" y="0" width="180" height="120" rx="14" fill="#05232e" />
              <rect x="200" y="0" width="180" height="120" rx="14" fill="#05232e" />

              <g className="floating float-slow" transform="translate(40,150)">
                <rect x="0" y="0" width="320" height="120" rx="12" fill="url(#g1)" opacity="0.12" />
              </g>

              <circle className="pulse" cx="260" cy="80" r="28" fill="#06b6d4" opacity="0.9" />
              <circle cx="220" cy="40" r="10" fill="#60a5fa" opacity="0.9" />
              <circle cx="120" cy="30" r="8" fill="#34d399" opacity="0.9" />

              <g transform="translate(8,8)">
                <rect x="8" y="8" width="56" height="8" rx="4" fill="#0ea5a4" />
                <rect x="8" y="28" width="110" height="8" rx="4" fill="#60a5fa" />
              </g>

              <g transform="translate(200,140)">
                <rect x="0" y="0" width="120" height="64" rx="10" fill="#071125" stroke="#0ea5a4" strokeOpacity="0.06" />
                <text x="12" y="36" fill="#ffffff" fontSize="14" fontFamily="Inter, system-ui" fontWeight="600">AI Insights</text>
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Mobile: lightweight preloaded SVG image for best LCP (visible on small screens) */}
      <div className="lg:hidden flex items-center justify-center">
        {/* Picture: try AVIF -> WebP -> inline SVG fallback (data URI) */}
        <picture>
          <source type="image/avif" srcSet="/images/hero-illustration.avif" />
          <source type="image/webp" srcSet="/images/hero-illustration.webp" />
          <img
            src={
              // inline simplified SVG as data URI so there's always a zero-request fallback
              `data:image/svg+xml;utf8,${encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
                  <defs>
                    <linearGradient id="m-lg1" x1="0" x2="1">
                      <stop offset="0%" stop-color="#06b6d4" />
                      <stop offset="100%" stop-color="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" rx="18" fill="#021827" />
                  <g transform="translate(40,36)">
                    <rect x="0" y="0" width="260" height="140" rx="12" fill="#05232e" />
                    <rect x="300" y="16" width="260" height="120" rx="12" fill="#042733" />
                    <rect x="20" y="180" width="640" height="120" rx="12" fill="url(#m-lg1)" opacity="0.12" />
                  </g>
                </svg>
              `)}`
            }
            alt="Hero illustration"
            width={360}
            height={230}
            className="w-full max-w-md h-auto object-contain"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
}
