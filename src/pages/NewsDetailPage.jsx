import { useParams, Link } from 'react-router-dom'
import { newsData } from '../data/newsData'
import Footer from '../components/Footer'

function NewsDetailPage() {
  const { id } = useParams()
  const news = newsData.find(item => item.id === parseInt(id))

  if (!news) {
    return (
      <div>
        <div className="section">
          <h2 className="section-title">❌ News Not Found</h2>
          <p>Sorry, the news article you're looking for doesn't exist.</p>
          <Link to="/news" className="back-link">← Back to News</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <div className="section">
        <div className="news-detail">
          <div className="news-detail-header">
            <span className="news-category">{news.category}</span>
            <span className="news-date">{new Date(news.date).toLocaleDateString()}</span>
          </div>
          <h1 className="news-detail-title">{news.title}</h1>
          <div className="news-detail-meta">
            <span className="news-author">By {news.author}</span>
          </div>
          <div className="news-detail-content">
            <p className="news-summary">{news.summary}</p>
            <div className="news-full-content">
              {news.content}
            </div>
          </div>
          <div className="news-detail-footer">
            <Link to="/news" className="back-link">← Back to All News</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NewsDetailPage
