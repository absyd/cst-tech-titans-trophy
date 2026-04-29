import logoImage from '../assets/final-logo.png'
import Countdown from './Countdown'
import { Link } from 'react-router-dom'
import { newsData } from '../data/newsData'
import LatestNewsPreview from './LatestNewsPreview'
import ThemeSong from './ThemeSong'

function Hero({ timeLeft }) {
  const latestNews = newsData[0] // Get the first (latest) news item

  return (
    <div className="hero flex flex-col justify-center items-between    ">
      <div className="logo-section flex justify-center items-center">
        <img src={logoImage} alt="CST Tech Titans Trophy 2026" className="md:w-64 md:h-64 w-48 h-48" />
      </div>
      <h1>WHERE <span>CODERS</span> MEET CRICKET!</h1>


      <p className="sub font-family['Montserrat', sans-serif]">
        High-energy tournament full of skill, strategy, and team spirit.         <p className='text-sm text-gray-600'>Built with ... by <a href="https://absyd.xyz" className="link text-blue-400 underline">Abu Sayed</a></p>

      </p>
      {/* Latest News Preview */}
      <div className="flex md:flex-row justify-between items-center flex-col mt-3 md:mt-10 md:gap-6 gap-2 ">
        <LatestNewsPreview />
        <Countdown timeLeft={timeLeft} />
      </div>


      <div className="my-2">  
        <ThemeSong />
      </div>


      <div className="">
        {/* TAGLINE */}
        <div className="tagline md:mt-10 mt-2">
          <h2>CODE THE GAME.</h2>
          <h2 className="gold">RULE THE PITCH.</h2>
        </div>
      </div>

    </div>
  )
}

export default Hero
