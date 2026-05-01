import { useState, useEffect, useRef } from 'react'

function Counter({ target, suffix='+' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        const dur = 1600, step = target / (dur / 16)
        let cur = 0
        const t = setInterval(() => {
          cur = Math.min(cur + step, target)
          setCount(Math.floor(cur))
          if (cur >= target) clearInterval(t)
        }, 16)
      }
    }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref} className="stat-counter-num">{count}{suffix}</span>
}

const icons = [
  // villages
  <path key="v" d="M3 20l5-8 4 5 3-4 6 7H3z"/>,
  // women / person
  <g key="w"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></g>,
  // group / panchayat
  <g key="g"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></g>,
  // megaphone / awareness
  <g key="m"><path d="M22 6L12 13 2 6"/><rect x="2" y="6" width="20" height="13" rx="2"/></g>,
  // clock / years
  <g key="c"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></g>,
  // handshake / partners
  <g key="h"><path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65l8.42 8.42 8.42-8.42a5.4 5.4 0 000-7.65z"/></g>,
]

export default function ImpactCounter({ stats }) {
  return (
    <div className="row g-4 justify-content-center">
      {stats.map((s, i) => (
        <div className="col-6 col-md-4 col-xl-2" key={i}>
          <div className="stat-box h-100 text-center">

            {/* Icon */}
            <div style={{ width:52, height:52, borderRadius:14,
                          background:'rgba(194,82,42,0.12)',
                          display:'flex', alignItems:'center',
                          justifyContent:'center', margin:'0 auto 16px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="var(--terra)" strokeWidth="1.8"
                   strokeLinecap="round" strokeLinejoin="round">
                {icons[i % icons.length]}
              </svg>
            </div>

            {/* Number */}
            <Counter target={s.value} suffix={s.suffix ?? '+'} />

            {/* Label */}
            <div style={{ fontSize:11, color:'var(--text-muted)', marginTop:8,
                          fontWeight:700, textTransform:'uppercase',
                          letterSpacing:'0.8px', lineHeight:1.4 }}>
              {s.label}
            </div>

            {/* Sub */}
            {s.sub && (
              <div style={{ fontSize:11, color:'var(--terra)',
                            marginTop:6, fontWeight:500 }}>
                {s.sub}
              </div>
            )}

          </div>
        </div>
      ))}
    </div>
  )
}