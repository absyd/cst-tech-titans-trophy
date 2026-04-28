function MatchSchedule({ matches }) {
  return (
    <div id="schedule" className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          <span className="text-cyan-400">📅</span> MATCH SCHEDULE
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-yellow-400 mx-auto rounded-full" />
      </div>

      {/* Matches List */}
      <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
        {matches.map((match) => (
          <div 
            key={match.id} 
            className="group bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Date */}
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-cyan-300 text-sm font-semibold">
                {match.date}
              </span>
            </div>

            {/* Teams */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="text-center md:text-right flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">{match.team1}</h3>
              </div>
              
              <div className="flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 px-4">
                  VS
                </span>
              </div>
              
              <div className="text-center md:text-left flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">{match.team2}</h3>
              </div>
            </div>

            {/* Venue */}
            <div className="text-center mt-4 pt-4 border-t border-white/10">
              <span className="text-gray-400 text-sm md:text-base">
                📍 {match.venue}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MatchSchedule
