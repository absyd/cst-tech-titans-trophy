import Rules from '../components/Rules'
import Footer from '../components/Footer'
import { rulesData } from '../data/rulesData'

function RulesPage() {
  return (
    <div>
      <Rules rules={rulesData} />
      <Footer />
    </div>
  )
}

export default RulesPage
