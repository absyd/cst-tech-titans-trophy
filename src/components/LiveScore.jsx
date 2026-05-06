import { useEffect, useState, useMemo, useCallback } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { teamsData } from "../data/teamsData";
import { matchesData } from "../data/matchesData";
 

// ─── Main Component ──────────────────────────────────────────────────────────

export default function LiveScore() {
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
  // const { matchMeta, team1, team2 } = useMemo(() => {
  //   if (!live?.match_id) return {};
  //   const matchMeta = matchesData.find((m) => m.id === live.match_id);
  //   if (!matchMeta) return {};
  //   return {
  //     matchMeta,
  //     team1: getTeamById(matchMeta.team1_id),
  //     team2: getTeamById(matchMeta.team2_id),
  //   };
  // }, [live?.match_id]);

  const matchId=live?.match_id;
  console.log(live);

  // ─── Loading state ──────────────────────────────────────────────────────

  if (!live) {
    return (
      <div className="p-4 bg-gray-900 text-white rounded-xl text-center">
        <div className="animate-pulse">Loading live score...</div>
      </div>
    );
  }

  // ─── Destructure for clarity ────────────────────────────────────────────

  // const striker = live.batsmen?.striker;
  // const nonStriker = live.batsmen?.non_striker;
  // const bowler = live.bowler;

  // ─── Render ─────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 w-full">
      {/* Iframe Container */}
      <div className="flex-1 w-full mx-auto  ">
        <iframe
          src={`https://cst3-live-score.vercel.app/match/${matchId}`}
          className="w-full h-[85vh] sm:h-[90vh] bg-slate-900 rounded-xl border border-white/10 shadow-xl"
          frameBorder="0"
          title="SELECTION ROUND Live Score Powered By ABSYD.XYZ"
        ></iframe>
      </div>

      {/* Full Screen Button */}
      <a
        href={`https://cst3-live-score.vercel.app/match/${matchId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-blue-800/80 backdrop-blur border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-cyan-500/10 hover:bg-blue-600 hover:border-blue-400/40 hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
      >
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Watch On Full Screen
      </a>
    </div>
  );
}