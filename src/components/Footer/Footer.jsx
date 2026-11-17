import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BrandColumn } from './BrandColumn';
import { FooterNavigation } from './FooterNavigation';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E6E4DC] bg-[#ECEAE4]/60 pt-16 pb-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#DFDDD6]">
          {/* Brand Info Column Component (5 cols) */}
          <div className="md:col-span-5">
            <BrandColumn />
          </div>

          {/* Navigation Links Component (7 cols) */}
          <div className="md:col-span-7">
            <FooterNavigation />
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#71717A]">
          <div>
            © {new Date().getFullYear()} FORMCRAFT 3D. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E4E2DC] hover:border-[#171717] text-[#171717] transition shadow-2xs group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF5A1F] transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

