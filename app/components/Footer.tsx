import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <style>{`
        @keyframes blink {
          0%,100% { opacity:1; }
          50% { opacity:0.2; }
        }
        @keyframes ticker {
          from { transform:translateX(0); }
          to { transform:translateX(-50%); }
        }
        .footer-link:hover { color:#00C896 !important; }
        .social-link:hover {
          border-color:rgba(0,200,150,0.4) !important;
          background:rgba(0,200,150,0.08) !important;
          color:#00C896 !important;
        }
        @media (max-width:768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            text-align: center !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: 12px !important;
            text-align: center !important;
          }
          .social-links {
            justify-content: center !important;
          }
        }
      `}</style>

      {/* Ticker */}
      <div style={{
        borderTop:'1px solid rgba(0,200,150,0.12)',
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

      {/* Footer */}
      <footer style={{
        background:'#0C1217',
        borderTop:'1px solid rgba(0,200,150,0.12)',
        padding:'60px 5% 32px',
      }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>

          {/* Main Grid */}
          <div className="footer-grid" style={{
            display:'grid',
            gridTemplateColumns:'2fr 1fr 1fr 1fr',
            gap:'48px',
            marginBottom:'48px',
          }}>

            {/* Brand */}
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px' }}>
                <div style={{
                  width:'38px', height:'38px',
                  border:'1.5px solid rgba(0,200,150,0.35)',
                  borderRadius:'10px',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  background:'rgba(0,200,150,0.08)',
                  fontFamily:'Syne, sans-serif', fontWeight:800,
                  fontSize:'14px', color:'#00C896',
                }}>H1</div>
                <div>
                  <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'15px', color:'#F0F8F5' }}>Hash-1 Developers</div>
                  <div style={{ fontSize:'10px', color:'#00C896', letterSpacing:'0.1em', textTransform:'uppercase' }}>From Creativity to Code</div>
                </div>
              </div>
              <p style={{ fontSize:'13px', color:'rgba(240,248,245,0.4)', lineHeight:1.7, maxWidth:'260px', marginBottom:'20px' }}>
                Building premium digital experiences — websites, software, branding and visual content.
              </p>
              {/* Status */}
              <div style={{ display:'flex', alignItems:'center', gap:'8px', fontSize:'12px', color:'rgba(240,248,245,0.5)' }}>
                <div style={{ width:'7px', height:'7px', background:'#00E896', borderRadius:'50%', boxShadow:'0 0 8px #00E896', animation:'blink 2s ease-in-out infinite' }}/>
                Available for new projects
              </div>
            </div>

            {/* Pages */}
            <div>
              <div style={{ fontSize:'11px', color:'rgba(240,248,245,0.3)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'16px', fontWeight:500 }}>Pages</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {[
                  { label:'Home', href:'/' },
                  { label:'About', href:'/about' },
                  { label:'Services', href:'/services' },
                  { label:'Portfolio', href:'/portfolio' },
                  { label:'Contact', href:'/contact' },
                ].map(link => (
                  <Link key={link.label} href={link.href} className="footer-link" style={{
                    fontSize:'13px', color:'rgba(240,248,245,0.4)',
                    textDecoration:'none', transition:'color 0.3s',
                  }}>{link.label}</Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <div style={{ fontSize:'11px', color:'rgba(240,248,245,0.3)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'16px', fontWeight:500 }}>Services</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {['Web Development','Desktop Software','Graphic Design','Digital Branding','Photography','Videography'].map(s => (
                  <Link key={s} href="/services" className="footer-link" style={{
                    fontSize:'13px', color:'rgba(240,248,245,0.4)',
                    textDecoration:'none', transition:'color 0.3s',
                  }}>{s}</Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div style={{ fontSize:'11px', color:'rgba(240,248,245,0.3)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'16px', fontWeight:500 }}>Contact</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                <a href="tel:+923226475148" className="footer-link" style={{ fontSize:'13px', color:'rgba(240,248,245,0.4)', textDecoration:'none', transition:'color 0.3s' }}>
                  📞 0322-6475148
                </a>
                <a href="mailto:hash1developers.official@gmail.com" className="footer-link" style={{ fontSize:'13px', color:'rgba(240,248,245,0.4)', textDecoration:'none', transition:'color 0.3s' }}>
                  ✉️ hash1developers.official
                </a>
                <a href="https://instagram.com/_rajput_jaral" className="footer-link" style={{ fontSize:'13px', color:'rgba(240,248,245,0.4)', textDecoration:'none', transition:'color 0.3s' }}>
                  📸 _rajput_jaral
                </a>
                <a href="https://wa.me/923226475148" target="_blank" style={{
                  display:'inline-flex', alignItems:'center', gap:'6px',
                  padding:'8px 14px', marginTop:'4px',
                  background:'rgba(37,211,102,0.1)',
                  border:'1px solid rgba(37,211,102,0.25)',
                  borderRadius:'8px', textDecoration:'none',
                  color:'#25D366', fontSize:'12px', fontWeight:500,
                  transition:'all 0.3s',
                }}>
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom" style={{
            paddingTop:'24px',
            borderTop:'1px solid rgba(0,200,150,0.08)',
            display:'flex', justifyContent:'space-between', alignItems:'center',
          }}>
            <div style={{ fontSize:'12px', color:'rgba(240,248,245,0.2)' }}>
              © 2025 Hash-1 Developers. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="social-links" style={{ display:'flex', gap:'8px' }}>
              {[
                { label:'FB', href:'#' },
                { label:'IG', href:'https://instagram.com/_rajput_jaral' },
                { label:'TT', href:'#' },
                { label:'LI', href:'#' },
                { label:'YT', href:'#' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" className="social-link" style={{
                  width:'32px', height:'32px',
                  border:'1px solid rgba(0,200,150,0.12)',
                  borderRadius:'8px',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'11px', color:'rgba(240,248,245,0.3)',
                  textDecoration:'none', fontWeight:600,
                  transition:'all 0.3s',
                }}>{s.label}</a>
              ))}
            </div>

            <div style={{ fontSize:'12px', color:'rgba(240,248,245,0.2)' }}>
              Designed & Developed by{' '}
              <span style={{ color:'#00C896' }}>Nouman Ahsan Jaral</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}