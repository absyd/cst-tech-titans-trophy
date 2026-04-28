import logoImage from '../assets/final-logo.png'
import Countdown from './Countdown'

function Hero({ timeLeft }) {
  return (
    <div className="hero">
      <div className="logo-section">
        <img src={logoImage} alt="CST Tech Titans Trophy 2026" />
      </div>
      <h1>WHERE <span>CODERS</span> MEET CRICKET!</h1>

      <p className="sub">
        High-energy tournament full of skill, strategy, and team spirit.
      </p>
      <Countdown timeLeft={timeLeft} />
      
    </div>
  )
}

export default Hero
