function RegistrationCTA() {
  return (
    <div className="section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">🎯 READY TO JOIN?</h2>
          <p className="cta-description">
            Registration for the 2026 tournament is now open! Gather your team and register before April 25, 2026.
          </p>
          <div className="cta-actions">
            <a href="#register" className="cta-button primary">
              Register Your Team
            </a>
            <a href="#rules" className="cta-button secondary">
              View Rules
            </a>
          </div>
          <div className="cta-deadline">
            <span className="deadline-icon">⏰</span>
            <span className="deadline-text">Registration Deadline: April 25, 2026</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationCTA
