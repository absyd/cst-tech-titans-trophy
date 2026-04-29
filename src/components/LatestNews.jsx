import { Link } from 'react-router-dom'
import { newsData } from '../data/newsData'

function LatestNews() {
  const latestNews = newsData.slice(0, 3)

  const getCategoryColor = (category) => {
    const colors = {
      'Tournament': 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30',
      'Team': 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30',
      'Match': 'bg-green-500/20 text-green-300 border-green-400/30',
      'Announcement': 'bg-purple-500/20 text-purple-300 border-purple-400/30'
    }
    return colors[category] || 'bg-white/10 text-gray-300 border-white/20'
  }

  return (
    <div id="news" className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          <span className="text-cyan-400">📰</span> LATEST NEWS
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-yellow-400 mx-auto rounded-full" />
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
        {latestNews.map((news) => (
          <div 
            key={news.id} 
            className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl p-5 md:p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getCategoryColor(news.category)}`}>
                {news.category}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors">
              {news.title}
            </h3>

            {/* Summary */}
            <p className="text-sm text-gray-400 mb-4 line-clamp-3 leading-relaxed">
              {news.summary}
            </p>

            {/* Read More Link */}
            <Link 
              to={`/news/${news.id}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
            >
              Read More 
              <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center">
        <Link 
          to="/news"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group"
        >
          View All News
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  )
}

export default LatestNews
