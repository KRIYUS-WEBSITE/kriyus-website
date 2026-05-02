import { useState } from 'react'
import HeroSection from '../components/HeroSection'

// ============================================================
// ADD YOUR IMAGES: drop files in /frontend/public/gallery/
// Just change the filename below, e.g. 'my-photo.jpg'
//
// ADD YOUTUBE VIDEOS: paste the full YouTube URL
// e.g. 'https://www.youtube.com/watch?v=XXXXXXXXXXX'
// ============================================================

const allItems = [
  // ── FIELD WORK ──────────────────────────────────────────
  { cat:'field',    type:'image', src:'/gallery/project_site1.jpeg',      label:'Field Work — Mushroom Grow Tent' },
  { cat:'field',    type:'image', src:'/gallery/jal_jeevan_mission.jpeg',    label:'Jal Jeevan Mission Visit' },
  { cat:'field',    type:'image', src:'/gallery/pmksy3.jpeg',         label:'SHG Meeting, Pithoragarh' },
  { cat:'field',    type:'image', src:'/gallery/water_conservation1.jpeg',    label:'Biodiversity Documentation' },
  { cat:'field',    type:'image', src:'/gallery/van_panchayat1.jpeg',       label:'Van Panchayat Meeting' },
  { cat:'field',    type:'image', src:'/gallery/mobile_repair2.jpeg',         label:'Certification' },

  // ── TRAINING PROGRAMS ───────────────────────────────────
  { cat:'training', type:'image', src:'/gallery/training1.jpeg',        label:'Mushroom Product Training' },
  { cat:'training', type:'image', src:'/gallery/training2.jpeg',     label:'Food Processing Workshop' },
  { cat:'training', type:'image', src:'/gallery/training3.jpeg',           label:'Mushroom Training' },
  { cat:'training', type:'image', src:'/gallery/training_certification1.jpeg',     label:'Training Completion Certification' },
  { cat:'training', type:'image', src:'/gallery/mobile_repair1.jpeg', label:'Mobile Repair Training' },
  { cat:'training', type:'image', src:'/gallery/mobile_repair3.jpeg', label:'Mobile Repair Training' },

  // ── AWARENESS CAMPAIGNS ─────────────────────────────────
  { cat:'awareness',type:'image', src:'/gallery/wildlife_conservation2.jpeg',     label:'Climate Awareness Session' },
  { cat:'awareness',type:'image', src:'/gallery/forest_fire1.jpeg',         label:'Forest Fire Awareness Drive' },
  { cat:'awareness',type:'image', src:'/gallery/science_journalism1.jpeg',      label:'School Awareness Program' },

  // ── NEWS CLIPPINGS ──────────────────────────────────────
  { cat:'news',     type:'image', src:'/gallery/new_clipping1.jpeg',         label:'Coverage – Amar Ujala' },
  { cat:'news',     type:'image', src:'/gallery/news_clipping2.jpeg',         label:'Coverage – Dainik Jagran' },
  { cat:'news',     type:'image', src:'/gallery/news_clipping3.jpeg',         label:'Coverage – Local Press' },
  { cat:'news',     type:'image', src:'/gallery/Book_Fair.jpg',         label:'Coverage – Uttar Ujala' },
  { cat:'news',     type:'image', src:'/gallery/Book_Fair2.jpg',         label:'Coverage – Dainik Jagran' },
  { cat:'news',     type:'image', src:'/gallery/Jadi-Buti.jpg ',         label:'Coverage – Amar Ujala' },
  { cat:'news',     type:'image', src:'/gallery/Jadi-Buti2.jpg ',         label:'Coverage – Amar Ujala' },
  { cat:'news',     type:'image', src:'/gallery/Wildlife_Conservation1.jpg ',         label:'Coverage – Amar Ujala' },
  { cat:'news',     type:'image', src:'/gallery/Science1.jpg ',         label:'Coverage – Sahara' },
  
  // —— PRODUCT IMAGES ────────────────────────────────────
  { cat:'products', type:'image', src:'/gallery/mushroom2.jpeg', label:'Oyster Mushrooms'}
]

const tabs = [
  { key:'all',      label:'All' },
  { key:'field',    label:'Field Work' },
  { key:'training', label:'Training' },
  { key:'awareness',label:'Awareness' },
  { key:'news',     label:'News Clippings' },
  { key:'products',  label:'Product'}
]

// Converts YouTube watch URL → embed URL
function getYouTubeEmbed(url) {
  const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : url
}

// Fallback shown when an image hasn't been added yet
function ImagePlaceholder({ label }) {
  return (
    <div style={{ height:220, background:'var(--parch-dark)',
                  display:'flex', flexDirection:'column',
                  alignItems:'center', justifyContent:'center',
                  gap:8 }}>
      <span style={{ fontSize:36, opacity:.4 }}>🖼️</span>
      <span style={{ fontSize:11, color:'var(--text-muted)',
                     textAlign:'center', padding:'0 12px' }}>{label}</span>
    </div>
  )
}

function GalleryCard({ item }) {
  const [imgError, setImgError] = useState(false)

  if (item.type === 'video') {
    return (
      <div className="gallery-item" style={{ background:'#000' }}>
        <iframe
          src={getYouTubeEmbed(item.src)}
          title={item.label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width:'100%', height:220, border:'none', display:'block' }}
        />
        <div style={{ padding:'10px 14px', background:'white', fontSize:12,
                      fontWeight:600, color:'var(--text-mid)' }}>
          ▶ {item.label}
        </div>
      </div>
    )
  }

  return (
    <div className="gallery-item">
      {imgError
        ? <ImagePlaceholder label={item.label} />
        : (
          <div style={{ position:'relative', overflow:'hidden' }}>
            <img
              src={item.src}
              alt={item.label}
              onError={() => setImgError(true)}
              style={{ width:'100%', height:220, objectFit:'cover',
                       display:'block', transition:'transform 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div style={{ position:'absolute', bottom:0, left:0, right:0,
                          background:'linear-gradient(to top, rgba(0,0,0,0.65), transparent)',
                          padding:'24px 14px 12px', color:'white',
                          fontSize:12, fontWeight:600 }}>
              {item.label}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default function Gallery() {
  const [active, setActive] = useState('all')
  const items = active === 'all' ? allItems : allItems.filter(i => i.cat === active)

  const counts = {}
  allItems.forEach(i => { counts[i.cat] = (counts[i.cat] || 0) + 1 })

  return (
    <>
      <HeroSection badge="Field Moments" title="Our" highlight="Gallery"
        subtitle="Glimpses from the field — real people, real change, real Himalayas." />

      <section className="section-white">
        <div className="container">

          {/* Tabs */}
          <div className="d-flex gap-2 flex-wrap mb-4">
            {tabs.map(t => (
              <button key={t.key} onClick={() => setActive(t.key)}
                      className={`gallery-tab-btn ${active === t.key ? 'active' : ''}`}>
                {t.label}
                {t.key !== 'all' && counts[t.key] &&
                  <span style={{ marginLeft:6, background:'rgba(255,255,255,0.25)',
                                 borderRadius:50, padding:'1px 7px', fontSize:10 }}>
                    {counts[t.key]}
                  </span>
                }
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="row g-3">
            {items.map((item) => (
                <div className={`col-6 col-md-4 ${item.type === 'video' ? 'col-lg-4' : 'col-lg-3'}`} key={item.src}>
                <GalleryCard item={item} />
              </div>
            ))}
          </div>


        </div>
      </section>
    </>
  )
}