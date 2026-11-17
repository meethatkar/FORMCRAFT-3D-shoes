import React, { memo } from 'react';
import { COLOR_REGIONS } from '../../data/colors';

export const RegionTabs = memo(function RegionTabs({
  activeRegionId,
  onSelectRegion,
  customization,
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717A]">
          01 / Select Component
        </span>
        <span className="text-[11px] font-mono text-[#FF5A1F] uppercase tracking-wider">
          {COLOR_REGIONS.length} Modifiable Zones
        </span>
      </div>

      <div className="flex items-center gap-1.5 p-1 bg-[#ECEAE4] rounded-2xl overflow-x-auto no-scrollbar border border-[#DFDDD6]">
        {COLOR_REGIONS.map((region) => {
          const isActive = region.id === activeRegionId;
          const regionColor = customization[region.id] || '#FFFFFF';
          return (
            <button
              key={region.id}
              onClick={() => onSelectRegion(region.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-white text-[#171717] shadow-sm border border-[#DCDAD2]'
                  : 'text-[#71717A] hover:text-[#171717] hover:bg-white/50'
              }`}
            >
              {/* Micro Color indicator dot */}
              <span
                className="w-3 h-3 rounded-full border border-black/15 shadow-2xs shrink-0 transition-colors duration-200"
                style={{ backgroundColor: regionColor }}
              />
              <span>{region.shortName}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
});
