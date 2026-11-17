import React, { useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { HeroTypography } from './HeroTypography';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
      )
        .fromTo(
          '.hero-line',
          { opacity: 0, y: 45, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.15 },
          '-=0.3'
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.92, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'expo.out' },
          '-=0.8'
        )
        .fromTo(
          '.floating-badge',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15 },
          '-=0.6'
        );

      // Subtle float animation for badges
      gsap.to('.floating-badge-1', {
        y: '-=10',
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to('.floating-badge-2', {
        y: '+=8',
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[90vh] pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto flex flex-col justify-between"
    >
      {/* Background Decorative Graphic Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-tr from-[#FF5A1F]/10 via-[#FF5A1F]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Top Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography, Subtext, CTAs, Metrics (7 cols) */}
        <div className="lg:col-span-7">
          <HeroTypography
            headlineRef={headlineRef}
            subtextRef={subtextRef}
            ctaRef={ctaRef}
          />
        </div>

        {/* Right Column: Hero Visual & Floating Interactive Badges (5 cols) */}
        <div className="lg:col-span-5">
          <HeroVisual visualRef={visualRef} />
        </div>
      </div>

      {/* Hero Bottom Scroll-Down Prompt */}
      <div className="mt-12 flex items-center justify-center">
        <a
          href="#customizer"
          className="flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#71717A] hover:text-[#171717] transition-colors"
        >
          <span>Scroll to Customizer</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#FF5A1F] animate-bounce" />
        </a>
      </div>
    </section>
  );
}

