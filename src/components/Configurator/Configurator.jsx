import React, { useState, useRef, useCallback } from 'react';
import { ConfiguratorHeader } from './ConfiguratorHeader';
import { ShoeCanvas } from './ShoeCanvas';
import { SpecificationBar } from './SpecificationBar';
import { ColorSelector } from './ColorSelector';
import { ConfiguratorControls } from './ConfiguratorControls';
import { COLOR_REGIONS, INITIAL_CUSTOMIZATION } from '../../data/colors';
import { Sliders } from 'lucide-react';

export function Configurator() {
  const [customization, setCustomization] = useState(INITIAL_CUSTOMIZATION);
  const [activeRegionId, setActiveRegionId] = useState('mesh');
  const [autoRotate, setAutoRotate] = useState(false);
  const [activePresetId, setActivePresetId] = useState('craft-orange');
  const canvasRef = useRef();

  const handleUpdateColor = useCallback((regionId, hex) => {
    setCustomization((prev) => {
      const next = { ...prev, [regionId]: hex };
      if (regionId === 'laces' && !prev._customCaps) {
        next.caps = hex;
      }
      return next;
    });
    setActivePresetId('custom');
  }, []);

  const handleReset = useCallback(() => {
    setCustomization(INITIAL_CUSTOMIZATION);
    setActivePresetId('craft-orange');
    if (canvasRef.current?.resetCamera) {
      canvasRef.current.resetCamera();
    }
  }, []);

  const handleRandomize = useCallback(() => {
    const randomColors = {};
    COLOR_REGIONS.forEach((region) => {
      const randomIndex = Math.floor(Math.random() * region.colors.length);
      randomColors[region.id] = region.colors[randomIndex].hex;
    });
    randomColors.caps = randomColors.laces;
    randomColors.inner = randomColors.heel;
    setCustomization(randomColors);
    setActivePresetId('custom');
  }, []);

  const handleApplyPreset = useCallback((preset) => {
    setCustomization(preset.colors);
    setActivePresetId(preset.id);
  }, []);

  const handleSelectRegion = useCallback((regionId) => {
    setActiveRegionId(regionId);
  }, []);

  const handleToggleAutoRotate = useCallback(() => {
    setAutoRotate((prev) => !prev);
  }, []);

  return (
    <section
      id="customizer"
      className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Modular Section Header Component */}
      <ConfiguratorHeader />

      {/* Main Dual-Pane Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Interactive 3D Canvas */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4 w-full">
          <ShoeCanvas
            ref={canvasRef}
            customization={customization}
            activeRegion={activeRegionId}
            onSelectRegion={handleSelectRegion}
            autoRotate={autoRotate}
            onToggleAutoRotate={handleToggleAutoRotate}
          />

          {/* Memoized Specification Bar */}
          <SpecificationBar customization={customization} />
        </div>

        {/* Right Column: HTML Customization Panel */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 w-full">
          <div className="p-4 sm:p-6 bg-[#FAF9F5] rounded-3xl border border-[#E6E4DC] shadow-soft flex flex-col gap-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E6E4DC]">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#FF5A1F]" />
                <h3 className="text-base font-bold text-[#171717] font-display uppercase tracking-wider">
                  Material Director
                </h3>
              </div>
              <span className="text-[11px] font-mono uppercase text-[#71717A] bg-white px-2 py-0.5 rounded-md border border-[#E6E4DC]">
                Real-Time
              </span>
            </div>

            {/* Memoized Color Swatch & Category Selector Component */}
            <ColorSelector
              activeRegionId={activeRegionId}
              onSelectRegion={handleSelectRegion}
              customization={customization}
              onUpdateColor={handleUpdateColor}
            />

            {/* Memoized Controls, Presets & Checkout Component */}
            <ConfiguratorControls
              customization={customization}
              onReset={handleReset}
              onRandomize={handleRandomize}
              onApplyPreset={handleApplyPreset}
              activePresetId={activePresetId}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
