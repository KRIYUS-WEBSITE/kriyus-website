import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'

const partners = [
  { icon:'🏛️', name:'Government of Uttarakhand', desc:'State government partner for Jal Jeevan Mission and rural development programs.' },
  { icon:'🏦', name:'NABARD', desc:'National Bank for Agriculture and Rural Development — SHG formation and micro-finance.' },
  { icon:'🌐', name:'NMPB', desc:'National Medicinal Plant Board — Promotion of medicinal plant cultivation and conservation.' },
  { icon:'📚', name:'National Book Trust', desc:'Ministry of Education partner — Regional book fairs and community literacy promotion.' },
  { icon:'🌲', name:'Forest Department', desc:'Uttarakhand Forest Department — Van Panchayat strengthening and fire prevention.' },
  { icon:'🦋', name:'Biodiversity Board', desc:"Uttarakhand State Biodiversity Board — People's Biodiversity Register formation." },
  { icon:'⚡', name:'NHPC', desc:"National Hydroelectric Power Corporation - Mushroom Project "},
  { icon:'⚛', name:'UCOST', desc:"Uttarakkhand State Council for Science and Technology - Science Popularisation "},
  { icon:'📈', name:'Department of Statistics', desc:'Department of Statistics — LED Bulb making training initiatives led by Statistics Department, Govt of Uttarakhand' },
]

export default function Collaborations() {
  return (
    <>
      <HeroSection badge="Partners in Change" title="Our" highlight="Collaborations"
        subtitle="Trusted by government bodies, international organizations, and national institutions for community-level implementation." />

      <section className="section-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">Our Partners</span>
            <h2 style={{ fontFamily:'Playfair Display,serif', fontWeight:800, fontSize:'clamp(1.8rem,3vw,2.4rem)', color:'var(--navy)', marginTop:12 }}>Institutions We Work With</h2>
            <p style={{ color:'var(--text-muted)', maxWidth:520, margin:'12px auto 0' }}>KRIYUS has earned the trust of leading institutions through consistent, transparent, and impactful field work.</p>
          </div>
          <div className="row g-4">
            {partners.map(p => (
              <div className="col-md-6 col-lg-4" key={p.name}>
                <div className="collab-card h-100">
                  <div className="collab-icon">{p.icon}</div>
                  <h4 style={{ fontFamily:'Playfair Display,serif', fontWeight:700, color:'var(--navy)' }}>{p.name}</h4>
                  <p style={{ fontSize:13, color:'var(--text-muted)' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-parch">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="section-label">How We Collaborate</span>
              <h2 style={{ fontFamily:'Playfair Display,serif', fontWeight:800, fontSize:'clamp(1.8rem,3vw,2.4rem)', color:'var(--navy)', margin:'12px 0 20px' }}>A Model Built on Trust</h2>
              <p style={{ color:'var(--text-muted)', marginBottom:16 }}>KRIYUS acts as the critical last-mile connector between institutional resources and remote Himalayan communities. Our on-ground presence and community relationships make us the ideal implementation partner.</p>
              <p style={{ color:'var(--text-muted)' }}>We bring transparency, documentation, and accountability to every collaboration — ensuring institutional investments translate directly into community impact.</p>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {[['🤝','Community Trust','23 years of grassroots presence.'],
                  ['📋','Documentation','Meticulous field reports and outcome tracking.'],
                  ['🌐','Multi-Stakeholder','Bridge between community, govt, and global bodies.'],
                  ['📊','Accountability','Regular reporting and transparent fund utilization.']].map(([ic,t,d]) => (
                  <div className="col-6" key={t}>
                    <div style={{ background:'white', border:'1px solid var(--border)', borderRadius:12, padding:20, height:'100%' }}>
                      <div style={{ fontSize:28, marginBottom:10 }}>{ic}</div>
                      <div style={{ fontFamily:'Playfair Display,serif', fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>{t}</div>
                      <div style={{ fontSize:12, color:'var(--text-muted)', lineHeight:1.5 }}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-terra">
        <div className="container text-center">
          <h2 style={{ fontFamily:'Playfair Display,serif', fontWeight:800, color:'white', marginBottom:16 }}>Want to Partner With Us?</h2>
          <p style={{ color:'rgba(255,255,255,0.8)', marginBottom:28 }}>We welcome collaborations that share our vision for Himalayan development.</p>
          <Link to="/contact" style={{ background:'white', color:'var(--terra-dark)', fontFamily:'Inter,sans-serif', fontWeight:700, padding:'14px 32px', borderRadius:50, textDecoration:'none' }}>Get in Touch →</Link>
        </div>
      </section>
    </>
  )
}
