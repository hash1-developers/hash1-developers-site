'use client'

export default function About() {
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
        .fade4 { animation: fadeUp 0.8s 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .fade5 { animation: fadeUp 0.8s 1s cubic-bezier(0.16,1,0.3,1) both; }
        .work-card:hover { border-color: rgba(0,200,150,0.4) !important; transform: translateY(-4px); }
        .award-card:hover { border-color: rgba(0,200,150,0.4) !important; background: rgba(0,200,150,0.05) !important; }
      `}</style>

      {/* Background */}
      <div style={{ position:'fixed', inset:0, zIndex:0, overflow:'hidden', pointerEvents:'none' }}>
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:'linear-gradient(rgba(0,200,150,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,150,0.04) 1px,transparent 1px)',
          backgroundSize:'60px 60px',
        }}/>
        <div style={{ position:'absolute', width:'500px', height:'500px', top:'-100px', right:'-100px', background:'radial-gradient(circle,rgba(0,200,150,0.12),transparent 70%)', filter:'blur(100px)', animation:'orbFloat 12s ease-in-out infinite' }}/>
      </div>

      <main style={{ position:'relative', zIndex:1, padding:'120px 5% 80px', maxWidth:'1200px', margin:'0 auto' }}>

        {/* Page Tag */}
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
          About Me
        </div>

        {/* Heading */}
        <h1 className="fade2" style={{
          fontFamily:'Syne, sans-serif', fontWeight:800,
          fontSize:'clamp(36px,5vw,64px)',
          lineHeight:1.0, letterSpacing:'-0.03em',
          marginBottom:'60px',
        }}>
          Meet the <span style={{ color:'#00C896' }}>Founder</span>
        </h1>

        {/* Intro Section */}
        <div className="fade3" style={{
          display:'grid', gridTemplateColumns:'1fr 1fr',
          gap:'60px', alignItems:'center', marginBottom:'80px',
        }}>
          {/* Left — Avatar Card */}
          <div style={{
            background:'#0C1217',
            border:'1px solid rgba(0,200,150,0.2)',
            borderRadius:'24px', padding:'40px',
            display:'flex', flexDirection:'column', alignItems:'center',
            gap:'20px', textAlign:'center',
          }}>
            <div style={{
              width:'100px', height:'100px',
              borderRadius:'24px',
              background:'rgba(0,200,150,0.08)',
              border:'2px solid rgba(0,200,150,0.35)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:'Syne,sans-serif', fontWeight:800,
              fontSize:'32px', color:'#00C896',
            }}>NJ</div>
            <div>
              <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'20px', color:'#F0F8F5', marginBottom:'6px' }}>Nouman Ahsan Jaral</div>
              <div style={{ fontSize:'12px', color:'#00C896', letterSpacing:'0.08em', textTransform:'uppercase' }}>Founder · Hash-1 Developers</div>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'12px', color:'rgba(240,248,245,0.5)' }}>
              <div style={{ width:'7px', height:'7px', background:'#00E896', borderRadius:'50%', boxShadow:'0 0 8px #00E896', animation:'blink 2s ease-in-out infinite' }}/>
              Open to new projects
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', justifyContent:'center' }}>
              {['Designer','Developer','Photographer','Videographer','Branding'].map(tag => (
                <span key={tag} style={{
                  padding:'5px 12px',
                  background:'rgba(0,200,150,0.08)',
                  border:'1px solid rgba(0,200,150,0.2)',
                  borderRadius:'99px', fontSize:'11px', color:'#00C896',
                }}>{tag}</span>
              ))}
            </div>
            <div style={{ width:'100%', paddingTop:'20px', borderTop:'1px solid rgba(0,200,150,0.12)', display:'flex', justifyContent:'space-around' }}>
              {[{ num:'30+', label:'Projects' }, { num:'200+', label:'Designs' }, { num:'5+', label:'Campaigns' }].map(s => (
                <div key={s.label} style={{ textAlign:'center' }}>
                  <div style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'20px', color:'#00C896' }}>{s.num}</div>
                  <div style={{ fontSize:'10px', color:'rgba(240,248,245,0.3)', textTransform:'uppercase', letterSpacing:'0.06em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Bio */}
          <div>
            <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'24px', color:'#F0F8F5', marginBottom:'16px' }}>
              The Way I Work
            </h2>
            <p style={{ fontSize:'16px', color:'rgba(240,248,245,0.5)', lineHeight:1.8, marginBottom:'24px', fontWeight:300 }}>
              I&apos;m a Gujranwala-based Designer & Developer passionate about building clean, modern, and purposeful digital experiences. I enjoy turning creative ideas into functional designs and intuitive user interfaces.
            </p>
            <p style={{ fontSize:'16px', color:'rgba(240,248,245,0.5)', lineHeight:1.8, marginBottom:'32px', fontWeight:300 }}>
              For me, every project is a balance of creativity and logic — where design meets development. My goal is to craft digital experiences that not only look great but work flawlessly.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
              {[
                'Reliable & On-Time Delivery',
                'Attention to Detail',
                'Creative + Logical Thinking',
                'Team & Collaboration Friendly',
              ].map(item => (
                <div key={item} style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                  <div style={{ width:'20px', height:'20px', borderRadius:'50%', background:'rgba(0,200,150,0.15)', border:'1px solid rgba(0,200,150,0.35)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <span style={{ color:'#00C896', fontSize:'11px' }}>✓</span>
                  </div>
                  <span style={{ fontSize:'14px', color:'rgba(240,248,245,0.7)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="fade4" style={{ marginBottom:'80px' }}>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'32px', color:'#F0F8F5', marginBottom:'40px' }}>
            Education & <span style={{ color:'#00C896' }}>Experience</span>
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px' }}>
            {[
              { icon:'🎓', title:'BS Software Engineering', sub:'IISAT University, Gujranwala', tag:'Continue', type:'Education' },
              { icon:'🎓', title:'DAE Computer IT', sub:'Christian Technical Training Centre, Gujranwala', tag:'Completed', type:'Education' },
              { icon:'💼', title:'Branding + Social Media', sub:'Creative Computers', tag:'Work', type:'Experience' },
              { icon:'💼', title:'Software Developer', sub:'Christian Technical Training Centre', tag:'Work', type:'Experience' },
            ].map(item => (
              <div key={item.title} className="work-card" style={{
                background:'#0C1217',
                border:'1px solid rgba(0,200,150,0.12)',
                borderRadius:'16px', padding:'24px',
                transition:'all 0.3s', cursor:'default',
              }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'12px' }}>
                  <span style={{ fontSize:'24px' }}>{item.icon}</span>
                  <span style={{
                    padding:'4px 10px',
                    background: item.type === 'Education' ? 'rgba(0,200,150,0.08)' : 'rgba(255,184,0,0.08)',
                    border: `1px solid ${item.type === 'Education' ? 'rgba(0,200,150,0.2)' : 'rgba(255,184,0,0.2)'}`,
                    borderRadius:'99px', fontSize:'10px',
                    color: item.type === 'Education' ? '#00C896' : '#FFB800',
                    letterSpacing:'0.06em',
                  }}>{item.tag}</span>
                </div>
                <div style={{ fontFamily:'Syne,sans-serif', fontWeight:600, fontSize:'15px', color:'#F0F8F5', marginBottom:'6px' }}>{item.title}</div>
                <div style={{ fontSize:'13px', color:'rgba(240,248,245,0.4)' }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="fade5">
          <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'32px', color:'#F0F8F5', marginBottom:'40px' }}>
            Awards & <span style={{ color:'#00C896' }}>Achievements</span>
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px' }}>
            {[
              { icon:'🏆', title:'Final Year Project Winner', sub:'CTTC Expo' },
              { icon:'⭐', title:'Best Media Member Award', sub:'Christian Technical Training Centre' },
              { icon:'🥇', title:'Badminton Winner', sub:'Christian Technical Training Centre' },
              { icon:'🥇', title:'Badminton Doubles Winner', sub:'District Level Tournament' },
              { icon:'🥈', title:'Badminton Doubles Runner Up', sub:'District Level Tournament' },
            ].map(award => (
              <div key={award.title} className="award-card" style={{
                background:'#0C1217',
                border:'1px solid rgba(0,200,150,0.12)',
                borderRadius:'16px', padding:'20px',
                transition:'all 0.3s', cursor:'default',
              }}>
                <div style={{ fontSize:'28px', marginBottom:'10px' }}>{award.icon}</div>
                <div style={{ fontFamily:'Syne,sans-serif', fontWeight:600, fontSize:'13px', color:'#F0F8F5', marginBottom:'4px' }}>{award.title}</div>
                <div style={{ fontSize:'11px', color:'rgba(240,248,245,0.4)' }}>{award.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </>
  )
}