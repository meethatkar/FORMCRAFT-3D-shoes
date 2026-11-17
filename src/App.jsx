import React, { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Configurator } from './components/Configurator/Configurator';
import { MaterialSection } from './components/MaterialSection';
import { ProductGallery } from './components/ProductGallery';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const configuratorRef = useRef(null);

  const handleSelectVariation = (product) => {
    // If the product has presetColors, we can scroll and let the user interact
    const customizerEl = document.getElementById('customizer');
    if (customizerEl) {
      customizerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#171717] flex flex-col font-sans selection:bg-[#FF5A1F] selection:text-white">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Section 2: Editorial Hero */}
        <Hero />

        {/* Section 3: Interactive 3D Configurator (MAIN FEATURE) */}
        <Configurator onRef={configuratorRef} />

        {/* Section 4: Material & Craftsmanship */}
        <MaterialSection />

        {/* Section 5: Explore More Designs */}
        <ProductGallery onSelectVariation={handleSelectVariation} />

        {/* Section 6: Final Closing CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

