import React from 'react';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export function OrderSummaryCard() {
  const handleOrder = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FF5A1F', '#FFFFFF', '#10B981']
    });
    alert('Customized pair specifications locked in! Your custom FORMCRAFT 3D build sheet is ready.');
  };

  return (
    <div className="p-4 rounded-2xl bg-[#171717] text-white shadow-float mt-1">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            Total Customized Price
          </span>
          <div className="text-2xl font-extrabold font-display text-white">
            $245.00
          </div>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FF5A1F]/20 text-[#FF5A1F] text-[10px] font-mono uppercase tracking-wider font-semibold">
            <Sparkles className="w-3 h-3" />
            1 of 1 Edition
          </span>
        </div>
      </div>

      <button
        onClick={handleOrder}
        className="w-full py-3 px-4 bg-[#FF5A1F] hover:bg-[#E04810] text-white font-bold text-sm rounded-xl transition duration-200 shadow-glow flex items-center justify-center gap-2 group cursor-pointer"
      >
        <span>Lock In & Order Custom Pair</span>
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
      <p className="text-[10px] text-zinc-400 text-center mt-2 font-mono">
        Handcrafted on demand in 5-7 business days • Global complimentary shipping
      </p>
    </div>
  );
}

