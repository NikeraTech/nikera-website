import type { Metadata } from 'next';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nikera — Innovating for a Digital Future',
  description: 'Nikera | Software-first digital transformation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
        <Head>
          <link
            rel="preload"
            as="image"
            href="/images/hero-illustration.avif"
            type="image/avif"
          />
        </Head>
        <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link sr-only focus:not-sr-only">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
