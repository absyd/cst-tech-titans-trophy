import { Link } from "react-router-dom"

function Teams({ teams }) {
  return (
    <div id="teams" className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          <span className="text-yellow-400">🏏</span> TEAMS
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mx-auto rounded-full" />
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6">
        {teams.map((team) => (
          <Link 
            key={team.id}
            to={`/team/${team.id}`}
            className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 text-center block"
          >
            <div className="text-5xl md:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <img src={team.logo} alt={team.name} className="w-64 h-64 object-cover rounded-lg mx-auto" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              {team.name}
            </h3>
            <p className="text-sm text-gray-400">
              Captain: <span className="text-cyan-400 font-semibold">{team.captain}</span>
            </p>
            <p className="text-xs text-gray-500">
              {team.players?.length || 0} Players
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-cyan-400">
              <span className="text-xs font-semibold uppercase tracking-wider">View Details</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Teams