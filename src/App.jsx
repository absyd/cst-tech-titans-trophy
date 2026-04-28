import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Teams from './components/Teams'
import MatchSchedule from './components/MatchSchedule'
import Standings from './components/Standings'
import Rules from './components/Rules'
import SocialLinks from './components/SocialLinks'
import Sponsors from './components/Sponsors'
import About from './components/About'
import RegistrationCTA from './components/RegistrationCTA'
import Registration from './components/Registration'
import Footer from './components/Footer'
import InfoCards from './components/InfoCards'

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date('2026-05-02T09:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const teams = [
    { id: 1, name: 'Coming Soon', captain: 'Coming Soon', emoji: '⚔️' },
  ]

  const matches = [
    { id: 1, date: 'May 2, 09:00 AM', team1: 'Coming Soon', team2: 'Coming Soon', venue: 'RPI Central Field' }
  ]

  const standings = [
    { rank: 0, team: 'Coming Soon', played: 0, won: 0, lost: 0, points: 0 }
  ]

  const rules = [
    {
      title: 'Coming Soon',
      description: 'Rules Are Coming Soon'
    }
  ]

  return (
    <div className="container">
      <Navigation />
      <Hero timeLeft={timeLeft} />

      {/* TAGLINE */}
      <div className="tagline">
        <h2>CODE THE GAME.</h2>
        <h2 className="gold">RULE THE PITCH.</h2>
      </div>

      <Registration />
      <RegistrationCTA />
      <InfoCards/>
      <About />
      <Teams teams={teams} />
      <MatchSchedule matches={matches} />
      <Standings standings={standings} />
      <Rules rules={rules} />
      {/* <Sponsors /> */}
      {/* <SocialLinks /> */}

      <Footer />
    </div>
  )
}

export default App
