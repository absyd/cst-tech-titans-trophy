function Teams({ teams }) {
  return (
    <div className="section" id="teams">
      <h2 className="section-title">🏏 TEAMS</h2>
      <div className="teams-grid">
        {teams.map((team) => (
          <div key={team.id} className="team-card">
            <div className="team-logo">{team.emoji}</div>
            <div className="team-name">{team.name}</div>
            <div className="team-captain">Captain: {team.captain}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teams
