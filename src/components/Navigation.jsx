import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">CST TECH TITANS TROPHY</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/standings">Standings</Link></li>
          <li><Link to="/rules">Rules</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
