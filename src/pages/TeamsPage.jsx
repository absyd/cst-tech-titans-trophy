import Teams from '../components/Teams'
import Footer from '../components/Footer'
import { teamsData } from '../data/playersData'

function TeamsPage() {

  return (
    <div>
      <Teams teams={teamsData} />
      <Footer />
    </div>
  )
}

export default TeamsPage
