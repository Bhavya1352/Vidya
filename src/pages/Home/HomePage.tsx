import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { services } from '../../data/services';
import { testimonials } from '../../data/testimonials';
import Marquee from '../../components/Marquee/Marquee';
import { ScrollReelTestimonials } from '../../components/ui/scroll-reel-testimonials';
import { CallToAction } from '../../components/ui/CallToAction';
import { Briefcase, MapPin, Sparkles, GraduationCap } from 'lucide-react';

export default function HomePage() {
  const [heroRef, heroVisible] = useIntersectionObserver(0.1);
  const [aboutRef, aboutVisible] = useIntersectionObserver(0.1);
  const [servicesRef, servicesVisible] = useIntersectionObserver(0.1);
  const [testimRef, testimVisible] = useIntersectionObserver(0.1);

  const mappedTestimonials = testimonials.map((t) => ({
    quote: t.quote,
    author: `${t.name} — ${t.title}`,
    image: t.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop',
    alt: `Portrait of ${t.name}`,
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className={`container animate-on-scroll ${heroVisible ? 'visible' : ''}`} ref={heroRef}>
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-tagline">
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent-gold)]" /> Welcome to my world
              </div>
              <h1 className="hero-name">
                Vidya
                <span className="name-accent">Vasavan</span>
              </h1>
              <p className="hero-subtitle">
                I create visuals and experiences that bring ideas to life, focusing on meaningful,
                engaging interactions. My goal is to craft content that not only looks good but
                truly connects with people.
              </p>

              <div className="hero-social-links">
                <a href="https://www.linkedin.com/in/vidya-vasavan-b60048299/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                  LinkedIn <span className="arrow">↗</span>
                </a>
                {/* <a href="https://www.instagram.com/thesocialvidya/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                  Instagram <span className="arrow">↗</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61553814430268" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                  Facebook <span className="arrow">↗</span>
                </a> */}
                <a href="mailto:contact@socialvidya.com" className="hero-social-link">
                  Email <span className="arrow">↗</span>
                </a>
                <a href="/Vidya Vasavan_CV.docx" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                  Download CV <span className="arrow">↗</span>
                </a>
              </div>
            </div>

            <div className="hero-bento-grid">
              {/* Card 1: Profile Card */}
              <div className="bento-card profile-card bento-span-2">
                <div className="bento-profile-img-wrapper">
                  <img
                    src="https://thesocialvidya.com/wp-content/uploads/2024/11/HOME-COMP.webp"
                    alt="Vidya Vasavan"
                    className="bento-profile-img"
                    loading="eager"
                  />
                </div>
                <div className="bento-profile-info">
                  <div className="bento-profile-tag">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--accent-gold)]" /> Creative Specialist
                  </div>
                  <div className="bento-profile-title">Vidya Vasavan</div>
                  <div className="bento-profile-subtitle">
                    Bringing ideas to life through strategic digital marketing and brand design.
                  </div>
                </div>
              </div>

              {/* Card 2: Professional Status (Current Role) */}
              <div className="bento-card">
                <div>
                  <div className="bento-card-label">
                    <Briefcase className="w-3.5 h-3.5 text-[var(--accent-gold)]" /> Current Role
                  </div>
                  <div className="bento-card-title">Digital Marketing Executive</div>
                  <div className="bento-card-subtitle">Placeme Consultants</div>
                </div>
                <div className="bento-card-footer">
                  <span className="pulsing-dot" /> Feb 2024 – Present
                </div>
              </div>

              {/* Card 3: Location & Education */}
              <div className="bento-card">
                <div>
                  <div className="bento-card-label">
                    <MapPin className="w-3.5 h-3.5 text-[var(--accent-gold)]" /> Location & Education
                  </div>
                  <div className="bento-card-title">New Zealand</div>
                  <div className="bento-card-subtitle">Master of Digital Business</div>
                </div>
                <div className="bento-card-footer">
                  <GraduationCap className="w-3.5 h-3.5 text-[var(--text-muted)]" /> Auckland / Hybrid
                </div>
              </div>

              {/* Card 4: Experience & Specialties Badge Card */}
              <div className="bento-card bento-span-2">
                <div>
                  <div className="bento-card-label">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--accent-gold)]" /> Track Record
                  </div>
                  <div className="bento-card-title">7+ Years of Industry Experience</div>
                </div>
                <div className="bento-badges-container">
                  <span className="bento-badge">Graphic Designer</span>
                  <span className="bento-badge">Marketing Specialist</span>
                  <span className="bento-badge">Brand Identity</span>
                  <span className="bento-badge">Campaign Marketing</span>
                  <span className="bento-badge">SEO Content</span>
                  <span className="bento-badge">Digital Strategy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section">
        <div className={`container animate-on-scroll stagger-children ${aboutVisible ? 'visible' : ''}`} ref={aboutRef}>
          <div className="section-label">About</div>
          <h2 className="section-heading">Visuals that speak. Strategies that stick.</h2>
          <p className="section-subheading">
            With over 8 years of experience as a graphic designer and content creator,
            I am passionate about digital marketing and all its facets.
          </p>

          <div className="about-content">
            <div className="about-text">
              <p>
                I enjoy making eye-catching visuals and telling stories that connect with people.
                I'm excited to use my skills to help brands grow and succeed online. From logo design
                to full-scale marketing campaigns, I bring creativity and strategic thinking to every project.
              </p>
              <p>
                My approach combines strong design fundamentals with a deep understanding of digital
                marketing — ensuring every visual I create not only looks stunning but drives real results.
              </p>
              <Link to="/about" className="hero-social-link" style={{ marginTop: '16px' }}>
                More about me <span className="arrow">↗</span>
              </Link>
            </div>
            <div className="about-image-wrapper">
              <img
                src="https://thesocialvidya.com/wp-content/uploads/2024/10/About-Us-we.webp"
                alt="Vidya Vasavan at work"
                loading="lazy"
              />
              <div className="about-image-overlay" />
            </div>
          </div>

          <div className={`pillar-cards stagger-children ${aboutVisible ? 'visible' : ''}`}>
            <div className="pillar-card">
              <div className="pillar-card-icon">◎</div>
              <h3>Brand Identity</h3>
              <p>Logo design, typography, and tailored visual concepts that define your brand's essence.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-card-icon">◈</div>
              <h3>Campaign Marketing</h3>
              <p>Strategic content planning, scheduling, and cross-platform promotion that drives engagement.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-card-icon">✦</div>
              <h3>Digital Content</h3>
              <p>SEO-integrated social media graphics and audience engagement strategies for maximum visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container animate-on-scroll stagger-children ${servicesVisible ? 'visible' : ''}`} ref={servicesRef}>
          <div className="section-label">Services</div>
          <h2 className="section-heading">What I bring to the table.</h2>
          <p className="section-subheading">
            From brand identity to video production — comprehensive creative solutions tailored to your needs.
          </p>

          <div className={`services-grid stagger-children ${servicesVisible ? 'visible' : ''}`}>
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <div className="service-sub-items">
                  {service.subItems.map((item) => (
                    <div key={item} className="service-sub-item">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="hero-social-link" style={{ display: 'inline-flex' }}>
              View all services <span className="arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Reel */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container animate-on-scroll ${testimVisible ? 'visible' : ''}`} ref={testimRef}>
          <div className="section-label">Testimonials</div>
          <h2 className="section-heading">In their words.</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
            <ScrollReelTestimonials testimonials={mappedTestimonials} />
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/testimonials" className="hero-social-link" style={{ display: 'inline-flex' }}>
              View all testimonials <span className="arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CallToAction />
        </div>
      </section>

      {/* Client Marquee */}
      <Marquee />
    </>
  );
}
