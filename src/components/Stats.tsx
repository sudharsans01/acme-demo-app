const stats = [
  { value: '99.99%', label: 'Availability', icon: '✓' },
  { value: 'K8s', label: 'Kubernetes Powered', icon: '⚙' },
  { value: 'CI/CD', label: 'Automated', icon: '🔄' },
  { value: 'HTTPS', label: 'Enabled', icon: '🔒' },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map(s => (
            <div key={s.label} className="stat-item">
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
