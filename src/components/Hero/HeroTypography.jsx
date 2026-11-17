import React from 'react';
import { ChevronRight } from 'lucide-react';
import { HeroMetrics } from './HeroMetrics';

export function HeroTypography({ headlineRef, subtextRef, ctaRef }) {
  return (
    <div className="flex flex-col">
      {/* Eyebrow */}
      <div className="hero-eyebrow inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-[#E4E2DC] shadow-xs text-xs font-mono uppercase tracking-widest text-[#171717] w-fit mb-6">
        <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
        <span>Interactive 3D Product Customization</span>
      </div>

      {/* Large Editorial Headline */}
      <h1
        ref={headlineRef}
        className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-[#171717] tracking-tight font-display leading-[0.98] uppercase"
      >
        <span className="block hero-line">DESIGNED BY YOU.</span>
        <span className="block hero-line text-[#FF5A1F]">
          DEFINED BY DETAIL.
        </span>
      </h1>

      {/* Supporting Text */}
      <p
        ref={subtextRef}
        className="mt-6 text-base sm:text-lg text-[#52525B] max-w-xl font-normal leading-relaxed"
      >
        Step into a new dimension of product customization. Explore tactile materials, experiment with responsive colors, and create something uniquely yours in real-time WebGL.
      </p>

      {/* Action CTAs */}
      <div
        ref={ctaRef}
        className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href="#customizer"
          className="px-8 py-4 bg-[#FF5A1F] hover:bg-[#E04810] text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-glow flex items-center gap-3 group"
        >
          <span>Customize Your Pair</span>
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>

        <a
          href="#explore"
          className="px-8 py-4 bg-white hover:bg-[#FAF9F5] text-[#171717] rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-200 border border-[#E4E2DC] hover:border-[#171717] flex items-center gap-2 group shadow-xs"
        >
          <span>Explore Collection</span>
          <ChevronRight className="w-4 h-4 text-[#71717A] group-hover:text-[#171717] transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Metrics Strip Component */}
      <HeroMetrics />
    </div>
  );
}

