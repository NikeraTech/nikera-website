export default function Logo({
  size = 48,
  alt = 'Nikera',
}: {
  size?: number;
  alt?: string;
  variant?: 'image' | 'wordmark';
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      role="img"
      aria-label={alt}
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_18px_rgba(0,139,255,0.42)]"
    >
      <defs>
        <linearGradient id="nikera-logo-a" x1="8" y1="10" x2="80" y2="80">
          <stop offset="0" stopColor="#00c8ff" />
          <stop offset="0.42" stopColor="#0d6efd" />
          <stop offset="1" stopColor="#05112c" />
        </linearGradient>
        <linearGradient id="nikera-logo-b" x1="16" y1="18" x2="74" y2="72">
          <stop offset="0" stopColor="#021135" />
          <stop offset="0.38" stopColor="#0799ff" />
          <stop offset="0.72" stopColor="#1de2ff" />
          <stop offset="1" stopColor="#0d6efd" />
        </linearGradient>
        <linearGradient id="nikera-logo-c" x1="46" y1="14" x2="84" y2="76">
          <stop offset="0" stopColor="#23d8ff" />
          <stop offset="1" stopColor="#0d54d9" />
        </linearGradient>
      </defs>
      <path d="M8 14h18l42 54V14h18v68H68L26 28v54H8V14Z" fill="url(#nikera-logo-a)" />
      <path d="M23 14h18l42 54H64L23 14Z" fill="url(#nikera-logo-b)" />
      <path d="M70 38h9v9h-9v-9Zm10-14h8v8h-8v-8Zm-21 25h8v8h-8v-8Zm13-40h6v6h-6V9Zm-13 10h6v6h-6v-6Z" fill="url(#nikera-logo-c)" />
    </svg>
  );
}
