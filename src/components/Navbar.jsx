import { useState } from 'react'
import { navLinks } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="logo" href="#top">
          <span className="logo-mark">S</span>
          SkillRail
        </a>

        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-ghost" href="#login">Log in</a>
          <a className="btn btn-yellow" href="#departures">Book your slot</a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
