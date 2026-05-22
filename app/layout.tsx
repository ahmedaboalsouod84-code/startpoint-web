import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema } from '@/lib/seo/schema';
import { buildMetadata } from '@/lib/seo/buildMetadata';
import { site } from '@/content/site';
import './globals.css';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${site.name} — ${site.tagline}`,
    description: site.shortDescription,
    path: '/',
  }),
  applicationName: site.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#0B0B0C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-base text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-copper focus:px-4 focus:py-2 focus:text-base"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="relative z-[1]">
          {children}
        </main>
        <Footer />
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
