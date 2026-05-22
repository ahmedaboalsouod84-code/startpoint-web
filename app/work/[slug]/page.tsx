import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { StatBlock } from '@/components/marketing/StatBlock';
import { WorkCard } from '@/components/marketing/WorkCard';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { JsonLd } from '@/components/seo/JsonLd';
import { projects, projectBySlug } from '@/content/projects';
import { serviceBySlug } from '@/content/services';
import { industryBySlug } from '@/content/industries';
import { buildMetadata } from '@/lib/seo/buildMetadata';
import { projectSchema } from '@/lib/seo/schema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: `/work/${project.slug}`,
    ogImage: project.heroImage,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return notFound();

  const service = serviceBySlug(project.service);
  const industry = industryBySlug(project.industry);
  const related = projects.filter((p) => p.slug !== project.slug && (p.service === project.service || p.industry === project.industry)).slice(0, 2);

  const isStub = project.status === 'stub';

  return (
    <>
      {/* Hero film/image */}
      <section className="relative pt-28 md:pt-36">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Work', href: '/work' },
              { name: project.title, href: `/work/${project.slug}` },
            ]}
          />
          <div className="mt-10 max-w-4xl">
            <Eyebrow>{project.client} &middot; {project.year}</Eyebrow>
            <h1 className="display-1 mt-6 text-balance">{project.title}</h1>
            <p className="body-lg mt-7 max-w-2xl text-pretty">{project.summary}</p>
          </div>
        </div>
        <div className="relative mt-16 aspect-[16/9] w-full overflow-hidden md:mt-20">
          <Image src={project.heroImage} alt={project.title} fill priority sizes="100vw" className="object-cover" />
        </div>
      </section>

      {isStub ? (
        <Section pad="md">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <Eyebrow>Case study in production</Eyebrow>
            <p className="font-display text-[1.5rem] leading-snug text-ink text-balance">
              The full case study for this project is being written. In the meantime, see related work below — or get in touch and we&rsquo;ll share the full project brief on a call.
            </p>
          </div>
        </Section>
      ) : (
        <>
          {/* Project credits */}
          {project.credits && (
            <Section pad="md" className="border-t border-line-subtle">
              <Eyebrow>Project credits</Eyebrow>
              <dl className="mt-8 grid gap-px overflow-hidden border border-line-subtle bg-line-subtle md:grid-cols-2 lg:grid-cols-3">
                {project.credits.map((c) => (
                  <div key={c.role} className="bg-base p-7">
                    <dt className="label-eyebrow text-ink-quiet">{c.role}</dt>
                    <dd className="mt-2 text-[0.9375rem] text-ink">{c.name}</dd>
                  </div>
                ))}
              </dl>
            </Section>
          )}

          {/* Challenge / Approach / Execution */}
          {(project.challenge || project.approach || project.execution) && (
            <Section pad="md" className="border-t border-line-subtle">
              <div className="grid gap-16 lg:grid-cols-3">
                {project.challenge && (
                  <div>
                    <Eyebrow>Challenge</Eyebrow>
                    <p className="body-lg mt-6 text-pretty">{project.challenge}</p>
                  </div>
                )}
                {project.approach && (
                  <div>
                    <Eyebrow>Approach</Eyebrow>
                    <p className="body-lg mt-6 text-pretty">{project.approach}</p>
                  </div>
                )}
                {project.execution && (
                  <div>
                    <Eyebrow>Execution</Eyebrow>
                    <p className="body-lg mt-6 text-pretty">{project.execution}</p>
                  </div>
                )}
              </div>
            </Section>
          )}

          {/* Materials / process */}
          {project.materials && project.materials.length > 0 && (
            <Section pad="md" className="border-t border-line-subtle">
              <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
                <Eyebrow>Materials &amp; process</Eyebrow>
                <ul className="grid gap-3 border-t border-line-subtle">
                  {project.materials.map((m) => (
                    <li key={m} className="flex items-start gap-3 border-b border-line-subtle py-3 text-[0.9375rem] text-ink-muted">
                      <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-copper" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Section>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <Section pad="md" className="border-t border-line-subtle">
              <Eyebrow>Gallery</Eyebrow>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {project.gallery.map((img, i) => (
                  <div key={img + i} className={`relative overflow-hidden ${i === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[5/4]'}`}>
                    <Image src={img} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Outcome */}
          {project.outcome && project.outcome.length > 0 && (
            <Section pad="md" className="border-t border-line-subtle">
              <Eyebrow>Outcome</Eyebrow>
              <div className="mt-10">
                <StatBlock stats={project.outcome.map((o) => ({ value: o.stat, label: o.label }))} />
              </div>
            </Section>
          )}

          {/* Testimonial */}
          {project.testimonial && (
            <Section pad="lg" className="border-t border-line-subtle">
              <div className="mx-auto max-w-4xl">
                <span className="block font-display text-[3rem] leading-none text-copper">&ldquo;</span>
                <blockquote className="mt-4 font-display text-[clamp(1.5rem,1rem+1.2vw,2rem)] leading-snug text-ink text-balance">
                  {project.testimonial.quote}
                </blockquote>
                <footer className="mt-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-line-strong" />
                  <cite className="not-italic text-ink-muted">{project.testimonial.role}</cite>
                </footer>
              </div>
            </Section>
          )}
        </>
      )}

      {/* Related */}
      {related.length > 0 && (
        <Section pad="lg" className="border-t border-line-subtle">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Related projects</Eyebrow>
              <h2 className="display-3 mt-5">More from the workshop.</h2>
            </div>
          </div>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {related.map((p, i) => (
              <WorkCard key={p.slug} project={p} aspect={i % 2 === 0 ? 'tall' : 'square'} />
            ))}
          </div>
        </Section>
      )}

      <CtaBlock
        title={<>Working on something similar?</>}
        body={`We've delivered ${service?.title.toLowerCase() ?? 'work'} for ${industry?.title.toLowerCase() ?? 'this sector'} before — let's talk through your brief.`}
      />

      <JsonLd data={projectSchema(project)} />
    </>
  );
}
