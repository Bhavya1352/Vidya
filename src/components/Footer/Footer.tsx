import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function Footer() {
  const [footerRef, footerVisible] = useIntersectionObserver(0.1);

  return (
    <footer className="footer">
      <div className="container">
        <div ref={footerRef} className={`animate-on-scroll stagger-children ${footerVisible ? 'visible' : ''}`}>
          <div className="footer-content">
            <span>Designed and Developed by <a href="https://harshjsx.dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors">Harsh</a></span>
            <span>•</span>
            <span>© {new Date().getFullYear()} The Social Vidya</span>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/vidya-vasavan-b60048299/" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://www.instagram.com/thesocialvidya/" target="_blank" rel="noopener noreferrer">
              Instagram ↗
            </a>
            <a href="https://www.facebook.com/profile.php?id=61553814430268" target="_blank" rel="noopener noreferrer">
              Facebook ↗
            </a>
            <a href="mailto:contact@socialvidya.com">
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
