import React from 'react';

export function NavLinks({ links, className = '', onLinkClick }) {
  return (
    <nav className={`flex items-center gap-8 ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onLinkClick}
          className="text-xs font-semibold uppercase tracking-wider text-[#171717]/80 hover:text-[#FF5A1F] transition-colors relative group py-1"
        >
          {link.name}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF5A1F] transition-all duration-200 group-hover:w-full" />
        </a>
      ))}
    </nav>
  );
}

