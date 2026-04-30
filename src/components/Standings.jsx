import { teamsData } from "../data/teamsData";

function Standings({ standings }) {
  const getTeamById = (id) => {
    return teamsData.find((team) => team.id === id);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Champion":
        return "text-yellow-400 bg-yellow-500/10";
      case "Eliminated":
        return "text-red-400 bg-red-500/10";
      default:
        return "text-cyan-400 bg-cyan-500/10";
    }
  };

  return (
    <div id="standings" className="w-full max-w-6xl mx-auto py-16 md:py-24">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-3">
          🏆 TOURNAMENT STANDINGS
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Knockout progress tracker (Selection → Semi Final → Final)
        </p>
        <div className="w-28 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid instead of rigid table */}
      <div className="grid gap-2 md:gap-4">
        {standings.slice().sort((a, b) => a.rank - b.rank)
          .map((row) => {
            const team = getTeamById(row.teamId);

            return (
              <div
                key={row.teamId}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 md:p-6 rounded-2xl
                bg-gradient-to-br from-white/5 to-white/[0.02]
                border border-white/10 hover:border-cyan-400/30 transition"
              >
                {/* LEFT: Rank + Team */}
                <div className="flex md:flex-row flex-col items-center gap-4 md:w-[50%] w-full">
                  
                  {/* Rank Circle */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white font-bold">
                    {row.rank}
                  </div>

                  {/* Logo */}
                  <img
                    src={team?.team_logo + ".jpg"}
                    alt={team?.name}
                    className="w-24 h-24 rounded-full object-cover border border-white/20"
                  />

                  {/* Name + Stage */}
                  <div>
                    <h3 className="text-white font-semibold text-sm md:text-base">
                      {team?.name}
                    </h3>
                    <p className="text-xs text-gray-400">
                      Stage: {row.stage}
                    </p>
                  </div>
                </div>

                {/* CENTER: Stats */}
                <div className="flex gap-6 text-center justify-center items-center">
                  <div>
                    <p className="text-gray-400 text-xs">Played</p>
                    <p className="text-white font-bold">{row.played}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">Won</p>
                    <p className="text-green-400 font-bold">{row.won}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">Lost</p>
                    <p className="text-red-400 font-bold">{row.lost}</p>
                  </div>
                </div>

                {/* RIGHT: Status */}
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(row.status)}`}>
                  {row.status}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Standings;