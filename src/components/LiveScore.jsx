import { useEffect, useState, useMemo, useCallback } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { teamsData } from "../data/teamsData";
import { matchesData } from "../data/matchesData";

// ─── Helpers ────────────────────────────────────────────────────────────────

const getTeamById = (id) =>
  teamsData.find((t) => t.id === id) || {
    id,
    name: `Team ${id}`,
    team_logo: null,
  };

// ─── Status Pill (pure component, no re-render issues) ───────────────────────

const MatchStatusPill = ({ status }) => {
  const configs = {
    live: {
      cls: "bg-red-500/20 text-red-400 border-red-500/30",
      icon: <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />,
      label: "Live",
    },
    upcoming: {
      cls: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      label: "Upcoming",
    },
    completed: {
      cls: "bg-green-500/20 text-green-400 border-green-500/30",
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      label: "Completed",
    },
    break: {
      cls: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      icon: (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-5a1 1 0 10-2 0v1a1 1 0 102 0v-1zm0-8a1 1 0 10-2 0v4a1 1 0 102 0V5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      label: "Break",
    },
  };

  const config = configs[status] || {
    cls: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    icon: null,
    label: "Unknown",
  };

  return (
    <span
      className={`flex items-center gap-1.5 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full border font-bold uppercase tracking-wider ${config.cls}`}
    >
      {config.icon}
      {config.label}
    </span>
  );
};

// ─── Team Avatar ─────────────────────────────────────────────────────────────

const TeamAvatar = ({ team, accentClass, textClass }) => (
  <div
    className={`w-12 h-12 rounded-full bg-gradient-to-br ${accentClass} flex items-center justify-center overflow-hidden flex-shrink-0`}
  >
    {team.team_logo ? (
      <img
        src={`${team.team_logo}.jpg`}
        alt={team.name}
        className="w-10 h-10 object-cover rounded-full"
        loading="lazy"
      />
    ) : (
      <span className={`${textClass} font-bold text-sm sm:text-base`}>
        {team.name.charAt(0)}
      </span>
    )}
  </div>
);

// ─── CSS Marquee (replaces deprecated <marquee>) ──────────────────────────────

const CSSMarquee = ({ text }) => (
  <div className="overflow-hidden whitespace-nowrap w-full">
    <span
      className="inline-block text-yellow-400 text-sm font-bold"
      style={{
        animation: "marquee 14s linear infinite",
        willChange: "transform",
      }}
    >
      {text}
    </span>
    <style>{`
      @keyframes marquee {
        from { transform: translateX(100vw); }
        to   { transform: translateX(-100%); }
      }
    `}</style>
  </div>
);

// ─── Main Component ──────────────────────────────────────────────────────────

export default function LiveMatchCard() {
  const [live, setLive] = useState(null);

  useEffect(() => {
    const matchRef = ref(db, "matches/match_1");

    // ✅ FIX: onValue returns the unsubscribe function directly.
    // The old code used off(matchRef, "value", listener) which is the
    // Firebase v8/compat API and silently fails in v9 modular SDK,
    // causing listener leaks and CPU spikes.
    const unsubscribe = onValue(matchRef, (snapshot) => {
      setLive(snapshot.val());
    });

    return () => unsubscribe();
  }, []);

  // ✅ FIX: Memoize derived data so .find() doesn't re-run on every render.
  // Only recomputes when the match_id changes, not on every score update.
  const { matchMeta, team1, team2 } = useMemo(() => {
    if (!live?.match_id) return {};
    const matchMeta = matchesData.find((m) => m.id === live.match_id);
    if (!matchMeta) return {};
    return {
      matchMeta,
      team1: getTeamById(matchMeta.team1_id),
      team2: getTeamById(matchMeta.team2_id),
    };
  }, [live?.match_id]);

  // ─── Loading state ──────────────────────────────────────────────────────

  if (!live || !matchMeta) {
    return (
      <div className="p-4 bg-gray-900 text-white rounded-xl text-center">
        <div className="animate-pulse">Loading live score...</div>
      </div>
    );
  }

  // ─── Destructure for clarity ────────────────────────────────────────────

  const striker = live.batsmen?.striker;
  const nonStriker = live.batsmen?.non_striker;
  const bowler = live.bowler;

  // ─── Render ─────────────────────────────────────────────────────────────

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-3 sm:p-5 shadow-2xl shadow-cyan-500/10 w-full max-w-3xl mx-auto border border-white/10 backdrop-blur-xl">

      {/* Target Banner */}
      {live.target && (
        <div className="text-center mb-2">
          <span className="text-xs sm:text-sm text-cyan-400 uppercase py-2 bg-yellow-300/20 rounded-full border border-yellow-300/30 ps-3">
            <span className="text-yellow-400 text-sm">Target:</span>
            <span className="text-white bg-red-500 px-4 py-1 rounded-full ms-2 text-xl tracking-wider border-2 border-white font-bold">
              {live.target}
            </span>
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <span className="text-xs sm:text-sm text-cyan-400 font-semibold uppercase tracking-wider">
          {matchMeta.match_type || "Match"}
        </span>
        <MatchStatusPill status={live.status} />
      </div>

      {/* Teams Row */}
      <div className="flex md:flex-row flex-col items-center justify-between mb-4 sm:mb-6">

        {/* Team 1 */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1">
          <TeamAvatar
            team={team1}
            accentClass="from-cyan-500/20 to-blue-500/20 border border-cyan-400/30"
            textClass="text-cyan-400"
          />
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold truncate leading-tight">
              {team1.name}
            </p>
            <p className="text-[10px] sm:text-xs text-cyan-400">
              {team1.id == live.batting_team_id ? "🏏 Batting" : "🏐 Bowling"}
            </p>
          </div>
        </div>

        <span className="text-yellow-400 font-black text-base text-center sm:text-lg px-1 sm:px-2 flex-shrink-0">
          VS
        </span>

        {/* Team 2 */}
        <div className="flex md:flex-row flex-row-reverse items-center gap-2 sm:gap-3 flex-1 justify-end text-right">
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold truncate leading-tight">
              {team2.name}
            </p>
            <p className="text-[10px] sm:text-xs text-right text-orange-400">
              {team2.id == live.batting_team_id ? "🏏 Batting" : "🏐 Bowling"}
            </p>
          </div>
          <TeamAvatar
            team={team2}
            accentClass="from-orange-500/20 to-red-500/20 border border-orange-400/30"
            textClass="text-orange-400"
          />
        </div>
      </div>

      {/* Notice Marquee — CSS-based, no deprecated <marquee> */}
      {live.notice && (
        <div className="text-center my-2">
          <CSSMarquee text={live.notice} />
        </div>
      )}

      {/* Score */}
      <div className="text-center mb-2 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl sm:rounded-2xl border border-cyan-400/20">
        <h1 className="text-3xl sm:text-5xl font-black text-white mb-1">
          {live.score?.runs ?? 0}
          <span className="text-gray-400">/</span>
          {live.score?.wickets ?? 0}
        </h1>
        <p className="text-cyan-400 text-xs sm:text-sm font-medium">
          Overs: {live.score?.overs ?? "0.0"}
        </p>
      </div>

      {/* Powered by */}
      <div className="text-center text-xs text-gray-500 mb-3">
        Powered by:{" "}
        <a href="https://absyd.xyz" className="text-cyan-400 hover:text-cyan-300">
          Abu Sayed
        </a>
      </div>

      {/* Batsmen & Bowler */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">

        {/* Batting */}
        {live.batsmen && (
          <div className="bg-white/5 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-white/5">
            <h3 className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">
              Batting
            </h3>
            {striker && (
              <div className="flex justify-between items-center text-xs sm:text-sm mb-1.5 py-0.5">
                <span className="truncate pr-2">
                  {striker.name}{" "}
                  <span className="text-yellow-400">●</span>
                </span>
                <span className="text-cyan-300 font-semibold flex-shrink-0">
                  {striker.runs ?? 0}{" "}
                  <span className="text-gray-500 font-normal">
                    ({striker.balls ?? 0})
                  </span>
                </span>
              </div>
            )}
            {nonStriker && (
              <div className="flex justify-between items-center text-xs sm:text-sm py-0.5">
                <span className="truncate pr-2">{nonStriker.name}</span>
                <span className="font-semibold flex-shrink-0">
                  {nonStriker.runs ?? 0}{" "}
                  <span className="text-gray-500 font-normal">
                    ({nonStriker.balls ?? 0})
                  </span>
                </span>
              </div>
            )}
          </div>
        )}

        {/* Bowling */}
        {bowler && (
          <div className="bg-white/5 rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-white/5">
            <h3 className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">
              Bowler
            </h3>
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
        {matchMeta.venue || "RPI Central Field"} •{" "}
        {matchMeta.date || "TBD"}
      </div>
    </div>
  );
}