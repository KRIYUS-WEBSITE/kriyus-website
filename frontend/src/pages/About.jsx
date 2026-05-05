import HeroSection from '../components/HeroSection'

const focusAreas = [
  { icon:'📚', title:'Literature, Culture and Heritage', desc:'Book fairs, literacy drives, climate education — building informed, engaged communities.' },
  { icon:'💧', title:'Water and Sanitation', desc:'Community health awareness, nutrition education, linking villages to government health schemes.' },
  { icon:'⚙️', title:'Livelihood and Skill Development', desc:'Vocational training in LED bulb making, food processing, and trades to create local livelihoods.' },
  { icon:'🌿', title:'Biodiversity and Environmental Conservation', desc:'Van Panchayat strengthening, forest fire prevention, and biodiversity documentation.' },
]

const values = [
  { title:'Community First',    color:'var(--terra)', desc:'Every decision is made with the community, not for them. Local ownership drives lasting change.' },
  { title:'Ecological Respect', color:'var(--sage)',  desc:'The Himalayas are sacred and fragile. Development must work with nature, never against it.' },
  { title:'Gender Equity',      color:'var(--navy)',  desc:"Women's empowerment is not a side program — it is central to everything we do at KRIYUS." },
  { title:'Transparency',       color:'var(--gold)',  desc:'All donor funds are tracked and reported. We believe accountability builds trust.' },
]

const S = { fontFamily:'Playfair Display,serif', fontWeight:800, fontSize:'clamp(1.8rem,3vw,2.4rem)', color:'var(--navy)', margin:'12px 0 20px' }

export default function About() {
  return (
    <>
      <HeroSection badge="Est. 2002, Pithoragarh" title="About" highlight="KRIYUS"
        subtitle="Krida Evam Yuva Samiti — two decades of grassroots transformation in the Himalayan heartland." />

      <section className="section-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="section-label">Our Story</span>
              <h2 style={S}>Two Decades of Himalayan Service</h2>
              <p style={{ color:'var(--text-muted)', marginBottom:16 }}>Founded in 2002 and based in Village Sanghar, PO Baste, Pithoragarh, KRIYUS was born out of a deep commitment to uplifting the marginalized communities of the Himalayan region.</p>
              <p style={{ color:'var(--text-muted)', marginBottom:16 }}>Our founders recognized that sustainable development in the hills requires a holistic approach — addressing economic needs, education, health, environmental stewardship, and the empowerment of those most left behind: women and youth.</p>
              <p style={{ color:'var(--text-muted)' }}>Over 23 years, we have grown from a small local initiative into a recognized organization collaborating with the Government of Uttarakhand, NABARD, UNDP, and the National Book Trust.</p>
            </div>
            <div className="col-lg-6">
              <div style={{ background:'var(--parch)', border:'1px solid var(--border)', borderRadius:20, padding:32, textAlign:'center' }}>
                
                <div style={{ marginTop: 20, padding:'20px 24px',
              background: 'var(--parch)', borderRadius: 12,
              border: '1px solid var(--border)',
               }}>
                <h4 style={{ fontFamily:'Playfair Display,serif', fontWeight:700, color:'var(--navy)', marginBottom:12 }}>Our Vision</h4>
                <div style={{ fontFamily:'serif', fontSize: '1.6rem', fontWeight: 700,
                color: 'var(--terra)', lineHeight: 1.3, marginBottom: 6 }}>
                समृद्ध आजीविका – सतत् विकास
                </div><div style={{ fontFamily:'Inter,sans-serif', fontSize: 13,
                color: 'var(--text-muted)', fontStyle:'italic' }}>
                Prosperous Livelihoods — Sustainable Development
                </div>
                </div>
                <h4 style={{ fontFamily:'Playfair Display,serif', fontWeight:700, color:'var(--navy)', marginBottom:12 }}>Our Mission</h4>
                <p style={{ color:'var(--text-muted)', fontSize:14, marginBottom:20 }}>To empower women, youth, and marginalized communities through education, skill building, environmental conservation, and sustainable livelihood creation in the Himalayan region.</p>
                
                <div style={{ background:'var(--navy)', borderRadius:12, padding:'16px 20px', textAlign:'left' }}>
                  <div style={{ color:'var(--terra-light)', fontFamily:'Playfair Display,serif', fontWeight:700, fontSize:'1.4rem' }}>Pithoragarh</div>
                  <div style={{ color:'rgba(245,240,232,0.75)', fontSize:13 }}>Our base — gateway to the Greater Himalayas</div>
                </div>
              </div>
              <div style={{ marginTop:16, display:'grid', 
              gridTemplateColumns:'1fr 1fr', gap:10 }}>
  {[
    ['Registration No.', '178/2002-2003'],
    ['PAN', 'AAAAK7143D'],
    ['80G', 'Tax Exemption Registered'],
    ['CSR No.', 'CSR00059700'],
  ].map(([k, v]) => (
    <div key={k} style={{ background:'var(--navy)', borderRadius:10,
                          padding:'12px 16px' }}>
      <div style={{ fontSize:10, fontWeight:700, letterSpacing:1,
                    textTransform:'uppercase', 
                    color:'var(--terra-light)', marginBottom:4 }}>{k}</div>
      <div style={{ fontSize:12, color:'rgba(245,240,232,0.85)',
                    fontWeight:600 }}>{v}</div>
    </div>
  ))}
</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-parch">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">Focus Areas</span>
            <h2 style={{ ...S, textAlign:'center' }}>What We Stand For</h2>
            <p style={{ color:'var(--text-muted)', maxWidth:520, margin:'0 auto' }}>Four interconnected pillars that strengthen the fabric of Himalayan rural life.</p>
          </div>
          <div className="row g-4">
            {focusAreas.map((f, i) => (
              <div className="col-md-6 col-lg-3" key={f.title}>
                <div className="k-card p-4 text-center h-100" style={{ borderTop:'3px solid var(--terra)' }}>
                  <div style={{ fontSize:44, marginBottom:12 }}>{f.icon}</div>
                  <div style={{ fontSize:10, fontFamily:'Inter,sans-serif', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:'var(--terra)', marginBottom:8 }}>Pillar {i+1}</div>
                  <h4 style={{ fontFamily:'Playfair Display,serif', fontWeight:700, fontSize:'1rem', color:'var(--navy)', marginBottom:10 }}>{f.title}</h4>
                  <p style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.65 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container">
          <span className="section-label">Our Values</span>
          <h2 style={S}>Principles We Live By</h2>
          <div className="row g-4">
            {values.map(v => (
              <div className="col-md-6 col-lg-3" key={v.title}>
                <div style={{ padding:24, border:'1px solid var(--border)', borderRadius:16, borderLeft:`4px solid ${v.color}`, height:'100%' }}>
                  <h4 style={{ fontSize:15, fontFamily:'Playfair Display,serif', fontWeight:700, color:v.color, marginBottom:10 }}>{v.title}</h4>
                  <p style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.65, margin:0 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
