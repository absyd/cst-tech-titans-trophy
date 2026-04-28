import { Link } from 'react-router-dom'
import { newsData } from '../data/newsData'
import Footer from '../components/Footer'

function NewsPage() {
  return (
    <div>
      <div className="section">
        <h2 className="section-title">📰 ALL NEWS</h2>
        <div className="news-list">
          {newsData.map((news) => (
            <article key={news.id} className="news-article">
              <div className="news-header">
                <span className="news-category">{news.category}</span>
                <span className="news-date">{new Date(news.date).toLocaleDateString()}</span>
              </div>
              <h3 className="news-title">{news.title}</h3>
              <p className="news-summary">{news.summary}</p>
              <div className="news-meta">
                <span className="news-author">By {news.author}</span>
                <Link to={`/news/${news.id}`} className="read-more-link">
                  Read Full Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NewsPage
