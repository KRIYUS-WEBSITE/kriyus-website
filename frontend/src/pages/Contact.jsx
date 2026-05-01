import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import FormAlert from '../components/FormAlert'
import { submitContact } from '../api'

const init = { name:'', email:'', phone:'', subject:'General Inquiry', message:'' }

export default function Contact() {
  const [form, setForm] = useState(init)
  const [status, setStatus] = useState({ type:'', message:'' })
  const [loading, setLoading] = useState(false)
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault(); setLoading(true); setStatus({ type:'', message:'' })
    try {
      const res = await submitContact(form)
      setStatus({ type:'success', message: res.data.message })
      setForm(init)
    } catch(err) { setStatus({ type:'danger', message: err.message }) }
    finally { setLoading(false) }
  }

  return (
    <>
      <HeroSection badge="Reach Out" title="Contact" highlight="KRIYUS"
        subtitle="We'd love to hear from you — whether you're a donor, partner, volunteer, or community member." />

      <section className="section-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="contact-navy-card h-100">
                <h4 style={{ fontFamily:'Playfair Display,serif', fontWeight:700, color:'white', marginBottom:32 }}>📍 Find Us</h4>
                {[
                  { icon:'🏠', label:'Address', val:'Village Sanghar, PO Baste\nPithoragarh, Uttarakhand – 262501' },
                  { icon:'🏢', label:'Project Coordination Office', val:'Near GGIC Gate, Chandak Road\nPithoragarh, Uttarakhand' },
                  { icon:'📞', label:'Phone',   val:'+91 9411336153' },
                  { icon:'✉️', label:'Email',   val:'murarikeys2002@gmail.com  kriyusngo@gmail.com' },
                  { icon:'🕐', label:'Hours',   val:'Mon–Sat: 9:00 AM – 5:00 PM IST' },
                ].map(item => (
                  <div key={item.label} style={{ display:'flex', gap:14, marginBottom:28 }}>
                    <div className="contact-icon-box">{item.icon}</div>
                    <div>
                      <div style={{ fontSize:12, opacity:.65, color:'var(--terra-light)', marginBottom:3 }}>{item.label}</div>
                      <div style={{ fontSize:14, color:'rgba(245,240,232,0.9)', whiteSpace:'pre-line' }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-8">
              <div style={{ background:'white', border:'1px solid var(--border)', borderRadius:16, padding:36 }}>
                <h4 style={{ fontFamily:'Playfair Display,serif', fontWeight:700, color:'var(--navy)', marginBottom:24 }}>📬 Send Us a Message</h4>
                <form onSubmit={onSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Your Name *</label>
                      <input className="form-control" name="name" value={form.name} onChange={onChange} placeholder="Full name" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email *</label>
                      <input className="form-control" type="email" name="email" value={form.email} onChange={onChange} placeholder="your@email.com" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input className="form-control" name="phone" value={form.phone} onChange={onChange} placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Subject</label>
                      <select className="form-select" name="subject" value={form.subject} onChange={onChange}>
                        {['General Inquiry','Donation / Funding','Partnership / Collaboration','Volunteering','Media / Press','Other'].map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Your Message *</label>
                      <textarea className="form-control" name="message" value={form.message} onChange={onChange} rows={5} required placeholder="Write your message here..." />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-submit-terra" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message →'}
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
