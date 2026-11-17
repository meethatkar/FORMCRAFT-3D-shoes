import React from 'react';

export function HeroMetrics() {
  const metrics = [
    { value: '5+', label: 'Custom Zones', highlight: false },
    { value: '60 FPS', label: 'WebGL Engine', highlight: true },
    { value: '100%', label: 'PBR Calibrated', highlight: false },
  ];

  return (
    <div className="mt-12 pt-8 border-t border-[#E6E4DC] grid grid-cols-3 gap-4 max-w-lg">
      {metrics.map((item) => (
        <div key={item.label}>
          <div
            className={`text-2xl sm:text-3xl font-extrabold font-display ${
              item.highlight ? 'text-[#FF5A1F]' : 'text-[#171717]'
            }`}
          >
            {item.value}
          </div>
          <div className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider mt-0.5">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

