import React, { useRef, useEffect } from 'react';
import { PRODUCT_VARIATIONS } from '../../data/products';
import { ProductGalleryHeader } from './ProductGalleryHeader';
import { ProductCard } from './ProductCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ProductGallery({ onSelectVariation }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.gallery-header',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      const cards = gsap.utils.toArray('.gallery-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cards[0],
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
      id="explore"
      ref={sectionRef}
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E6E4DC]"
    >
      {/* Modular Product Gallery Header Component */}
      <ProductGalleryHeader />

      {/* 3 Product Variation Card Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PRODUCT_VARIATIONS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectVariation={onSelectVariation}
          />
        ))}
      </div>
    </section>
  );
}

