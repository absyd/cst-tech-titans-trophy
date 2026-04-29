function Countdown({ timeLeft }) {
  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hrs' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' }
  ]

  return (
    <div className="w-full mx-auto px-4 py-4 bg-gradient-to-br from-blue-700 via-sky-600 to-blue-600 rounded-lg h-42">
      <h2 className="text-lg md:text-xl font-bold text-center text-white mb-2 tracking-wide">
        TOURNAMENT STARTS IN
      </h2>
      <div className="grid grid-cols-4 gap-2 md:gap-3">
        {units.map((unit, i) => (
          <div 
            key={i}
            className=" backdrop-blur-sm rounded-lg p-2 md:p-3 text-center border border-white/10"
          >
            <div className="text-3xl md:text-6xl font-black text-white mb-0.5">
              {unit.value}
            </div>
            {/* separator */}
            <div className="text-[10px] md:text-xs font-semibold text-blue-200 uppercase tracking-wider">
              {unit.label}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown
