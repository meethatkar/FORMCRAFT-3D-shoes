import React from 'react';

export function FooterNavigation() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
      <div>
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717A] font-semibold block mb-4">
          Experience
        </span>
        <ul className="flex flex-col gap-2.5 text-xs font-medium text-[#171717]">
          <li><a href="#hero" className="hover:text-[#FF5A1F] transition">Editorial Hero</a></li>
          <li><a href="#customizer" className="hover:text-[#FF5A1F] transition">3D Configurator</a></li>
          <li><a href="#craftsmanship" className="hover:text-[#FF5A1F] transition">PBR Materials</a></li>
          <li><a href="#explore" className="hover:text-[#FF5A1F] transition">Design Archive</a></li>
        </ul>
      </div>

      <div>
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717A] font-semibold block mb-4">
          Tech Stack
        </span>
        <ul className="flex flex-col gap-2.5 text-xs font-mono text-[#52525B]">
          <li>React 18 + Vite</li>
          <li>Three.js / WebGL</li>
          <li>React Three Fiber</li>
          <li>GSAP / ScrollTrigger</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>

      <div className="col-span-2 sm:col-span-1">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717A] font-semibold block mb-4">
          Studio Status
        </span>
        <div className="p-3 bg-white rounded-xl border border-[#DFDDD6] text-xs">
          <div className="flex items-center gap-2 text-[#10B981] font-semibold mb-1">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>Configurator Live</span>
          </div>
          <p className="text-[11px] text-[#71717A] font-mono">
            All shaders & materials compiled. Ready for customization.
          </p>
        </div>
      </div>
    </div>
  );
}

