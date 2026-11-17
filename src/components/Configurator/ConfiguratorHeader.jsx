import React from 'react';
import { Cpu } from 'lucide-react';

export function ConfiguratorHeader() {
  return (
    <div className="mb-8 lg:mb-12">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F]" />
        <span className="text-xs font-mono uppercase tracking-widest text-[#71717A] font-semibold">
          Section 03 // Interactive 3D Configurator
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight font-display uppercase">
            STUDIO CUSTOMIZER
          </h2>
          <p className="text-[#71717A] text-sm sm:text-base max-w-xl mt-2">
            Every curve, overlay, and lace is yours to direct. Rotate in 360°, inspect PBR textures, and witness real-time WebGL material computation.
          </p>
        </div>

        {/* Live Engine Status Badge */}
        <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-[#E4E2DC] shadow-xs text-xs font-mono shrink-0">
          <div className="flex items-center gap-1.5 text-[#10B981]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span>Three.js PBR Engine</span>
          </div>
          <span className="text-zinc-300">|</span>
          <div className="text-[#171717] font-semibold flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span>60 FPS Live Sync</span>
          </div>
        </div>
      </div>
    </div>
  );
}

