import React from 'react';
import { PRESET_THEMES } from '../../data/colors';

export function PresetThemes({ activePresetId, onApplyPreset }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717A]">
          03 / Designer Presets
        </span>
        <span className="text-[11px] font-mono text-[#71717A]">
          Quick Inspiration
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {PRESET_THEMES.map((preset) => {
          const isSelected = activePresetId === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => onApplyPreset(preset)}
              className={`p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'border-[#FF5A1F] bg-[#FFF8F5] shadow-xs'
                  : 'border-[#E6E4DC] bg-white hover:border-[#171717] hover:bg-[#FAF9F5]'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full border border-black/15 shrink-0"
                  style={{ backgroundColor: preset.colors.mesh }}
                />
                <span
                  className="w-2.5 h-2.5 rounded-full border border-black/15 shrink-0"
                  style={{ backgroundColor: preset.colors.heel }}
                />
                <span
                  className="w-2.5 h-2.5 rounded-full border border-black/15 shrink-0"
                  style={{ backgroundColor: preset.colors.sole }}
                />
              </div>
              <div className="text-xs font-bold text-[#171717] truncate">
                {preset.name.split(' (')[0]}
              </div>
              <span className="text-[10px] text-[#71717A] uppercase font-mono">
                {preset.tag}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

