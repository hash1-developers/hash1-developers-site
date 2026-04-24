'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5%',
      backdropFilter: 'blur(24px)',
      background: scrolled ? 'rgba(6,10,13,0.95)' : 'rgba(6,10,13,0.7)',
      borderBottom: '1px solid rgba(0,200,150,0.12)',
      transition: 'all 0.3s ease',
    }}>

      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <div style={{
          width: '38px', height: '38px',
          border: '1.5px solid rgba(0,200,150,0.35)',
          borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,200,150,0.08)',
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800, fontSize: '14px',
          color: '#00C896',
        }}>H1</div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '15px', color: '#F0F8F5' }}>
            Hash-1 Developers
          </span>
          <span style={{ fontSize: '10px', color: '#00C896', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            From Creativity to Code
          </span>
        </div>
      </Link>

      {/* Nav Links */}
      <ul style={{ display: 'flex', alignItems: 'center', gap: '36px', listStyle: 'none' }}>
        {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
          <li key={item}>
            <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} style={{
              fontSize: '13px',
              color: 'rgba(240,248,245,0.5)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'color 0.3s',
              fontWeight: 400,
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F0F8F5')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,248,245,0.5)')}
            >{item}</Link>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <Link href="/contact" style={{
          padding: '9px 20px',
          border: '1px solid rgba(0,200,150,0.35)',
          borderRadius: '8px',
          color: '#F0F8F5',
          fontSize: '13px',
          fontWeight: 500,
          textDecoration: 'none',
          transition: 'all 0.3s',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(0,200,150,0.08)'
            e.currentTarget.style.color = '#00C896'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#F0F8F5'
          }}
        >Download CV</Link>

        <Link href="/contact" style={{
          padding: '9px 22px',
          background: '#00C896',
          borderRadius: '8px',
          color: '#060A0D',
          fontSize: '13px',
          fontWeight: 700,
          textDecoration: 'none',
          fontFamily: 'Syne, sans-serif',
          transition: 'all 0.3s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#00A077'}
          onMouseLeave={e => e.currentTarget.style.background = '#00C896'}
        >Hire Me ↗</Link>
      </div>
    </nav>
  )
}