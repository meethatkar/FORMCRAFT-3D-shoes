import React from 'react';
import { RotateCw, Compass } from 'lucide-react';

export function CanvasControls({
  onReset,
  autoRotate,
  onToggleAutoRotate,
  onSetView,
  activeView
}) {
  const angleButtons = [
    { id: 'front', label: 'Isometric' },
    { id: 'side', label: 'Profile' },
    { id: 'heel', label: 'Heel' },
    { id: 'top', label: 'Top Down' },
  ];

  return (
    <>
      {/* Floating Canvas Top Left: Viewport Status */}
      <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2 pointer-events-none">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full border border-[#E4E2DC] text-[11px] font-mono uppercase tracking-wider text-[#171717] shadow-sm pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>Interactive 3D Viewport</span>
        </div>
      </div>

      {/* Floating Canvas Top Right: Camera Actions */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5">
        <button
          onClick={onReset}
          title="Reset Camera Position"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 hover:bg-white text-[#171717] text-xs font-medium rounded-full border border-[#E4E2DC] shadow-sm transition-all duration-200 hover:border-[#171717] cursor-pointer"
        >
          <RotateCw className="w-3.5 h-3.5 text-[#FF5A1F]" />
          <span className="hidden sm:inline">Reset Angle</span>
        </button>

        <button
          onClick={onToggleAutoRotate}
          title={autoRotate ? 'Pause Turntable' : 'Start Turntable Rotation'}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium shadow-sm transition-all duration-200 cursor-pointer ${
            autoRotate
              ? 'bg-[#FF5A1F] text-white border-[#FF5A1F]'
              : 'bg-white/90 hover:bg-white text-[#171717] border-[#E4E2DC]'
          }`}
        >
          <Compass className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
          <span className="hidden sm:inline">{autoRotate ? 'Rotating' : 'Auto Rotate'}</span>
        </button>
      </div>

      {/* Floating Bottom Left: Quick View Angles */}
      <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-1 p-1 bg-white/90 backdrop-blur-md rounded-full border border-[#E4E2DC] shadow-sm text-xs">
        <span className="px-2 text-[10px] font-mono uppercase text-[#71717A] tracking-wider">
          Angles:
        </span>
        {angleButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => onSetView(btn.id)}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
              activeView === btn.id
                ? 'bg-[#171717] text-white'
                : 'text-[#171717] hover:bg-[#F5F4F0]'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Floating Bottom Right: Drag & Rotate Hint */}
      <div className="absolute bottom-4 right-4 z-10 pointer-events-none text-right">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-[#E4E2DC]/80 text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
          <span>Drag to rotate • Pinch to zoom</span>
        </div>
      </div>
    </>
  );
}

