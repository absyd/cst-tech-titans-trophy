import { useState, useRef } from 'react'

const ThemeSong = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto w-48 bottom-4 z-50">
      <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg rounded-2xl p-3 border border-cyan-400/30 shadow-xl shadow-cyan-500/10">
        {/* Hidden native audio element */}
        <audio 
          ref={audioRef} 
          src="/theme-song.mp3" 
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
        
        {/* Custom Play Button */}
        <button 
          onClick={togglePlay}
          className="flex items-center gap-3 group"
          aria-label={isPlaying ? 'Pause theme song' : 'Play theme song'}
        >
          {/* Animated equalizer bars when playing */}
          <div className="flex items-end gap-0.5 h-6">
            {[1, 2, 3].map((bar) => (
              <span 
                key={bar}
                className={`w-1 bg-gradient-to-t from-cyan-400 to-blue-400 rounded-full transition-all duration-300 ${
                  isPlaying 
                    ? `animate-pulse h-${bar === 2 ? 'full' : bar === 1 ? '3' : '4'}` 
                    : 'h-1'
                }`}
                style={{
                  height: isPlaying ? `${Math.random() * 16 + 8}px` : '4px',
                  animation: isPlaying ? `pulse ${0.4 + bar * 0.1}s ease-in-out infinite alternate` : 'none'
                }}
              />
            ))}
          </div>
          
          {/* Text */}
          <div className="text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
              {isPlaying ? 'Now Playing' : 'Theme Song'}
            </span>
            <span className="text-[10px] text-gray-400">
              {isPlaying ? 'Click to pause' : 'Click to play'}
            </span>
          </div>
          
          {/* Play/Pause Icon */}
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying 
              ? 'bg-red-500/20 text-red-400' 
              : 'bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30'
          }`}>
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </button>
      </div>
    </div>
  )
}

export default ThemeSong