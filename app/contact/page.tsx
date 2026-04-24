'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name:'', email:'', service:'', message:'' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

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
        @keyframes checkPop {
          0% { transform:scale(0); opacity:0; }
          70% { transform:scale(1.2); }
          100% { transform:scale(1); opacity:1; }
        }
        .fade1 { animation: fadeUp 0.8s 0.2s cubic-bezier(0.16,1,0.3,1) both; }
        .fade2 { animation: fadeUp 0.8s 0.4s cubic-bezier(0.16,1,0.3,1) both; }
        .fade3 { animation: fadeUp 0.8s 0.6s cubic-bezier(0.16,1,0.3,1) both; }
        .check-anim { animation: checkPop 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .info-card { transition: all 0.3s; }
        .info-card:hover { border-color:rgba(0,200,150,0.35) !important; transform:translateY(-3px); }
        .submit-btn:hover { background:#00A077 !important; box-shadow:0 0 40px rgba(0,200,150,0.4); transform:translateY(-2px); }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 60px;
        }
        .contact-input {
          width:100%; padding:14px 16px;
          background:rgba(0,200,150,0.04);
          border:1px solid rgba(0,200,150,0.15);
          border-radius:10px;
          color:#F0F8F5; font-size:14px;
          outline:none; transition:all 0.3s;
          font-family:'DM Sans',sans-serif;
        }
        .contact-input:focus {
          border-color:rgba(0,200,150,0.5) !important;
          background:rgba(0,200,150,0.08) !important;
          box-shadow:0 0 0 3px rgba(0,200,150,0.08);
        }
        .contact-input::placeholder { color:rgba(240,248,245,0.25); }
        @media (max-width: 768px) {
          .contact-grid {
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
          Get In Touch
        </div>

        {/* Heading */}
        <h1 className="fade2" style={{
          fontFamily:'Syne, sans-serif', fontWeight:800,
          fontSize:'clamp(32px,5vw,64px)',
          lineHeight:1.0, letterSpacing:'-0.03em', marginBottom:'16px',
        }}>
          Let&apos;s Build Something <span style={{ color:'#00C896' }}>Great</span>
        </h1>

        <p className="fade2" style={{
          fontSize:'16px', color:'rgba(240,248,245,0.5)',
          lineHeight:1.7, maxWidth:'500px',
          marginBottom:'60px', fontWeight:300,
        }}>
          Have a project in mind? Let&apos;s talk! I respond within 24 hours.
        </p>

        {/* Grid */}
        <div className="fade3 contact-grid">

          {/* Left */}
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            {[
              { icon:'📞', label:'Phone', value:'0322-6475148', href:'tel:+923226475148' },
              { icon:'✉️', label:'Email', value:'hash1developers.official@gmail.com', href:'mailto:hash1developers.official@gmail.com' },
              { icon:'📸', label:'Instagram', value:'@_rajput_jaral', href:'https://instagram.com/_rajput_jaral' },
            ].map(info => (
              <a key={info.label} href={info.href} className="info-card" style={{
                display:'flex', alignItems:'center', gap:'16px',
                padding:'20px', background:'#0C1217',
                border:'1px solid rgba(0,200,150,0.12)',
                borderRadius:'16px', textDecoration:'none',
              }}>
                <div style={{
                  width:'44px', height:'44px', borderRadius:'12px',
                  background:'rgba(0,200,150,0.08)',
                  border:'1px solid rgba(0,200,150,0.2)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'20px', flexShrink:0,
                }}>{info.icon}</div>
                <div>
                  <div style={{ fontSize:'11px', color:'rgba(240,248,245,0.3)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'3px' }}>{info.label}</div>
                  <div style={{ fontSize:'13px', color:'#F0F8F5', fontWeight:500 }}>{info.value}</div>
                </div>
              </a>
            ))}

            <a href="https://wa.me/923226475148" target="_blank" style={{
              display:'flex', alignItems:'center', justifyContent:'center', gap:'10px',
              padding:'16px',
              background:'rgba(37,211,102,0.1)',
              border:'1px solid rgba(37,211,102,0.3)',
              borderRadius:'16px', textDecoration:'none',
              color:'#25D366', fontFamily:'Syne,sans-serif',
              fontWeight:700, fontSize:'14px', transition:'all 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,211,102,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(37,211,102,0.1)'}
            >
              <span style={{ fontSize:'20px' }}>💬</span>
              Message on WhatsApp
            </a>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'8px' }}>
              {[
                { label:'Facebook', icon:'f', href:'#' },
                { label:'TikTok', icon:'♪', href:'#' },
                { label:'YouTube', icon:'▶', href:'#' },
              ].map(s => (
                <a key={s.label} href={s.href} style={{
                  display:'flex', flexDirection:'column', alignItems:'center', gap:'4px',
                  padding:'12px 8px', background:'#0C1217',
                  border:'1px solid rgba(0,200,150,0.12)',
                  borderRadius:'12px', textDecoration:'none',
                  color:'rgba(240,248,245,0.4)', fontSize:'11px',
                  transition:'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,200,150,0.4)'; e.currentTarget.style.color = '#00C896' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,200,150,0.12)'; e.currentTarget.style.color = 'rgba(240,248,245,0.4)' }}
                >
                  <span style={{ fontSize:'16px' }}>{s.icon}</span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            background:'#0C1217',
            border:'1px solid rgba(0,200,150,0.15)',
            borderRadius:'24px', padding:'36px',
          }}>
            {submitted ? (
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', gap:'16px', textAlign:'center', minHeight:'400px' }}>
                <div className="check-anim" style={{
                  width:'70px', height:'70px', borderRadius:'50%',
                  background:'rgba(0,200,150,0.1)', border:'2px solid #00C896',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:'30px',
                }}>✓</div>
                <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'22px', color:'#F0F8F5' }}>Message Sent!</h3>
                <p style={{ fontSize:'14px', color:'rgba(240,248,245,0.5)' }}>Shukriya! Main 24 hours mein reply karunga.</p>
                <button onClick={() => { setSubmitted(false); setFormData({ name:'', email:'', service:'', message:'' }) }} style={{
                  padding:'10px 24px', background:'transparent',
                  border:'1px solid rgba(0,200,150,0.35)',
                  borderRadius:'8px', color:'#00C896',
                  fontSize:'13px', cursor:'pointer',
                }}>Send Another</button>
              </div>
            ) : (
              <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'20px', color:'#F0F8F5', marginBottom:'8px' }}>
                  Send a Message
                </h3>

                {[
                  { label:'Your Name', key:'name', placeholder:'Apna naam likho...', type:'text' },
                  { label:'Email Address', key:'email', placeholder:'tumhara@email.com', type:'email' },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ fontSize:'12px', color:'rgba(240,248,245,0.4)', letterSpacing:'0.06em', textTransform:'uppercase', display:'block', marginBottom:'8px' }}>{field.label}</label>
                    <input
                      className="contact-input"
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={e => setFormData({...formData, [field.key]: e.target.value})}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ fontSize:'12px', color:'rgba(240,248,245,0.4)', letterSpacing:'0.06em', textTransform:'uppercase', display:'block', marginBottom:'8px' }}>Service Chahiye</label>
                  <select
                    className="contact-input"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    style={{ background:'#0C1217' }}
                  >
                    <option value="" disabled>Service select karo...</option>
                    <option value="web">Web Development</option>
                    <option value="software">Desktop Software</option>
                    <option value="design">Graphic Designing</option>
                    <option value="branding">Digital Branding</option>
                    <option value="photo">Photography</option>
                    <option value="video">Videography</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize:'12px', color:'rgba(240,248,245,0.4)', letterSpacing:'0.06em', textTransform:'uppercase', display:'block', marginBottom:'8px' }}>Message</label>
                  <textarea
                    className="contact-input"
                    placeholder="Apna project describe karo..."
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    style={{ resize:'vertical' }}
                  />
                </div>

                <button className="submit-btn" onClick={handleSubmit} style={{
                  padding:'15px', background:'#00C896',
                  border:'none', borderRadius:'10px',
                  color:'#060A0D', fontFamily:'Syne,sans-serif',
                  fontWeight:700, fontSize:'14px',
                  cursor:'pointer', transition:'all 0.3s',
                }}>
                  Send Message ↗
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}