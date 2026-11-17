import React, { memo } from 'react';
import { Check } from 'lucide-react';

export const ColorSwatches = memo(function ColorSwatches({
  currentRegion,
  currentColor,
  onUpdateColor,
}) {
  return (
    <div className="mt-4 pt-3 border-t border-[#F0EFE9]">
      <span className="block text-[11px] font-mono uppercase tracking-widest text-[#71717A] mb-3">
        02 / Choose Material Color
      </span>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {currentRegion.colors.map((color) => {
          const isSelected = currentColor.toLowerCase() === color.hex.toLowerCase();
          const isLight =
            color.hex.toLowerCase() === '#ffffff' ||
            color.hex.toLowerCase() === '#f5ebe1' ||
            color.hex.toLowerCase() === '#f8fafc';

          return (
            <button
              key={color.hex + color.name}
              onClick={() => onUpdateColor(currentRegion.id, color.hex)}
              className={`group relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 border cursor-pointer ${
                isSelected
                  ? 'border-[#FF5A1F] bg-[#FFF8F5] ring-2 ring-[#FF5A1F]/30 scale-[1.02]'
                  : 'border-[#E6E4DC] bg-[#FAF9F5] hover:border-[#171717] hover:bg-white'
              }`}
            >
              <div
                className="relative w-8 h-8 rounded-full mb-1.5 shadow-xs transition-transform duration-200 group-hover:scale-105 flex items-center justify-center border border-black/10"
                style={{ backgroundColor: color.hex }}
              >
                {isSelected && (
                  <Check
                    className={`w-4 h-4 stroke-[3] ${
                      isLight ? 'text-[#171717]' : 'text-white'
                    }`}
                  />
                )}
              </div>
              <span className="text-[11px] font-medium text-[#171717] text-center leading-tight">
                {color.name}
              </span>
              <span className="text-[9px] font-mono text-[#71717A] uppercase mt-0.5">
                {color.hex}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
});
