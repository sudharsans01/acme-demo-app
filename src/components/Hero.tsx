export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>
      <div className="container hero-content">
        <div className="hero-badge">Running on ACME CLOUD · Kubernetes Powered</div>
        <h1 className="hero-title">
          Build. Deploy. <span className="hero-accent">Scale.</span>
        </h1>
        <p className="hero-subtitle">
          A demonstration application running on ACME CLOUD.
        </p>
        <button className="btn btn-primary btn-lg" onClick={scrollToProducts}>
          Explore Products
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
