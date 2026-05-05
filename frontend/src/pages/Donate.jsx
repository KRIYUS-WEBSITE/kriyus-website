import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import FormAlert from '../components/FormAlert'
import { submitDonate } from '../api'

const init = { name:'', email:'', phone:'', amount:'', program:'General Fund', message:'' }

export default function Donate() {
  const [form, setForm] = useState(init)
  const [status, setStatus] = useState({ type:'', message:'' })
  const [loading, setLoading] = useState(false)
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault(); setLoading(true); setStatus({ type:'', message:'' })
    try {
      const res = await submitDonate(form)
      setStatus({ type:'success', message: res.data.message })
      setForm(init)
    } catch(err) { setStatus({ type:'danger', message: err.message }) }
    finally { setLoading(false) }
  }

  return (
    <>
      <HeroSection badge="Support Our Work" title="Make a" highlight="Donation"
        subtitle="Your generosity directly funds women's empowerment, youth skill training, and forest conservation in the Himalayas." />

      <section className="section-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <span className="section-label">Bank Details</span>
              <h2 style={{ fontFamily:'Playfair Display,serif', fontWeight:800, fontSize:'1.8rem', color:'var(--navy)', margin:'12px 0 16px' }}>Transfer Directly</h2>
              <p style={{ color:'var(--text-muted)', marginBottom:24 }}>All donations go directly to field programs. We maintain full financial transparency and provide receipts on request.</p>

              <div style={{ background:'white', border:'1px solid var(--border)', borderRadius:16, padding:28, marginBottom:16 }}>
                <h5 style={{ fontFamily:'Inter,sans-serif', fontWeight:700, color:'var(--navy)', marginBottom:20 }}>🏦 Bank Account Details</h5>
                {[['Account Name','Krida Evam Yuva Samiti'],['Bank','State Bank of India'],
                  ['Branch','Nakote, Pithoragarh'],['Account No.','11801727127'],['IFSC Code','SBIN0008426']].map(([k,v]) => (
                  <div key={k} className="bank-row">
                    <span style={{ color:'var(--text-muted)' }}>{k}</span>
                    <span style={{ fontWeight:600 }}>{v}</span>
                  </div>
                ))}
              </div>

              <div style={{ background:'var(--parch)', border:'1px dashed var(--terra)', borderRadius:12, padding:20, textAlign:'center', marginBottom:16 }}>
                <div style={{ fontSize:12, fontWeight:700, letterSpacing:'1px', textTransform:'uppercase', color:'var(--terra)', marginBottom:6 }}>📱 UPI Payment</div>
                <div style={{ fontWeight:600, color:'var(--navy)' }}>UPI ID available on request</div>
                <div style={{ fontSize:13, color:'var(--text-muted)', marginTop:4 }}>Contact: murarikeys2002@gmail.com / kriyusngo@gmail.com</div>
              </div>

              <div style={{ background:'#EEF6FF', border:'1px solid #B3D4F5', borderRadius:12, padding:16, display:'flex', gap:12 }}>
                <span style={{ fontSize:20 }}>🔍</span>
                <div>
                  <div style={{ fontWeight:600, fontSize:13, color:'#1565C0', marginBottom:4 }}>100% Transparency Pledge</div>
                  <div style={{ fontSize:12, color:'#1976D2' }}>All donations are documented and used exclusively for community programs. Annual reports available on request.</div>
                </div>
              </div>
              <div style={{ background:'white', border:'1px solid var(--border)',
              borderRadius:12, padding:'16px 20px', marginTop:16 }}>
  <div style={{ fontSize:11, fontFamily:'Inter,sans-serif', fontWeight:700,
                letterSpacing:2, textTransform:'uppercase',
                color:'var(--text-muted)', marginBottom:12 }}>
    Legal & Tax Information
  </div>
  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
    {[
      ['Registration No.', '178/2002-2003'],
      ['PAN Card', 'AAAAK7143D'],
      ['80G Status', 'Registered — Tax Exemption Available'],
      ['CSR Registration', 'CSR00059700'],
    ].map(([k, v]) => (
      <div key={k} style={{ padding:'10px 14px', background:'var(--parch)',
                            borderRadius:8, borderLeft:'3px solid var(--terra)' }}>
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:1,
                      textTransform:'uppercase', color:'var(--text-muted)',
                      marginBottom:4 }}>{k}</div>
        <div style={{ fontSize:13, fontWeight:600, 
                      color:'var(--text-dark)' }}>{v}</div>
      </div>
    ))}
  </div>
</div>
            </div>
            <div className="col-lg-7">
              <div style={{ background:'white', border:'1px solid var(--border)', borderRadius:16, padding:36 }}>
                <h4 style={{ fontFamily:'Playfair Display,serif', fontWeight:700, color:'var(--navy)', marginBottom:24 }}>♥ Share Your Donation Details</h4>
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
                      <label className="form-label">Phone</label>
                      <input className="form-control" name="phone" value={form.phone} onChange={onChange} placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Donation Amount (₹)</label>
                      <select className="form-select" name="amount" value={form.amount} onChange={onChange}>
                        <option value="">Select amount</option>
                        {['₹500','₹1,000','₹2,500','₹5,000','₹10,000','Custom Amount'].map(a => <option key={a}>{a}</option>)}
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Donate Towards</label>
                      <select className="form-select" name="program" value={form.program} onChange={onChange}>
                        {['General Fund','Women SHG Support','Youth Skill Training','Forest Conservation','Jal Jeevan Mission'].map(p => <option key={p}>{p}</option>)}
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message (Optional)</label>
                      <textarea className="form-control" name="message" value={form.message} onChange={onChange} rows={3} placeholder="A note for us..." />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-submit-terra" disabled={loading}>
                        {loading ? 'Submitting...' : '♥ Submit Donation Details'}
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
