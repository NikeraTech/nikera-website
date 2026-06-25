import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nikera.co.uk'),
  title: {
    default: 'Nikera Technologies | Software Built for Growing Businesses',
    template: '%s | Nikera Technologies',
  },
  description:
    'Nikera Technologies builds custom software, CRM platforms, business automation, AI-enabled workflows and modern websites for growing UK businesses.',
  keywords: [
    'Nikera Technologies',
    'custom software development UK',
    'CRM systems',
    'business automation',
    'AI automation',
    'digital transformation',
    'modern websites',
    'software company UK',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nikera Technologies | Software Built for Growing Businesses',
    description:
      'Custom software, CRM platforms, automation and modern websites for growing businesses.',
    url: 'https://nikera.co.uk',
    siteName: 'Nikera Technologies',
    images: [
      {
        url: '/images/logo.png',
        width: 1536,
        height: 1024,
        alt: 'Nikera Technologies logo',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikera Technologies | Software Built for Growing Businesses',
    description:
      'Custom software, CRM platforms, automation and modern websites for growing businesses.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link sr-only focus:not-sr-only">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
