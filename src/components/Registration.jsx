import React from 'react'

function Registration() {
  return (
    <div id='register' className="section">
      <h2 className="section-title">📝 REGISTRATION</h2>
      <div className="registration-container">
        <div className="registration-info">
          <h3>Register Your Team</h3>
          <p>
            Get your team registered for the CST Tech Titans Trophy 2026. 
            Contact us via phone or email to secure your spot in the tournament.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">01782536760</div>
                <div className="contact-value">01321063723</div>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">info@csttrophy.com</div>
              </div>
            </div>
          </div>
          <div className="registration-note">
            <span className="note-icon">⚠️</span>
            <span>Registration closes on April 25, 2026</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration