import HeroSection from '../components/HeroSection'
import ImpactCounter from '../components/ImpactCounter'

const stats = [
  { value:300, suffix:'+', label:'Villages Covered',           sub:'Jal Jeevan Mission' },
  { value:20,  suffix:'+', label:'Women SHGs Formed',          sub:'NABARD Supported' },
  { value:100, suffix:'+', label:'Van Panchayats Trained',     sub:'Forest Governance' },
  { value:30,  suffix:'+', label:'Awareness Programs',         sub:'Across Communities' },
  { value:23,  suffix:'',  label:'Years of Service',           sub:'Est. 2002' },
  { value:6,   suffix:'',  label:'Institutional Partners',     sub:'Govt, NABARD, UNDP' },
]

const bars = [
  { label:'Jal Jeevan Mission – Villages Covered',  val:'300+', pct:95, color:'var(--terra)' },
  { label:'Women SHGs – Active Groups',             val:'20+',  pct:70, color:'var(--navy)' },
  { label:'Van Panchayats – Training Completed',    val:'100+', pct:80, color:'var(--sage)' },
  { label:'Awareness Campaigns Conducted',          val:'30+',  pct:60, color:'var(--gold)' },
]

export default function Impact() {
  return (
    <>
      <HeroSection badge="Results on Ground" title="Our" highlight="Impact in Numbers"
        subtitle="Two decades of measurable change across the Himalayan villages of Pithoragarh." />

      <section className="section-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">Key Metrics</span>
            <h2 style={{ fontFamily:'Playfair Display,serif', fontWeight:800, fontSize:'clamp(1.8rem,3vw,2.4rem)', color:'var(--navy)', marginTop:12 }}>Numbers That Define Our Journey</h2>
          </div>
          <ImpactCounter stats={stats} />
        </div>
      </section>

      <section className="section-parch">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <span className="section-label">Program Reach</span>
              <h2 style={{ fontFamily:'Playfair Display,serif', fontWeight:800, fontSize:'clamp(1.8rem,3vw,2.2rem)', color:'var(--navy)', margin:'12px 0 16px' }}>Tracking Our Reach</h2>
              <p style={{ color:'var(--text-muted)' }}>KRIYUS tracks these numbers closely to ensure maximum community impact with every resource invested.</p>
            </div>
            <div className="col-lg-7">
              <div className="d-flex flex-column gap-3">
                {bars.map(b => (
                  <div key={b.label} style={{ background:'white', border:'1px solid var(--border)', borderRadius:12, padding:'20px 24px' }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span style={{ fontWeight:600, fontSize:14 }}>{b.label}</span>
                      <span style={{ fontFamily:'Playfair Display,serif', fontWeight:700, color:b.color }}>{b.val}</span>
                    </div>
                    <div style={{ height:8, background:'var(--border)', borderRadius:4, overflow:'hidden' }}>
                      <div style={{ height:'100%', width:`${b.pct}%`, background:b.color, borderRadius:4 }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">Beyond Numbers</span>
            <h2 style={{ fontFamily:'Playfair Display,serif', fontWeight:800, fontSize:'clamp(1.8rem,3vw,2.4rem)', color:'var(--navy)', marginTop:12 }}>Lives Changed, Communities Transformed</h2>
          </div>
          <div className="row g-4">
            {[
              { icon:'👩‍🌾', title:'Women Leading Change', desc:'Over 20 SHGs now operate independently, with women managing finances, taking loans, and running small enterprises — many for the first time in their lives.' },
              { icon:'🌲', title:'Forests Protected', desc:'100+ Van Panchayats have trained members who actively prevent forest fires, manage tree cover, and resolve disputes through structured governance.' },
              { icon:'💧', title:'Clean Water Everywhere', desc:'300+ villages that once struggled with water scarcity now have reliable access to safe drinking water, reducing disease and improving quality of life.' },
            ].map(s => (
              <div className="col-md-4" key={s.title}>
                <div className="k-card p-4 h-100 text-center">
                  <div style={{ fontSize:52, marginBottom:14 }}>{s.icon}</div>
                  <h4 style={{ fontFamily:'Playfair Display,serif', fontWeight:700, fontSize:'1.05rem', color:'var(--navy)', marginBottom:12 }}>{s.title}</h4>
                  <p style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
