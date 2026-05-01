export default function HeroSection({ badge, title, highlight, subtitle, minHeight='44vh', children }) {
  return (
    <section className="hero-new" style={{ minHeight, paddingBottom:60 }}>
      {/* geometric accent shapes */}
      <div style={{ position:'absolute', top:0, right:0, width:440, height:440,
                    background:'rgba(194,82,42,0.06)', borderRadius:'0 0 0 100%', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:0, left:0, width:320, height:320,
                    background:'rgba(196,150,42,0.05)', borderRadius:'0 100% 0 0', pointerEvents:'none' }}/>

      <div className="container position-relative" style={{ zIndex:2 }}>
        <div className="row">
          <div className="col-lg-8">
            {badge && (
              <div className="hero-tag anim-up">{badge}</div>
            )}
            <h1 className="hero-title anim-up-d1">
              {title}{' '}
              {highlight && <span className="accent">{highlight}</span>}
            </h1>
            {subtitle && (
              <p className="hero-desc anim-up-d2">{subtitle}</p>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
