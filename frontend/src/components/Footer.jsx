import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="k-footer">
      <div className="container">
        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="nav-logo-mark">K</div>
              <div>
                <div style={{ color:'white', fontFamily:'Playfair Display,serif', fontWeight:700, fontSize:17 }}>KRIYUS</div>
                <div style={{ fontSize:10, opacity:.55 }}>Krida Evam Yuva Samiti</div>
              </div>
            </div>
            <p style={{ fontSize:13, lineHeight:1.8 }}>
              Empowering rural communities of the Himalayas since 2002.
              Based in Pithoragarh, Uttarakhand.
            </p>
            <div className="mt-3 d-flex gap-2">
              <Link to="/donate"
                    style={{ background:'var(--terra)', color:'white', fontFamily:'Inter,sans-serif',
                             fontWeight:600, fontSize:13, padding:'8px 20px', borderRadius:50,
                             textDecoration:'none', display:'inline-block' }}>
                ♥ Donate
              </Link>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h5>Explore</h5>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/impact">Our Impact</Link>
            <Link to="/collaborations">Partners</Link>
          </div>

          <div className="col-6 col-lg-2">
            <h5>Get Involved</h5>
            <Link to="/donate">Donate</Link>
            <Link to="/volunteer">Volunteer</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-lg-4">
            <h5>Contact</h5>
            <p style={{ fontSize:13, marginBottom:4 }}>
  Village Sanghar, PO Baste<br/>
  Pithoragarh, Uttarakhand – 262501
</p>
<p style={{ fontSize:12, color:'rgba(255,255,255,0.4)', marginBottom:8 }}>
  Registered Office
</p>
<p style={{ fontSize:13, marginBottom:4 }}>
  Near GGIC Gate, Chandak Road<br/>
  Pithoragarh, Uttarakhand
</p>
<p style={{ fontSize:12, color:'rgba(255,255,255,0.4)', marginBottom:8 }}>
  Project Coordination Office
</p>
<p style={{ fontSize:13, marginBottom:4 }}>+91 9411336153</p>
<p style={{ fontSize:13, marginBottom:4 }}>kriyusngo@gmail.com</p>
<p style={{ fontSize:13 }}>murarikeys2002@gmail.com</p>
          </div>
        </div>
        {/* Legal credentials strip */}
<div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', 
              paddingTop:20, marginBottom:20 }}>
  <div style={{ display:'flex', flexWrap:'wrap', gap:'12px 32px' }}>
    {[
      ['Reg. No.', '178/2002-2003'],
      ['PAN', 'AAAAK7143D'],
      ['80G', 'Tax Exemption Registered'],
      ['CSR', 'CSR00059700'],
    ].map(([k, v]) => (
      <div key={k} style={{ fontSize:12 }}>
        <span style={{ color:'rgba(255,255,255,0.4)', 
                       marginRight:6 }}>{k}:</span>
        <span style={{ color:'rgba(255,255,255,0.7)', 
                       fontWeight:600 }}>{v}</span>
      </div>
    ))}
  </div>
</div>
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:24, textAlign:'center', fontSize:12 }}>
          © {new Date().getFullYear()} KRIYUS – Krida Evam Yuva Samiti. All rights reserved.
          &nbsp;·&nbsp; Pithoragarh, Uttarakhand
        </div>
        <div style={{ fontSize:11, opacity:.4, marginTop:8 }}>
  Designed & Developed by{' '}
  <a href="https://github.com/vidhi-pandey04"
     style={{ color:'inherit' }} target="_blank">
    Vidhi Pandey
  </a>
</div>
      </div>
      
    </footer>
  )
}
