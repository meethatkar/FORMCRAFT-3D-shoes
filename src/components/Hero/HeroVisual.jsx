import React, { memo } from 'react';
import { Sparkles } from 'lucide-react';
import { HeroFloatingBadge } from './HeroFloatingBadge';

export const HeroVisual = memo(function HeroVisual({ visualRef }) {
  return (
    <div className="relative flex items-center justify-center w-full">
      <div
        ref={visualRef}
        className="relative w-full aspect-square max-w-[360px] sm:max-w-[440px] lg:max-w-[480px] rounded-3xl bg-gradient-to-b from-white via-[#F5F3ED] to-[#E9E6DE] p-4 sm:p-6 border border-[#E6E4DC] shadow-medium flex items-center justify-center overflow-hidden group"
      >
        {/* Ambient Background Circle */}
        <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#FF5A1F]/10 blur-2xl pointer-events-none" />

        {/* Product Visual with High Priority */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-4">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"
            alt="FORMCRAFT 3D Signature Shoe"
            fetchpriority="high"
            decoding="async"
            className="w-full h-auto max-h-[85%] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-3"
          />
        </div>

        {/* Floating Editorial Badge 1 (Top Left) */}
        <HeroFloatingBadge
          indicatorColor="#10B981"
          label="Dynamic Shader"
          value="PBR Metal/Roughness"
          className="floating-badge-1 absolute top-4 left-4 sm:top-6 sm:left-6 z-20"
        />

        {/* Floating Editorial Badge 2 (Bottom Right) */}
        <HeroFloatingBadge
          icon={Sparkles}
          label="Direct Feedback"
          value="Instant Color Update"
          className="floating-badge-2 absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20"
        />
      </div>
    </div>
  );
});
