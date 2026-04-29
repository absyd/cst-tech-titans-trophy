import logoImage from '../assets/final-logo.png'
import Countdown from './Countdown'
import { Link } from 'react-router-dom'
import { newsData } from '../data/newsData'
import LatestNewsPreview from './LatestNewsPreview'

function Hero({ timeLeft }) {
  const latestNews = newsData[0] // Get the first (latest) news item

  return (
    <div className="hero">
      <div className="logo-section flex justify-center items-center">
        <img src={logoImage} alt="CST Tech Titans Trophy 2026" className="w-64 h-64" />
      </div>
      <h1>WHERE <span>CODERS</span> MEET CRICKET!</h1>

      <div className=" flex justify-center align-center">
        <p>Built with <span className="heart">❤️</span> by <a href="https://absyd.xyz" className="link text-blue-400 font-bold underline">Abu Sayed</a></p>
      </div>
      <p className="sub">
        High-energy tournament full of skill, strategy, and team spirit.
      </p>
      {/* Latest News Preview */}
      {/* <LatestNewsPreview  /> */}
      
      <Countdown timeLeft={timeLeft} />
      
      
    </div>
  )
}

export default Hero
