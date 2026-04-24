'use client'
import { useState } from 'react'

const projects = [
  {
    title: 'Muaaz Store',
    desc: 'Complete POS & inventory management system with real-time stock tracking, sales analytics and invoice generation.',
    tags: ['Visual Basic', 'VBA'],
    category: 'Software',
    emoji: '🛍️',
  },
  {
    title: 'Bajwa Gold Travels & Tours',
    desc: 'Travel agency management system with client management, payment tracking and financial reporting.',
    tags: ['Visual Basic', 'VBA'],
    category: 'Software',
    emoji: '✈️',
  },
  {
    title: 'Khalil Pizza & Fast Food',
    desc: 'Restaurant POS system with menu management, order processing, employee payroll and daily revenue dashboard.',
    tags: ['Visual Basic', 'VBA'],
    category: 'Software',
    emoji: '🍕',
  },
  {
    title: 'Attendance Management',
    desc: 'Web-based attendance system with real-time tracking, reports and modern dashboard interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    emoji: '📋',
  },
  {
    title: 'Hash-1 Developers Portfolio',
    desc: 'Official portfolio website for Hash-1 Developers built with Next.js and deployed on Vercel.',
    tags: ['Next.js', 'React', 'Tailwind'],
    category: 'Web',
    emoji: '🌐',
  },
  {
    title: 'Creative Computers Branding',
    desc: 'Complete brand identity including logo design, color palette, visiting cards, social media posts and Facebook cover.',
    tags: ['Illustrator', 'Canva'],
    category: 'Branding',
    emoji: '🎨',
  },
  {
    title: 'Khalil Fast Food UI Design',
    desc: 'Complete software UI/UX design with dark mode interface, modern typography and intuitive layout.',
    tags: ['PowerPoint', 'Canva', 'Illustrator'],
    category: 'Design',
    emoji: '✦',
  },
  {
    title: 'Bajwa Gold Software Design',
    desc: 'Premium teal and gold dark theme software design with professional layout and custom color palette.',
    tags: ['PowerPoint', 'Canva', 'Illustrator'],
    category: 'Design',
    emoji: '⭐',
  },
  {
    title: 'CTTC Media Coverage',
    desc: 'Professional photography and videography for CTTC events — Freshers Welcome, Suzuki Camp and cinematic shorts.',
    tags: ['Photography', 'CapCut'],
    category: 'Photo/Video',
    emoji: '📸',
  },
]

