import { Link } from 'react-router-dom'
import { newsData } from '../data/newsData'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

function NewsPage() {
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
    <div className="min-h-screen ">
      <Navigation />
      
      <div className="w-full max-w-4xl mx-auto px-4 pt-24 pb-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-cyan-400">📰</span> ALL NEWS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-yellow-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Stay updated with the latest from CST Tech Titans Trophy
          </p>
        </div>

        {/* News List */}
        <div className="space-y-4">
          {newsData.slice().reverse().map((news) => (
            <article 
              key={news.id} 
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl p-5 md:p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getCategoryColor(news.category)}`}>
                  {news.category}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(news.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {news.title}
              </h2>

              {/* Summary */}
              <p className="text-sm md:text-base text-gray-400 mb-4 leading-relaxed">
                {news.summary}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-gray-500">
                  By <span className="text-cyan-400">{news.author}</span>
                </span>
                <Link 
                  to={`/news/${news.id}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                >
                  Read Full Article
                  <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-10 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-lg rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/10 hover:text-white transition-all duration-300 group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default NewsPage
