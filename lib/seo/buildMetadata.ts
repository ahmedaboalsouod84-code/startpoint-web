import type { Metadata } from 'next';
import { site } from '@/content/site';

interface BuildMetadataArgs {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function buildMetadata({
  title,
  description,
  path = '/',
  ogImage = '/media/asset-04.jpeg',
}: BuildMetadataArgs): Metadata {
  const url = `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(site.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  };
}
