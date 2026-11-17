import React from 'react';
import { COLOR_REGIONS } from '../../data/colors';
import { RegionTabs } from './RegionTabs';
import { ColorSwatches } from './ColorSwatches';

export function ColorSelector({
  activeRegionId,
  onSelectRegion,
  customization,
  onUpdateColor
}) {
  const currentRegion =
    COLOR_REGIONS.find((r) => r.id === activeRegionId) || COLOR_REGIONS[0];
  const currentColor = customization[currentRegion.id] || '#FFFFFF';
  const selectedColorObj = currentRegion.colors.find(
    (c) => c.hex.toLowerCase() === currentColor.toLowerCase()
  );

  return (
    <div className="flex flex-col gap-5">
      {/* Component Tabs */}
      <RegionTabs
        activeRegionId={activeRegionId}
        onSelectRegion={onSelectRegion}
        customization={customization}
      />

      {/* Region Card with Active Color Swatches */}
      <div className="p-4 rounded-2xl bg-white border border-[#E6E4DC] shadow-xs">
        <div className="flex items-start justify-between gap-3 mb-1">
          <div>
            <h4 className="text-base font-bold text-[#171717] font-display">
              {currentRegion.name}
            </h4>
            <p className="text-xs text-[#71717A] mt-0.5">
              {currentRegion.description}
            </p>
          </div>
          <div className="flex flex-col items-end shrink-0">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#71717A]">
              Selected Hue
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span
                className="w-2.5 h-2.5 rounded-full border border-black/20"
                style={{ backgroundColor: currentColor }}
              />
              <span className="text-xs font-bold text-[#171717]">
                {selectedColorObj ? selectedColorObj.name : 'Custom'}
              </span>
            </div>
          </div>
        </div>

        {/* Color Swatches Grid Component */}
        <ColorSwatches
          currentRegion={currentRegion}
          currentColor={currentColor}
          onUpdateColor={onUpdateColor}
        />
      </div>
    </div>
  );
}
