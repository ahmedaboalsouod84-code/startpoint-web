import type { Service } from '@/types/content';

export const services: Service[] = [
  {
    slug: 'exhibition-booths-riyadh',
    title: 'Exhibition Booths',
    shortTitle: 'Booths',
    category: 'fabrication',
    tagline: 'Custom-built exhibition stands engineered in Riyadh, installed across Saudi Arabia.',
    intro:
      'We design and fabricate exhibition booths from a single Riyadh-based workshop — concept, joinery, print, electrics, and on-site install handled by one team. From 18 m² shell schemes to 600 m² hero stands at LEAP, Biban, and Saudi Build, every booth is built to live for the run, dismantle cleanly, and travel if you need it again.',
    approach: [
      'Brief-led concept design, anchored to your campaign or product story.',
      'Production-grade 3D visualisation before a single panel is cut.',
      'In-house fabrication: joinery, metalwork, print, lighting, AV integration.',
      'Self-perform installation and on-stand support for the full show run.',
    ],
    capabilities: [
      'Double-deck and hero stands up to 600 m²',
      'Custom hanging banners and rigged structures',
      'Integrated AV, LED walls, and interactive zones',
      'Modular systems for travelling exhibitors',
      'Saudi Build, LEAP, Biban, Black Hat MEA, Cityscape ready',
      'Health & safety compliance for KSA exhibition halls',
    ],
    materials: [
      'CNC-cut MDF and plywood, veneered or sprayed',
      'Powder-coated steel and aluminium framing',
      'Tensioned fabric and direct-print SEG graphics',
      'Acrylic, Corian, and solid-surface joinery',
      'LED strip, profile lighting, and architectural fittings',
    ],
    process: [
      { no: '01', title: 'Brief', body: 'A 60-minute discovery on objective, audience, footprint, and budget.' },
      { no: '02', title: 'Concept', body: 'Two routes of 3D visuals within 7 working days for sign-off.' },
      { no: '03', title: 'Build', body: 'Cut lists released, workshop production runs in parallel with print and electrics.' },
      { no: '04', title: 'Install', body: 'Crew on site at build-up, daily checks during the run, full dismantle and storage on close.' },
    ],
    relatedProjects: ['leap-2025-pavilion', 'biban-government-stand'],
    relatedServices: ['custom-stands-saudi-arabia', '3d-visualization', 'branded-installations'],
    faqs: [
      {
        q: 'How early should we brief you for a major Riyadh exhibition?',
        a: 'For hero stands above 200 m², ten to twelve weeks before move-in gives the cleanest result. Shell-scheme upgrades can be turned in four to six weeks if drawings are ready.',
      },
      {
        q: 'Do you handle hall regulations and permits?',
        a: 'Yes. We submit risk assessments, method statements, electrical drawings, and rigging certificates for every major Saudi venue including RICEC, RFECC, Jeddah Superdome, and Dhahran Expo.',
      },
      {
        q: 'Can the booth be reused at a second show?',
        a: 'We design modular core elements so a 70 to 90 percent reuse rate is realistic across two or three shows — sized to fit standard road cases.',
      },
    ],
    quickAnswers: [
      { q: 'Cities served', a: 'Riyadh, Jeddah, Dammam, NEOM, Dubai, Doha.' },
      { q: 'Typical lead time', a: '6–12 weeks depending on scale.' },
      { q: 'Starting budget', a: 'From SAR 180,000 for a 50 m² custom stand.' },
    ],
    heroImage: '/media/asset-01.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Exhibition Booths in Riyadh | Custom Stand Contractor Saudi Arabia',
      description:
        'Custom exhibition booth design, fabrication, and installation across Riyadh and Saudi Arabia. Single-source studio for LEAP, Biban, Saudi Build, and Cityscape.',
    },
  },
  {
    slug: 'custom-stands-saudi-arabia',
    title: 'Custom Stands',
    shortTitle: 'Custom Stands',
    category: 'fabrication',
    tagline: 'Bespoke stand design for retail, conference, and roadshow programmes.',
    intro:
      'Where a booth is built for a single show, a custom stand is built for a programme — recurring retail activations, sampling tours, conference foyers, and dealership take-overs. We engineer for repeat install, fast deployment, and brand consistency across cities.',
    approach: [
      'Programme-first design: think install crew of two, not twelve.',
      'Flight-cased, numbered, and shipped with rigger drawings.',
      'On-brand finish quality maintained across every redeploy.',
    ],
    capabilities: [
      'Modular pop-up systems, custom-skinned',
      'Mall atrium stands and shop-in-shop builds',
      'Conference foyer takeovers and registration zones',
      'Roadshow units (truck-deployed)',
      'Repeat-install training and on-site supervision',
    ],
    materials: [
      'Aluminium frame systems with custom skins',
      'Solid-surface counters with brand-grade laminate',
      'Tension fabric on snap-frame for fast change-out',
      'Magnetic graphic panels for in-tour artwork swaps',
    ],
    process: [
      { no: '01', title: 'Programme', body: 'Map the full tour: cities, dates, install windows, storage between.' },
      { no: '02', title: 'Design for install', body: 'Engineer every module to flat-pack and crew up in under two hours.' },
      { no: '03', title: 'Build & test', body: 'Full dry-build in our Riyadh workshop with the install crew present.' },
      { no: '04', title: 'Deploy', body: 'Our team rides the tour, or we train and supervise yours.' },
    ],
    relatedProjects: ['banking-mall-activation', 'fmcg-roadshow-tour'],
    relatedServices: ['exhibition-booths-riyadh', 'event-activations', 'branded-installations'],
    faqs: [
      {
        q: 'What is the difference between a custom stand and an exhibition booth?',
        a: 'A custom stand is built for repeat deployment — flight-cased, numbered, with an install manual. An exhibition booth is built for one show. Custom stands cost more upfront and less per activation.',
      },
      {
        q: 'How long does a custom stand typically last?',
        a: 'Built right, three to four years of weekly activations. We refresh graphics and replace high-wear components in-tour.',
      },
    ],
    quickAnswers: [
      { q: 'Best fit for', a: 'Repeat programmes across 3+ activations.' },
      { q: 'Lead time', a: '8–14 weeks for design + first build.' },
    ],
    heroImage: '/media/asset-02.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Custom Stand Builders Saudi Arabia | Roadshow & Mall Stands',
      description:
        'Custom stand design and fabrication for repeat-deployment retail and conference programmes across Saudi Arabia and the GCC.',
    },
  },
  {
    slug: 'custom-fabrication',
    title: 'Custom Fabrication',
    shortTitle: 'Fabrication',
    category: 'fabrication',
    tagline: 'In-house joinery, metalwork, and finishing for one-off branded environments.',
    intro:
      'A single Riyadh workshop running CNC, spray booth, metal fab, and finishing under one roof. We build to your drawings or ours — retail fixtures, sculptural pieces, reception walls, custom furniture, gallery casework.',
    approach: [
      'One team, one workshop — no subcontracted joinery handoffs.',
      'Shop-drawing review before any cut is made.',
      'Sample-driven finish approvals.',
    ],
    capabilities: [
      'CNC routing up to 3050 × 1525 mm',
      'Spray, lacquer, and patinated finishes',
      'Steel and aluminium fabrication and powder coating',
      'Solid-surface (Corian, HI-MACS) thermoforming',
      'Custom furniture and bespoke joinery',
      'POS displays and retail merchandising units',
    ],
    materials: [
      'Walnut, oak, and engineered veneers',
      'Mild steel, stainless steel, aluminium',
      'Corian, HI-MACS, terrazzo, concrete',
      'Acrylic, polycarbonate, frosted PETG',
    ],
    process: [
      { no: '01', title: 'Drawings', body: 'Architect-issued or studio-developed — we review for buildability.' },
      { no: '02', title: 'Samples', body: 'Material and finish samples shipped for sign-off.' },
      { no: '03', title: 'Workshop build', body: 'Full assembly and pre-fit before transport.' },
      { no: '04', title: 'Install', body: 'Site delivery with our install crew and snag walkthrough.' },
    ],
    relatedProjects: ['luxury-reception-fitout', 'gallery-casework-build'],
    relatedServices: ['branded-installations', 'design-consultations'],
    faqs: [
      {
        q: 'Can you build from an architect\'s drawings?',
        a: 'Yes. Most of our fit-out and joinery work comes through architects and interior designers. We provide value-engineering and shop drawings to match.',
      },
    ],
    quickAnswers: [
      { q: 'Workshop size', a: '2,400 m² in Riyadh industrial city.' },
      { q: 'Lead time', a: '4–10 weeks for a custom piece.' },
    ],
    heroImage: '/media/asset-03.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Custom Fabrication Riyadh | Joinery, Metalwork & Finishing',
      description:
        'In-house custom fabrication studio in Riyadh: CNC joinery, metalwork, spray finishing, and bespoke retail and gallery casework.',
    },
  },
  {
    slug: 'packaging-manufacturing',
    title: 'Packaging Manufacturing',
    shortTitle: 'Packaging',
    category: 'fabrication',
    tagline: 'Rigid boxes, custom gift packs, and short-run premium packaging.',
    intro:
      'A dedicated packaging line for premium and promotional runs. Rigid set-up boxes, custom inserts, foiled wraps, and short-run launches when the off-the-shelf supplier cannot meet the brief.',
    approach: [
      'Sample first, scale second — we prototype before any tooling.',
      'Substrate selection led by hand and shelf, not spec sheets.',
      'Quality-controlled at every line stop, photographed before despatch.',
    ],
    capabilities: [
      'Rigid set-up boxes (1-piece, 2-piece, magnetic)',
      'Custom foam, EVA, and thermoformed inserts',
      'Foil, emboss, deboss, and spot UV finishes',
      'Short-run runs from 500 units',
      'Influencer and PR kits',
      'Corporate gift programmes',
    ],
    materials: [
      'Greyboard 1000–2500 gsm rigid cores',
      'Italian and Korean specialty papers and textured wraps',
      'Foil stamping (gold, copper, silver, holo)',
      'EVA, polyfoam, and die-cut paper pulp inserts',
    ],
    process: [
      { no: '01', title: 'Brief', body: 'Product dimensions, weight, run size, budget, target unboxing feel.' },
      { no: '02', title: 'Sample', body: 'A physical sample in 7–10 days for sign-off.' },
      { no: '03', title: 'Production', body: 'Run scheduled, quality-controlled, photographed.' },
      { no: '04', title: 'Despatch', body: 'Palletised and despatched to your warehouse or fulfilment partner.' },
    ],
    relatedProjects: ['perfume-house-launch-pack'],
    relatedServices: ['branding-visual-identity', 'promotional-products-riyadh'],
    faqs: [
      {
        q: 'What is the minimum order quantity?',
        a: '500 units for rigid boxes, 250 units for premium PR kits with hand-assembly. Below that we recommend a one-off bespoke build instead.',
      },
      {
        q: 'Can you handle the design as well?',
        a: 'Yes. Our packaging team works directly with brand and product teams from naming and dieline through to artwork.',
      },
    ],
    quickAnswers: [
      { q: 'Minimum run', a: '500 units (rigid box).' },
      { q: 'Sample time', a: '7–10 working days.' },
    ],
    heroImage: '/media/asset-04.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Custom Packaging Manufacturing Riyadh | Rigid Boxes & Gift Packs',
      description:
        'Premium custom packaging manufacturing in Riyadh: rigid set-up boxes, PR kits, custom inserts, foil and emboss finishing from 500 units.',
    },
  },
  {
    slug: 'promotional-products-riyadh',
    title: 'Promotional Products',
    shortTitle: 'Promo Products',
    category: 'production',
    tagline: 'Branded merchandise sourced and finished to a luxury standard.',
    intro:
      'Corporate gifts, conference giveaways, and influencer kits — sourced, customised, and despatched as a single programme. We avoid the off-the-shelf trap by combining bespoke packaging with curated product selection.',
    approach: [
      'Curated product selection, not catalogue dumping.',
      'In-house finishing: laser, deboss, screen print, full-colour DTF.',
      'Bundled with custom packaging and ribbon for a complete unbox.',
    ],
    capabilities: [
      'Corporate and government gifting programmes',
      'Conference attendee kits and lanyards',
      'Influencer PR kits with bespoke packaging',
      'Apparel and embroidered uniform runs',
      'Luxury leather and wood goods customisation',
    ],
    materials: [
      'Full-grain leather, cork, and recycled textiles',
      'Walnut, oak, and bamboo for desk objects',
      'Anodised aluminium and brass for hardware',
      'Specialty papers for inserts and cards',
    ],
    process: [
      { no: '01', title: 'Programme spec', body: 'Audience, quantity, budget per unit, desired unbox experience.' },
      { no: '02', title: 'Curation', body: 'Three product directions with samples.' },
      { no: '03', title: 'Customisation', body: 'Branding applied in our finishing shop.' },
      { no: '04', title: 'Fulfilment', body: 'Hand-assembled, packed, and despatched to your list.' },
    ],
    relatedProjects: [],
    relatedServices: ['packaging-manufacturing', 'branding-visual-identity'],
    faqs: [
      {
        q: 'Can you ship directly to a recipient list?',
        a: 'Yes — we handle individual addressing and despatch through Aramex, SMSA, and DHL across KSA and the GCC.',
      },
    ],
    quickAnswers: [
      { q: 'Minimum order', a: '100 units for most lines.' },
      { q: 'Lead time', a: '3–6 weeks depending on sourcing.' },
    ],
    heroImage: '/media/asset-05.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Branded Promotional Products Riyadh | Corporate Gifts & PR Kits',
      description:
        'Curated branded merchandise, corporate gifting, and PR kit programmes built and despatched from Riyadh.',
    },
  },
  {
    slug: 'branding-visual-identity',
    title: 'Branding & Visual Identity',
    shortTitle: 'Branding',
    category: 'branding',
    tagline: 'Identity systems engineered for the way a brand actually shows up — printed, built, and lived.',
    intro:
      'We build brand identity systems with one foot in the studio and one foot in the workshop. Marks that work in CNC. Wordmarks that hold at 200 mm. Palettes that survive print, anodise, and ambient light. Brand books that an installer can read.',
    approach: [
      'Identity built around physical application — not just screen.',
      'Material guidelines that name actual stock and process.',
      'Photography and 3D direction included.',
    ],
    capabilities: [
      'Naming and verbal identity',
      'Logo and mark design',
      'Type, palette, and motion direction',
      'Brand guideline systems',
      'Photography and 3D art direction',
      'Brand application across booth, packaging, and environment',
    ],
    materials: [],
    process: [
      { no: '01', title: 'Discovery', body: 'Audience, sector, ambition, restraints.' },
      { no: '02', title: 'Direction', body: 'Three identity territories on real applications, not flat boards.' },
      { no: '03', title: 'System', body: 'Mark, type, palette, motion, photography direction.' },
      { no: '04', title: 'Application', body: 'Booth, packaging, environment, gift suite — all rolled out together.' },
    ],
    relatedProjects: [],
    relatedServices: ['packaging-manufacturing', 'design-consultations'],
    faqs: [
      {
        q: 'Can you handle a full rebrand in 12 weeks?',
        a: 'Yes if the decision-makers are aligned and available. A typical full rebrand runs 14–20 weeks from kickoff to brand book.',
      },
    ],
    quickAnswers: [
      { q: 'Engagement length', a: '12–20 weeks for a full identity system.' },
      { q: 'Output', a: 'Brand book + application across your live touchpoints.' },
    ],
    heroImage: '/media/asset-06.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Brand Identity Design Studio Riyadh | Visual Identity Systems',
      description:
        'Brand identity and visual system design built for real-world application — print, packaging, environment, and motion.',
    },
  },
  {
    slug: 'event-activations',
    title: 'Event Activations',
    shortTitle: 'Activations',
    category: 'production',
    tagline: 'Brand activations engineered to land — from concept to crew, end to end.',
    intro:
      'Sampling pop-ups, product launches, sponsor activations, and influencer experiences. We treat activation as a production problem first: footprint, dwell, throughput, photo-moment — then dress it as a brand.',
    approach: [
      'Activation brief, not just a build brief: dwell, content, capture.',
      'Photo-moment engineered into the architecture.',
      'On-day staffing and run crew supplied if needed.',
    ],
    capabilities: [
      'Pop-up retail and sampling environments',
      'Product launch experiences',
      'Festival and sponsor activations (Riyadh Season, MDLBeast)',
      'Influencer studio takeovers',
      'Run-of-show production crew',
    ],
    materials: [
      'Rapid-deploy modular framing',
      'Tension fabric and rigged hero graphics',
      'AV, LED, and interactive integration',
    ],
    process: [
      { no: '01', title: 'Objective', body: 'Reach, dwell, capture, sales — name the win.' },
      { no: '02', title: 'Format', body: 'Footprint, flow, photo-moment, content plan.' },
      { no: '03', title: 'Build', body: 'Workshop fabrication with logistics for live install.' },
      { no: '04', title: 'Run', body: 'Crew on the ground for the duration. Daily content delivery if briefed.' },
    ],
    relatedProjects: ['riyadh-season-activation', 'banking-mall-activation'],
    relatedServices: ['custom-stands-saudi-arabia', 'branded-installations'],
    faqs: [
      {
        q: 'Do you supply hosts and brand ambassadors?',
        a: 'Yes — through vetted KSA staffing partners. We brief, schedule, and supervise as part of the activation production.',
      },
    ],
    quickAnswers: [
      { q: 'Lead time', a: '4–10 weeks for a full activation programme.' },
      { q: 'Crew', a: 'In-house production, certified for KSA event venues.' },
    ],
    heroImage: '/media/asset-07.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Event Activation Agency Riyadh | Brand Activations Saudi Arabia',
      description:
        'Brand activation production in Riyadh and across KSA — pop-ups, launches, sponsor activations, and festival programmes from concept to run-crew.',
    },
  },
  {
    slug: '3d-visualization',
    title: '3D Visualisation',
    shortTitle: '3D Visualisation',
    category: 'consulting',
    tagline: 'Production-grade visuals that close approvals before a panel is cut.',
    intro:
      'Photoreal 3D for booth, fit-out, packaging, and activation work. We model in production — meaning the visuals you sign off are the same geometry the workshop will cut.',
    approach: [
      'Visuals built from production geometry, not artist mock-ups.',
      'Material library mapped to real workshop stock.',
      'Walkthrough video and VR review available.',
    ],
    capabilities: [
      'Exhibition booth and stand visualisation',
      'Retail and fit-out renders',
      'Packaging and unboxing animation',
      'Activation walkthrough video',
      'VR review for stakeholder sign-off',
    ],
    materials: [],
    process: [
      { no: '01', title: 'Brief', body: 'Drawings, brand assets, references, deadline.' },
      { no: '02', title: 'Block', body: 'Greyscale block-out within 48 hours for layout sign-off.' },
      { no: '03', title: 'Final', body: 'Photoreal visuals with material call-outs.' },
      { no: '04', title: 'Handover', body: 'Render files, video, and a production-ready 3D file.' },
    ],
    relatedProjects: [],
    relatedServices: ['exhibition-booths-riyadh', 'custom-fabrication', 'design-consultations'],
    faqs: [
      {
        q: 'How fast can you turn a hero visual?',
        a: 'Block-out in 48 hours. Photoreal final in 5–8 working days. Faster on request, with overtime priced separately.',
      },
    ],
    quickAnswers: [
      { q: 'Standard turnaround', a: '5–8 working days from drawings.' },
      { q: 'Output format', a: 'Stills, walkthrough video, VR-ready scene.' },
    ],
    heroImage: '/media/asset-08.jpeg',
    imagePlaceholder: true,
    seo: {
      title: '3D Visualisation Studio Riyadh | Booth & Fit-out Renders',
      description:
        'Photoreal 3D visualisation for exhibition booths, fit-out, packaging, and activation production — modelled from production geometry.',
    },
  },
  {
    slug: 'branded-installations',
    title: 'Branded Installations',
    shortTitle: 'Installations',
    category: 'fabrication',
    tagline: 'Sculptural brand objects and architectural installations for environments that need to be felt.',
    intro:
      'Sculptural pieces, hero installations, sensory environments, and brand sculptures — for foyers, atriums, retail flagships, and cultural moments. Where joinery becomes a brand expression.',
    approach: [
      'Architectural-grade engineering with art-grade finishing.',
      'Material storytelling, not just brand application.',
      'Lighting designed as part of the piece, not added after.',
    ],
    capabilities: [
      'Sculptural foyer and atrium installations',
      'Retail flagship hero pieces',
      'Cultural and museum-grade installations',
      'Sensory environments and immersive rooms',
      'Architectural lighting integration',
    ],
    materials: [
      'Sculpted CNC timber, sprayed and lacquered',
      'Bent stainless and brass tubing',
      'Cast resin, sintered stone, and Corian',
      'Programmable LED and addressable lighting',
    ],
    process: [
      { no: '01', title: 'Site', body: 'Site survey, lighting study, structural review.' },
      { no: '02', title: 'Concept', body: 'Sculptural intent, material story, lighting plan.' },
      { no: '03', title: 'Engineer', body: 'Loads, fixings, and finish samples signed off.' },
      { no: '04', title: 'Build & install', body: 'Workshop pre-build, transport, install, snag.' },
    ],
    relatedProjects: ['luxury-reception-fitout'],
    relatedServices: ['custom-fabrication', 'design-consultations'],
    faqs: [
      {
        q: 'Do you work with architects directly?',
        a: 'Yes. Most of our installation work runs through architects, interior designers, or workplace consultants — we issue full shop drawings and engineering.',
      },
    ],
    quickAnswers: [
      { q: 'Best fit for', a: 'Brand-led hero pieces in flagship or HQ environments.' },
      { q: 'Lead time', a: '10–20 weeks from concept sign-off.' },
    ],
    heroImage: '/media/asset-09.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Branded Installations & Architectural Sculpture | Start Point',
      description:
        'Sculptural brand installations and architectural pieces for flagships, foyers, and cultural environments — engineered and built in Riyadh.',
    },
  },
  {
    slug: 'design-consultations',
    title: 'Design Consultations',
    shortTitle: 'Consultations',
    category: 'consulting',
    tagline: 'Strategic design counsel for brand, space, and production decisions.',
    intro:
      'Half-day and multi-week consulting engagements for clients deciding what to build — booth strategy, packaging architecture, retail rollout, identity refresh. We bring the studio and the workshop into one room.',
    approach: [
      'Senior leads on every engagement, not account-managed away.',
      'Decision-grade outputs: not slides, but a decision-ready brief.',
      'Build cost-modelled at every step.',
    ],
    capabilities: [
      'Booth strategy and exhibition programme review',
      'Packaging architecture audits',
      'Retail rollout planning',
      'Brand identity refresh consults',
      'Build feasibility and cost-modelling',
    ],
    materials: [],
    process: [
      { no: '01', title: 'Frame', body: 'A short pre-call to scope the question.' },
      { no: '02', title: 'Workshop', body: 'Half-day or full-day on-site with your team.' },
      { no: '03', title: 'Output', body: 'A written recommendation with build estimates and timeline.' },
    ],
    relatedProjects: [],
    relatedServices: ['branding-visual-identity', '3d-visualization'],
    faqs: [
      {
        q: 'Can this fold into a build engagement later?',
        a: 'Yes — consultation fees credit against subsequent build work on the same programme.',
      },
    ],
    quickAnswers: [
      { q: 'Format', a: 'Half-day to multi-week.' },
      { q: 'Output', a: 'Decision-ready brief with build estimates.' },
    ],
    heroImage: '/media/asset-10.jpeg',
    imagePlaceholder: true,
    seo: {
      title: 'Design Consultations Riyadh | Booth, Brand & Retail Strategy',
      description:
        'Strategic design consulting for exhibition, brand, and retail programmes — senior leads, decision-ready outputs, build cost-modelled.',
    },
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
