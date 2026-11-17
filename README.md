# FORMCRAFT 3D — Interactive 3D Product Customization Experience

A modern, single-page product website featuring an interactive 3D shoe configurator built with **React**, **Three.js**, **React Three Fiber**, **Drei**, **GSAP**, and **Tailwind CSS**.

---

## 🚀 Live Demo & Development

The development server is running locally:
- **Local URL**: [http://localhost:3000/](http://localhost:3000/)

To run the dev server at any time:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

---

## 🎨 Architectural Highlights

### 1. Interactive 3D Configurator (`src/components/Configurator/`)
- **Three.js Engine**: Uses `@react-three/fiber` and `@react-three/drei` with physically-based rendering (PBR), ACESFilmic tonemapping, and contact shadows.
- **Independent Material Channels**: Customizes 8 distinct material primitives on the shoe:
  - **Upper Body** (`mesh`)
  - **Sole Unit** (`sole`)
  - **Laces & Eyelets** (`laces`, `caps`)
  - **Heel Counter** (`patch`, `band`)
  - **Side Logo & Stripes** (`stripes`)
  - **Collar Lining** (`inner`)
- **Real-Time Color Synchronization**: State updates use Three.js `material.color.set()` directly via refs without expensive model re-initializations.
- **Interactive Mesh Picking**: Clicking any mesh part directly in the 3D viewport selects its corresponding customization tab in the UI.
- **Interactive Controls**: Smooth camera reset, turntable auto-rotation, view presets (Isometric, Profile, Heel, Top Down), randomizer, designer presets, and exportable build sheets with celebratory confetti.

### 2. Editorial Web Design & GSAP Animations
- **Section 1 — Sticky Header**: Smooth backdrop blur, brand mark, navigation links, and "Start Creating" CTA.
- **Section 2 — Hero Section**: Staggered typography reveals (`"DESIGNED BY YOU. DEFINED BY DETAIL."`), floating dynamic shader badges, metrics counter, and primary/secondary CTAs.
- **Section 3 — Interactive Configurator**: Full-featured dual-pane workspace with live specification HUD.
- **Section 4 — Material & Craftsmanship**: Editorial feature cards with PBR micro-property callouts (Roughness, Tensile Strength, CFM Breathability).
- **Section 5 — Explore More Designs**: 3 interactive variation platforms (*Urban Runner*, *Classic Street*, *Future Form*) with 1-click loading into the customizer.
- **Section 6 — Final Closing CTA & Footer**: Bold closing statement, studio status indicator, social links, and back-to-top navigation.
