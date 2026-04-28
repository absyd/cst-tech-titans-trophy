import { useState } from 'react'
import Teams from '../components/Teams'
import Footer from '../components/Footer'

function TeamsPage() {
  const teams = [
    { id: 1, name: 'Coming Soon', captain: 'Coming Soon', emoji: '⚔️' },
  ]

  return (
    <div>
      <Teams teams={teams} />
      <Footer />
    </div>
  )
}

export default TeamsPage
