import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { TextReveal } from './text-reveal';

interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CallToAction({
  title = "Have a project in mind?",
  description = "Let's discuss how I can help bring your vision to life with creative design and strategic marketing.",
  buttonText = "Get in Touch ↗",
  buttonLink = "/contact"
}: CallToActionProps) {
  const [ctaRef, ctaVisible] = useIntersectionObserver(0.1);

  return (
    <div className={`animate-on-scroll stagger-children ${ctaVisible ? 'visible' : ''}`} ref={ctaRef} style={{
      textAlign: 'center',
      marginTop: '40px',
      padding: '56px 48px',
      background: 'rgba(18, 18, 28, 0.45)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(212, 168, 83, 0.02)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow orbs */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '350px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(212, 168, 83, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        right: '-100px',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(91, 141, 217, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '26px',
        fontWeight: 700,
        margin: '0 auto 14px',
        position: 'relative',
        zIndex: 1,
        color: 'var(--text-primary)',
        letterSpacing: '-0.01em',
      }}>
        {title}
      </h3>
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '15px',
        lineHeight: 1.6,
        marginBottom: '28px',
        maxWidth: '480px',
        margin: '0 auto 28px',
        position: 'relative',
        zIndex: 1,
      }}>
        {description}
      </p>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <TextReveal
          text={buttonText}
          href={buttonLink}
          className="form-submit"
          style={{ display: 'inline-block', textDecoration: 'none' }}
          fontSize="15px"
          hoverColor="var(--bg-card)"
          color="var(--bg-main)"
        />
      </div>
    </div>
  );
}
