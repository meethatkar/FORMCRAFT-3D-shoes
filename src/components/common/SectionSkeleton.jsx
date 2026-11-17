import React from 'react';

export function SectionSkeleton({ height = 'h-[500px]', label = 'Loading Experience...' }) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 my-12 ${height} flex items-center justify-center`}>
      <div className="w-full h-full rounded-3xl bg-[#FAF9F5]/70 border border-[#E6E4DC] animate-pulse flex flex-col items-center justify-center p-8">
        <div className="w-10 h-10 border-2 border-[#FF5A1F] border-t-transparent rounded-full animate-spin mb-4" />
        <span className="text-xs uppercase font-mono tracking-widest text-[#71717A] font-medium">
          {label}
        </span>
      </div>
    </div>
  );
}

