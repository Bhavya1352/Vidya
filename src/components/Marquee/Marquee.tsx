import { clientLogos } from '../../data/skills';

export default function Marquee() {
  const items = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="marquee-section">
      <div className="marquee-label">• Trusted by Awesome Clients •</div>

      <div className="marquee-track">
        <div className="marquee-inner">
          {items.map((client, i) => (
            <div key={`a-${i}`} className="marquee-item">
              <img src={client.url} alt={client.name} loading="lazy" />
              <span>{client.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-track reverse" style={{ marginTop: '12px' }}>
        <div className="marquee-inner">
          {[...items].reverse().map((client, i) => (
            <div key={`b-${i}`} className="marquee-item">
              <img src={client.url} alt={client.name} loading="lazy" />
              <span>{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
