import { useState } from 'react'
import HeroSection from '../components/HeroSection'

const projects = [
  {
    id: 'mushroom',
    emoji: '🍄',
    gradient: 'grad-sage',
    tag: 'Livelihoods · NHPC',
    title: 'Mushroom Cultivation Training',
    impact: '100+',
    shortDesc: ' Oyster Mushroom cultivation training for rural communities, supported by NHPC, to diversify income sources and promote sustainable livelihoods.',
    aim: 'To enhance rural livelihoods in Pithoragarh by providing comprehensive training on mushroom cultivation techniques, post-harvest processing, and market linkages — enabling farmers to diversify income sources and build sustainable micro-enterprises.',
    partners: ['NHPC', 'Krishi Vigyan Kendra', 'Local SHGs'],
    achievements: [
      '100+ farmers trained in mushroom cultivation',
      'Demonstration units established in multiple villages',
      'Market linkages created for selling mushroom products',
      'Follow-up support provided to trainees for successful cultivation',
    ],
    impacts: [
      { value: '100+', label: 'Farmers Trained' },
      { value: '5+', label: 'Villages Covered' },
      { value: '₹5L+', label: 'Additional Income Generated' },
    ],
    images: [
      { src: '/gallery/mushroom_training1.jpeg', label: 'Mushroom Cultivation Training Session' },
      { src: '/gallery/mushroom_training2.jpeg', label: 'Hands-on Training in the Field' },
      { src: '/gallery/mushroom5.jpeg', label: 'Mushroom Products Made by Trainees' },
    ],
  },
  {
    id: 'shg',
    emoji: '👩‍👩‍👧',
    gradient: 'grad-terra',
    tag: 'Women Empowerment · NABARD',
    title: 'Women Self Help Groups',
    impact: '20+ SHGs',
    shortDesc: 'Organized and facilitated Self Help Groups for rural women through NABARD and other partners with micro-finance support, skill training, and market linkages.',
    aim: 'To economically empower rural women of Pithoragarh by forming and nurturing Self Help Groups (SHGs) that provide access to micro-finance, skill training, and collective market linkages — reducing financial dependence and building leadership.',
    partners: ['NABARD', 'Government of Uttarakhand', 'Local Gram Panchayats'],
    achievements: [
      '20+ active SHGs formed across Pithoragarh district',
      'Women managing collective savings and loan accounts independently',
      'Multiple members now running small food processing and handicraft units',
      'Regular capacity building workshops conducted for SHG leaders',
    ],
    impacts: [
      { value: '20+', label: 'SHGs Active' },
      { value: '200+', label: 'Women Benefited' },
      { value: '₹12L+', label: 'Collective Savings' },
    ],
    images: [
      { src: '/gallery/mushroom_training2.jpeg', label: 'SHG Group Meeting' },
      { src: '/gallery/mushroom_training1.jpeg', label: 'Product Training' },
      { src: '/gallery/mushroom5.jpeg', label: 'Products Made by SHG Members' },
    ],
  },
  {
    id: 'jaljeevan',
    emoji: '💧',
    gradient: 'grad-navy',
    tag: 'Water · Govt. of Uttarakhand',
    title: 'Jal Jeevan Mission',
    impact: '300+ Villages',
    shortDesc: "Supporting the Government's flagship mission to provide safe drinking water to every household across Pithoragarh district.",
    aim: 'To ensure every household in remote Himalayan villages has access to safe, reliable piped drinking water by supporting the Government\'s Jal Jeevan Mission through community mobilization, awareness, and infrastructure monitoring.',
    partners: ['Government of Uttarakhand', 'Ministry of Jal Shakti', 'Village Water Committees'],
    achievements: [
      '300+ villages covered under the mission in Pithoragarh district',
      'Community water committees formed and trained in each village',
      'Awareness campaigns conducted on water conservation and hygiene practices',
      'Planned to build new schmes and repair existing water infrastructure in multiple villages',
    ],
    impacts: [
      { value: '300+', label: 'Villages Covered' },
      { value: '5000+', label: 'Households Benefited' },
      { value: '80%', label: 'Reduction in Water Travel Time' },
    ],
    images: [
      { src: '/gallery/jal_jeevan_mission.jpeg', label: 'Field Visit — Water Infrastructure' },
      { src: '/gallery/jal_jeevan_mission1.jpeg', label: 'Community Awareness Meeting' },
      { src: '/gallery/jal_jeevan_mission3.jpeg', label: 'Pipeline Work in Progress' },
    ],
  },
  {
    id: 'biodiversity',
    emoji: '🦅',
    gradient: 'grad-teal',
    tag: 'Biodiversity · Biodiversity Board',
    title: 'Biodiversity Committees & PBR',
    impact: 'Multiple Villages',
    shortDesc: "Formation of Village Biodiversity Committees and People's Biodiversity Registers to document and protect indigenous flora and fauna.",
    aim: "To document and safeguard the rich biodiversity of the Kumaon Himalayas by forming Village Biodiversity Management Committees (BMCs) and creating People's Biodiversity Registers (PBRs) that capture local ecological knowledge.",
    partners: ['Uttarakhand Biodiversity Board', 'Ministry of Environment', 'Village Committees'],
    achievements: [
      "People's Biodiversity Registers created for multiple villages",
      'Rare Himalayan plant and animal species documented by local communities',
      'Village-level biodiversity committees trained and active',
      'Traditional ecological knowledge preserved in written records',
    ],
    impacts: [
      { value: '10+', label: 'PBRs Created' },
      { value: '50+', label: 'Species Documented' },
      { value: '8+', label: 'Villages Covered' },
    ],
    images: [
      { src: '/gallery/water_conservation1.jpeg', label: 'Biodiversity Documentation Field Work' },
      { src: '/gallery/water_conservation2.jpeg', label: 'Rare Himalayan Plants Recorded' },
      { src: '/gallery/water_conservation4.jpeg', label: 'PBR Register Preparation' },
    ],
  },
  {
    id: 'securehimalaya',
    emoji: '🏔️',
    gradient: 'grad-rose',
    tag: 'Conservation · UNDP',
    title: 'Secure Himalaya Project',
    impact: 'UNDP Collaboration',
    shortDesc: 'UNDP supported campaign to conserve high-altitude ecosystems, protect Snow Leopard habitat, and empower local conservation stewards.',
    aim: 'To conserve the globally significant high-altitude ecosystems of the Indian Himalayas by reducing threats to biodiversity, promoting sustainable livelihoods, and building community-based conservation practices in partnership with UNDP.',
    partners: ['UNDP India', 'Ministry of Environment, Forest & Climate Change', 'Snow Leopard Trust'],
    achievements: [
      'Community conservation groups formed in high-altitude villages',
      'Snow Leopard habitat monitoring initiated with local youth',
      'Alternative livelihood programs introduced to reduce wildlife poaching pressure',
      'Eco-tourism awareness created as a sustainable income source',
    ],
    impacts: [
      { value: '5+', label: 'High-Altitude Villages' },
      { value: '30+', label: 'Conservation Volunteers' },
      { value: 'UNDP', label: 'International Partner' },
    ],
    images: [
      { src: '/gallery/pmksy1.jpg', label: 'High Altitude Field Survey' },
      { src: '/gallery/forest_fire1.jpeg', label: 'Community Conservation Meeting' },
      { src: '/gallery/pmksy3.jpeg', label: 'Snow Leopard Habitat Zone' },
    ],
  },
  {
    id: 'vanpanchayat',
    emoji: '🌲',
    gradient: 'grad-navy',
    tag: 'Forest Governance',
    title: 'Van Panchayat Strengthening',
    impact: '100+ Panchayats',
    shortDesc: 'Capacity building for Van Panchayats to improve governance, resolve conflicts, and sustainably manage community forests.',
    aim: 'To strengthen Van Panchayats (community forest councils) across Pithoragarh by improving their governance capacity, legal awareness, conflict resolution skills, and ability to manage and protect community forest resources sustainably.',
    partners: ['Uttarakhand Forest Department', 'Government of Uttarakhand', 'Van Panchayat Federations'],
    achievements: [
      '100+ Van Panchayats trained in governance and forest management',
      'Legal rights and entitlements of Van Panchayats documented and shared',
      'Forest protection committees strengthened in high fire-risk zones',
      'Regular inter-panchayat meetings and learning exchanges organized',
    ],
    impacts: [
      { value: '100+', label: 'Panchayats Trained' },
      { value: '500+', label: 'Members Capacitated' },
      { value: '40%', label: 'Reduction in Forest Disputes' },
    ],
    images: [
      { src: '/gallery/van_panchayat1.jpeg', label: 'Van Panchayat Training Session' },
      { src: '/gallery/van_panchayat2.jpeg', label: 'Forest Boundary Marking' },
      { src: '/gallery/Chaapal1.jpeg', label: 'Inter-Panchayat Meeting' },
    ],
  },
  {
    id: 'led',
    emoji: '💡',
    gradient: 'grad-gold',
    tag: 'Skill Development',
    title: 'Skill Development Training',
    impact: 'Youth Livelihood',
    shortDesc: 'Vocational training equipping rural youth to assemble and sell multiple products— creating local entrepreneurs, reducing urban migration.',
    aim: 'To equip rural youth of Pithoragarh with a practical, income-generating skill —Multiple product development and sales (biscuits, led bulbs , organic colours, buransh juice) — so they can create local livelihoods and avoid the necessity of migrating to cities for employment.',
    partners: ['NABARD', 'District Skill Development Mission', 'Local Entrepreneurs'],
    achievements: [
      'Multiple batches of youth trained in LED bulb assembly',
      'Several trainees now running their own small enterprises',
      'Reduced migration reported among trained youth',
      'Training materials and tools provided to all participants',
    ],
    impacts: [
      { value: '60+', label: 'Youth Trained' },
      { value: '15+', label: 'Micro-Enterprises Started' },
      { value: '3', label: 'Training Batches Completed' },
    ],
    images: [
      { src: '/gallery/training1.jpeg', label: 'Mushroom Products Training' },
      { src: '/gallery/training_certification1.jpeg', label: 'Certification Ceremony' },
      { src: '/gallery/mushroom1.jpeg', label: 'Finished Products by Trainees' },
    ],
  },
  {
    id: 'foodprocessing',
    emoji: '🍪',
    gradient: 'grad-sage',
    tag: 'Skill Development',
    title: 'Food Processing Programs',
    impact: 'Women Entrepreneurs',
    shortDesc: 'Training women in food preservation, pickling, jam making, and packaging — converting local produce into marketable products.',
    aim: 'To train rural women in value-added food processing techniques — pickling, jam making, squash, and dry fruit packaging — so they can convert locally grown agricultural produce into marketable products and earn independent income.',
    partners: ['NABARD', 'Krishi Vigyan Kendra', 'Women SHGs'],
    achievements: [
      'Women trained in pickling, jam, squash, and dry fruit processing',
      'Packaging and branding skills introduced to participants',
      'Products being sold in local markets and through SHG networks',
      'Multiple women now earning regular income from food products',
    ],
    impacts: [
      { value: '80+', label: 'Women Trained' },
      { value: '12+', label: 'Products Developed' },
      { value: '4', label: 'Training Batches' },
    ],
    images: [
      { src: '/gallery/training2.jpeg', label: 'Food Processing Workshop' },
      { src: '/gallery/training3.jpeg', label: 'Mushroom Processing Training' },
      { src: '/gallery/mushroom5.jpeg', label: 'Products Ready for Market' },
    ],
  },
  {
    id: 'forestfire',
    emoji: '🔥',
    gradient: 'grad-gold',
    tag: 'Environmental Awareness',
    title: 'Forest Fire Awareness Campaigns',
    impact: '30+ Programs',
    shortDesc: 'Community-led drives training villagers in detection, rapid response, and fire line creation to protect Himalayan forests.',
    aim: 'To reduce the frequency and damage of forest fires in the Pithoragarh region by training local communities in early detection, rapid response techniques, fire line creation, and responsible forest use practices.',
    partners: ['Uttarakhand Forest Department', 'Van Panchayats', 'District Administration'],
    achievements: [
      '30+ awareness programs conducted across villages',
      'Fire line creation demonstrated and implemented in high-risk zones',
      'Community rapid response teams formed in multiple villages',
      'Significant awareness improvement measured through pre/post surveys',
    ],
    impacts: [
      { value: '30+', label: 'Programs Conducted' },
      { value: '1000+', label: 'Villagers Reached' },
      { value: '20+', label: 'Response Teams Formed' },
    ],
    images: [
      { src: '/gallery/forest_fire1.jpeg', label: 'Forest Fire Awareness Drive' },
      { src: '/gallery/forest_fire2.jpeg', label: 'Fire Line Demonstration' },
      { src: '/gallery/forest_fire3.jpeg', label: 'Community Response Training' },
    ],
  },
  {
    id: 'climate',
    emoji: '🌍',
    gradient: 'grad-navy',
    tag: 'Youth · Climate Action',
    title: 'Climate Change Awareness',
    impact: 'Youth-Focused',
    shortDesc: 'Interactive sessions for school children on climate change, glacial retreat, and their impact on Himalayan communities.',
    aim: 'To build climate literacy among school children and youth in Himalayan villages — making them aware of glacial retreat, changing rainfall patterns, biodiversity loss, and how climate change directly affects their communities and livelihoods.',
    partners: ['District Education Department', 'Local Schools', 'Uttarakhand Science Education & Research Centre'],
    achievements: [
      'Interactive climate sessions conducted in multiple schools',
      'Youth climate clubs formed in participating schools',
      'Field visits to local glacial areas and forests organized',
      'Student-led awareness campaigns initiated in villages',
    ],
    impacts: [
      { value: '500+', label: 'Students Reached' },
      { value: '10+', label: 'Schools Covered' },
      { value: '5+', label: 'Youth Climate Clubs' },
    ],
    images: [
      { src: '/gallery/watershed1.jpeg', label: 'Water Conservation Drive for Schools' },
      { src: '/gallery/pmksy2.jpeg', label: 'Field Visit — Glacier Area' },
      { src: '/gallery/watershed2.jpeg', label: 'Student Climate Awareness Rally' },
    ],
  },
  {
    id: 'bookfair',
    emoji: '📖',
    gradient: 'grad-rose',
    tag: 'Education · NBT',
    title: 'Book Fair (NBT Collaboration)',
    impact: 'NBT Partner',
    shortDesc: 'Regional book fairs in partnership with the National Book Trust to promote reading culture and literacy in remote communities.',
    aim: 'To promote a culture of reading and improve access to quality books among children and communities in the remote Himalayan villages of Pithoragarh — through regional book fairs organized in collaboration with the National Book Trust (NBT).',
    partners: ['National Book Trust (NBT)', 'Ministry of Education', 'Local Schools & Libraries'],
    achievements: [
      'Multiple regional book fairs organized in Pithoragarh',
      'Thousands of books made available at subsidized prices',
      'School children introduced to a wide range of literature',
      'Local authors and storytellers featured at events',
    ],
    impacts: [
      { value: '3+', label: 'Book Fairs Organized' },
      { value: '2000+', label: 'Visitors Attended' },
      { value: 'NBT', label: 'National Partner' },
    ],
    images: [
      { src: '/gallery/book-fair.jpg', label: 'Book Fair — Children Browsing' },
      { src: '/gallery/book-fair-2.jpg', label: 'NBT Stall at Fair' },
      { src: '/gallery/book-fair-3.jpg', label: 'Storytelling Session' },
    ],
  },
]

