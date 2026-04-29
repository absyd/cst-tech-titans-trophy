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
        {status}
      </span>
    )
  }

  return (
    <div id="schedule" className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
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
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm">{match.date}</span>
              {getStatusBadge(match.status)}
            </div>

            {/* Teams Row */}
            <div className="flex items-center justify-center gap-3 md:gap-6 mb-4">
              <div className="text-right flex-1">
                <p className="text-lg md:text-2xl font-bold text-white">{match.team1}</p>
              </div>
              
              <span className="text-yellow-400 font-black text-lg">VS</span>
              
              <div className="text-left flex-1">
                <p className="text-lg md:text-2xl font-bold text-white">{match.team2}</p>
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
                {match.metrics.wickets && (
                  <span>Wickets: <span className="text-cyan-300 font-semibold">{match.metrics.wickets}</span></span>
                )}
              </div>
            )}

            {/* Live Indicator */}
            {/* {match.status === 'Live' && (
              <div className="text-center p-2 bg-red-500/10 rounded-lg border border-red-500/20">
                <span className="text-red-400 text-sm font-semibold animate-pulse">● Match in Progress</span>
              </div>
            )} */}

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