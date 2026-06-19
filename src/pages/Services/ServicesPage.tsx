import { useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { services } from '../../data/services';
import GlowHover from '../../components/ui/glow-hover';
import { CallToAction } from '../../components/ui/CallToAction';

export default function ServicesPage() {
  const [headerRef, headerVisible] = useIntersectionObserver(0.1);
  const [gridRef, gridVisible] = useIntersectionObserver(0.1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section" style={{ paddingTop: '160px' }}>
      <div className="container">
        <div className={`animate-on-scroll stagger-children ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
          <div className="section-label">Services</div>
          <h1 className="section-heading">What I bring to the table.</h1>
          <p className="section-subheading">
            Comprehensive creative solutions tailored to your brand's unique needs.
            From concept to execution — every detail matters.
          </p>
        </div>

        <div
          className={`stagger-children ${gridVisible ? 'visible' : ''}`}
          ref={gridRef}
        >
          <GlowHover
            className="services-grid"
            glowIntensity={0.25}
            items={services.map((service) => ({
              id: service.id.toString(),
              element: (
                <div className="service-card h-full w-full">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                  <div className="service-sub-items">
                    {service.subItems.map((item) => (
                      <div key={item} className="service-sub-item">{item}</div>
                    ))}
                  </div>
                </div>
              )
            }))}
          />
        </div>

        {/* Call to action */}
        <CallToAction />
      </div>
    </section>
  );
}
