import React from 'react';

export function SpecificationBar({ customization }) {
  const parts = [
    { label: 'Upper', color: customization.mesh },
    { label: 'Sole', color: customization.sole },
    { label: 'Laces', color: customization.laces },
    { label: 'Heel', color: customization.heel },
    { label: 'Logo', color: customization.stripes },
  ];

  return (
    <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-[#E6E4DC] shadow-xs flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A]">
          Active Build:
        </span>
        <span className="text-xs font-bold font-mono text-[#171717]">
          FORMCRAFT-01 / SPEC-X
        </span>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar text-xs">
        {parts.map((part) => (
          <div key={part.label} className="flex items-center gap-1.5 shrink-0">
            <span className="text-[#71717A] text-[11px]">{part.label}:</span>
            <span
              className="w-2.5 h-2.5 rounded-full border border-black/20"
              style={{ backgroundColor: part.color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

