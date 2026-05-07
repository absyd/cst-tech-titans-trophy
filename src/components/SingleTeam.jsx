import { teamsData } from "../data/playersData"
import { useParams, Link } from "react-router-dom"

const SingleTeam = () => {
  const { teamId } = useParams()
  const team = teamsData.find(team => team.id === teamId)

  if (!team) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Team Not Found</h1>
          <Link to="/teams" className="text-cyan-400 hover:text-cyan-300">
            ← Back to Teams
          </Link>
        </div>
      </div>
    )
  }

  const getRoleColor = (role) => {
    const colors = {
      batsman: 'text-green-400 bg-green-400/10 border-green-400/30',
      bowler: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
      all_rounder: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
      wicket_keeper: 'text-purple-400 bg-purple-400/10 border-purple-400/30'
    }
    return colors[role] || 'text-gray-400 bg-gray-400/10 border-gray-400/30'
  }

  const getBattingStyle = (style) => {
    return style === 'right_hand' ? 'Right Hand' : 'Left Hand'
  }

  const getBowlingStyle = (style) => {
    const styles = {
      right_fast: 'Right Fast',
      left_fast: 'Left Fast',
      right_medium: 'Right Medium',
      left_orthodox: 'Left Orthodox',
      right_legspin: 'Right Leg Spin',
      left_chinaman: 'Left Chinaman'
    }
    return styles[style] || style
  }

  return (
    <div className="min-h-screen   p-3 sm:p-4 lg:p-6">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto mb-4 sm:mb-6">
        <Link 
          to="/teams" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Teams
        </Link>
      </div>

      {/* Team Header */}
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-white/20 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src={team.logo} 
                alt={team.name} 
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              />
            </div>
            <div className="flex-1 text-center sm:text-left w-full">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-black text-white mb-3 sm:mb-4 leading-tight">
                {team.name}
              </h1>
              <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-cyan-400 text-xs sm:text-sm">Captain:</span>
                  <span className="text-white font-medium text-sm sm:text-base">{team.captain}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-cyan-400 text-xs sm:text-sm">Wicket Keeper:</span>
                  <span className="text-white font-medium text-sm sm:text-base">{team.wicketKeeper}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-cyan-400 text-xs sm:text-sm">Players:</span>
                  <span className="text-white font-medium text-sm sm:text-base">{team.players.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Players List - Mobile First */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">Squad</h2>
        
        {/* Mobile Card View */}
        <div className="sm:hidden space-y-3">
          {team.players.map((player, index) => (
            <div 
              key={player.id}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl p-4 border border-white/10"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-400/30 flex-shrink-0">
                  <span className="text-cyan-400 font-bold text-xs">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-white text-sm truncate">
                      {player.name.replace(' (C)', '').replace(' (VC)', '')}
                    </h3>
                    <div className="flex gap-1 flex-shrink-0">
                      {player.name.includes('(C)') && (
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-yellow-400/20 text-yellow-400 text-xs font-bold rounded-full border border-yellow-400/30">
                          C
                        </span>
                      )}
                      {player.name.includes('(VC)') && (
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-orange-400/20 text-orange-400 text-xs font-bold rounded-full border border-orange-400/30">
                          VC
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full border ${getRoleColor(player.role)}`}>
                      {player.role.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    ID: {player.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden sm:block bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-cyan-400 w-12 text-xs sm:text-sm">SL</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-cyan-400 text-xs sm:text-sm">Player</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-cyan-400 text-xs sm:text-sm">Role</th>
                <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-cyan-400 text-xs sm:text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {team.players.map((player, index) => (
                <tr 
                  key={player.id}
                  className={`border-b border-white/10 hover:bg-white/5 transition-colors ${
                    index === team.players.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-gray-400 font-medium text-sm">
                    {index + 1}
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-400/30 flex-shrink-0">
                        <span className="text-cyan-400 font-bold text-xs sm:text-sm">
                          {player.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-white text-sm sm:text-base truncate">
                          {player.name.replace(' (C)', '').replace(' (VC)', '')}
                        </div>
                        <div className="text-xs text-gray-400">
                          ID: {player.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4">
                    <span className={`inline-block text-xs font-semibold px-2 sm:px-3 py-1 rounded-full border ${getRoleColor(player.role)}`}>
                      {player.role.replace('_', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                    <div className="flex justify-center gap-1 sm:gap-2">
                      {player.name.includes('(C)') && (
                        <span className="inline-flex items-center justify-center px-2 py-1  bg-yellow-400/20 text-yellow-400 text-xs font-bold rounded-full border border-yellow-400/30">
                          CAPTAIN
                        </span>
                      )}
                      {player.name.includes('(VC)') && (
                        <span className="inline-flex items-center justify-center px-2 py-1  bg-orange-400/20 text-orange-400 text-xs font-bold rounded-full border border-orange-400/30 p-1">
                          VICE C.
                        </span>
                      )}
                      {!player.name.includes('(C)') && !player.name.includes('(VC)') && (
                        <span className="text-white text-xs inline-flex items-center justify-center px-2 py-1  bg-gray-400/20 text-gray-400 text-xs font-bold rounded-full border border-gray-400/30">Player</span>
                      )}
                    </div>
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

export default SingleTeam