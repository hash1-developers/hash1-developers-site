'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

  return (
    <>
      <style>{`
        @keyframes menuSlide {
          from { opacity:0; transform:translateY(-10px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes scanLine {
          from { left:-100%; }
          to { left:100%; }
        }
        .nav-link:hover { color:#F0F8F5 !important; }
        .hamburger-line {
          display:block;
          width:22px; height:2px;
          background:#F0F8F5;
          border-radius:2px;
          transition: all 0.3s;
        }
        @media (max-width: 768px) {
          .desktop-links { display:none !important; }
          .desktop-btns { display:none !important; }
          .hamburger { display:flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display:none !important; }
          .hamburger { display:none !important; }
        }
      `}</style>

      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:100,
        height:'72px',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'0 5%',
        backdropFilter:'blur(24px)',
        background: scrolled ? 'rgba(6,10,13,0.95)' : 'rgba(6,10,13,0.7)',
        borderBottom:'1px solid rgba(0,200,150,0.12)',
        transition:'all 0.3s ease',
      }}>

        {/* Logo */}
        <Link href="/" style={{ display:'flex', alignItems:'center', gap:'12px', textDecoration:'none' }}>
          {/* Logo Image — public folder mein logo.png daalo */}
          {/* <Image src="/logo.png" alt="Hash-1 Logo" width={38} height={38} /> */}

          {/* Placeholder — jab tak logo nahi */}
          <div style={{
            width:'38px', height:'38px',
            border:'1.5px solid rgba(0,200,150,0.35)',
            borderRadius:'10px',
            display:'flex', alignItems:'center', justifyContent:'center',
            background:'rgba(0,200,150,0.08)',
            fontFamily:'Syne, sans-serif', fontWeight:800,
            fontSize:'14px', color:'#00C896', position:'relative', overflow:'hidden',
          }}>
            <span style={{ position:'relative', zIndex:1 }}>H1</span>
            <span style={{
              position:'absolute', width:'100%', height:'2px',
              background:'#00C896', top:0, left:'-100%',
              animation:'scanLine 3s linear infinite',
            }}/>
          </div>

          <div style={{ display:'flex', flexDirection:'column', lineHeight:1.1 }}>
            <span style={{ fontFamily:'Syne, sans-serif', fontWeight:700, fontSize:'15px', color:'#F0F8F5' }}>
              Hash-1 Developers
            </span>
            <span style={{ fontSize:'10px', color:'#00C896', letterSpacing:'0.1em', textTransform:'uppercase' }}>
              From Creativity to Code
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="desktop-links" style={{ display:'flex', alignItems:'center', gap:'36px', listStyle:'none' }}>
          {links.map(item => (
            <li key={item}>
              <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="nav-link"
                style={{ fontSize:'13px', color:'rgba(240,248,245,0.5)', textDecoration:'none', letterSpacing:'0.04em', transition:'color 0.3s' }}
              >{item}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="desktop-btns" style={{ display:'flex', gap:'8px' }}>
          <Link href="/contact" style={{
            padding:'9px 20px',
            border:'1px solid rgba(0,200,150,0.35)',
            borderRadius:'8px', color:'#F0F8F5',
            fontSize:'13px', fontWeight:500, textDecoration:'none',
            transition:'all 0.3s',
          }}>Download CV</Link>
          <Link href="/contact" style={{
            padding:'9px 22px', background:'#00C896',
            borderRadius:'8px', color:'#060A0D',
            fontSize:'13px', fontWeight:700,
            textDecoration:'none', fontFamily:'Syne, sans-serif',
            transition:'all 0.3s',
          }}>Hire Me ↗</Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display:'none', flexDirection:'column', gap:'5px',
            background:'transparent', border:'none', cursor:'pointer',
            padding:'8px',
          }}
        >
          <span className="hamburger-line" style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }}/>
          <span className="hamburger-line" style={{ opacity: menuOpen ? 0 : 1 }}/>
          <span className="hamburger-line" style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }}/>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          position:'fixed', top:'72px', left:0, right:0, zIndex:99,
          background:'rgba(6,10,13,0.98)',
          backdropFilter:'blur(24px)',
          borderBottom:'1px solid rgba(0,200,150,0.12)',
          padding:'20px 5% 24px',
          animation:'menuSlide 0.3s ease',
        }}>
          {/* Mobile Links */}
          <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'4px', marginBottom:'20px' }}>
            {links.map(item => (
              <li key={item}>
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display:'block', padding:'14px 16px',
                    fontSize:'16px', color:'rgba(240,248,245,0.7)',
                    textDecoration:'none', borderRadius:'10px',
                    fontFamily:'Syne, sans-serif', fontWeight:600,
                    transition:'all 0.3s',
                    border:'1px solid transparent',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(0,200,150,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(0,200,150,0.2)'
                    e.currentTarget.style.color = '#00C896'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderColor = 'transparent'
                    e.currentTarget.style.color = 'rgba(240,248,245,0.7)'
                  }}
                >{item}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
            <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
              display:'block', padding:'14px',
              border:'1px solid rgba(0,200,150,0.35)',
              borderRadius:'10px', color:'#F0F8F5',
              fontSize:'14px', fontWeight:500,
              textDecoration:'none', textAlign:'center',
            }}>Download CV</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
              display:'block', padding:'14px',
              background:'#00C896', borderRadius:'10px',
              color:'#060A0D', fontSize:'14px', fontWeight:700,
              textDecoration:'none', textAlign:'center',
              fontFamily:'Syne, sans-serif',
            }}>Hire Me ↗</Link>
          </div>
        </div>
      )}
    </>
  )
}