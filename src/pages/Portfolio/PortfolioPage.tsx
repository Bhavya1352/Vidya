import { useState, useEffect, useCallback } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { projects, categories, type Project } from '../../data/portfolio';
import { CallToAction } from '../../components/ui/CallToAction';

function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <div>
            <div className="lightbox-title">{project.title}</div>
            <div className="lightbox-meta">{project.category} • {project.client}</div>
          </div>
          <button className="lightbox-close" onClick={onClose}>✕</button>
        </div>
        <div className="lightbox-body">
          <p className="lightbox-description">{project.description}</p>

          {project.images.length > 0 && (
            <div className="lightbox-gallery">
              {project.images.map((img, i) => (
                <a key={i} href={img} target="_blank" rel="noopener noreferrer">
                  <img src={img} alt={`${project.title} - ${i + 1}`} loading="lazy" />
                </a>
              ))}
            </div>
          )}

          {project.instagramReels && project.instagramReels.length > 0 && (
            <div style={{ marginTop: '24px' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.1em',
                marginBottom: '12px',
              }}>
                Instagram Reels
              </div>
              <div className="lightbox-reels">
                {project.instagramReels.map((reel, i) => (
                  <a key={i} href={reel} target="_blank" rel="noopener noreferrer" className="lightbox-reel-link">
                    ▶ Reel {i + 1} <span style={{ fontSize: '12px' }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [headerRef, headerVisible] = useIntersectionObserver(0.1);
  const [gridRef, gridVisible] = useIntersectionObserver(0.05);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = activeCategory === 'All Projects'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '0' }}>
        <div className="container">
          <div className={`animate-on-scroll stagger-children ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
            <div className="section-label">Portfolio</div>
            <h1 className="section-heading">What the arc produced.</h1>
            <p className="section-subheading">
              A curated selection of design work across brand identity, digital marketing,
              print media, and video production.
            </p>

            <div className="portfolio-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`portfolio-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`portfolio-grid stagger-children ${gridVisible ? 'visible' : ''}`}
            ref={gridRef}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.thumbnail} alt={project.title} loading="lazy" />
                <div className="project-card-overlay">
                  <div className="project-card-title">{project.title}</div>
                  <div className="project-card-category">{project.category}</div>
                </div>
                <div className="project-card-arrow">↗</div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '80px 0',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
            }}>
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <div className="container" style={{ marginTop: '-40px', paddingBottom: '80px' }}>
        <CallToAction />
      </div>

      {selectedProject && (
        <Lightbox project={selectedProject} onClose={handleClose} />
      )}
    </>
  );
}
