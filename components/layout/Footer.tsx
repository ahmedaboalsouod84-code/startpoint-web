import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Logo } from '@/components/ui/Logo';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { locations } from '@/content/locations';

const columns: { title: string; items: { label: string; href: string }[] }[] = [
  {
    title: 'Studio',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Vision & mission', href: '/about/vision-mission' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Studio', href: '/about/studio' },
      { label: 'Careers', href: '/about/careers' },
      { label: 'Press', href: '/about/press' },
    ],
  },
  {
    title: 'Work',
    items: [
      { label: 'Featured projects', href: '/work' },
      { label: 'Exhibition booths', href: '/work/by-service/exhibition-booths' },
      { label: 'Packaging', href: '/work/by-service/packaging' },
      { label: 'Branding', href: '/work/by-service/branding' },
      { label: 'Activations', href: '/work/by-service/activations' },
      { label: 'Government work', href: '/work/by-industry/government' },
    ],
  },
  {
    title: 'Insights',
    items: [
      { label: 'All insights', href: '/insights' },
      { label: 'Exhibition design', href: '/insights/category/exhibition-design' },
      { label: 'Packaging innovation', href: '/insights/category/packaging-innovation' },
      { label: 'Fabrication techniques', href: '/insights/category/fabrication-techniques' },
      { label: 'Industry trends', href: '/insights/category/industry-trends' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-px border-t border-line-subtle bg-base">
      <Container size="wide" className="pb-12 pt-20 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand block */}
          <div className="flex flex-col gap-8">
            <Logo />
            <p className="body-md max-w-sm text-pretty">{site.shortDescription}</p>
            <div className="flex flex-col gap-2 text-[0.875rem] text-ink-muted">
              <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-copper">
                {site.contact.email}
              </a>
              <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-copper">
                {site.contact.phone}
              </a>
              <address className="not-italic text-ink-quiet">
                {site.hq.line1} &middot; {site.hq.line2} &middot; {site.hq.country}
              </address>
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="label-eyebrow text-ink-quiet">{col.title}</p>
              <ul className="mt-6 space-y-3">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="text-[0.9375rem] text-ink-muted transition-colors hover:text-copper-soft"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Services + Locations row */}
        <div className="mt-16 grid gap-12 border-t border-line-subtle pt-12 lg:grid-cols-2">
          <div>
            <p className="label-eyebrow text-ink-quiet">Services</p>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[0.875rem] text-ink-muted hover:text-copper-soft">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-eyebrow text-ink-quiet">Locations</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-2">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="text-[0.875rem] text-ink-muted hover:text-copper-soft">
                    {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-line-subtle pt-8 text-[0.8125rem] text-ink-quiet md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href={site.social.instagram} target="_blank" rel="noreferrer" className="hover:text-copper">Instagram</a>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-copper">LinkedIn</a>
            <a href={site.social.behance} target="_blank" rel="noreferrer" className="hover:text-copper">Behance</a>
            <Link href="/ar" className="hover:text-copper">العربية</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
