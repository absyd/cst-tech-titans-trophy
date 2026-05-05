import Countdown from './Countdown'

const TerminatedHero = ({ timeLeft }) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center   p-4 sm:p-6 lg:p-8'>


      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Hero Title */}
        <div className="text-center mb-8 sm:mb-12">
          {/* <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-yellow-500/20 rounded-full border border-cyan-400/30 text-cyan-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
              Tournament Countdown
            </span>
          </div> */}

          <img src="team-logo/default-logo.jpg" alt="CST TECH TITANS TROPHY LOGO" className='w-64 h-64 mx-auto mb-4 rounded-lg border-3 border-yellow-300' />
          
          <h1 className='text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight'>
            The Ultimate
            <span className='block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-pulse'>
              কালবৈশাখী
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400/50"></div>
            <span className='text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-300'>
              Starts In
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400/50"></div>
          </div>
        </div>

        {/* Countdown Container */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl shadow-cyan-500/5">
            <Countdown timeLeft={timeLeft} />
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
            WHERE CODERS MEET CRICKET 
          </p>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
            CODE THE GAME RULE THE PITCH
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-4 mt-8">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  )
}

export default TerminatedHero