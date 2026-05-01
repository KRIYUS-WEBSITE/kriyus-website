import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { to:'/',               label:'Home' },
  { to:'/about',          label:'About' },
  { to:'/projects',       label:'Projects' },
  { to:'/training-center', label:'Training Center' },
  { to:'/impact',         label:'Impact' },
  { to:'/collaborations', label:'Partners' },
  { to:'/gallery',        label:'Gallery' },
  { to:'/contact',        label:'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`kriyus-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid px-4 d-flex align-items-center justify-content-between" style={{ height:70 }}>

        <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
          <img
            src="/logo.jpg"
            alt="KRIYUS Logo"
            style={{ height: 52, width: 52, objectFit: 'contain', borderRadius: 6 }}
          />
          <div>
            <div className="brand-name">KRIYUS</div>
            <div className="brand-sub">Krida Evam Yuva Samiti</div>
          </div>
        </Link>

        <div className={`d-lg-flex align-items-center gap-1 ${open ? 'd-flex flex-column position-fixed top-0 start-0 end-0 bg-white p-4 pt-5 mt-5 border-bottom shadow' : 'd-none'}`}
             style={open ? { zIndex:999 } : {}}>
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to} end={item.to==='/'}
                     className={({ isActive }) => `nav-link-custom ${isActive ? 'active-link' : ''}`}
                     onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <div className="d-flex gap-2 ms-lg-2 mt-2 mt-lg-0">
            <Link to="/volunteer" onClick={() => setOpen(false)}
                  className="btn btn-sm rounded-pill px-3 py-2"
                  style={{ border:'1.5px solid var(--terra)', color:'var(--terra)', fontFamily:'Inter,sans-serif', fontWeight:600, fontSize:13 }}>
              Volunteer
            </Link>
            <Link to="/donate" onClick={() => setOpen(false)}
                  className="btn-nav-donate btn btn-sm rounded-pill px-3 py-2">
              ♥ Donate
            </Link>
          </div>
        </div>

        <button className="d-lg-none border-0 bg-transparent fs-4 p-1"
                onClick={() => setOpen(!open)} style={{ color:'var(--navy)' }}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
