import { useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { testimonials } from '../../data/testimonials';
import { CallToAction } from '../../components/ui/CallToAction';

export default function TestimonialsPage() {
  const [headerRef, headerVisible] = useIntersectionObserver(0.1);
  const [gridRef, gridVisible] = useIntersectionObserver(0.05);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <section className="section" style={{ paddingTop: '160px' }}>
      <div className="container">
        <div className={`animate-on-scroll stagger-children ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
          <div className="section-label">Testimonials</div>
          <h1 className="section-heading">In their words.</h1>
          <p className="section-subheading">
            What clients and collaborators say about working with me — real feedback from real projects.
          </p>
        </div>

        <div
          className={`testimonials-grid stagger-children ${gridVisible ? 'visible' : ''}`}
          ref={gridRef}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-quote-mark">"</div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {t.image && (
                    <img
                      src={t.image}
                      alt={t.name}
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid var(--border-subtle)',
                        transition: 'border-color var(--duration-normal) var(--ease-out)',
                      }}
                    />
                  )}
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-title">{t.title}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="testimonial-service">{t.service}</div>
                  <div className="testimonial-location">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    {/* CTA Section */}
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <CallToAction />
      </div>
    </section>
    </>
  );
}
