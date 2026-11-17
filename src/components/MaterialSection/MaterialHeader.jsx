import React from 'react';

export function MaterialHeader() {
  return (
    <div className="craft-header mb-14 lg:mb-18">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F]" />
        <span className="text-xs font-mono uppercase tracking-widest text-[#71717A] font-semibold">
          Section 04 // Material & Craftsmanship
        </span>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight font-display uppercase leading-tight">
            EVERY DETAIL <br />
            <span className="text-[#FF5A1F]">MATTERS.</span>
          </h2>
        </div>
        <p className="text-[#52525B] text-sm sm:text-base max-w-md font-normal leading-relaxed">
          From the microscopic grain of PBR leather shaders to the density of our dual-foam midsoles, tactile reality meets virtual precision.
        </p>
      </div>
    </div>
  );
}

