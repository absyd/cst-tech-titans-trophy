import { Link } from 'react-router-dom'
import { newsData } from '../data/newsData'

function LatestNews() {
  const latestNews = newsData.slice(0, 3) // Show only latest 3 news items

  return (
    <div className="latest-news">
      <h3 className="section-title">📰 LATEST NEWS</h3>
      <div className="news-grid">
        {latestNews.map((news) => (
          <div key={news.id} className="news-card">
            <div className="news-header">
              <span className="news-category">{news.category}</span>
              <span className="news-date">{new Date(news.date).toLocaleDateString()}</span>
            </div>
            <h4 className="news-title">{news.title}</h4>
            <p className="news-summary">{news.summary}</p>
            <Link to={`/news/${news.id}`} className="news-link">
              Read More →
            </Link>
          </div>
        ))}
      </div>
      <div className="news-all-link">
        <Link to="/news" className="view-all-news">
          View All News →
        </Link>
      </div>
    </div>
  )
}

export default LatestNews
