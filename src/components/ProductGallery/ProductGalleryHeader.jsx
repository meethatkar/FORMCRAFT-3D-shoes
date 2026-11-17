import React from 'react';

export function ProductGalleryHeader() {
  return (
    <div className="gallery-header mb-12 lg:mb-16">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F]" />
        <span className="text-xs font-mono uppercase tracking-widest text-[#71717A] font-semibold">
          Section 05 // Explore More Designs
        </span>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight font-display uppercase leading-tight">
            MORE THAN ONE <br />
            <span className="text-[#FF5A1F]">POSSIBILITY.</span>
          </h2>
        </div>
        <p className="text-[#52525B] text-sm sm:text-base max-w-md font-normal leading-relaxed">
          Three foundational silhouettes. Infinite chromatic directions. Choose a platform to load into the real-time customizer.
        </p>
      </div>
    </div>
  );
}

