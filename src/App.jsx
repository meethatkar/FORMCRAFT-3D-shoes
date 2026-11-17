import React, { Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SectionSkeleton } from './components/common/SectionSkeleton';

// Code-splitting & Lazy Loading for below-the-fold modules
const Configurator = lazy(() =>
  import('./components/Configurator/Configurator').then((module) => ({
    default: module.Configurator,
  }))
);

const MaterialSection = lazy(() =>
  import('./components/MaterialSection/MaterialSection').then((module) => ({
    default: module.MaterialSection,
  }))
);

const ProductGallery = lazy(() =>
  import('./components/ProductGallery/ProductGallery').then((module) => ({
    default: module.ProductGallery,
  }))
);

const FinalCTA = lazy(() =>
  import('./components/FinalCTA/FinalCTA').then((module) => ({
    default: module.FinalCTA,
  }))
);

const Footer = lazy(() =>
  import('./components/Footer/Footer').then((module) => ({
    default: module.Footer,
  }))
);

export default function App() {
  const handleSelectVariation = (product) => {
    const customizerEl = document.getElementById('customizer');
    if (customizerEl) {
      customizerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#171717] flex flex-col font-sans selection:bg-[#FF5A1F] selection:text-white">
      {/* Critical Path: Sticky Header & Editorial Hero render immediately (0ms blocking time) */}
      <Header />

      <main className="flex-1">
        {/* Instant Paint Hero Section */}
        <Hero />

        {/* Section 3: Interactive 3D Configurator (Lazy Loaded) */}
        <Suspense fallback={<SectionSkeleton height="h-[640px]" label="Initializing 3D Studio & WebGL..." />}>
          <Configurator />
        </Suspense>

        {/* Section 4: Material & Craftsmanship (Lazy Loaded) */}
        <Suspense fallback={<SectionSkeleton height="h-[480px]" label="Loading Materials Spec..." />}>
          <MaterialSection />
        </Suspense>

        {/* Section 5: Explore More Designs (Lazy Loaded) */}
        <Suspense fallback={<SectionSkeleton height="h-[480px]" label="Loading Product Variations..." />}>
          <ProductGallery onSelectVariation={handleSelectVariation} />
        </Suspense>

        {/* Section 6: Final Closing CTA (Lazy Loaded) */}
        <Suspense fallback={<SectionSkeleton height="h-[360px]" label="Loading..." />}>
          <FinalCTA />
        </Suspense>
      </main>

      {/* Footer (Lazy Loaded) */}
      <Suspense fallback={<div className="h-24 bg-[#ECEAE4]/60" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
