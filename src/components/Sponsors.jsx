function Sponsors() {
  const sponsors = [
    { name: 'TechCorp', tier: 'Platinum', logo: '🏢' },
    { name: 'DevTools', tier: 'Gold', logo: '🛠️' },
    { name: 'CodeZone', tier: 'Gold', logo: '💻' },
    { name: 'SportsGear', tier: 'Silver', logo: '⚽' },
    { name: 'EnergyDrink', tier: 'Silver', logo: '⚡' },
    { name: 'MediaPro', tier: 'Bronze', logo: '📺' }
  ]

  return (
    <div className="section">
      <h2 className="section-title">🤝 OUR SPONSORS</h2>
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <div key={index} className={`sponsor-card tier-${sponsor.tier.toLowerCase()}`}>
            <div className="sponsor-logo">{sponsor.logo}</div>
            <div className="sponsor-name">{sponsor.name}</div>
            <div className="sponsor-tier">{sponsor.tier}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sponsors
