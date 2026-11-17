import React, { useRef, useEffect } from 'react';
import { CRAFTSMANSHIP_FEATURES } from '../../data/products';
import { MaterialHeader } from './MaterialHeader';
import { MaterialCard } from './MaterialCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function MaterialSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.craft-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.craft-header',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Feature blocks stagger
      const cards = gsap.utils.toArray('.craft-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="craftsmanship"
      ref={sectionRef}
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E6E4DC]"
    >
      {/* Modular Material Header Component */}
      <MaterialHeader />

      {/* 3 Editorial Feature Block Components */}
      <div className="flex flex-col gap-10 lg:gap-16">
        {CRAFTSMANSHIP_FEATURES.map((feature, idx) => (
          <MaterialCard
            key={feature.number}
            feature={feature}
            isReversed={idx % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

