import React, { memo } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ProductCard = memo(function ProductCard({ product, onSelectVariation }) {
  return (
    <div className="gallery-card group flex flex-col justify-between p-6 rounded-3xl bg-white border border-[#E6E4DC] hover:border-[#171717] transition-all duration-300 shadow-soft hover:shadow-float">
      <div>
        {/* Image Preview Box */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FAF9F5] p-6 flex items-center justify-center border border-[#ECEAE4] mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-108"
            loading="lazy"
            decoding="async"
          />

          {/* Edition & Price Pill */}
          <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-[11px] font-mono uppercase font-bold text-[#171717]">
            {product.edition}
          </div>
          <div className="absolute top-4 right-4 bg-[#171717] text-white px-3 py-1 rounded-full text-xs font-mono font-bold">
            {product.price}
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xl font-bold font-display text-[#171717] group-hover:text-[#FF5A1F] transition-colors">
            {product.name}
          </h3>
          <span className="text-xs font-mono text-[#71717A]">
            {product.weight}
          </span>
        </div>
        <span className="block text-xs font-mono uppercase tracking-wider text-[#FF5A1F] font-semibold mb-3">
          {product.subtitle}
        </span>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Key Specs tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {product.specs.map((spec) => (
            <span
              key={spec}
              className="px-2.5 py-1 bg-[#F5F4F0] text-[#71717A] text-[10px] font-mono rounded-lg border border-[#E8E6DF]"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Explore Button */}
      <a
        href="#customizer"
        onClick={() => onSelectVariation && onSelectVariation(product)}
        className="w-full py-3 px-4 bg-[#F5F4F0] group-hover:bg-[#FF5A1F] text-[#171717] group-hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-between border border-[#E6E4DC] group-hover:border-[#FF5A1F] cursor-pointer"
      >
        <span>Load in Customizer</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
});