// ── Image with fallback ──────────────────────────────────────
function ProjectImage({ src, label }) {
  const [err, setErr] = useState(false)
  return err ? (
    <div style={{ height: 200, background: 'var(--parch-dark)', borderRadius: 10,
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', gap: 6, border: '1px dashed var(--border)' }}>
      <span style={{ fontSize: 28, opacity: .35 }}>🖼️</span>
      <span style={{ fontSize: 11, color: 'var(--text-muted)', textAlign: 'center', padding: '0 12px' }}>{label}</span>
    </div>
  ) : (
    <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)' }}>
      <img src={src} alt={label} onError={() => setErr(true)}
           style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
      <div style={{ padding: '8px 12px', fontSize: 12, color: 'var(--text-muted)',
                    fontWeight: 500, background: 'white' }}>{label}</div>
    </div>
  )
}

// ── Small project card ───────────────────────────────────────
function ProjectCard({ project, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}
         className="k-card h-100">
      <div className={`k-card-img ${project.gradient}`}>
        <span>{project.emoji}</span>
      </div>
      <div className="k-card-body">
        <div className="k-card-tag">{project.tag}</div>
        <h3>{project.title}</h3>
        <p>{project.shortDesc}</p>
        <div className="k-impact-badge">{project.impact}</div>
        <div style={{ marginTop: 16, color: 'var(--terra)', fontSize: 13,
                      fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
          View Details <span style={{ fontSize: 16 }}>→</span>
        </div>
      </div>
    </div>
  )
}

// ── Full project detail section ──────────────────────────────
function ProjectDetail({ project }) {
  return (
    <div id={`detail-${project.id}`}
         style={{ scrollMarginTop: 90, marginBottom: 64, paddingBottom: 64,
                  borderBottom: '1px solid var(--border)' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20,
                    marginBottom: 32, flexWrap: 'wrap' }}>
        <div className={`${project.gradient}`}
             style={{ width: 64, height: 64, borderRadius: 16, flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 32 }}>
          {project.emoji}
        </div>
        <div>
          <div style={{ fontSize: 11, fontFamily: 'Inter,sans-serif', fontWeight: 700,
                        letterSpacing: 2, textTransform: 'uppercase', color: 'var(--terra)',
                        marginBottom: 6 }}>{project.tag}</div>
          <h2 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 800,
                       color: 'var(--navy)', fontSize: 'clamp(1.4rem,2.5vw,2rem)',
                       margin: 0 }}>{project.title}</h2>
        </div>
      </div>

      <div className="row g-5">
        {/* Left — text details */}
        <div className="col-lg-6">

          {/* Aim */}
          <div style={{ marginBottom: 28 }}>
            <h5 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 700,
                         color: 'var(--navy)', marginBottom: 10, fontSize: '1.05rem' }}>
               Aim & Objective
            </h5>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.75 }}>{project.aim}</p>
          </div>

          {/* Partners */}
          <div style={{ marginBottom: 28 }}>
            <h5 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 700,
                         color: 'var(--navy)', marginBottom: 12, fontSize: '1.05rem' }}>
               Partners
            </h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.partners.map(p => (
                <span key={p} style={{ background: 'var(--parch)', border: '1px solid var(--border)',
                                       borderRadius: 50, padding: '5px 14px', fontSize: 13,
                                       fontWeight: 500, color: 'var(--text-mid)' }}>{p}</span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div style={{ marginBottom: 28 }}>
            <h5 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 700,
                         color: 'var(--navy)', marginBottom: 12, fontSize: '1.05rem' }}>
               Key Achievements
            </h5>
            <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
              {project.achievements.map((a, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, marginBottom: 10,
                                     fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--terra)', fontWeight: 700, flexShrink: 0 }}>→</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact numbers */}
          <div>
            <h5 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 700,
                         color: 'var(--navy)', marginBottom: 12, fontSize: '1.05rem' }}>
              Impact
            </h5>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {project.impacts.map(imp => (
                <div key={imp.label} style={{ background: 'var(--parch)',
                                              border: '1px solid var(--border)',
                                              borderLeft: '3px solid var(--terra)',
                                              borderRadius: 10, padding: '14px 20px',
                                              minWidth: 100 }}>
                  <div style={{ fontFamily: 'Playfair Display,serif', fontWeight: 800,
                                fontSize: '1.6rem', color: 'var(--terra)', lineHeight: 1 }}>
                    {imp.value}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
                    {imp.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — images */}
        <div className="col-lg-6">
          <h5 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 700,
                       color: 'var(--navy)', marginBottom: 16, fontSize: '1.05rem' }}>
            From the Field
          </h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {project.images.map(img => (
              <ProjectImage key={img.src} src={img.src} label={img.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main page ────────────────────────────────────────────────
export default function Projects() {
  const scrollToDetail = (id) => {
    const el = document.getElementById(`detail-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <HeroSection badge="Field Programs" title="Projects &" highlight="Initiatives"
        subtitle="Ten programs touching women, forests, youth, and water — across the Himalayan landscape of Pithoragarh." />

      {/* Cards grid */}
      <section className="section-white" style={{ paddingBottom: 40 }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">All Initiatives</span>
            <h2 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 800,
                         fontSize: 'clamp(1.8rem,3vw,2.4rem)', color: 'var(--navy)', marginTop: 12 }}>
              What We Work On
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '12px auto 0' }}>
              Click any project to see its full details, images, and impact.
            </p>
          </div>
          <div className="row g-4">
            {projects.map(p => (
              <div className="col-md-6 col-lg-4" key={p.id}>
                <ProjectCard project={p} onClick={() => scrollToDetail(p.id)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ background: 'var(--parch)', padding: '40px 0' }}>
        <div className="container text-center">
          <span className="section-label">Project Details</span>
          <h2 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 800,
                       color: 'var(--navy)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', marginTop: 12 }}>
            In-Depth Look at Our Work
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 500, margin: '12px auto 0' }}>
            Each project below includes aims, partners, achievements, impact data, and field photographs.
          </p>
        </div>
      </div>

      {/* Detail sections */}
      <section className="section-white">
        <div className="container">
          {projects.map(p => (
            <ProjectDetail key={p.id} project={p} />
          ))}
        </div>
      </section>
    </>
  )
}