import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue, off } from "firebase/database";
import { teamsData } from "../data/teamsData";
import { matchesData } from "../data/matchesData";


// Helper
const getTeamById = (id) =>
  teamsData.find((t) => t.id === id) || {
    id,
    name: `Team ${id}`,
    team_logo: null,
  };

export default function LiveMatchCard() {
  const [live, setLive] = useState(null);

  
  useEffect(() => {
    const matchRef = ref(db, `matches/match_1`);

    const listener = onValue(matchRef, (snapshot) => {
        setLive(snapshot.val());
    });
    
    return () => off(matchRef, "value", listener);
}, []);

if (!live) {
    return (
        <div className="p-4 bg-gray-900 text-white rounded-xl text-center">
        <div className="animate-pulse">Loading live score...</div>
      </div>
    );
}

// 🔥 NEW: use batting/bowling IDs (your updated schema)
const matchMeta = matchesData.find((m) => m.id === live.match_id);

const team1 = getTeamById(matchMeta.team1_id);
const team2  = getTeamById(matchMeta.team2_id);


// console.log(matchMeta)

  const striker = live.batsmen?.striker;
  const nonStriker = live.batsmen?.non_striker;
  const bowler = live.bowler;

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-3 sm:p-5 shadow-2xl shadow-cyan-500/10 w-full max-w-3xl mx-auto border border-white/10 backdrop-blur-xl">
      
      {live.target && (
        <div className="text-center mb-2">
          <span className="text-xs sm:text-sm text-cyan-400 uppercase py-2 bg-yellow-300/20 rounded-full border border-yellow-300/30 ps-3">
           <span className="text-yellow-400 text-sm  ">Target:</span> 
           <span className="text-white bg-red-500 px-4 py-1 rounded-full ms-2 text-xl tracking-wider border-3 border-white font-bold">{live.target}</span>
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <span className="text-xs sm:text-sm text-cyan-400 font-semibold uppercase tracking-wider">
          {matchMeta?.match_type || "Match"}
        </span>

        <span className="flex items-center gap-1.5 text-[10px] sm:text-xs bg-cyan-500/20 text-cyan-400 px-2 sm:px-3 py-1 rounded-full border border-cyan-500/30">
          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
          UPCOMING 
        </span>
      </div>

      {/* Teams - Mobile Optimized */}
      <div className="flex md:flex-row flex-col items-center justify-between mb-4 sm:mb-6">

        {/* Batting Team */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 ">
          <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center overflow-hidden flex-shrink-0">
            {team1.team_logo ? (
              <img src={team1.team_logo+'.jpg'} alt="" className="w-10 h-10 sm:w-8 sm:h-8 object-cover rounded-full" />
            ) : (
              <span className="text-cyan-400 font-bold text-sm sm:text-base">
                {team1.name.charAt(0)}
              </span>
            )}
          </div>

          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold truncate leading-tight">{team1.name}</p>
            <p className="text-[10px] sm:text-xs  text-right text-cyan-400">Batting</p>
          </div>
        </div>

        <span className="text-yellow-400 font-black text-base text-center sm:text-lg px-1 sm:px-2 flex-shrink-0">VS</span>

        {/* Bowling Team */}
        <div className="flex md:flex-row flex-row-reverse items-center w-l  gap-2 sm:gap-3 flex-1 justify-end text-right ">
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold truncate leading-tight">{team2.name}</p>
            <p className="text-[10px] text-right sm:text-xs text-orange-500">Bowling</p>
          </div>

          <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 flex items-center justify-center overflow-hidden flex-shrink-0">
            {team2.team_logo ? (
              <img src={team2.team_logo+'.jpg'} alt="" className="w-10 h-10 sm:w-8 sm:h-8 object-cover rounded-full" />
            ) : (
              <span className="text-orange-400 font-bold text-sm sm:text-base">
                {team2.name.charAt(0)}
              </span>
            )}
          </div>
        </div>
      </div>

      {live.notice && (
        <div className="text-center my-2">
          <span className="text-xs ">
            <marquee behavior="" direction="">
              <span className="text-yellow-400 text-sm  font-bold">{live.notice}</span>
            </marquee>
          </span>
        </div>
      )}

      {/* Score - Large & Bold */}
      <div className="text-center mb-2 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl sm:rounded-2xl border border-cyan-400/20">
        <h1 className="text-3xl sm:text-5xl font-black text-white mb-1">
          {live.score?.runs ?? 0}<span className="text-gray-400">/</span>{live.score?.wickets ?? 0}
        </h1>
        <p className="text-cyan-400 text-xs sm:text-sm font-medium">
          Overs: {live.score?.overs ?? "0.0"}
        </p>
      </div>

     <div className="text-center text-xs text-gray-500">Powerd By : <a href="https://absyd.xyz" className="text-cyan-400 hover:text-cyan-300">Abu Sayed</a></div>
      

      {/* Batsmen & Bowler - Side by side on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
        {/* Batsmen */}
        {live.batsmen && (
          <div className="bg-white/5 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-white/5">
            <h3 className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Batting</h3>

            <div className="flex justify-between items-center text-xs sm:text-sm mb-1.5 py-0.5">
              <span className="truncate pr-2">
                {striker?.name} <span className="text-yellow-400">●</span>
              </span>
              <span className="text-cyan-300 font-semibold flex-shrink-0">
                {striker?.runs ?? 0} <span className="text-gray-500 font-normal">({striker?.balls ?? 0})</span>
              </span>
            </div>

            <div className="flex justify-between items-center text-xs sm:text-sm py-0.5">
              <span className="truncate pr-2">{nonStriker?.name}</span>
              <span className="font-semibold flex-shrink-0">
                {nonStriker?.runs ?? 0} <span className="text-gray-500 font-normal">({nonStriker?.balls ?? 0})</span>
              </span>
            </div>
          </div>
        )}

        {/* Bowler */}
        {bowler && (
          <div className="bg-white/5 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-white/5">
            <h3 className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Bowler</h3>

            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="truncate pr-2">{bowler.name}</span>
              <span className="text-yellow-300 font-semibold flex-shrink-0">
                {bowler.overs} - {bowler.runs}/{bowler.wickets}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Last Event */}
      {live.last_event && (
        <div className="text-center mb-3 sm:mb-4">
          <span className="inline-block bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold border border-yellow-400/30 shadow-lg shadow-yellow-500/10">
            {live.last_event}
          </span>
        </div>
      )}

      {/* Footer */}
      <div className="text-[10px] sm:text-xs text-gray-500 text-center pt-2 sm:pt-3 border-t border-white/10">
        {matchMeta?.venue || "RPI Central Field"} • {matchMeta?.date || "TBD"}
      </div>
    </div>
  );
}