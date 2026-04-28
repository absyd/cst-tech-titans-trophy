function InfoCards() {
  const cards = [
    { icon: '📅', title: 'DATE', value: '2-3 MAY', subtext: '2026', highlight: false },
    { icon: '📍', title: 'VENUE', value: 'RPI CENTRAL', subtext: 'GROUND', highlight: true },
    { icon: '📞', title: 'CONTACT', value: '01782536760', subtext: '01321063723', highlight: false }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {cards.map((card, index) => (
          <div 
            key={index}
            className={`group relative overflow-hidden rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:scale-105 ${
              card.highlight 
                ? 'bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-yellow-600/20 border-2 border-yellow-400/50 shadow-lg shadow-yellow-500/20' 
                : 'bg-white/5 border border-white/10 hover:border-cyan-400/30 hover:bg-white/10'
            }`}
          >
            {/* Glow effect for highlighted card */}
            {card.highlight && (
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
            
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-sm md:text-base font-bold text-cyan-400 tracking-wider mb-2">
                {card.title}
              </h3>
              <p className={`text-lg md:text-xl lg:text-2xl font-black mb-1 ${card.highlight ? 'text-yellow-300' : 'text-white'}`}>
                {card.value}
              </p>
              <span className="text-sm text-gray-400">
                {card.subtext}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoCards
