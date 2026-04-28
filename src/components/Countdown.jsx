function Countdown({ timeLeft }) {
  return (
    <div className="countdown">
      <h2>COUNTDOWN TO TOURNAMENT</h2>
      <div className="countdown-timer">
        <div className="time-unit">
          <div className="time-value">{timeLeft.days}</div>
          <div className="time-label">DAYS</div>
        </div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.hours}</div>
          <div className="time-label">HOURS</div>
        </div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.minutes}</div>
          <div className="time-label">MINUTES</div>
        </div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.seconds}</div>
          <div className="time-label">SECONDS</div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
