import { useEffect } from 'react';

// Critical CSS for above-the-fold content
const criticalCSS = `
  /* Critical styles for initial render */
  .hero-section {
    background: linear-gradient(135deg, #1e40af 0%, #3730a3 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  
  .hero-content {
    text-align: center;
    max-width: 1200px;
    padding: 2rem;
  }
  
  .hero-title {
    font-size: 3.75rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: rgb(219 234 254);
  }
  
  .calculator-card {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
  }
  
  .loading-skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }
    .hero-content {
      padding: 1rem;
    }
    .calculator-card {
      margin: 1rem;
      padding: 1.5rem;
    }
  }
`;

export default function CriticalCSS() {
  useEffect(() => {
    // Inject critical CSS immediately
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = criticalCSS;
    document.head.appendChild(style);

    // Preload main CSS file asynchronously
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = '/assets/index.css';
    link.onload = function() {
      this.onload = null;
      this.rel = 'stylesheet';
    };
    document.head.appendChild(link);

    // Cleanup function
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null;
}