import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import FormAlert from '../components/FormAlert'
import { submitVolunteer } from '../api'

const init = { name:'', email:'', phone:'', skills:'', area:'Any / Open to All', message:'' }
const areas = ['Women Empowerment','Youth Skill Training','Forest Conservation','Education & Literacy','Health & Nutrition','Digital Communication','Any / Open to All']
const focusItems = [['📚','Education'],['⚙️','Skill Training'],['🌿','Conservation'],['📢','Awareness'],['💻','Digital'],['🏥','Health']]

export default function Volunteer() {
  const [form, setForm] = useState(init)
  const [status, setStatus] = useState({ type:'', message:'' })
  const [loading, setLoading] = useState(false)
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault(); setLoading(true); setStatus({ type:'', message:'' })
    try {
      const res = await submitVolunteer(form)
      setStatus({ type:'success', message: res.data.message })
      setForm(init)
    } catch(err) { setStatus({ type:'danger', message: err.message }) }
    finally { setLoading(false) }
  }

  return (
    <>
      <HeroSection badge="Join the Mission" title="Volunteer" highlight="With Us"
        subtitle="Bring your skills to the mountains. Whether you're in education, health, tech, or communication — we need you." />

      <section className="section-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <span className="section-label">Why Volunteer?</span>
              <h2 style={{ fontFamily:'Playfair Display,serif', fontWeight:800, fontSize:'1.8rem', color:'var(--navy)', margin:'12px 0 16px' }}>Make a Real Difference</h2>
              <p style={{ color:'var(--text-muted)', marginBottom:24 }}>Volunteering with KRIYUS means working directly with communities in one of India's most stunning landscapes — the Kumaon Himalayas.</p>

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:24 }}>
                {focusItems.map(([ic, label]) => (
                  <div key={label} style={{ display:'flex', alignItems:'center', gap:10, border:'1px solid var(--border)', borderRadius:10, padding:'10px 14px', fontSize:13, fontWeight:500, color:'var(--text-mid)' }}>
                    <div style={{ width:30, height:30, borderRadius:8, background:'var(--terra-pale)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16 }}>{ic}</div>
                    {label}
                  </div>
                ))}
              </div>

              <div style={{ background:'var(--parch)', border:'1px solid var(--parch-deeper)', borderRadius:12, padding:20 }}>
                <p style={{ fontSize:13, marginBottom:8, color:'var(--text-mid)' }}><strong style={{ color:'var(--terra)' }}>Location:</strong> Village Sanghar, PO Baste, Pithoragarh – 262501</p>
                <p style={{ fontSize:13, margin:0, color:'var(--text-mid)' }}><strong style={{ color:'var(--terra)' }}>Duration:</strong> Flexible — 2 weeks to long-term</p>
              </div>
            </div>

            <div className="col-lg-7">
              <div style={{ background:'white', border:'1px solid var(--border)', borderRadius:16, padding:36 }}>
                <h4 style={{ fontFamily:'Playfair Display,serif', fontWeight:700, color:'var(--navy)', marginBottom:24 }}> Volunteer Application</h4>
                <form onSubmit={onSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input className="form-control" name="name" value={form.name} onChange={onChange} placeholder="Your full name" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email *</label>
                      <input className="form-control" type="email" name="email" value={form.email} onChange={onChange} placeholder="your@email.com" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone *</label>
                      <input className="form-control" name="phone" value={form.phone} onChange={onChange} placeholder="+91 XXXXX XXXXX" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Area of Interest</label>
                      <select className="form-select" name="area" value={form.area} onChange={onChange}>
                        {areas.map(a => <option key={a}>{a}</option>)}
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Your Skills / Background</label>
                      <input className="form-control" name="skills" value={form.skills} onChange={onChange} placeholder="e.g., Teaching, Agriculture, Photography" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Why You Want to Volunteer *</label>
                      <textarea className="form-control" name="message" value={form.message} onChange={onChange} rows={4} required placeholder="Tell us about yourself and why you want to join KRIYUS..." />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-submit-terra" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </div>
                  </div>
                  <FormAlert type={status.type} message={status.message} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
