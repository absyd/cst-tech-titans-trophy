function MatchSchedule({ matches }) {
  return (
    <div className="section" id="schedule">
      <h2 className="section-title">📅 MATCH SCHEDULE</h2>
      <div className="schedule-list">
        {matches.map((match) => (
          <div key={match.id} className="match-card">
            <div className="match-time">{match.date}</div>
            <div className="match-teams">
              <div className="team">
                <div className="team-name-small">{match.team1}</div>
              </div>
              <div className="vs">VS</div>
              <div className="team">
                <div className="team-name-small">{match.team2}</div>
              </div>
            </div>
            <div className="match-venue">{match.venue}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MatchSchedule
