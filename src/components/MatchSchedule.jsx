function MatchSchedule({ matches }) {
  const getStatusBadge = (status) => {
    const styles = {
      Live: 'bg-red-500/20 border-red-400/30 text-red-400',
      Completed: 'bg-green-500/20 border-green-400/30 text-green-400',
      Upcoming: 'bg-cyan-500/20 border-cyan-400/30 text-cyan-300'
    }
    return (
      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${styles[status] || styles.Upcoming}`}>
        {status === 'Live' && <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />}
        {status +" MATCH"}
      </span>
    )
  }

  const getMatchTypeColor = (type) => {
    const colors = {
      'Final': 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30',
      'Semi Final': 'bg-purple-500/20 text-purple-300 border-purple-400/30',
      'Quarter Final': 'bg-orange-500/20 text-orange-300 border-orange-400/30',
      'Selection Round': 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30'
    }
    return colors[type] || 'bg-white/10 text-gray-300 border-white/20'
  }

  return (
    <div id="schedule" className="w-full max-w-5xl mx-auto py-16 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
          <span className="text-cyan-400">📅</span> MATCH SCHEDULE
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-yellow-400 mx-auto rounded-full" />
      </div>

      {/* Matches List */}
      <div className="space-y-4 md:space-y-6">
        {matches.map((match) => (
          <div 
            key={match.id} 
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
          >
            {/* Header - Match Type & Status */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${getMatchTypeColor(match.match_type)}`}>
                  {match.match_type}
                </span>
                <span className="text-gray-400 text-xs">{match.date}</span>
              </div>
              {getStatusBadge(match.status)}
            </div>

            {/* Teams Row with Logos */}
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
              {/* Team 1 */}
              <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">
                {match.team1_logo && (
                  <div className="w-24 h-24 md:w-48 md:h-48 mb-2 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center overflow-hidden">
                    <img 
                      src={match.team1_logo+'.jpg'} 
                      alt={match.team1} 
                      className="w-22 h-22 md:w-46 md:h-46 object-cover rounded-full"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                )}
                <p className="text-sm md:text-base font-bold text-white leading-tight">{match.team1}</p>
              </div>
              
              {/* VS */}
              <div className="flex flex-col items-center justify-center px-2">
                <span className="text-yellow-400 font-black text-lg md:text-xl">VS</span>
              </div>
              
              {/* Team 2 */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                {match.team2_logo && (
                  <div className="w-24 h-24 md:w-48 md:h-48 mb-2 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center overflow-hidden">
                    <img 
                      src={match.team2_logo+'.jpg'} 
                      alt={match.team2} 
                      className="w-22 h-22 md:w-46 md:h-46 object-cover rounded-full"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                )}
                <p className="text-sm md:text-base font-bold text-white leading-tight">{match.team2}</p>
              </div>
            </div>

            {/* Winner Display - Highlighted */}
            {match.status === 'Completed' && match.winner_display && (
              <div className="mb-3 p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-400/40 text-center">
                <span className="text-yellow-300 font-bold text-sm md:text-base">🏆 {match.winner_display}</span>
              </div>
            )}

            {/* Basic Metrics */}
            {match.metrics?.score && (
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-3">
                <span>Score: <span className="text-cyan-300 font-semibold">{match.metrics.score}</span></span>
                {match.metrics.wickets !== null && (
                  <span>Wickets: <span className="text-cyan-300 font-semibold">{match.metrics.wickets}</span></span>
                )}
              </div>
            )}

            {/* Venue */}
            <div className="text-center pt-3 border-t border-white/10">
              <span className="text-gray-500 text-sm">📍 {match.venue}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MatchSchedule