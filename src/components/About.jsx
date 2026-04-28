function About() {
  const stats = [
    { value: '2nd', label: 'Edition', color: 'from-yellow-500/20 to-orange-500/20' },
    { value: '6', label: 'Teams', color: 'from-cyan-500/20 to-blue-500/20' },
    { value: '6', label: 'Matches', color: 'from-green-500/20 to-emerald-500/20' },
    { value: '2', label: 'Days', color: 'from-purple-500/20 to-pink-500/20' }
  ]

  return (
    <div id="about" className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          <span className="text-cyan-400">ℹ️</span> ABOUT THE TOURNAMENT
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-yellow-400 mx-auto rounded-full" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            The CST Tech Titans Trophy is an annual cricket tournament organized by the Computer Science & Technology department. 
            It brings together the brightest minds in coding and cricket for an unforgettable experience of sportsmanship and teamwork.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            Founded in 2020, this tournament has grown to become one of the most anticipated events in the academic calendar, 
            featuring teams from various departments competing for the prestigious trophy.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br ${stat.color} backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105`}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-cyan-300 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
