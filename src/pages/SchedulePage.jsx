import MatchSchedule from '../components/MatchSchedule'
import Footer from '../components/Footer'
import { matchesData } from '../data/matchesData'

function SchedulePage() {
  return (
    <div>
      <MatchSchedule matches={matchesData} />
      <Footer />
    </div>
  )
}

export default SchedulePage
