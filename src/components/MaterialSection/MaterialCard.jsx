import React, { memo } from 'react';

export const MaterialCard = memo(function MaterialCard({ feature, isReversed }) {
  return (
    <div
      className={`craft-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-white border border-[#E6E4DC] shadow-soft ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image Column */}
      <div
        className={`lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F5F4F0] border border-[#E6E4DC] group ${
          isReversed ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

        {/* Floating Spec Badge */}
        <div className="absolute bottom-4 left-4 glass-panel px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-[#171717]">
          {feature.highlight}
        </div>
      </div>

      {/* Text / Specs Column */}
      <div
        className={`lg:col-span-6 flex flex-col justify-center ${
          isReversed ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <div className="text-4xl sm:text-5xl font-black font-display text-[#FF5A1F]/30 mb-2">
          {feature.number}
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] font-display uppercase tracking-tight">
          {feature.title}
        </h3>
        <span className="text-xs font-mono uppercase tracking-wider text-[#FF5A1F] font-semibold mt-1">
          {feature.subtitle}
        </span>

        <p className="text-[#52525B] text-sm sm:text-base mt-4 leading-relaxed">
          {feature.description}
        </p>

        {/* Spec Highlights Grid */}
        <div className="mt-8 pt-6 border-t border-[#F0EFE9] grid grid-cols-1 sm:grid-cols-3 gap-4">
          {feature.details.map((detail) => (
            <div key={detail.label} className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
                {detail.label}
              </span>
              <span className="text-xs font-bold text-[#171717] mt-1 font-mono">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
