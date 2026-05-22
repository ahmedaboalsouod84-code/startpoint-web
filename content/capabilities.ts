import type { Capability } from '@/types/content';

export const capabilities: Capability[] = [
  {
    slug: 'design-studio',
    title: 'Design Studio',
    tagline: 'A senior-led studio thinking with the workshop next door.',
    intro:
      'Concept, art direction, industrial design, and 3D — under the same roof as the workshop that builds it. Decisions get pressure-tested by makers from day one.',
    bullets: [
      'Senior leads on every project, not account-managed away',
      'Concept and creative direction',
      'Industrial design for fixtures, furniture, and installations',
      '3D visualisation tied to production geometry',
      'Brand identity and motion direction',
      'Photography and content art direction',
    ],
    heroImage: '/media/asset-01.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Design Studio — Start Point Riyadh',
      description: 'A senior-led design studio working alongside the workshop — concept, art direction, industrial design, and 3D, all in Riyadh.',
    },
  },
  {
    slug: 'fabrication',
    title: 'Fabrication',
    tagline: 'CNC, joinery, metal, and spray under one Riyadh roof.',
    intro:
      'A 2,400 m² Riyadh fabrication facility with CNC routing, spray finishing, metal fab, and full assembly. We self-perform — no subcontracted joinery handoffs.',
    bullets: [
      '3-axis CNC routing up to 3050 × 1525 mm',
      'Spray booth and lacquer finishing',
      'Mild steel, stainless, and aluminium fabrication',
      'Powder coating and patinated finishes',
      'In-house assembly and dry-build',
      'Logistics and crating for KSA and GCC distribution',
    ],
    heroImage: '/media/asset-02.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Fabrication Workshop Riyadh | CNC, Joinery, Metalwork',
      description: 'In-house Riyadh fabrication workshop: CNC, joinery, spray finishing, metalwork, and assembly under one roof.',
    },
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    tagline: 'Short-run manufacturing for packaging, POS, and retail rollout.',
    intro:
      'A separate manufacturing line for repeat-production work — packaging, POS displays, retail rollout fixtures, and merchandising units.',
    bullets: [
      'Short-run packaging (rigid box, set-up, magnetic)',
      'POS and merchandising rollout fixtures',
      'Counter and display production runs',
      'Quality-controlled batch production',
      'Inventory and warehouse-side fulfilment',
    ],
    heroImage: '/media/asset-03.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Short-Run Manufacturing Saudi Arabia | Packaging & POS',
      description: 'Short-run manufacturing for packaging, POS, and retail rollout — quality-controlled batch production from Riyadh.',
    },
  },
  {
    slug: 'printing-finishing',
    title: 'Printing & Finishing',
    tagline: 'Wide-format, foiling, embossing — every finish under one roof.',
    intro:
      'A complete print and finishing facility: wide-format, direct-to-board, UV, foil, emboss, deboss, spot UV, and screen.',
    bullets: [
      'Direct-to-board and wide-format UV printing',
      'Foil stamping (gold, copper, silver, holo)',
      'Emboss, deboss, and spot UV',
      'Screen and DTF printing for apparel and merch',
      'SEG fabric printing and sublimation',
      'Lamination and cut-to-shape finishing',
    ],
    heroImage: '/media/asset-04.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Print & Finishing Studio Riyadh | UV, Foil, Emboss, SEG',
      description: 'Complete print and finishing facility in Riyadh — UV, foil, emboss, spot UV, screen, and SEG fabric printing.',
    },
  },
  {
    slug: 'installation-deployment',
    title: 'Installation & Deployment',
    tagline: 'Self-perform install crews, certified for KSA venues.',
    intro:
      'In-house install crews — no subcontracted labour for build-up. Certified for major Saudi exhibition halls and event venues, supervised by senior project managers.',
    bullets: [
      'In-house riggers, joiners, and electricians',
      'Site supervision by senior project managers',
      'Health & safety compliance for KSA venues',
      'On-stand support for the full show run',
      'Dismantle, storage, and re-deployment',
    ],
    heroImage: '/media/asset-05.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Exhibition Install Crew Saudi Arabia | Certified Venue Install',
      description: 'In-house install and deployment crews certified for major KSA exhibition halls and event venues.',
    },
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    tagline: 'A single point of contact through brief, build, and aftercare.',
    intro:
      'Senior project management on every engagement — one PM owns brief, schedule, budget, site, and snag. No relay-race handoffs.',
    bullets: [
      'One senior PM per programme',
      'Schedule and budget owned end-to-end',
      'Daily status reporting on live builds',
      'Site supervision and snag walkthroughs',
      'Aftercare and re-deployment coordination',
    ],
    heroImage: '/media/asset-06.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Project Management for Brand Production | Start Point',
      description: 'Senior project management for exhibition, fit-out, and activation programmes — one PM, end-to-end.',
    },
  },
  {
    slug: 'quality-control',
    title: 'Quality Control',
    tagline: 'Documented QC at every line stop, photographed before despatch.',
    intro:
      'Quality control is a documented process at our workshop — bench-stage sign-off, finish inspection, photographed despatch records on every project.',
    bullets: [
      'Per-stage QC sign-off (cut, assemble, finish, pack)',
      'Documented finish inspection',
      'Photographed despatch records',
      'Snag tracking and resolution log',
      'Post-install warranty walkthrough',
    ],
    heroImage: '/media/asset-07.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Quality Control & Finish Standards | Start Point Workshop',
      description: 'Documented quality control at every line stop — bench-stage sign-off, finish inspection, photographed despatch.',
    },
  },
  {
    slug: 'joint-ventures',
    title: 'Joint Ventures',
    tagline: 'A KSA execution partner for global agencies and operators.',
    intro:
      'We partner with global experiential agencies, set designers, and operators delivering into KSA. White-label or co-credited — we bring local execution, our facility, and our crews.',
    bullets: [
      'White-label execution for international agencies',
      'Co-credited delivery on cultural and government programmes',
      'KSA procurement and regulatory navigation',
      'Local cost benchmarking and value engineering',
      'Pre-deployment dry-build in our Riyadh workshop',
    ],
    heroImage: '/media/asset-08.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'KSA Execution Partner for Global Agencies | Start Point',
      description: 'Joint-venture execution partner for global experiential agencies and operators delivering into Saudi Arabia.',
    },
  },
];

export const capabilityBySlug = (slug: string) =>
  capabilities.find((c) => c.slug === slug);
