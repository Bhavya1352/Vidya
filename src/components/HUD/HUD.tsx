import { useState, useEffect } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function HUD() {
  const [nzTime, setNzTime] = useState('');
  const [istTime, setIstTime] = useState('');
  const mouse = useMousePosition();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();

      // NZ time (UTC+12 / UTC+13 during NZDT)
      const nz = now.toLocaleTimeString('en-NZ', {
        timeZone: 'Pacific/Auckland',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setNzTime(nz);

      // IST time (UTC+5:30)
      const ist = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setIstTime(ist);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll arc color interpolation
  const getArcColor = (progress: number): string => {
    if (progress < 0.33) {
      return `hsl(${200 + progress * 3 * 20}, 70%, 60%)`;
    } else if (progress < 0.66) {
      return `hsl(${40 + (progress - 0.33) * 3 * 10}, 80%, 55%)`;
    } else {
      return `hsl(${20 - (progress - 0.66) * 3 * 20}, 80%, 55%)`;
    }
  };

  const arcRadius = 18;
  const arcCircumference = 2 * Math.PI * arcRadius;
  const arcOffset = arcCircumference * (1 - scrollProgress);

  return (
    <div className="hud">
      {/* Clock — Top Left */}
      <div className="hud-clock">
        <div>
          <span className="hud-timezone">NZL</span>
          <span className="hud-time">{nzTime}</span>
        </div>
        <div className="hud-separator">···</div>
        <div>
          <span className="hud-timezone">IST</span>
          <span className="hud-time">{istTime}</span>
        </div>
      </div>

      {/* Mouse Coords — Top Right */}
      <div className="hud-coords">
        <div>
          <span className="coord-label">X</span>
          <span className="coord-value">{mouse.normalizedX.toFixed(4)}</span>
        </div>
        <div>
          <span className="coord-label">Y</span>
          <span className="coord-value">{mouse.normalizedY.toFixed(4)}</span>
        </div>
      </div>

      {/* Scroll Arc — Bottom Right */}
      <svg
        className="hud-scroll-arc"
        width="44"
        height="44"
        viewBox="0 0 44 44"
      >
        <circle
          cx="22"
          cy="22"
          r={arcRadius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="2"
        />
        <circle
          cx="22"
          cy="22"
          r={arcRadius}
          fill="none"
          stroke={getArcColor(scrollProgress)}
          strokeWidth="2"
          strokeDasharray={arcCircumference}
          strokeDashoffset={arcOffset}
          strokeLinecap="round"
          transform="rotate(-90 22 22)"
          style={{ transition: 'stroke-dashoffset 0.1s ease-out, stroke 0.3s ease-out' }}
        />
        <text
          x="22"
          y="24"
          textAnchor="middle"
          fill="rgba(255,255,255,0.3)"
          fontSize="8"
          fontFamily="var(--font-mono)"
        >
          {Math.round(scrollProgress * 100)}
        </text>
      </svg>
    </div>
  );
}
