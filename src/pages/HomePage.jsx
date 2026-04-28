import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import LatestNews from '../components/LatestNews'
import Registration from '../components/Registration'
import RegistrationCTA from '../components/RegistrationCTA'
import InfoCards from '../components/InfoCards'
import About from '../components/About'
import Teams from '../components/Teams'
import MatchSchedule from '../components/MatchSchedule'
import Standings from '../components/Standings'
import Rules from '../components/Rules'
import Sponsors from '../components/Sponsors'
import SocialLinks from '../components/SocialLinks'
import Footer from '../components/Footer'
import { teamsData } from '../data/teamsData'
import { matchesData } from '../data/matchesData'
import { standingsData } from '../data/standingsData'
import { rulesData } from '../data/rulesData'

function HomePage() {
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

  return (
    <div>
      <Hero timeLeft={timeLeft} />

      {/* TAGLINE */}
      <div className="tagline">
        <h2>CODE THE GAME.</h2>
        <h2 className="gold">RULE THE PITCH.</h2>
      </div>

      <Registration />
      <RegistrationCTA />
      <InfoCards />
      <About />
      <Teams teams={teamsData} />
      <MatchSchedule matches={matchesData} />
      <Standings standings={standingsData} />
      <Rules rules={rulesData} />
      {/* <Sponsors /> */}
      {/* <SocialLinks /> */}
      <Footer />
    </div>
  )
}

export default HomePage
