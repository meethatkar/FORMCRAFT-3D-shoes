import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP entrance animation for Header
  useEffect(() => {
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.1 }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Customizer', href: '#customizer' },
    { name: 'Craftsmanship', href: '#craftsmanship' },
    { name: 'Explore', href: '#explore' },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-white/85 backdrop-blur-md border-b border-[#E6E4DC] shadow-soft'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-[#171717] group-hover:bg-[#FF5A1F] transition-colors duration-200 flex items-center justify-center text-white font-black font-display text-sm shadow-xs">
            F
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-tight font-display text-[#171717]">
              FORMCRAFT <span className="text-[#FF5A1F]">3D</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest uppercase text-[#71717A] -mt-1 hidden sm:block">
              Product Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links Component */}
        <NavLinks links={navLinks} className="hidden md:flex" />

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#customizer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#171717] hover:bg-[#FF5A1F] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-glow group"
          >
            <span>Start Creating</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#171717] hover:text-[#FF5A1F] transition"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu Component */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        links={navLinks}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

