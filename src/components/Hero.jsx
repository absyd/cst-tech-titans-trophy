import logoImage from '../assets/final-logo.png'
import Countdown from './Countdown'
import { Link } from 'react-router-dom'
import { newsData } from '../data/newsData'
import LatestNewsPreview from './LatestNewsPreview'

function Hero({ timeLeft }) {
  const latestNews = newsData[0] // Get the first (latest) news item

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 flex flex-col items-center justify-center px-4 pt-20 pb-12">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 animate-pulse">
          <img 
            src={logoImage} 
            alt="CST Tech Titans Trophy 2026" 
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center text-white mb-4 tracking-tight">
          WHERE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CODERS</span> MEET <span className="text-yellow-400">CRICKET!</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center mb-12 max-w-2xl font-light">
          High-energy tournament full of skill, strategy, and team spirit.
        </p>

        {/* Countdown */}
        <Countdown timeLeft={timeLeft} />
      </div>
    </div>
  )
}

export default Hero
