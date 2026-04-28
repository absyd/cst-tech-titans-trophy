function Countdown({ timeLeft }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6 md:mb-8 tracking-wide">
        COUNTDOWN TO TOURNAMENT
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Minutes' },
          { value: timeLeft.seconds, label: 'Seconds' }
        ].map((item, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-3 sm:p-4 md:p-6 text-center border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 mb-1 sm:mb-2">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-cyan-200 uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown
