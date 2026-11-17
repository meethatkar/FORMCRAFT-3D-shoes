import React from 'react';

export function HeroFloatingBadge({
  icon: Icon,
  indicatorColor,
  label,
  value,
  className = ''
}) {
  return (
    <div
      className={`floating-badge glass-panel px-3.5 py-2 rounded-xl shadow-soft flex items-center gap-2 ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 text-[#FF5A1F]" />}
      {indicatorColor && (
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: indicatorColor }}
        />
      )}
      <div className="flex flex-col">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
          {label}
        </span>
        <span className="text-xs font-bold text-[#171717]">{value}</span>
      </div>
    </div>
  );
}

