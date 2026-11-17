import React from 'react';

export function MobileMenu({ isOpen, links, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#E6E4DC] px-6 py-6 flex flex-col gap-4 shadow-float animate-in fade-in slide-in-from-top-4 duration-200">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClose}
          className="text-sm font-bold uppercase tracking-wider text-[#171717] py-2 border-b border-[#F0EFEA] hover:text-[#FF5A1F] transition"
        >
          {link.name}
        </a>
      ))}
      <a
        href="#customizer"
        onClick={onClose}
        className="mt-2 w-full py-3 bg-[#FF5A1F] text-white text-center rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm"
      >
        Start Creating
      </a>
    </div>
  );
}

