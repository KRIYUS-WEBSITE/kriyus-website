import { useState } from 'react'

export default function ProjectCard({ accentColor, tag, title, description, impact, image, onClick }) {
  const [imgErr, setImgErr] = useState(false)

  return (
    <div onClick={onClick} className="k-card h-100"
         style={{ cursor: onClick ? 'pointer' : 'default' }}>

      {/* Image or fallback color bar */}
      {image && !imgErr ? (
        <div style={{ height:200, overflow:'hidden', position:'relative' }}>
          <img
            src={image}
            alt={title}
            onError={() => setImgErr(true)}
            style={{ width:'100%', height:'100%', objectFit:'cover',
                     display:'block', transition:'transform 0.4s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          {/* Subtle gradient overlay at bottom */}
          <div style={{ position:'absolute', bottom:0, left:0, right:0,
                        height:60,
                        background:'linear-gradient(to top, rgba(0,0,0,0.35), transparent)' }}/>
        </div>
      ) : (
        /* Fallback: colored bar if no image or image fails */
        <div style={{ height:6, background:`var(--${accentColor})`,
                      borderRadius:'12px 12px 0 0' }} />
      )}

      <div className="k-card-body">
        <div className="k-card-tag">{tag}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="k-impact-badge">{impact}</div>
        {onClick && (
          <div style={{ marginTop:16, color:'var(--terra)', fontSize:13,
                        fontWeight:600, display:'flex', alignItems:'center', gap:6 }}>
            View Details <span style={{ fontSize:16 }}>→</span>
          </div>
        )}
      </div>
    </div>
  )
}