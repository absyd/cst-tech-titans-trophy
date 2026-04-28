import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TeamsPage from './pages/TeamsPage'
import SchedulePage from './pages/SchedulePage'
import StandingsPage from './pages/StandingsPage'
import RulesPage from './pages/RulesPage'
import NewsPage from './pages/NewsPage'
import NewsDetailPage from './pages/NewsDetailPage'

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/standings" element={<StandingsPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
