import Standings from '../components/Standings'
import Footer from '../components/Footer'
import { standingsData } from '../data/standingsData'

function StandingsPage() {
  return (
    <div>
      <Standings standings={standingsData} />
      <Footer />
    </div>
  )
}

export default StandingsPage
