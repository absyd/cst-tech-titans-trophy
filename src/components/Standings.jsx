function Standings({ standings }) {
  const getRankColor = (rank) => {
    switch(rank) {
      case 1: return 'text-yellow-400'
      case 2: return 'text-gray-300'
      case 3: return 'text-orange-400'
      default: return 'text-white'
    }
  }

  const getRankBg = (rank) => {
    switch(rank) {
      case 1: return 'bg-yellow-500/10'
      case 2: return 'bg-gray-500/10'
      case 3: return 'bg-orange-500/10'
      default: return 'bg-white/5'
    }
  }

  return (
    <div id="standings" className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          <span className="text-yellow-400">🏆</span> STANDINGS
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mx-auto rounded-full" />
      </div>

      {/* Table Container */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-b border-white/10">
                <th className="px-3 py-3 md:px-6 md:py-4 text-left text-cyan-400 font-bold text-xs md:text-sm uppercase tracking-wider">Rank</th>
                <th className="px-3 py-3 md:px-6 md:py-4 text-left text-cyan-400 font-bold text-xs md:text-sm uppercase tracking-wider">Team</th>
                <th className="px-3 py-3 md:px-6 md:py-4 text-center text-cyan-400 font-bold text-xs md:text-sm uppercase tracking-wider">P</th>
                <th className="px-3 py-3 md:px-6 md:py-4 text-center text-cyan-400 font-bold text-xs md:text-sm uppercase tracking-wider">W</th>
                <th className="px-3 py-3 md:px-6 md:py-4 text-center text-cyan-400 font-bold text-xs md:text-sm uppercase tracking-wider">L</th>
                <th className="px-3 py-3 md:px-6 md:py-4 text-center text-cyan-400 font-bold text-xs md:text-sm uppercase tracking-wider">Pts</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team) => (
                <tr 
                  key={team.rank} 
                  className={`border-b border-white/5 hover:bg-white/5 transition-colors ${getRankBg(team.rank)}`}
                >
                  <td className={`px-3 py-3 md:px-6 md:py-4 font-black text-lg md:text-xl ${getRankColor(team.rank)}`}>
                    {team.rank}
                  </td>
                  <td className="px-3 py-3 md:px-6 md:py-4 font-semibold text-white text-sm md:text-base">
                    {team.team}
                  </td>
                  <td className="px-3 py-3 md:px-6 md:py-4 text-center text-gray-400 text-sm md:text-base">
                    {team.played}
                  </td>
                  <td className="px-3 py-3 md:px-6 md:py-4 text-center text-green-400 font-semibold text-sm md:text-base">
                    {team.won}
                  </td>
                  <td className="px-3 py-3 md:px-6 md:py-4 text-center text-red-400 font-semibold text-sm md:text-base">
                    {team.lost}
                  </td>
                  <td className="px-3 py-3 md:px-6 md:py-4 text-center text-yellow-400 font-bold text-sm md:text-base">
                    {team.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Standings
