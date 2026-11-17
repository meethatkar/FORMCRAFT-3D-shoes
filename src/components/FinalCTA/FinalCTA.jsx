import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FinalCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.final-cta-content',
        { opacity: 0, scale: 0.96, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.final-cta-content',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="final-cta-content relative rounded-3xl bg-[#171717] text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-float">
        {/* Decorative Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5A1F]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-widest text-[#FF5A1F] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 06 // The Finale</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display uppercase tracking-tight leading-[1.02]">
            YOUR DESIGN. <br />
            <span className="text-[#FF5A1F]">YOUR RULES.</span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-6 text-zinc-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            Bring your imagination to life, one detail at a time. The customizer is ready for your next iconic footwear configuration.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#customizer"
              className="px-8 py-4 bg-[#FF5A1F] hover:bg-[#E04810] text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-glow flex items-center gap-3 group cursor-pointer"
            >
              <span>Start Customizing</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#hero"
              className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition cursor-pointer"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

