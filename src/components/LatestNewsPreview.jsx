import React from 'react'
import { Link } from 'react-router-dom'
import { newsData } from '../data/newsData'

const LatestNewsPreview = () => {
  const latestNews = newsData[newsData.length-1]

  if (!latestNews) return null

  return (
    <div className="w-full mx-auto md:mb-0 mb-2">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600  rounded-lg p-4   h-42 flex justify-center items-center flex-col">
        {/* Header */}
        {/* <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Latest News</span>
        </div> */}
        
        {/* Title */}
        <h3 className="text-base md:text-lg font-semibold text-white mb-2 line-clamp-2">
          {latestNews.title.slice(0, 100)}
        </h3>
        
        {/* Link */}
        <Link 
          to={`/news/${latestNews.id}`}
          className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
        >
          Read More 
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  )
}

export default LatestNewsPreview