import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/buildMetadata';
import { site } from '@/content/site';

export const metadata: Metadata = buildMetadata({
  title: `${site.name} — ${site.tagline}`,
  description: site.shortDescription,
  path: '/ar',
});

// Arabic mirror scaffold.
// English copy serves as placeholder so the routes work today.
// Replace `dir="rtl"` styling once Arabic content is written.
export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" lang="ar" className="min-h-[60vh]">
      {children}
    </div>
  );
}
