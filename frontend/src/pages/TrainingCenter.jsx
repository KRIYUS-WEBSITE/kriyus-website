import { useState } from 'react'
import HeroSection from '../components/HeroSection'

const facilities = [
  {
    id: 'dairy',
    title: 'Dairy Unit',
    established: '2013',
    description: 'The foundation of Kamdhenu Udhyamita Prashikshan Kendra (Kamdhenu Entrepreneurship Training Center) — a fully operational dairy unit that has been serving the local community since establishment, providing a model for sustainable animal husbandry practices in the Himalayan region.',
    images: [
      { src: '/training/dairy.jpeg', label: 'Dairy Unit — Overview' },
      { src: '/training/dairy2.png', label: 'Dairy Products' },
    ],
  },
  {
    id: 'fishery',
    title: 'Fishery Unit',
    established: '2016',
    description: 'Expanded into freshwater fishery in 2016, the unit provides training in sustainable fish farming techniques suited to the Himalayan climate — creating an additional livelihood stream for local youth and farmers.',
    images: [
      { src: '/training/fishery1.jpeg', label: 'Fishery Pond' },
      { src: '/training/fishery2.jpeg', label: 'Ducks on the Farm' },
    ],
  },
  {
    id: 'kiwi',
    title: 'Kiwi Production',
    established: '2017',
    description: 'Taking advantage of Pithoragarh\'s ideal agro-climatic conditions, the center established kiwi cultivation in 2017. The unit serves as a demonstration farm for kiwi farming techniques suitable for the Kumaon hills.',
    images: [
      { src: '/training/kiwi1.jpeg', label: 'Kiwi Orchard' },
      { src: '/training/kiwi2.jpg', label: 'Kiwi Harvest' },
    ],
  },
  {
    id: 'spice',
    title: 'Spice Production',
    established: '2013',
    description: 'Spice cultivation and processing has been integral to the center since its inception. Trainees learn cultivation, harvesting, drying, and packaging of Himalayan spices — a high-value product with strong market demand.',
    images: [
      { src: '/training/spice1.jpeg', label: 'Spice Cultivation' },
      { src: '/training/spice2.jpeg', label: ' Himalayan Spices ' },
    ],
  },
  {
    id: 'vegetables',
    title: 'Vegetable Production',
    established: '2013',
    description: 'Year-round vegetable cultivation across approximately 1.5 hectares of active farmland. The unit demonstrates modern and traditional growing techniques, crop rotation practices, and organic farming methods suited to mountain terrain.',
    images: [
      { src: '/training/farm1.jpeg', label: 'Vegetable Farm — Overview' },
      { src: '/training/farm2.jpeg', label: 'Greenhouse Vegetable Production' },
    ],
  },
  {
    id: 'nursery',
    title: 'Nursery & Greenhouse',
    established: '2013',
    description: 'An active nursery spanning 10,000 sq ft houses saplings, seedlings, and plant propagation units. The greenhouse facility supports year-round cultivation and serves as a hands-on training space for horticulture and agri-entrepreneurship.',
    images: [
      { src: '/training/nursery-1.jpg', label: 'Nursery — 10,000 sq ft' },
      { src: '/training/greenhouse-1.jpg', label: 'Greenhouse Interior' },
      { src: '/training/greenhouse-2.jpg', label: 'Plant Propagation Unit' },
    ],
  },
  {
    id: 'mushroom',
    title: 'Mushroom Farming Unit',
    established: 'Upcoming',
    description: 'The center is actively expanding into mushroom farming — a high-yield, low-investment crop well-suited to the Himalayan climate. This unit will add a new vocational training module for beneficiaries, with market-ready produce as the outcome.',
    images: [
      { src: '/training/mushroom-1.jpg', label: 'Mushroom Farming Setup' },
      { src: '/training/mushroom-2.jpg', label: 'Mushroom Training in Progress' },
    ],
  },
  {
    id: 'trainingcenter',
    title: 'Residential Training Center',
    established: 'Ready — Awaiting Inauguration',
    description: 'A dedicated vocational training facility with residential accommodation for up to 25 beneficiaries has been fully established at Kamdhenu Udhyamita Kendra. Designed to host trainees from remote Himalayan villages, the center removes travel barriers and enables participants to complete full training cycles across dairy, fishery, horticulture, spice processing, and mushroom farming. The facility is ready for operations and awaiting formal inauguration.',
    images: [
      { src: '/training/dairy.jpeg', label: 'Training Center — Main Building' },
      { src: '/training/training_center1.jpeg', label: 'Residential Accommodation Block' },
    ],
  },
]

