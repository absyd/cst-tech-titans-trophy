function Registration() {
  return (
    <div id="register" className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          <span className="text-yellow-400">📝</span> REGISTRATION
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mx-auto rounded-full" />
      </div>

      {/* Registration Card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Register Your Team
          </h3>
          <p className="text-gray-400 text-center mb-8 text-sm md:text-base">
            Get your team registered for the CST Tech Titans Trophy 2026. 
            Contact us via phone to secure your spot in the tournament.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-2xl md:text-3xl">📞</span>
              <div>
                <div className="text-cyan-400 font-semibold text-sm mb-1">Phone</div>
                <div className="text-white font-bold">01782536760 (Fahim)</div>
                <div className="text-white font-bold">01321063723</div>
              </div>
            </div>
          </div>

          {/* Deadline Notice */}
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-400/30">
            <span className="text-2xl">⚠️</span>
            <span className="text-yellow-300 font-semibold text-sm md:text-base">
              Registration closes on April 25, 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration