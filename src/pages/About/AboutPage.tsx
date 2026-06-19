import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { timelineEntries } from '../../data/timeline';
import { designSkills, professionalSkills, personalSkills } from '../../data/skills';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CallToAction } from '../../components/ui/CallToAction';
import { GlowingEffect } from '../../components/ui/glowing-effect';
import { Brain, MessageCircle, Layers, Timer, Calendar, Rocket, Users, Search } from 'lucide-react';
import { cn } from '../../lib/utils';

function TimelineEntry({ entry, index }: { entry: typeof timelineEntries[0]; index: number }) {
  const [ref, visible] = useIntersectionObserver(0.2);

  return (
    <div
      ref={ref}
      className={`timeline-entry ${visible ? 'visible' : ''}`}
      data-type={entry.type}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="timeline-dot" />
      <div className="timeline-date">{entry.period}</div>
      <div className="timeline-title">{entry.title}</div>
      <div className="timeline-org">{entry.organization}</div>
      <div className="timeline-location">{entry.location}</div>
      {entry.description && <div className="timeline-desc">{entry.description}</div>}
      {entry.responsibilities.length > 0 && (
        <ul className="timeline-responsibilities">
          {entry.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function useTimelineProgress(timelineRef: React.RefObject<HTMLDivElement | null>) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start filling when the top of the timeline reaches 60% of the viewport
      // Finish when the bottom reaches 20% of the viewport
      const startOffset = windowHeight * 0.6;
      const endOffset = windowHeight * 0.2;

      const totalScrollable = rect.height - startOffset + endOffset;
      const scrolled = startOffset - rect.top;

      const pct = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setProgress(pct);
    });
  }, [timelineRef]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial calculation
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return progress;
}

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-bar-fill ${animate ? 'animate' : ''}`}
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

const featureItems = [
  {
    icon: MessageCircle,
    title: "Communication",
    description: personalSkills[0],
    span: "bento-span-4",
  },
  {
    icon: Brain,
    title: "Quick Learner",
    description: personalSkills[1],
    span: "bento-span-4",
  },
  {
    icon: Layers,
    title: "Multi-tasking",
    description: personalSkills[2],
    span: "bento-span-4 bento-row-2",
  },
  {
    icon: Timer,
    title: "Works Under Pressure",
    description: personalSkills[3],
    span: "bento-span-5",
  },
  {
    icon: Calendar,
    title: "Time Management",
    description: personalSkills[4],
    span: "bento-span-7",
  },
  {
    icon: Rocket,
    title: "Proactive",
    description: personalSkills[5],
    span: "bento-span-4",
  },
  {
    icon: Users,
    title: "Team Player",
    description: personalSkills[6],
    span: "bento-span-4",
  },
  {
    icon: Search,
    title: "Detail-Oriented",
    description: personalSkills[7],
    span: "bento-span-4",
  },
];

export default function AboutPage() {
  const [headerRef, headerVisible] = useIntersectionObserver(0.1);
  const [skillsRef, skillsVisible] = useIntersectionObserver(0.2);
  const [personalRef, personalVisible] = useIntersectionObserver(0.1);
  const [animateSkills, setAnimateSkills] = useState(false);
  const hasAnimated = useRef(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineProgress = useTimelineProgress(timelineRef);

  useEffect(() => {
    if (skillsVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      setTimeout(() => setAnimateSkills(true), 200);
    }
  }, [skillsVisible]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* About Hero */}
      <section className="section" style={{ paddingTop: '160px' }}>
        <div className={`container animate-on-scroll stagger-children ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
          <div className="section-label">About</div>
          <h1 className="section-heading">Visuals that speak. Strategies that stick.</h1>
          <p className="section-subheading" style={{ marginBottom: '48px' }}>
            Honest where it matters. Available when it's hard.
          </p>

          <div className="about-content">
            <div className="about-text">
              <p>
                With over 8 years of experience as a graphic designer and content creator,
                I am passionate about digital marketing and all its facets. I enjoy making
                eye-catching visuals and telling stories that connect with people.
              </p>
              <p>
                I'm excited to use my skills to help brands grow and succeed online. My journey
                spans from luxury hospitality brands to education consultancies, film production
                houses to innovative startups.
              </p>
              <p>
                Whether it's crafting a brand identity from scratch, designing campaigns that drive
                engagement, or producing video content that captures attention — I bring a unique
                blend of creativity and strategic thinking to every project.
              </p>
              <div style={{ marginTop: '24px' }}>
                <a
                  href="/Vidya Vasavan_CV.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                >
                  Download Full CV <span className="arrow">↗</span>
                </a>
              </div>
            </div>
            <div className="about-image-wrapper">
              <img
                src="https://thesocialvidya.com/wp-content/uploads/2024/10/About-Us-we.webp"
                alt="Vidya Vasavan"
                loading="lazy"
              />
              <div className="about-image-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-label">The trajectory</div>
          <h2 className="section-heading">Experience & Education</h2>
          <p className="section-subheading">A journey through design, marketing, and digital innovation.</p>

          <div className="timeline" ref={timelineRef}>
            <div
              className="timeline-progress"
              style={{ height: `${timelineProgress * 100}%` }}
            />
            {timelineEntries.map((entry, i) => (
              <TimelineEntry key={entry.id} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container animate-on-scroll stagger-children ${skillsVisible ? 'visible' : ''}`} ref={skillsRef}>
          <div className="section-label">Tools of the trade</div>
          <h2 className="section-heading">Skills & Proficiency</h2>
          <p className="section-subheading">7+ years of hands-on experience, profiled under pressure.</p>

          <div className="skills-container">
            <div className="skill-group">
              <h3>{designSkills.title}</h3>
              {designSkills.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} animate={animateSkills} />
              ))}
            </div>
            <div className="skill-group">
              <h3>{professionalSkills.title}</h3>
              {professionalSkills.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} animate={animateSkills} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Skills Bento Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container animate-on-scroll stagger-children ${personalVisible ? 'visible' : ''}`} ref={personalRef}>
          <div className="section-label">Soft skills</div>
          <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>What I also bring.</h2>

          <ul className={`bento-grid stagger-children ${personalVisible ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem', marginTop: '3rem', listStyle: 'none', padding: 0 }}>
            {featureItems.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </ul>
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

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  title: string
  description: string
  span: string
}

function FeatureCard({ icon: Icon, title, description, span }: FeatureCardProps) {
  return (
    <li className={cn("list-none", span)} style={{ minHeight: '8rem' }}>
      <div style={{ position: 'relative', height: '100%', borderRadius: '1.25rem', border: '0.75px solid var(--border-subtle)', padding: '0.5rem' }}>
        <GlowingEffect spread={40} glow={true} disabled={false} borderWidth={3} />
        <div style={{ position: 'relative', display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', gap: '1rem', overflow: 'hidden', borderRadius: '0.75rem', border: '0.75px solid var(--border-subtle)', background: 'var(--bg-card)', padding: '1.5rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ width: 'fit-content', borderRadius: '0.5rem', border: '0.75px solid var(--border-subtle)', background: 'var(--bg-primary)', padding: '0.5rem' }}>
              <Icon style={{ width: '1.25rem', height: '1.25rem', color: 'var(--accent-gold)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', lineHeight: '1.4', fontWeight: 600, letterSpacing: '-0.04em', color: 'var(--text-primary)' }}>
                {title}
              </h3>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.4', color: 'var(--text-secondary)' }}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
