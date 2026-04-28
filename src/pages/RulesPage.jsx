import { useState } from 'react'
import Rules from '../components/Rules'
import Footer from '../components/Footer'

function RulesPage() {
  const rules = [
    {
      title: 'Coming Soon',
      description: 'Rules Are Coming Soon'
    }
  ]

  return (
    <div>
      <Rules rules={rules} />
      <Footer />
    </div>
  )
}

export default RulesPage
