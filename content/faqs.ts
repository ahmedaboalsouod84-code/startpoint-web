import type { Faq } from '@/types/content';

// Shared FAQ pool, tagged so services / industries / location pages can pull relevant items.
export const faqs: Faq[] = [
  {
    id: 'lead-time-booth',
    q: 'How early should we brief you for a major Riyadh exhibition?',
    a: 'For hero stands above 200 m², ten to twelve weeks before move-in gives the cleanest result. Shell-scheme upgrades can be turned in four to six weeks if drawings are ready.',
    tags: ['booth', 'exhibition', 'riyadh'],
  },
  {
    id: 'venue-permits',
    q: 'Do you handle hall regulations and permits?',
    a: 'Yes. We submit risk assessments, method statements, electrical drawings, and rigging certificates for every major Saudi venue including RICEC, RFECC, Jeddah Superdome, and Dhahran Expo.',
    tags: ['booth', 'exhibition'],
  },
  {
    id: 'reuse-booth',
    q: 'Can the booth be reused at a second show?',
    a: 'We design modular core elements so a 70 to 90 percent reuse rate is realistic across two or three shows — sized to fit standard road cases.',
    tags: ['booth', 'custom-stands'],
  },
  {
    id: 'arch-drawings',
    q: 'Can you build from architect\'s drawings?',
    a: 'Yes. Most of our fit-out and joinery work comes through architects and interior designers. We provide value-engineering and shop drawings to match.',
    tags: ['fabrication', 'installation'],
  },
  {
    id: 'cities-served',
    q: 'Which cities do you deliver into?',
    a: 'Riyadh, Jeddah, Dammam, NEOM, and cross-border into Dubai, Abu Dhabi, Doha, and Kuwait. KSA work runs from our Riyadh workshop; GCC work runs from Riyadh with on-site install crew supplied.',
    tags: ['locations', 'delivery'],
  },
  {
    id: 'budget-start',
    q: 'What is a typical project budget?',
    a: 'Booth and stand projects start at SAR 180,000 for a 50 m² custom build. Hero stands range SAR 600,000 to SAR 4M+. Custom fit-out is quoted by drawing. Packaging runs start at SAR 35,000.',
    tags: ['budget', 'commercial'],
  },
  {
    id: 'quote-turnaround',
    q: 'How quickly can you respond to a quote request?',
    a: 'A first response within 24 hours. A detailed scope and budget proposal within 5 working days for most briefs.',
    tags: ['quote', 'commercial'],
  },
  {
    id: 'agency-partnership',
    q: 'Do you work with international agencies as a local execution partner?',
    a: 'Yes. We white-label or co-credit for international experiential agencies, set designers, and operators delivering into KSA. We handle procurement, compliance, fabrication, and crew.',
    tags: ['joint-ventures', 'agency'],
  },
];

export const faqsByTag = (tag: string) =>
  faqs.filter((f) => f.tags.includes(tag));
