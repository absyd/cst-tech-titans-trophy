import React from 'react'
import { Link } from 'react-router-dom'
import { newsData } from '../data/newsData'

const LatestNewsPreview = () => {
  const latestNews = newsData[0]

  return (
    <div className="text-center py-2 bg-blue-900 rounded-lg">
      <div className="inline-block">

        <h3 className="text-xl font-medium text-white mt-3">
          {latestNews.title}
        </h3>
        <Link 
          to={`/news/${latestNews.id}`}
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          Read More →
        </Link>
      </div>
    </div>
  )
}

export default LatestNewsPreview