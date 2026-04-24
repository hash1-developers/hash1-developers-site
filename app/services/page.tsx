'use client'

const services = [
  {
    icon: '{ }',
    title: 'Web Development',
    desc: 'Modern, responsive websites using HTML, CSS, JavaScript and WordPress. Clean code, fast performance.',
    tags: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
  {
    icon: '⬛',
    title: 'Desktop Software',
    desc: 'Custom desktop applications built with Visual Basic and VBA. Perfect for businesses needing automation.',
    tags: ['Visual Basic', 'VBA', 'MS Office'],
  },
  {
    icon: '✦',
    title: 'Graphic Designing',
    desc: 'Logos, branding, social media posts, banners, thumbnails and presentations.',
    tags: ['Canva', 'Illustrator', 'PowerPoint'],
  },
  {
    icon: '◎',
    title: 'Digital Branding',
    desc: 'Managing Instagram, Facebook, YouTube and TikTok. Creating on-brand posts, reels and campaigns.',
    tags: ['Instagram', 'Facebook', 'TikTok', 'YouTube'],
  },
  {
    icon: '◷',
    title: 'Photography',
    desc: 'Professional product, event and portrait shoots delivering high quality branding content.',
    tags: ['Product Shoots', 'Event Coverage', 'Portraits'],
  },
  {
    icon: '▶',
    title: 'Videography',
    desc: 'Modern product, event and reel shoots edited in CapCut — cinematic engaging video content.',
    tags: ['Reels', 'Shorts', 'Cinematic', 'CapCut'],
  },
]

export default function Services() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(30px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes blink {
          0%,100% { opacity:1; }
          50% { opacity:0.2; }
        }
        @keyframes orbFloat {
          0%,100% { transform:translate(0,0) scale(1); }
          33% { transform:translate(30px,-40px) scale(1.05); }
          66% { transform:translate(-20px,20px) scale(0.95); }
        }
        .fade1 { animation: fadeUp 0.8s 0.2s cubic-bezier(0.16,1,0.3,1) both; }
        .fade2 { animation: fadeUp 0.8s 0.4s cubic-bezier(0.16,1,0.3,1) both; }
        .fade3 { animation: fadeUp 0.8s 0.6s cubic-bezier(0.16,1,0.3,1) both; }
        .service-card { transition: all 0.3s; cursor: default; }
        .service-card:hover {
          border-color: rgba(0,200,150,0.4) !important;
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,200,150,0.08);
        }
        .service-card:hover .card-icon {
          background: rgba(0,200,150,0.15) !important;
          border-color: rgba(0,200,150,0.5) !important;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 24px;
          margin-bottom: 80px;
        }
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2,1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Background */}
      <div style={{ position:'fixed', inset:0, zIndex:0, overflow:'hidden', pointerEvents:'none' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(0,200,150,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,150,0.04) 1px,transparent 1px)', backgroundSize:'60px 60px' }}/>
        <div style={{ position:'absolute', width:'500px', height:'500px', top:'-100px', left:'-100px', background:'radial-gradient(circle,rgba(0,200,150,0.12),transparent 70%)', filter:'blur(100px)', animation:'orbFloat 12s ease-in-out infinite' }}/>
        <div style={{ position:'absolute', width:'400px', height:'400px', bottom:0, right:'-100px', background:'radial-gradient(circle,rgba(0,160,119,0.1),transparent 70%)', filter:'blur(100px)', animation:'orbFloat 12s ease-in-out -4s infinite' }}/>
      </div>

      <main style={{ position:'relative', zIndex:1, padding:'120px 5% 80px', maxWidth:'1200px', margin:'0 auto' }}>

        {/* Tag */}
        <div className="fade1" style={{
          display:'inline-flex', alignItems:'center', gap:'8px',
          padding:'6px 14px', border:'1px solid rgba(0,200,150,0.35)',
          borderRadius:'99px', fontSize:'11px', color:'#00C896',
          letterSpacing:'0.1em', textTransform:'uppercase',
          fontWeight:500, marginBottom:'20px', background:'rgba(0,200,150,0.08)',
        }}>
          <span style={{ width:'6px', height:'6px', background:'#00C896', borderRadius:'50%', animation:'blink 1.5s ease-in-out infinite', display:'inline-block' }}/>
          What I Offer
        </div>

        {/* Heading */}
        <h1 className="fade2" style={{
          fontFamily:'Syne, sans-serif', fontWeight:800,
          fontSize:'clamp(32px,5vw,64px)',
          lineHeight:1.0, letterSpacing:'-0.03em', marginBottom:'16px',
        }}>
          My <span style={{ color:'#00C896' }}>Services</span>
        </h1>

        <p className="fade2" style={{
          fontSize:'16px', color:'rgba(240,248,245,0.5)',
          lineHeight:1.7, maxWidth:'500px',
          marginBottom:'60px', fontWeight:300,
        }}>
          From web development to visual content — I deliver complete digital solutions tailored to your needs.
        </p>

        {/* Services Grid */}
        <div className="fade3 services-grid">
          {services.map(service => (
            <div key={service.title} className="service-card" style={{
              background:'#0C1217',
              border:'1px solid rgba(0,200,150,0.12)',
              borderRadius:'20px', padding:'28px',
              display:'flex', flexDirection:'column', gap:'16px',
            }}>
              <div className="card-icon" style={{
                width:'48px', height:'48px', borderRadius:'12px',
                background:'rgba(0,200,150,0.08)',
                border:'1px solid rgba(0,200,150,0.2)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'18px', color:'#00C896',
                fontFamily:'Syne,sans-serif', fontWeight:700,
                transition:'all 0.3s',
              }}>{service.icon}</div>
              <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'17px', color:'#F0F8F5' }}>{service.title}</div>
              <p style={{ fontSize:'13px', color:'rgba(240,248,245,0.45)', lineHeight:1.7, fontWeight:300, flexGrow:1 }}>{service.desc}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                {service.tags.map(tag => (
                  <span key={tag} style={{
                    padding:'4px 10px',
                    background:'rgba(0,200,150,0.06)',
                    border:'1px solid rgba(0,200,150,0.15)',
                    borderRadius:'99px', fontSize:'10px', color:'#00C896',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          background:'linear-gradient(135deg,rgba(0,200,150,0.1),rgba(0,160,119,0.05))',
          border:'1px solid rgba(0,200,150,0.2)',
          borderRadius:'24px', padding:'48px',
          textAlign:'center',
        }}>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(22px,4vw,32px)', color:'#F0F8F5', marginBottom:'12px' }}>
            Ready to Start a Project?
          </h2>
          <p style={{ fontSize:'15px', color:'rgba(240,248,245,0.5)', marginBottom:'28px' }}>
            Let&apos;s build something great together!
          </p>
          <a href="/contact" style={{
            display:'inline-block', padding:'14px 36px',
            background:'#00C896', borderRadius:'10px',
            color:'#060A0D', fontFamily:'Syne,sans-serif',
            fontWeight:700, fontSize:'14px', textDecoration:'none',
            transition:'all 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#00A077'}
            onMouseLeave={e => e.currentTarget.style.background = '#00C896'}
          >Get In Touch ↗</a>
        </div>
      </main>
    </>
  )
}