function Rules({ rules }) {
  return (
    <div className="section" id="rules">
      <h2 className="section-title">📋 TOURNAMENT RULES</h2>
      <div className="rules-container">
        {rules.map((rule, index) => (
          <div key={index} className="rule-item">
            <h3>{rule.title}</h3>
            <p>{rule.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rules
