import React from 'react';
import { Github, Twitter, Instagram, Globe } from 'lucide-react';

export function BrandColumn() {
  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: Globe, label: 'Website', href: '#' },
  ];

  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-8 h-8 rounded-xl bg-[#171717] flex items-center justify-center text-white font-black font-display text-sm">
            F
          </div>
          <span className="text-xl font-extrabold tracking-tight font-display text-[#171717]">
            FORMCRAFT <span className="text-[#FF5A1F]">3D</span>
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#71717A] max-w-sm leading-relaxed">
          A modern interactive product customization laboratory. Built with React, Three.js, React Three Fiber, and GSAP to push the boundaries of real-time 3D web craft.
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3">
        {socials.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white border border-[#E4E2DC] flex items-center justify-center text-[#171717] hover:text-[#FF5A1F] hover:border-[#FF5A1F] transition shadow-2xs"
              aria-label={item.label}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

