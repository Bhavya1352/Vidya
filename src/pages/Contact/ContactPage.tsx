import { useState, useRef, useEffect, type FormEvent } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [headerRef, headerVisible] = useIntersectionObserver(0.1);
  const [infoRef, infoVisible] = useIntersectionObserver(0.1);
  const [formContainerRef, formVisible] = useIntersectionObserver(0.1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setStatus('idle');

    try {
      const formData = new FormData(formRef.current);
      formData.append("access_key", "372585be-c8a0-4e5a-8bff-b5486d24bd55");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        formRef.current.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section" style={{ paddingTop: '160px' }}>
      <div className="container">
        <div className={`animate-on-scroll stagger-children ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
          <div className="section-label">Contact</div>
          <h1 className="section-heading">Let's create something remarkable.</h1>
          <p className="section-subheading">
            Thank you for taking the time to review my work. I'm currently seeking opportunities
            to bring my skills in design and digital marketing to a dedicated team.
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact Info */}
          <div ref={infoRef}>
            <div className={`contact-info-grid stagger-children ${infoVisible ? 'visible' : ''}`}>
              <div className="contact-row">
                <span className="contact-label">Email</span>
                <a href="mailto:contact@socialvidya.com" className="contact-value">
                  contact@socialvidya.com <span className="arrow">↗</span>
                </a>
              </div>
              <div className="contact-row">
                <span className="contact-label">Phone</span>
                <a href="tel:+64274455985" className="contact-value">
                  +64 274 455 985 <span className="arrow">↗</span>
                </a>
              </div>
              <div className="contact-row">
                <span className="contact-label">LinkedIn</span>
                <a href="https://www.linkedin.com/in/vidya-vasavan-b60048299/" target="_blank" rel="noopener noreferrer" className="contact-value">
                  vidya-vasavan <span className="arrow">↗</span>
                </a>
              </div>
              <div className="contact-row">
                <span className="contact-label">Instagram</span>
                <a href="https://www.instagram.com/thesocialvidya/" target="_blank" rel="noopener noreferrer" className="contact-value">
                  @thesocialvidya <span className="arrow">↗</span>
                </a>
              </div>
              <div className="contact-row">
                <span className="contact-label">Facebook</span>
                <a href="https://www.facebook.com/profile.php?id=61553814430268" target="_blank" rel="noopener noreferrer" className="contact-value">
                  The Social Vidya <span className="arrow">↗</span>
                </a>
              </div>
              <div className="contact-row">
                <span className="contact-label">Location</span>
                <span className="contact-value">
                  New Zealand
                </span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Resume</span>
                <a href="/Vidya Vasavan_CV.docx" target="_blank" rel="noopener noreferrer" className="contact-value">
                  Download CV <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formContainerRef}>
            <form ref={formRef} onSubmit={handleSubmit} className={`contact-form stagger-children ${formVisible ? 'visible' : ''}`}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  required
                  placeholder="Project inquiry"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                required
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="form-submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message ↗'}
            </button>

            {status === 'success' && (
              <div className="form-status success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-status error">
                ✕ Failed to send message. Please try again or email directly.
              </div>
            )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
