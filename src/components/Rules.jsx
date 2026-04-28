function Rules({ rules }) {
  return (
    <div id="rules" className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          <span className="text-cyan-400">📋</span> TOURNAMENT RULES
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-yellow-400 mx-auto rounded-full" />
      </div>

      {/* Rules List */}
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
        {rules.map((rule, index) => (
          <div 
            key={index} 
            className="group bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-[1.01]"
          >
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full text-white font-bold text-sm md:text-base">
                {index + 1}
              </span>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {rule.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rules