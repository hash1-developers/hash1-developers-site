'use client'
import { useEffect, useRef } from 'react'

export default function Home() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div')
      p.style.cssText = `
        position:absolute;
        width:${1 + Math.random() * 2}px;
        height:${1 + Math.random() * 2}px;
        background:#00C896;
        border-radius:50%;
        left:${Math.random() * 100}vw;
        animation:particleRise ${8 + Math.random() * 16}s linear ${Math.random() * 20}s infinite;
        opacity:0;
      `
      container.appendChild(p)
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes particleRise {
          0% { transform:translateY(100vh); opacity:0; }
          10% { opacity:0.6; }
          90% { opacity:0.3; }
          100% { transform:translateY(-100px); opacity:0; }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(30px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes lineReveal {
          from { transform:translateY(110%); }
          to { transform:translateY(0); }
        }
        @keyframes blink {
          0%,100% { opacity:1; }
          50% { opacity:0.2; }
        }
        @keyframes cardFloat {
          0%,100% { transform:translate(-50%,-50%) translateY(0); }
          50% { transform:translate(-50%,-50%) translateY(-12px); }
        }
        @keyframes floatA {
          0%,100% { transform:translateY(0) rotate(-1deg); }
          50% { transform:translateY(-10px) rotate(1deg); }
        }
        @keyframes floatB {
          0%,100% { transform:translateY(0) rotate(1deg); }
          50% { transform:translateY(-8px) rotate(-1deg); }
        }
        @keyframes ringRotate {
          from { transform:rotate(0deg); }
          to { transform:rotate(360deg); }
        }
        @keyframes orbFloat {
          0%,100% { transform:translate(0,0) scale(1); }
          33% { transform:translate(30px,-40px) scale(1.05); }
          66% { transform:translate(-20px,20px) scale(0.95); }
        }
        @keyframes ticker {
          from { transform:translateX(0); }
          to { transform:translateX(-50%); }
        }
        @keyframes scanLine {
          from { left:-100%; }
          to { left:100%; }
        }
        .hero-tag { animation: fadeUp 0.8s 0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-sub { animation: fadeUp 0.8s 1s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-actions { animation: fadeUp 0.8s 1.1s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-stats { animation: fadeUp 0.8s 1.2s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-right { animation: fadeUp 0.8s 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .line1 span { animation: lineReveal 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .line2 span { animation: lineReveal 0.9s 0.65s cubic-bezier(0.16,1,0.3,1) both; }
        .line3 span { animation: lineReveal 0.9s 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .btn-primary:hover { background:#00A077 !important; box-shadow:0 0 40px rgba(0,200,150,0.5); transform:translateY(-2px); }
        .btn-ghost:hover { color:#F0F8F5 !important; border-color:#00C896 !important; background:rgba(0,200,150,0.08) !important; }
        .mini-card-1 { animation: floatA 7s ease-in-out infinite; }
        .mini-card-2 { animation: floatB 8s ease-in-out infinite; }
        .mini-card-3 { animation: floatA 9s ease-in-out 1s infinite; }
      `}</style>

      {/* Background */}
      <div style={{ position:'fixed', inset:0, zIndex:0, overflow:'hidden', pointerEvents:'none' }}>
        {/* Grid */}
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:'linear-gradient(rgba(0,200,150,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,150,0.04) 1px,transparent 1px)',
          backgroundSize:'60px 60px',
        }}/>
        {/* Orbs */}
        <div style={{ position:'absolute', width:'500px', height:'500px', top:'-100px', left:'-100px', background:'radial-gradient(circle,rgba(0,200,150,0.15),transparent 70%)', filter:'blur(100px)', animation:'orbFloat 12s ease-in-out infinite' }}/>
        <div style={{ position:'absolute', width:'400px', height:'400px', bottom:0, right:'-100px', background:'radial-gradient(circle,rgba(0,160,119,0.1),transparent 70%)', filter:'blur(100px)', animation:'orbFloat 12s ease-in-out -4s infinite' }}/>
        {/* Particles */}
        <div ref={particlesRef} style={{ position:'absolute', inset:0 }}/>
      </div>

      {/* Hero Section */}
      <section style={{
        position:'relative', zIndex:1,
        minHeight:'100vh',
        display:'flex', alignItems:'center',
        padding:'120px 5% 80px',
      }}>
        <div style={{
          width:'100%', maxWidth:'1200px', margin:'0 auto',
          display:'grid', gridTemplateColumns:'1fr 1fr',
          gap:'80px', alignItems:'center',
        }}>

          {/* LEFT */}
          <div>
            {/* Tag */}
            <div className="hero-tag" style={{
              display:'inline-flex', alignItems:'center', gap:'8px',
              padding:'6px 14px',
              border:'1px solid rgba(0,200,150,0.35)',
              borderRadius:'99px',
              fontSize:'11px', color:'#00C896',
              letterSpacing:'0.1em', textTransform:'uppercase',
              fontWeight:500, marginBottom:'28px',
              background:'rgba(0,200,150,0.08)',
            }}>
              <span style={{ width:'6px', height:'6px', background:'#00C896', borderRadius:'50%', animation:'blink 1.5s ease-in-out infinite', display:'inline-block' }}/>
              Available for Projects
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily:'Syne, sans-serif', fontWeight:800,
              fontSize:'clamp(44px,5.5vw,72px)',
              lineHeight:1.0, letterSpacing:'-0.03em',
              marginBottom:'24px',
            }}>
              <div className="line1" style={{ overflow:'hidden' }}><span style={{ display:'block' }}>From</span></div>
              <div className="line2" style={{ overflow:'hidden' }}>
                <span style={{ display:'block', color:'#00C896', position:'relative' }}>
                  Creativity
                  <span style={{ position:'absolute', bottom:'4px', left:0, right:0, height:'3px', background:'#00C896', opacity:0.3, borderRadius:'2px' }}/>
                </span>
              </div>
              <div className="line3" style={{ overflow:'hidden' }}><span style={{ display:'block' }}>to Code.</span></div>
            </h1>

            {/* Sub */}
            <p className="hero-sub" style={{
              fontSize:'16px', color:'rgba(240,248,245,0.5)',
              lineHeight:1.7, maxWidth:'440px',
              marginBottom:'40px', fontWeight:300,
            }}>
              I&apos;m Nouman Ahsan Jaral — Founder of Hash-1 Developers. I design and build premium digital experiences: websites, desktop software, brands, and visual content.
            </p>

            {/* Buttons */}
            <div className="hero-actions" style={{ display:'flex', alignItems:'center', gap:'16px' }}>
              <a href="/portfolio" className="btn-primary" style={{
                padding:'14px 32px', background:'#00C896',
                borderRadius:'10px', color:'#060A0D',
                fontFamily:'Syne, sans-serif', fontWeight:700,
                fontSize:'14px', textDecoration:'none',
                transition:'all 0.3s',
              }}>Explore My Work</a>
              <a href="/contact" className="btn-ghost" style={{
                display:'flex', alignItems:'center', gap:'8px',
                padding:'14px 24px',
                border:'1px solid rgba(0,200,150,0.35)',
                borderRadius:'10px',
                color:'rgba(240,248,245,0.5)',
                fontSize:'14px', textDecoration:'none',
                transition:'all 0.3s',
              }}>Get In Touch <span>↗</span></a>
            </div>

            {/* Stats */}
            <div className="hero-stats" style={{
              display:'flex', gap:'32px',
              marginTop:'52px', paddingTop:'32px',
              borderTop:'1px solid rgba(0,200,150,0.12)',
            }}>
              {[
                { num:'30+', label:'Projects' },
                { num:'200+', label:'Designs' },
                { num:'10+', label:'Accounts' },
                { num:'5+', label:'Campaigns' },
              ].map((s, i) => (
                <>
                  {i > 0 && <div key={`d${i}`} style={{ width:'1px', background:'rgba(0,200,150,0.12)', alignSelf:'stretch' }}/>}
                  <div key={s.label} style={{ display:'flex', flexDirection:'column', gap:'2px' }}>
                    <span style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'26px', color:'#00C896', lineHeight:1 }}>{s.num}</span>
                    <span style={{ fontSize:'11px', color:'rgba(240,248,245,0.25)', letterSpacing:'0.06em', textTransform:'uppercase' }}>{s.label}</span>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* RIGHT — Floating Cards */}
          <div className="hero-right" style={{ position:'relative', height:'480px' }}>

            {/* Rings */}
            <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'380px', height:'380px' }}>
              <div style={{ position:'absolute', inset:0, borderRadius:'50%', border:'1px solid rgba(0,200,150,0.12)', animation:'ringRotate 20s linear infinite' }}>
                <div style={{ position:'absolute', width:'8px', height:'8px', background:'#00C896', borderRadius:'50%', top:'-4px', left:'calc(50% - 4px)', boxShadow:'0 0 12px #00C896' }}/>
              </div>
              <div style={{ position:'absolute', inset:'30px', borderRadius:'50%', border:'1px solid rgba(0,200,150,0.08)', animation:'ringRotate 15s linear infinite reverse' }}>
                <div style={{ position:'absolute', width:'8px', height:'8px', background:'#00C896', borderRadius:'50%', top:'-4px', left:'calc(50% - 4px)', boxShadow:'0 0 12px #00C896' }}/>
              </div>
              <div style={{ position:'absolute', inset:'60px', borderRadius:'50%', border:'1px solid rgba(0,200,150,0.12)', animation:'ringRotate 25s linear infinite' }}/>
            </div>

            {/* Main Card */}
            <div style={{
              position:'absolute', top:'50%', left:'50%',
              animation:'cardFloat 6s ease-in-out infinite',
              width:'260px',
              background:'#0C1217',
              border:'1px solid rgba(0,200,150,0.35)',
              borderRadius:'20px', padding:'24px', zIndex:10,
            }}>
              <div style={{
                width:'52px', height:'52px', borderRadius:'14px',
                background:'rgba(0,200,150,0.08)',
                border:'1.5px solid rgba(0,200,150,0.35)',
                display:'flex', alignItems:'center', justifyContent:'center',
                marginBottom:'14px',
                fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'18px', color:'#00C896',
              }}>NJ</div>
              <div style={{ fontFamily:'Syne,sans-serif', fontSize:'15px', fontWeight:700, color:'#F0F8F5', marginBottom:'3px' }}>Nouman Ahsan Jaral</div>
              <div style={{ fontSize:'11px', color:'#00C896', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:'16px' }}>Founder · Hash-1 Developers</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                {['Web Dev','VBA/VB','UI Design','Branding','Photo/Video'].map(skill => (
                  <span key={skill} style={{
                    padding:'4px 10px',
                    background:'rgba(0,200,150,0.08)',
                    border:'1px solid rgba(0,200,150,0.12)',
                    borderRadius:'99px', fontSize:'10px', color:'#00C896',
                  }}>{skill}</span>
                ))}
              </div>
              <div style={{
                display:'flex', alignItems:'center', gap:'6px',
                marginTop:'16px', paddingTop:'14px',
                borderTop:'1px solid rgba(0,200,150,0.12)',
                fontSize:'11px', color:'rgba(240,248,245,0.5)',
              }}>
                <div style={{ width:'7px', height:'7px', background:'#00E896', borderRadius:'50%', boxShadow:'0 0 8px #00E896', animation:'blink 2s ease-in-out infinite' }}/>
                Open to new projects
              </div>
            </div>

            {/* Mini Cards */}
            {[
              { cls:'mini-card-1', style:{ top:'40px', right:0 }, title:'Projects Done', val:'30+', sub:'Websites & Software', valColor:'#00C896' },
              { cls:'mini-card-2', style:{ bottom:'60px', left:0 }, title:'Designs Created', val:'200+', sub:'Graphics & Branding', valColor:'#00C896' },
              { cls:'mini-card-3', style:{ bottom:'40px', right:'20px' }, title:'Client Rating', val:'★ 4.9', sub:'Satisfaction', valColor:'#FFB800' },
            ].map(card => (
              <div key={card.cls} className={card.cls} style={{
                position:'absolute', ...card.style,
                background:'#0C1217',
                border:'1px solid rgba(0,200,150,0.12)',
                borderRadius:'14px', padding:'12px 16px', zIndex:8,
              }}>
                <div style={{ fontSize:'10px', color:'rgba(240,248,245,0.25)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'4px' }}>{card.title}</div>
                <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'16px', color:card.valColor }}>{card.val}</div>
                <div style={{ fontSize:'10px', color:'rgba(240,248,245,0.5)', marginTop:'1px' }}>{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div style={{
        position:'relative', zIndex:1,
        borderTop:'1px solid rgba(0,200,150,0.12)',
        borderBottom:'1px solid rgba(0,200,150,0.12)',
        overflow:'hidden', padding:'14px 0',
        background:'#0C1217',
      }}>
        <div style={{ display:'flex', animation:'ticker 25s linear infinite', width:'max-content' }}>
          {[...Array(2)].map((_, ri) =>
            ['Web Development','Desktop Software','Graphic Designing','Digital Branding','Photography','Videography','Social Media','VBA / Visual Basic','WordPress'].map(item => (
              <div key={`${ri}-${item}`} style={{
                display:'flex', alignItems:'center', gap:'12px',
                padding:'0 40px', fontSize:'12px',
                color:'rgba(240,248,245,0.25)',
                letterSpacing:'0.08em', textTransform:'uppercase',
                fontWeight:500, whiteSpace:'nowrap',
              }}>
                <span style={{ width:'4px', height:'4px', background:'#00C896', borderRadius:'50%', opacity:0.6, display:'inline-block' }}/>
                {item}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}