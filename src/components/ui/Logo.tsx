import Image from 'next/image';

export default function Logo({
  size = 40,
  alt = 'Nikera',
  variant = 'image',
}: {
  size?: number;
  alt?: string;
  variant?: 'image' | 'wordmark';
}) {
  if (variant === 'wordmark') {
    return (
      <svg
        width={size * 2.2}
        height={size}
        viewBox="0 0 220 40"
        role="img"
        aria-label={alt}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill="none" />
        <text x="0" y="28" fill="#ffffff" fontWeight={700} fontSize={28} fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto">
          NIKERA
        </text>
      </svg>
    );
  }

  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
      <Image src="/images/logo.png" alt={alt} fill className="object-contain" />
    </div>
  );
}
