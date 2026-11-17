import React, { memo, useState, useCallback } from 'react';
import { Shuffle, RotateCcw, Share2, CheckCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PresetThemes } from './PresetThemes';
import { OrderSummaryCard } from './OrderSummaryCard';

export const ConfiguratorControls = memo(function ConfiguratorControls({
  customization,
  onReset,
  onRandomize,
  onApplyPreset,
  activePresetId,
}) {
  const [copied, setCopied] = useState(false);

  const handleShare = useCallback(() => {
    const configString = JSON.stringify(customization, null, 2);
    navigator.clipboard?.writeText(configString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);

    // Fire festive confetti
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#FF5A1F', '#171717', '#F5F4F0', '#10B981'],
    });
  }, [customization]);

  return (
    <div className="flex flex-col gap-5">
      {/* Memoized Designer Presets Component */}
      <PresetThemes
        activePresetId={activePresetId}
        onApplyPreset={onApplyPreset}
      />

      {/* Global Actions: Randomize, Reset, Export */}
      <div className="pt-2 border-t border-[#E6E4DC] flex flex-wrap items-center gap-2">
        <button
          onClick={onRandomize}
          className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-3.5 py-2.5 bg-white hover:bg-[#FAF9F5] text-[#171717] rounded-xl border border-[#E4E2DC] hover:border-[#171717] text-xs font-bold transition shadow-xs cursor-pointer"
        >
          <Shuffle className="w-3.5 h-3.5 text-[#FF5A1F]" />
          <span>Randomize</span>
        </button>

        <button
          onClick={onReset}
          className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-3.5 py-2.5 bg-white hover:bg-[#FAF9F5] text-[#171717] rounded-xl border border-[#E4E2DC] hover:border-[#171717] text-xs font-bold transition shadow-xs cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#71717A]" />
          <span>Reset Spec</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-white hover:bg-[#FAF9F5] text-[#171717] rounded-xl border border-[#E4E2DC] hover:border-[#171717] text-xs font-bold transition shadow-xs shrink-0 cursor-pointer"
          title="Copy Design JSON Spec to Clipboard"
        >
          {copied ? (
            <>
              <CheckCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span className="text-[#10B981]">Saved!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-[#71717A]" />
              <span>Export</span>
            </>
          )}
        </button>
      </div>

      {/* Checkout / Summary Box Component */}
      <OrderSummaryCard />
    </div>
  );
});