const stats = [
  { value: '2013', label: 'Year Established', sub: 'Kamdhenu Udhyamita Prashikshan Kendra (Kamdhenu Entrepreneurship Training Center)' },
  { value: '1.5', label: 'Hectares of Farmland', sub: 'Active cultivation' },
  { value: '10K', label: 'Sq Ft Nursery', sub: 'Plant propagation unit' },
  { value: '25', label: 'Beneficiary Capacity', sub: 'With accommodation' },
  { value: '7', label: 'Production Units', sub: 'Dairy to mushroom farming' },
  { value: '15 km', label: 'From KRIYUS HQ', sub: 'Munakote Block, Pithoragarh' },
]

function FacilityImage({ src, label }) {
  const [err, setErr] = useState(false)
  return err ? (
    <div style={{ height: 200, background: 'var(--parch-dark)', borderRadius: 10,
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', gap: 6, border: '1px dashed var(--border)' }}>
      <span style={{ fontSize: 28, opacity: .3, color: 'var(--text-muted)' }}>[ ]</span>
      <span style={{ fontSize: 11, color: 'var(--text-muted)', textAlign: 'center',
                     padding: '0 12px' }}>{label}</span>
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

export default function TrainingCenter() {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { key: 'all', label: 'All Facilities' },
    ...facilities.map(f => ({ key: f.id, label: f.title }))
  ]

  const visible = activeTab === 'all'
    ? facilities
    : facilities.filter(f => f.id === activeTab)

  return (
    <>
      <HeroSection
        badge="KRIYUS · Kamdhenu Udhyamita Prashikshan Kendra "
        title="Training Center &"
        highlight="Demonstration Farm"
        subtitle="A multi-unit agri-entrepreneurship training center in Village Gangaseri, Munakote Block, Pithoragarh — cultivating skills, livelihoods, and the Himalayan landscape since 2013."
      />

      {/* Overview strip */}
      <div style={{ background: 'var(--navy-mid)', padding: '20px 0' }}>
        <div className="container">
          <div className="row g-3 justify-content-center">
            {[
              ['Village Gangaseri', 'Munakote Block, Pithoragarh'],
              ['Est. 2013', 'Kamdhenu Udhyamita Kendra'],
              ['1.5 Hectares', 'Active Farmland'],
              ['25 Beneficiaries', 'Residential Capacity'],
            ].map(([t, s]) => (
              <div className="col-auto" key={t}>
                <div className="h-pill">
                  <div style={{ width: 4, height: 36, background: 'var(--terra)',
                                borderRadius: 4, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, lineHeight: 1.2 }}>{t}</div>
                    <div style={{ fontSize: 11, opacity: .7 }}>{s}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About the center */}
      <section className="section-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="section-label">About the Center</span>
              <h2 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 800,
                           fontSize: 'clamp(1.8rem,3vw,2.4rem)', color: 'var(--navy)',
                           margin: '12px 0 20px' }}>
                Kamdhenu Udhyamita Prashikshan Kendra (Kamdhenu Entrepreneurship Training Center)
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: 16 }}>
                Established in 2013 in Village Gangaseri, Munakote Block, approximately 15 kilometres from the KRIYUS head office, Kamdhenu Udhyamita Kendra began as a model dairy unit and has since grown into a comprehensive agri-entrepreneurship center.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: 16 }}>
                Over the past decade, the center has systematically expanded its scope — adding fishery operations in 2016, kiwi cultivation in 2017, and maintaining spice and vegetable production units since inception. Today, it operates across approximately 1.5 hectares of active farmland and a 10,000 sq ft nursery.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: 28 }}>
                The center is now poised for its next phase — a dedicated vocational training facility with residential accommodation for up to 25 beneficiaries, awaiting inauguration. In collaboration with KRIYUS, it will serve as the primary on-ground training hub for skill development programs across Pithoragarh district.
              </p>
            </div>

            {/* Stats grid */}
            <div className="col-lg-6">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {stats.map(s => (
                  <div key={s.label} style={{ background: 'var(--parch)',
                                              border: '1px solid var(--border)',
                                              borderLeft: '3px solid var(--terra)',
                                              borderRadius: 12, padding: '20px 18px' }}>
                    <div style={{ fontFamily: 'Playfair Display,serif', fontWeight: 800,
                                  fontSize: '1.6rem', color: 'var(--terra)', lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text-dark)',
                                  margin: '6px 0 3px' }}>{s.label}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-parch">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">Production Units</span>
            <h2 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 800,
                         fontSize: 'clamp(1.8rem,3vw,2.4rem)', color: 'var(--navy)',
                         marginTop: 12 }}>
              Facilities & Infrastructure
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '12px auto 0' }}>
              Each unit functions as both a production facility and a live demonstration farm for trainees and visiting beneficiaries.
            </p>
          </div>

          {/* Tabs */}
          <div className="d-flex gap-2 flex-wrap mb-5 justify-content-center">
            {tabs.map(t => (
              <button key={t.key} onClick={() => setActiveTab(t.key)}
                      className={`gallery-tab-btn ${activeTab === t.key ? 'active' : ''}`}>
                {t.label}
              </button>
            ))}
          </div>

          {/* Facility detail cards */}
          <div className="d-flex flex-column gap-5">
            {visible.map((f, index) => (
              <div key={f.id} style={{ background: 'white', border: '1px solid var(--border)',
                                       borderRadius: 16, overflow: 'hidden' }}>
                {/* Colored top bar */}
                <div style={{ height: 5, background: index % 2 === 0
                              ? 'var(--terra)' : 'var(--navy)' }} />

                <div className="row g-0">
                  {/* Text side */}
                  <div className="col-lg-6" style={{ padding: '32px 36px' }}>
                    <div style={{ display: 'flex', alignItems: 'center',
                                  gap: 12, marginBottom: 16 }}>
                      <div>
                        <div style={{ fontSize: 10, fontFamily: 'Inter,sans-serif',
                                      fontWeight: 700, letterSpacing: 2,
                                      textTransform: 'uppercase', color: 'var(--terra)',
                                      marginBottom: 4 }}>
                          {f.established === 'Upcoming' ? 'Coming Soon' : `Est. ${f.established}`}
                        </div>
                        <h3 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 700,
                                     color: 'var(--navy)', fontSize: '1.3rem', margin: 0 }}>
                          {f.title}
                        </h3>
                      </div>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14,
                                lineHeight: 1.75, margin: 0 }}>
                      {f.description}
                    </p>

                    {f.established === 'Upcoming' && (
                      <div style={{ marginTop: 16, display: 'inline-block',
                                    background: 'var(--gold-pale)',
                                    border: '1px solid var(--gold)',
                                    borderRadius: 50, padding: '5px 16px',
                                    fontSize: 12, fontWeight: 600,
                                    color: 'var(--gold)' }}>
                        Expansion in Progress
                      </div>
                    )}
                  </div>

                  {/* Images side */}
                  <div className="col-lg-6" style={{ background: 'var(--parch)',
                                                     padding: '28px 28px 28px 0' }}>
                    <div style={{ display: 'grid',
                                  gridTemplateColumns: f.images.length > 1 ? '1fr 1fr' : '1fr',
                                  gap: 12, paddingLeft: 28 }}>
                      {f.images.map(img => (
                        <FacilityImage key={img.src} src={img.src} label={img.label} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-terra">
        <div className="container text-center">
          <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter,sans-serif',
                      fontSize: 11, letterSpacing: 3, textTransform: 'uppercase',
                      marginBottom: 16 }}>Get Involved</p>
          <h2 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 800,
                       color: 'white', fontSize: 'clamp(1.6rem,3vw,2.4rem)',
                       marginBottom: 16 }}>
            Partner With Our Training Center
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 500,
                      margin: '0 auto 32px', fontSize: 15 }}>
            Whether you are a government body, NGO, funding agency, or individual — we welcome your support in making this training center a model for Himalayan agri-entrepreneurship.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a href="/contact"
               style={{ background: 'white', color: 'var(--terra-dark)',
                        fontFamily: 'Inter,sans-serif', fontWeight: 700,
                        padding: '14px 32px', borderRadius: 50,
                        textDecoration: 'none' }}>
              Contact Us →
            </a>
            <a href="/donate"
               style={{ background: 'transparent', color: 'white',
                        fontFamily: 'Inter,sans-serif', fontWeight: 600,
                        padding: '14px 32px', borderRadius: 50,
                        textDecoration: 'none',
                        border: '1.5px solid rgba(255,255,255,0.5)' }}>
              Support This Initiative
            </a>
          </div>
        </div>
      </section>
    </>
  )
}