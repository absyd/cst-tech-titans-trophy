import { useState } from 'react'
import MatchSchedule from '../components/MatchSchedule'
import Footer from '../components/Footer'

function SchedulePage() {
  const matches = [
    { id: 1, date: 'May 2, 09:00 AM', team1: 'Coming Soon', team2: 'Coming Soon', venue: 'RPI Central Field' }
  ]

  return (
    <div>
      <MatchSchedule matches={matches} />
      <Footer />
    </div>
  )
}

export default SchedulePage
