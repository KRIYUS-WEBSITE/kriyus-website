import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import ImpactCounter from '../components/ImpactCounter'

const stats = [
  { value:300, suffix:'+', label:'Villages Covered',       sub:'Jal Jeevan Mission' },
  { value:20,  suffix:'+', label:'Women SHGs Formed',      sub:'NABARD Supported' },
  { value:100, suffix:'+', label:'Van Panchayats Trained', sub:'Forest Governance' },
  { value:5000,  suffix:'+', label:'Awareness Programs',     sub:'Across Communities' },
  { value:23,  suffix:'+',  label:'Years of Service',       sub:'Est. 2002' },
  { value:10,   suffix:'+',  label:'Major Partners',         sub:'Govt, NABARD, UNDP, NHPC, UCOST' },
]
const initiatives = [
  { accentColor:'terra', tag:'Women Empowerment · NABARD',
    title:'Women Self Help Groups', impact:'20+ SHGs Active',
    image:'/gallery/mushroom_training1.jpeg',
    description:'NABARD-backed SHGs driving economic independence and leadership for rural women across Pithoragarh.' },
  { accentColor:'navy', tag:'Water & Sanitation',
    title:'Jal Jeevan Mission', impact:'5000+ Villages',
    image:'/gallery/jal_jeevan_mission3.jpeg',
    description:'Supporting safe drinking water access and sanitation across hundreds of Himalayan villages.' },
  { accentColor:'sage', tag:'Biodiversity · UNDP',
    title:'Secure Himalaya Project', impact:'UNDP Partner',
    image:'/gallery/water_conservation4.jpeg',
    description:'UNDP-backed conservation of high-altitude biodiversity with community-based stewardship programs.' },
]
const testimonials = [
  { initial:'S', name:'Sunita Devi', role:'SHG Member, Village Sanghar',
    text:'The SHG formed by KRIYUS changed my life completely. I now run a food processing unit and support my family independently. This is the change we needed.' },
  { initial:'R', name:'Ramesh Singh Bisht', role:'Van Panchayat Head, Pithoragarh',
    text:'Thanks to forest fire awareness campaigns by KRIYUS, our Van Panchayat is much better equipped. Forest fires have reduced significantly in our area.' },
  { initial:'K', name:'Kamla Bora', role:'Mother of trainee, Baste Village',
    text:'The LED bulb making training opened new doors for our youth. My son now earns independently and never had to migrate to the city.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-new" style={{ minHeight:'100vh' }}>
        <div style={{ position:'absolute', top:-80, right:-80, width:500, height:500,
                      border:'1px solid rgba(194,82,42,0.12)', borderRadius:'50%', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', top:80, right:80, width:300, height:300,
                      border:'1px solid rgba(194,82,42,0.07)', borderRadius:'50%', pointerEvents:'none' }}/>

        <div className="container position-relative" style={{ zIndex:2, paddingTop:60, paddingBottom:120 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="hero-tag anim-up">
                <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--terra-light)', display:'inline-block' }}/>
                Est. 2002 · Pithoragarh, Uttarakhand
              </div>
              <h1 className="hero-title anim-up-d1">
                Empowering<br/>
                <span className="accent">Rural Communities</span><br/>
                of the Himalayas
              </h1>
              <p className="hero-desc anim-up-d2">
                KRIYUS works at the grassroots level to uplift women, nurture youth, and protect the fragile Himalayan ecosystem — one village at a time.
              </p>
              <div className="d-flex gap-3 flex-wrap anim-up-d3">
                <Link to="/donate" className="btn-hero-p">♥ Donate Now</Link>
                <Link to="/volunteer" className="btn-hero-s">Join as Volunteer →</Link>
              </div>
              <div className="hero-stat-strip anim-up-d3">
                {[['5000+','Villages'],['20+','Women SHGs'],['23 yrs','Of Service']].map(([n,l]) => (
                  <div key={l} className="hero-stat-item">
                    <strong>{n}</strong><span>{l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-5 d-flex justify-content-center anim-up-d2">
  <div style={{ width:'100%', maxWidth:420 }}>
    <div style={{ borderRadius:20, overflow:'hidden',
                  border:'3px solid rgba(194,82,42,0.3)',
                  boxShadow:'0 24px 64px rgba(0,0,0,0.4)' }}>
      <img src="/gallery/forest_fire1.jpeg" alt="KRIYUS field work"
           style={{ width:'100%', height:'min(420px, 55vw)',
                    objectFit:'cover', display:'block' }} />
    </div>
  </div>
</div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* HIGHLIGHT STRIP */}
      <div style={{ background:'var(--navy-mid)', padding:'20px 0' }}>
        <div className="container">
          <div className="row g-3 justify-content-center">
            {[
              { svg:<path d="M3 20l5-8 4 5 3-4 6 7H3z"/>, t:'500+ Villages Impacted', s:'Jal Jeevan Mission' },
              { svg:<><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></>, t:'20+ Women SHGs', s:'NABARD Collaboration' },
              { svg:<path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8zm0 10a3 3 0 110-6 3 3 0 010 6z"/>, t:'Secure Himalaya', s:'UNDP Partnership' },
              { svg:<><rect x="2" y="10" width="20" height="11" rx="1"/><path d="M12 2L2 10h20L12 2z"/><rect x="9" y="14" width="6" height="7"/></>, t:'Govt. Uttarakhand', s:'Official Collaboration' },
            ].map(({ svg, t, s }) => (
            <div className="col-auto" key={t}>
              <div className="h-pill">
                <div className="h-pill-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="var(--terra-light)" strokeWidth="1.8" strokeLinecap="round">
                    {svg}
                  </svg>
                </div>
              <div>
                <div style={{ fontWeight:600, fontSize:13, lineHeight:1.2 }}>{t}</div>
                <div style={{ fontSize:11, opacity:.7 }}>{s}</div>
              </div>
            </div>
          </div>
        ))}
          </div>
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="section-parch">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="section-label">Who We Are</span>
              <h2 style={{ fontFamily:'Playfair Display,serif', fontWeight:800,
                           fontSize:'clamp(1.8rem,3vw,2.6rem)', color:'var(--navy)', margin:'12px 0 20px' }}>
                Rooted in the Hills,<br/>Growing with Communities
              </h2>
              <p style={{ color:'var(--text-muted)', marginBottom:16 }}>
                Since 2002, KRIYUS has been working in the remote villages of Pithoragarh, Uttarakhand — building a foundation of empowerment, sustainability, and hope at the grassroots level.
              </p>
              <p style={{ color:'var(--text-muted)', marginBottom:32 }}>
                From forming women Self Help Groups to strengthening Van Panchayats, our work touches every dimension of Himalayan rural life — education, livelihood, water, and forests.
              </p>
              <Link to="/about" className="btn-hero-p" style={{ display:'inline-flex' }}>Read Our Story →</Link>
              
            </div>
            <div className="col-lg-6">
              <div style={{ background:'white', border:'1px solid var(--border)', borderRadius:20, padding:28 }}>
                <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  {/* Vision card — full width */}
  <div style={{ background:'var(--parch)', borderRadius:12, padding:'18px 20px',
                borderLeft:'3px solid var(--terra)' }}>
    <div style={{ fontSize:12, fontFamily:'Inter,sans-serif', fontWeight:800,
                  letterSpacing:2, textTransform:'uppercase',
                  color:'var(--terra )', marginBottom:8 }}>Our Vision</div>
    <div style={{ fontFamily:'serif', fontSize:'1.3rem', fontWeight:700,
                  color:'var(--terra)', lineHeight:1.3, marginBottom:5 }}>
      समृद्ध आजीविका – सतत् विकास
    </div>
    <div style={{ fontFamily:'Inter,sans-serif', fontSize:12,
                  color:'var(--text-muted)', fontStyle:'italic' }}>
      Prosperous Livelihoods — Sustainable Development
    </div>
  </div>

  {/* Stats row below */}
  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
    {[['2002','Year Established'],['262501','PIN, Sanghar'],
      ['100+','Van Panchayats'],['30+','Awareness Programs']].map(([v,l]) => (
      <div key={l} style={{ background:'var(--parch)', borderRadius:12, padding:'20px 16px',
                             borderLeft:'3px solid var(--terra)' }}>
        <div style={{ fontFamily:'Playfair Display,serif', fontWeight:800,
                      fontSize:'1.6rem', color:'var(--terra)', lineHeight:1 }}>{v}</div>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginTop:6 }}>{l}</div>
      </div>
    ))}
  </div>

</div>
                <div style={{ marginTop:16, padding:'16px 20px', background:'var(--navy)',
                              borderRadius:12, display:'flex', alignItems:'center', gap:14 }}>
                  <span style={{ fontSize:28 }}>📍</span>
                  <div>
                    <div style={{ color:'var(--terra-light)', fontFamily:'Inter,sans-serif',
                                  fontWeight:600, fontSize:13 }}>Our Location</div>
                    <div style={{ color:'rgba(245,240,232,0.8)', fontSize:13 }}>
                      Village Sanghar, Pithoragarh, Uttarakhand
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="section-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">What We Do</span>
            <h2 style={{ fontFamily:'Playfair Display,serif', fontWeight:800,
                         fontSize:'clamp(1.8rem,3vw,2.4rem)', color:'var(--navy)', marginTop:12 }}>
              Our Key Initiatives
            </h2>
            <p style={{ color:'var(--text-muted)', maxWidth:520, margin:'12px auto 0' }}>
              From watershed management to skill training, our programs address the root causes of rural poverty.
            </p>
          </div>
          <div className="row g-4">
            {initiatives.map(p => (
              <div className="col-md-4" key={p.title}><ProjectCard {...p} /></div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/projects" className="btn-hero-p" style={{ display:'inline-flex' }}>View All Projects →</Link>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-navy">
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ display:'inline-block', fontFamily:'Inter,sans-serif', fontSize:11, fontWeight:600,
                           letterSpacing:3, textTransform:'uppercase', color:'var(--terra-light)',
                           paddingBottom:4, borderBottom:'2px solid var(--terra)' }}>Our Impact</span>
            <h2 style={{ fontFamily:'Playfair Display,serif', fontWeight:800, color:'var(--parch)',
                         marginTop:16, fontSize:'clamp(1.8rem,3vw,2.4rem)' }}>
              Numbers That Tell Our Story
            </h2>
          </div>
          <ImpactCounter stats={stats} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-parch">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">Voices from the Ground</span>
            <h2 style={{ fontFamily:'Playfair Display,serif', fontWeight:800,
                         fontSize:'clamp(1.8rem,3vw,2.4rem)', color:'var(--navy)', marginTop:12 }}>
              What Communities Say
            </h2>
          </div>
          <div className="row g-4">
            {testimonials.map(t => (
              <div className="col-md-4" key={t.name}>
                <div className="testi-card h-100">
                  <div className="testi-quote">"</div>
                  <p className="testi-text">{t.text}</p>
                  <div className="d-flex align-items-center gap-3"
                       style={{ borderTop:'1px solid var(--border)', paddingTop:16 }}>
                    <div className="testi-avatar">{t.initial}</div>
                    <div>
                      <div style={{ fontWeight:600, fontSize:14 }}>{t.name}</div>
                      <div style={{ fontSize:12, color:'var(--text-muted)' }}>{t.role}</div>
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
        <div className="container">
          <div style={{ maxWidth:580, margin:'0 auto' }}>
            <p style={{ color:'rgba(255,255,255,0.65)', fontFamily:'Inter,sans-serif',
                        fontSize:11, letterSpacing:3, textTransform:'uppercase', marginBottom:16 }}>Be the Change</p>
            <h2 style={{ fontFamily:'Playfair Display,serif', fontWeight:800,
                         fontSize:'clamp(1.8rem,3vw,2.6rem)', color:'white', marginBottom:16 }}>
              Your Support Changes a Life in the Himalayas
            </h2>
            <p style={{ color:'rgba(255,255,255,0.78)', marginBottom:36 }}>
              Every rupee donated, every hour volunteered — it all matters deeply to communities in Pithoragarh.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link to="/donate" style={{ background:'white', color:'var(--terra-dark)',
                                          fontFamily:'Inter,sans-serif', fontWeight:700,
                                          padding:'14px 32px', borderRadius:50, textDecoration:'none',
                                          display:'inline-flex', alignItems:'center', gap:8 }}>
                ♥ Donate Today
              </Link>
              <Link to="/volunteer" style={{ background:'transparent', color:'white',
                                             fontFamily:'Inter,sans-serif', fontWeight:600,
                                             padding:'14px 32px', borderRadius:50, textDecoration:'none',
                                             border:'1.5px solid rgba(255,255,255,0.5)',
                                             display:'inline-flex', alignItems:'center' }}>
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
