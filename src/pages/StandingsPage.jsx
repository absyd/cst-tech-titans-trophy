import { useState } from 'react'
import Standings from '../components/Standings'
import Footer from '../components/Footer'

function StandingsPage() {
  const standings = [
    { rank: 0, team: 'Coming Soon', played: 0, won: 0, lost: 0, points: 0 }
  ]

  return (
    <div>
      <Standings standings={standings} />
      <Footer />
    </div>
  )
}

export default StandingsPage
