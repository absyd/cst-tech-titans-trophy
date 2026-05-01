import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/live-score',          label: 'Live Score' },
  { to: '/about',     label: 'About' },
  { to: '/teams',     label: 'Teams' },
  { to: '/schedule',  label: 'Schedule' },
  { to: '/standings', label: 'Standings' },
  { to: '/rules',     label: 'Rules' },
  { to: '/news',      label: 'News' },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">CST TECH TITANS TROPHY</Link>
        </div>

        {/* Desktop links — hidden on mobile, visible on desktop */}
        <ul className="hidden flex desktop-nav-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-1.5 bg-transparent border-none cursor-pointer"
        >
          <span className={`block w-6 h-[2px] bg-current rounded transition-transform duration-300 ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[2px] bg-current rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-current rounded transition-transform duration-300 ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>

      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden list-none flex flex-col px-4 pb-4 pt-2 gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navigation