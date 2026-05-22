import type { Project } from '@/types/content';

export const projects: Project[] = [
  // 4 fully-built case studies
  {
    slug: 'leap-2025-pavilion',
    status: 'live',
    title: 'A 480 m² hero pavilion at LEAP 2025',
    client: 'Federal Authority',
    year: 2025,
    location: 'Riyadh — Malham',
    service: 'exhibition-booths-riyadh',
    industry: 'government-public-sector',
    tagline: 'A government pavilion built to anchor the LEAP show floor.',
    summary:
      'Concept to install in 11 weeks. Double-deck pavilion, 480 m², integrated AV wall, ministerial reception suite, and a live demo hall for 12 sector exhibitors.',
    heroImage: '/media/asset-04.jpeg',
    imagePlaceholder: true,
    credits: [
      { role: 'Client', name: 'Federal Authority' },
      { role: 'Programme', name: 'LEAP 2025' },
      { role: 'Concept & design', name: 'Start Point Studio' },
      { role: 'Fabrication', name: 'Start Point Workshop, Riyadh' },
      { role: 'AV integration', name: 'Start Point + Sector partner' },
      { role: 'Install', name: 'Start Point in-house crew' },
    ],
    challenge:
      'A sector pavilion at LEAP carries weight: it stands for a national agenda, and it shares a hall with the most-watched stands in the region. The brief was to articulate sector ambition, host twelve in-pavilion exhibitors, and survive five days of ministerial walkthroughs without a single snag.',
    approach:
      'A double-deck pavilion with a dedicated ministerial reception suite raised above the floor, allowing private walkthroughs that did not interrupt public dwell. The exhibitor zones below were treated as a curated hall, not a row of stalls — material story shared, sightlines protected, content moments engineered into the journey.',
    execution:
      'Eleven weeks from concept to install. Full dry-build in the Riyadh workshop with the install crew present. Pre-fitted AV. On-site build-up in six days, snag-walked clean two hours before doors. Daily snag-and-finish on every show day.',
    materials: [
      'CNC-routed timber screens, sprayed in a custom matte stone finish',
      'Brushed brass channel detailing',
      'Tensioned fabric ceiling with integrated programmable LED',
      '12 m hero LED wall with custom-mounted hardware',
      'Solid surface counters with edge-lit glazing',
    ],
    gallery: [
      '/media/asset-05.jpeg',
      '/media/asset-06.jpeg',
      '/media/asset-07.jpeg',
      '/media/asset-08.jpeg',
    ],
    outcome: [
      { stat: '480 m²', label: 'Double-deck footprint' },
      { stat: '11 weeks', label: 'Brief to install' },
      { stat: '0', label: 'Snags on opening' },
      { stat: '12', label: 'In-pavilion exhibitors hosted' },
    ],
    testimonial: {
      quote:
        'They delivered a 480 m² pavilion to LEAP standards with zero snags on opening day. They are the only KSA contractor we put on closed tender now.',
      author: 'Director of Marketing',
      role: 'Director of Marketing, Federal Authority',
    },
    seo: {
      title: 'LEAP 2025 Government Pavilion — 480 m² Case Study | Start Point',
      description: 'Concept to install in 11 weeks. A 480 m² double-deck government pavilion delivered for LEAP 2025 in Riyadh.',
    },
  },

  {
    slug: 'luxury-reception-fitout',
    status: 'live',
    title: 'A luxury hospitality reception, sculpted in walnut',
    client: 'Luxury Hospitality Group',
    year: 2024,
    location: 'Riyadh',
    service: 'branded-installations',
    industry: 'hospitality-hotels',
    tagline: 'A sculptural reception wall and integrated lighting installation.',
    summary:
      'A 22-metre sculpted walnut wall with embedded lighting, custom reception desk, and acoustic ceiling treatment for the arrival sequence of a luxury hospitality flagship.',
    heroImage: '/media/asset-09.jpeg',
    imagePlaceholder: true,
    credits: [
      { role: 'Client', name: 'Luxury Hospitality Group' },
      { role: 'Architect', name: 'International studio (NDA)' },
      { role: 'Fabrication', name: 'Start Point Workshop, Riyadh' },
      { role: 'Lighting', name: 'Start Point + lighting consultant' },
      { role: 'Install', name: 'Start Point in-house crew' },
    ],
    challenge:
      'The architect issued a sculpted wall as the arrival anchor — a 22-metre curved walnut surface with integrated lighting, no visible fixings, and a finish standard set by the group\'s European flagship.',
    approach:
      'We engineered the wall as a series of CNC-machined sections, each sub-built in the workshop and finish-sanded by hand. Lighting integration was designed at the joinery stage, not added after, so every diode hides behind a continuous walnut grain.',
    execution:
      'Workshop pre-build over four weeks with the architect attending sample sign-off twice. Transport in custom crates. Site install in eight days with one snag walk and zero remediation visits required.',
    materials: [
      'European walnut veneer on FSC engineered substrate',
      'Hand-finished spray with three-coat lacquer',
      'Integrated linear LED with custom diffuser',
      'Acoustic backing for noise transmission control',
    ],
    gallery: ['/media/asset-01.jpeg', '/media/asset-02.jpeg', '/media/asset-03.jpeg'],
    outcome: [
      { stat: '22 m', label: 'Sculpted wall length' },
      { stat: '0', label: 'Remediation visits' },
      { stat: '6 weeks', label: 'Workshop to install' },
    ],
    testimonial: {
      quote: 'The joinery quality is at international fit-out standard. Our finish walks are now their team\'s benchmark.',
      author: 'Project Lead',
      role: 'Project Lead, Luxury Hospitality Group',
    },
    seo: {
      title: 'Luxury Reception Fit-out — Sculpted Walnut Wall | Start Point',
      description: 'A 22-metre sculpted walnut reception wall with integrated lighting for a luxury hospitality flagship in Riyadh.',
    },
  },

  {
    slug: 'banking-mall-activation',
    status: 'live',
    title: 'A nine-city retail activation programme for a national bank',
    client: 'National Bank',
    year: 2024,
    location: 'Saudi Arabia (nine cities)',
    service: 'custom-stands-saudi-arabia',
    industry: 'banking-financial-services',
    tagline: 'A custom-built activation unit deployed weekly across KSA malls.',
    summary:
      'A flight-cased modular stand engineered for a two-person install crew. Nine cities, fourteen activations, twelve months — same brand finish on every floor.',
    heroImage: '/media/asset-06.jpeg',
    imagePlaceholder: true,
    credits: [
      { role: 'Client', name: 'National Bank' },
      { role: 'Programme', name: 'Retail mall activation' },
      { role: 'Design & build', name: 'Start Point Studio + Workshop' },
      { role: 'Tour supervision', name: 'Start Point project crew' },
    ],
    challenge:
      'The bank wanted retail customer-acquisition presence in nine cities, on a weekly cadence, with the same finish standard the in-branch experience holds. The previous tour vehicle took twelve people three days to install.',
    approach:
      'We re-engineered the entire stand as numbered flight-cased modules with a single-page install manual. Aluminium frame, magnetic graphic panels for fast artwork change-out, solid-surface counters with brand-grade lamination, integrated AV in pre-cabled modules.',
    execution:
      'Full dry-build with the tour crew in our Riyadh workshop. The first activation took three days. The ninth took three hours. Quarterly graphic refreshes shipped to the tour, swapped in 40 minutes.',
    materials: [
      'Aluminium frame system, powder-coated',
      'Magnetic graphic panels with print refresh kits',
      'Solid surface counters',
      'Integrated AV with pre-cabled modules',
    ],
    gallery: ['/media/asset-07.jpeg', '/media/asset-08.jpeg', '/media/asset-09.jpeg'],
    outcome: [
      { stat: '14', label: 'Activations in 12 months' },
      { stat: '9', label: 'Cities served' },
      { stat: '3 hrs', label: 'Install time by activation 9' },
      { stat: '2', label: 'Person crew (down from 12)' },
    ],
    testimonial: {
      quote: 'They run our nine-city retail roadshow on a two-person crew. The first build took three days. The ninth took three hours.',
      author: 'Head of Retail Marketing',
      role: 'Head of Retail Marketing, National Bank',
    },
    seo: {
      title: 'Banking Mall Roadshow — Nine-City Activation | Start Point',
      description: 'A nine-city retail mall activation tour for a Saudi national bank — custom-built modular stand, two-person install crew.',
    },
  },

  {
    slug: 'perfume-house-launch-pack',
    status: 'live',
    title: 'A rigid launch pack for an independent perfume house',
    client: 'Independent Perfume House',
    year: 2024,
    location: 'Riyadh',
    service: 'packaging-manufacturing',
    industry: 'beauty-cosmetics',
    tagline: 'A magnetic-closure rigid box with hand-applied foil and custom EVA cradle.',
    summary:
      'A launch pack built for the press drop and first-buyer programme — 1,200 units, magnetic-closure rigid box, hand-applied copper foil, custom EVA cradle for the 100ml decanter and accompanying notebook.',
    heroImage: '/media/asset-02.jpeg',
    imagePlaceholder: true,
    credits: [
      { role: 'Client', name: 'Independent Perfume House' },
      { role: 'Brand', name: 'House in-house creative' },
      { role: 'Packaging design', name: 'Start Point Studio' },
      { role: 'Manufacturing', name: 'Start Point Packaging Line' },
    ],
    challenge:
      'A new perfume house with a singular hero product. The pack had to communicate maison-grade craft for press drop, and ship cleanly to early customers without damage.',
    approach:
      'A 2.5mm greyboard rigid box with magnetic closure, wrapped in a textured Italian specialty paper. Hand-applied copper foil for the wordmark, blind deboss on the brand mark. Custom-cut EVA cradle inside, holding the decanter and a letterpress notebook.',
    execution:
      'Two sample rounds before tooling. 1,200 units run with hand-finish QC. Photographed despatch records, individually shipped to the press list through DHL.',
    materials: [
      'Greyboard 2500 gsm rigid core',
      'Italian textured specialty paper wrap',
      'Copper foil stamp, hand-applied',
      'Custom-cut EVA cradle',
      'Letterpress notebook insert',
    ],
    gallery: ['/media/asset-03.jpeg', '/media/asset-04.jpeg', '/media/asset-05.jpeg'],
    outcome: [
      { stat: '1,200', label: 'Units delivered' },
      { stat: '2', label: 'Sample rounds before tooling' },
      { stat: '0', label: 'Return reports' },
    ],
    seo: {
      title: 'Perfume House Launch Pack — Rigid Box Case Study | Start Point',
      description: 'A 1,200-unit magnetic-closure rigid launch pack with hand-applied copper foil for an independent KSA perfume house.',
    },
  },

  // 4 stubs — index-visible, slug pages render with "in development" copy
  {
    slug: 'biban-government-stand',
    status: 'stub',
    title: 'Biban government innovation stand',
    client: 'Government Authority',
    year: 2024,
    location: 'Riyadh',
    service: 'exhibition-booths-riyadh',
    industry: 'government-public-sector',
    tagline: 'A 220 m² innovation stand for Biban.',
    summary: 'A 220 m² innovation stand built for Biban with integrated demo zones and a ministerial reception suite.',
    heroImage: '/media/asset-07.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Biban Government Innovation Stand | Start Point',
      description: 'A 220 m² innovation stand built for Biban with integrated demo zones.',
    },
  },
  {
    slug: 'riyadh-season-activation',
    status: 'stub',
    title: 'A Riyadh Season sponsor activation',
    client: 'Sponsor brand (NDA)',
    year: 2024,
    location: 'Riyadh',
    service: 'event-activations',
    industry: 'festivals-cultural-activations',
    tagline: 'A six-week sponsor activation in Boulevard World.',
    summary: 'A six-week sponsor activation built for Boulevard World, including a photo-anchor pavilion and three sub-zones for daily content drops.',
    heroImage: '/media/asset-10.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Riyadh Season Sponsor Activation | Start Point',
      description: 'A six-week sponsor activation for a major brand at Boulevard World, Riyadh Season.',
    },
  },
  {
    slug: 'fmcg-roadshow-tour',
    status: 'stub',
    title: 'FMCG sampling roadshow across the GCC',
    client: 'FMCG brand',
    year: 2023,
    location: 'KSA + UAE',
    service: 'custom-stands-saudi-arabia',
    industry: 'fmcg-consumer-goods',
    tagline: 'A cross-border sampling tour with daily redeployment.',
    summary: 'A modular sampling rig deployed across 22 KSA and UAE locations in six weeks — fast-deploy, fast-strike, daily artwork swap.',
    heroImage: '/media/asset-01.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'FMCG Cross-Border Sampling Tour | Start Point',
      description: 'A 22-location sampling tour across KSA and UAE for an FMCG brand.',
    },
  },
  {
    slug: 'gallery-casework-build',
    status: 'stub',
    title: 'Museum-grade gallery casework',
    client: 'Cultural institution',
    year: 2024,
    location: 'Riyadh',
    service: 'custom-fabrication',
    industry: 'museums-exhibitions-spaces',
    tagline: 'Casework for a touring contemporary exhibition.',
    summary: 'A casework programme for a touring contemporary exhibition — museum-grade joinery, archival lighting, custom mounts.',
    heroImage: '/media/asset-08.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Museum Gallery Casework Build | Start Point',
      description: 'A museum-grade casework programme for a touring contemporary exhibition in Riyadh.',
    },
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const projectsByService = (serviceSlug: string) =>
  projects.filter((p) => p.service === serviceSlug);

export const projectsByIndustry = (industrySlug: string) =>
  projects.filter((p) => p.industry === industrySlug);

export const projectsByYear = (year: number) =>
  projects.filter((p) => p.year === year);

export const projectYears = () =>
  Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a);
