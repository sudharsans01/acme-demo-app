import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-inner container">
        <div className="logo" onClick={() => scrollTo('hero')}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#2563eb"/>
            <path d="M7 18c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            <circle cx="14" cy="11" r="2.5" fill="white"/>
          </svg>
          <span className="logo-text">ACME <strong>CLOUD</strong></span>
          <span className="logo-divider">|</span>
          <span className="logo-sub">Demo Store</span>
        </div>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          <button className="nav-link" onClick={() => scrollTo('hero')}>Home</button>
          <button className="nav-link" onClick={() => scrollTo('products')}>Products</button>
          <button className="nav-link" onClick={() => scrollTo('about')}>About</button>
        </nav>

        <div className="header-right">
          <span className="cloud-badge">☁ Cloud Demos</span>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
