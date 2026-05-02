import Countdown from './Countdown'

const TerminatedHero = ({ timeLeft }) => {
  return (
    <div className='flex flex-col'>
    <div className="text-center">
      <h1 className='text-2xl font-bold text-yellow-300 mb-2'>Match Termination Notice</h1> 
      <img src="/rain_termination.jpg" className='h-lg w-lg md:h-3xl md:w-3xl mx-auto rounded-lg border-2 border-yellow-300' alt="Rain Termination" />
    </div>
      <div className="my-2 md:w-3xl w-3xl mx-auto">
      <Countdown timeLeft={timeLeft} />
    </div>
    
    </div>
  )
}

export default TerminatedHero