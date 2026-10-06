export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#2563eb"/>
            <path d="M7 18c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            <circle cx="14" cy="11" r="2.5" fill="white"/>
          </svg>
          <span>ACME <strong>CLOUD</strong></span>
        </div>
        <div className="footer-center">
          <span className="footer-k8s">⚙ Powered by Kubernetes</span>
        </div>
        <div className="footer-right">
          <span className="demo-badge">Demo Environment</span>
        </div>
      </div>
    </footer>
  )
}
