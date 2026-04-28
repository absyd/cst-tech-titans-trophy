import logoImage from '../assets/final-logo.png'
import Countdown from './Countdown'
import { Link } from 'react-router-dom'
import { newsData } from '../data/newsData'

function Hero({ timeLeft }) {
  const latestNews = newsData[0] // Get the first (latest) news item

  return (
    <div className="hero">
      <div className="logo-section">
        <img src={logoImage} alt="CST Tech Titans Trophy 2026" />
      </div>
      <h1>WHERE <span>CODERS</span> MEET CRICKET!</h1>

      <p className="sub">
        High-energy tournament full of skill, strategy, and team spirit.
      </p>
      {/* Latest News Preview */}
      <div className="hero-news-card">
        <div className="hero-news-badge">
          {/* <span className="badge-icon">📢</span>
          <span className="badge-text">BREAKING</span> */}
        </div>
        <div className="hero-news-content">
          <div className="news-meta-info">
            {/* <span className="news-tag">{latestNews.category}</span> */}
            <span className="news-timestamp">
              {/* {new Date(latestNews.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} */}
            </span>
          </div>
          <h3 className="hero-news-title">{latestNews.title}</h3>
          {/* <p className="hero-news-description">{latestNews.summary}</p> */}
          <Link to={`/news/${latestNews.id}`} className="hero-news-button">
            <span className="button-text">Read Full Article</span>
            {/* <span className="button-icon">⚡</span> */}
          </Link>
        </div>
      </div>
      <Countdown timeLeft={timeLeft} />
      
      
    </div>
  )
}

export default Hero
