function Countdown({ timeLeft }) {
  return (
    <div className="countdown w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-6 md:mb-8">
        COUNTDOWN TO TOURNAMENT
      </h2>
      <div className="countdown-timer grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <div className="time-unit bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-white/10">
          <div className="time-value text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
            {timeLeft.days}
          </div>
          <div className="time-label text-xs md:text-sm font-medium text-blue-200 uppercase tracking-wider">
            Days
          </div>
        </div>
        <div className="time-unit bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-white/10">
          <div className="time-value text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
            {timeLeft.hours}
          </div>
          <div className="time-label text-xs md:text-sm font-medium text-blue-200 uppercase tracking-wider">
            Hours
          </div>
        </div>
        <div className="time-unit bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-white/10">
          <div className="time-value text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
            {timeLeft.minutes}
          </div>
          <div className="time-label text-xs md:text-sm font-medium text-blue-200 uppercase tracking-wider">
            Minutes
          </div>
        </div>
        <div className="time-unit bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-white/10">
          <div className="time-value text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
            {timeLeft.seconds}
          </div>
          <div className="time-label text-xs md:text-sm font-medium text-blue-200 uppercase tracking-wider">
            Seconds
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
