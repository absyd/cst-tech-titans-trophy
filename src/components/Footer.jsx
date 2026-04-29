function Footer() {
  return (
    <footer className="w-full border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400 uppercase tracking-wider mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="tel:01321063723" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">📞</span>
                <div>
                  <p className="text-sm font-semibold">01321063723</p>
                  <p className="text-xs text-gray-500">Fahim Shahriar - CS/7/1</p>
                </div>
              </a>
              <a 
                href="tel:01782536760" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">📞</span>
                <div>
                  <p className="text-sm font-semibold">01782536760</p>
                  <p className="text-xs text-gray-500">Tanvir - CS/7/2</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400">📍</span>
                <p className="text-sm">RPI Central Ground</p>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400 uppercase tracking-wider mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: '#teams', label: 'Teams', emoji: '🏏' },
                { href: '#schedule', label: 'Schedule', emoji: '📅' },
                { href: '#standings', label: 'Standings', emoji: '🏆' },
                { href: '#rules', label: 'Rules', emoji: '📋' },
                { href: '#about', label: 'About', emoji: 'ℹ️' },
                { href: '#news', label: 'News', emoji: '📰' },
              ].map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm"
                >
                  <span>{link.emoji}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Organizer Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400 uppercase tracking-wider mb-4">Organizer</h3>
            <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-400/20">
              <p className="text-white font-bold mb-1">CST Department</p>
              <p className="text-sm text-gray-400">Computer Science & Technology</p>
              <p className="text-xs text-gray-500 mt-2">Rajshahi Polytechnic Institute</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-gray-500">
            &copy; 2026 CST Tech Titans Trophy. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Crafted with <span className="text-red-500">&hearts;</span> by{' '}
            <a 
              href="https://absyd.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              Abu Sayed
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