const categories = ['All', 'Software', 'Web', 'Branding', 'Design', 'Photo/Video']

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

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
        .filter-btn { transition: all 0.3s; cursor: pointer; border: none; }
        .filter-btn:hover { border-color: rgba(0,200,150,0.4) !important; color: #00C896 !important; }
        .project-card { transition: all 0.3s; }
        .project-card:hover {
          border-color: rgba(0,200,150,0.35) !important;
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,200,150,0.08);
        }
        .project-card:hover .proj-icon {
          background: rgba(0,200,150,0.15) !important;
          border-color: rgba(0,200,150,0.4) !important;
        }
      `}</style>

      {/* Background */}
      <div style={{ position:'fixed', inset:0, zIndex:0, overflow:'hidden', pointerEvents:'none' }}>
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:'linear-gradient(rgba(0,200,150,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,150,0.04) 1px,transparent 1px)',
          backgroundSize:'60px 60px',
        }}/>
        <div style={{ position:'absolute', width:'500px', height:'500px', top:'-100px', left:'-100px', background:'radial-gradient(circle,rgba(0,200,150,0.12),transparent 70%)', filter:'blur(100px)', animation:'orbFloat 12s ease-in-out infinite' }}/>
        <div style={{ position:'absolute', width:'400px', height:'400px', bottom:0, right:'-100px', background:'radial-gradient(circle,rgba(0,160,119,0.1),transparent 70%)', filter:'blur(100px)', animation:'orbFloat 12s ease-in-out -4s infinite' }}/>
      </div>

      <main style={{ position:'relative', zIndex:1, padding:'120px 5% 80px', maxWidth:'1200px', margin:'0 auto' }}>

        {/* Tag */}
        <div className="fade1" style={{
          display:'inline-flex', alignItems:'center', gap:'8px',
          padding:'6px 14px',
          border:'1px solid rgba(0,200,150,0.35)',
          borderRadius:'99px', fontSize:'11px', color:'#00C896',
          letterSpacing:'0.1em', textTransform:'uppercase',
          fontWeight:500, marginBottom:'20px',
          background:'rgba(0,200,150,0.08)',
        }}>
          <span style={{ width:'6px', height:'6px', background:'#00C896', borderRadius:'50%', animation:'blink 1.5s ease-in-out infinite', display:'inline-block' }}/>
          My Work
        </div>

        {/* Heading */}
        <h1 className="fade2" style={{
          fontFamily:'Syne, sans-serif', fontWeight:800,
          fontSize:'clamp(36px,5vw,64px)',
          lineHeight:1.0, letterSpacing:'-0.03em',
          marginBottom:'16px',
        }}>
          My <span style={{ color:'#00C896' }}>Portfolio</span>
        </h1>

        <p className="fade2" style={{
          fontSize:'16px', color:'rgba(240,248,245,0.5)',
          lineHeight:1.7, maxWidth:'500px',
          marginBottom:'40px', fontWeight:300,
        }}>
          A collection of my best work — software, web, branding, design and visual content.
        </p>

        {/* Filter Tabs */}
        <div className="fade3" style={{ display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'40px' }}>
          {categories.map(cat => (
            <button key={cat} className="filter-btn" onClick={() => setActive(cat)} style={{
              padding:'8px 18px',
              borderRadius:'99px',
              fontSize:'12px', fontWeight:500,
              letterSpacing:'0.04em',
              background: active === cat ? '#00C896' : 'transparent',
              color: active === cat ? '#060A0D' : 'rgba(240,248,245,0.5)',
              border: active === cat ? '1px solid #00C896' : '1px solid rgba(0,200,150,0.2)',
              fontFamily: active === cat ? 'Syne,sans-serif' : 'DM Sans,sans-serif',
            }}>{cat}</button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(3,1fr)',
          gap:'24px',
          marginBottom:'80px',
        }}>
          {filtered.map((project) => (
            <div key={project.title} className="project-card" style={{
              background:'#0C1217',
              border:'1px solid rgba(0,200,150,0.12)',
              borderRadius:'20px', padding:'28px',
              display:'flex', flexDirection:'column', gap:'14px',
            }}>
              {/* Icon + Category */}
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                <div className="proj-icon" style={{
                  width:'48px', height:'48px',
                  borderRadius:'12px',
                  background:'rgba(0,200,150,0.08)',
                  border:'1px solid rgba(0,200,150,0.15)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'22px', transition:'all 0.3s',
                }}>{project.emoji}</div>
                <span style={{
                  padding:'4px 10px',
                  background:'rgba(0,200,150,0.08)',
                  border:'1px solid rgba(0,200,150,0.15)',
                  borderRadius:'99px', fontSize:'10px',
                  color:'#00C896', letterSpacing:'0.06em',
                }}>{project.category}</span>
              </div>

              {/* Title */}
              <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'16px', color:'#F0F8F5' }}>
                {project.title}
              </div>

              {/* Desc */}
              <p style={{ fontSize:'13px', color:'rgba(240,248,245,0.45)', lineHeight:1.7, fontWeight:300, flexGrow:1 }}>
                {project.desc}
              </p>

              {/* Tags */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    padding:'4px 10px',
                    background:'rgba(0,200,150,0.06)',
                    border:'1px solid rgba(0,200,150,0.12)',
                    borderRadius:'99px', fontSize:'10px', color:'#00C896',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(4,1fr)',
          gap:'16px',
        }}>
          {[
            { num:'30+', label:'Software & Websites' },
            { num:'200+', label:'Designs Created' },
            { num:'10+', label:'Accounts Managed' },
            { num:'5+', label:'Branding Campaigns' },
          ].map(s => (
            <div key={s.label} style={{
              background:'#0C1217',
              border:'1px solid rgba(0,200,150,0.12)',
              borderRadius:'16px', padding:'24px',
              textAlign:'center',
            }}>
              <div style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'28px', color:'#00C896', marginBottom:'6px' }}>{s.num}</div>
              <div style={{ fontSize:'12px', color:'rgba(240,248,245,0.4)', letterSpacing:'0.04em' }}>{s.label}</div>
            </div>
          ))}
        </div>

      </main>
    </>
  )
}