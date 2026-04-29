import { useParams, Link } from 'react-router-dom'
import { newsData } from '../data/newsData'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

function NewsDetailPage() {
  const { id } = useParams()
  const news = newsData.find(item => item.id === parseInt(id))

  const getCategoryColor = (category) => {
    const colors = {
      'Tournament': 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30',
      'Team': 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30',
      'Match': 'bg-green-500/20 text-green-300 border-green-400/30',
      'Announcement': 'bg-purple-500/20 text-purple-300 border-purple-400/30'
    }
    return colors[category] || 'bg-white/10 text-gray-300 border-white/20'
  }

  if (!news) {
    return (
      <div className="min-h-screen  ">
        <Navigation />
        <div className="w-full max-w-4xl mx-auto px-4 pt-24 pb-16 text-center">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="text-6xl mb-4">❌</div>
            <h1 className="text-2xl md:text-3xl font-black text-white mb-4">News Not Found</h1>
            <p className="text-gray-400 mb-6">Sorry, the news article you're looking for doesn't exist.</p>
            <Link 
              to="/news" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-cyan-500/30 transition-all duration-300"
            >
              ← Back to News
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen  ">
      <Navigation />
      
      <div className="w-full max-w-4xl mx-auto px-4 pt-24 pb-16">
        {/* Article Card */}
        <article className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl p-6 md:p-10 border border-white/10">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getCategoryColor(news.category)}`}>
              {news.category}
            </span>
            <span className="text-sm text-gray-500">
              {new Date(news.date).toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
            {news.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-2 mb-8 pb-6 border-b border-white/10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
              {news.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{news.author}</p>
              <p className="text-xs text-gray-500">Author</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Summary */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light italic border-l-4 border-cyan-400 pl-4">
              {news.summary}
            </p>

            {/* Full Content */}
            <div className="prose prose-invert prose-cyan max-w-none">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                {news.content}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <Link 
              to="/news" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-lg rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/10 hover:text-white transition-all duration-300 group"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
              Back to All News
            </Link>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  )
}

export default NewsDetailPage
