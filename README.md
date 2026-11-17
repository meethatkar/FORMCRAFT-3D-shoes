# FORMCRAFT 3D — Interactive 3D Product Customization Experience

A modern single-page product website featuring an interactive 3D shoe configurator built with **React**, **Three.js**, **React Three Fiber**, **Drei**, **GSAP**, and **Tailwind CSS**.

---

## ⚡ Production Optimization Architecture

### 1. Code-Splitting & Lazy Loading
- **Route / Section-level Lazy Loading**:
  - `Configurator`, `MaterialSection`, `ProductGallery`, `FinalCTA`, and `Footer` are dynamically loaded via `React.lazy()` with `<Suspense>` boundaries.
  - Initial load only ships the critical path (`Header` + `Hero` typography + hero visual), reducing the initial JS bundle from over 1.3 MB down to just **13.5 kB**!
  - Integrated `SectionSkeleton` components maintain zero Cumulative Layout Shift (**CLS = 0**) while lazy chunks stream.
- **Image & Asset Optimization**:
  - Hero image: configured with `fetchpriority="high"` and `decoding="async"` for instantaneous Largest Contentful Paint (**LCP**).
  - Editorial gallery & material cards: configured with `loading="lazy"` and `decoding="async"`.

### 2. Model & Asset Optimization (GLTF / Draco Loader)
- **GLTF + DRACO Geometry Compression**:
  - The 3D model `shoe.glb` is compressed with Draco mesh compression, reducing file size to only **248 KB** (over 85% smaller than uncompressed OBJ/GLTF).
  - Hosted local WASM Draco decoders in `public/draco/` avoiding third-party CDN latency or network failures.
- **Resource Prefetching & Non-Blocking Preload**:
  - Prefetched via `<link rel="prefetch" href="/shoe.glb">` and `<link rel="prefetch" href="/draco/draco_decoder.wasm">` in `index.html`.
  - Configured `window.requestIdleCallback()` for `useGLTF.preload('/shoe.glb')`, preventing 3D asset parsing from blocking the main thread during initial paint.

### 3. WebGL & Three.js Performance Optimizations
- **Demand-Driven Rendering (`frameloop="demand"`)**:
  - When idle, the R3F WebGL renderer switches to `"demand"` mode instead of re-rendering 60 full frames/sec, eliminating GPU drain and preserving laptop/mobile battery life.
  - Automatically switches to `"always"` during turntable rotation and invalidates on user drag (`OrbitControls`) or material color updates via `FrameInvalidator`.
- **DPR Clamping**:
  - Clamped `dpr={[1, Math.min(window.devicePixelRatio, 2)]}`, preventing 3x/4x mobile screens from stalling fragment shaders.
- **Adaptive Camera & Centering**:
  - Drei `<Center top={false}>` dynamically computes the geometry bounding box and centers the pivot at `[0, 0, 0]`.
  - `AdaptiveCamera` hook dynamically updates camera distance and FOV based on canvas aspect ratio to guarantee zero clipping across mobile, tablet, and desktop viewports.
- **Shader & Context Optimization**:
  - Disabled unused WebGL stencil buffer (`stencil: false`).
  - Enabled `powerPreference: "high-performance"`.

### 4. React Memoization & Render Isolation
- **`React.memo`**: Applied to `ShoeModel`, `ColorSelector`, `RegionTabs`, `ColorSwatches`, `SpecificationBar`, `ConfiguratorControls`, `PresetThemes`, `OrderSummaryCard`, `MaterialCard`, and `ProductCard`.
- **`useCallback`**: Applied to all configurator event handlers (`handleUpdateColor`, `handleReset`, `handleRandomize`, `handleApplyPreset`, `handleSelectRegion`) preventing unwanted re-render cascades.
- **`useMemo`**: Applied to computed active palette arrays and specification HUD objects.

### 5. Rollup / Vite Production Bundle Splitting
- Configured `manualChunks` in `vite.config.js`:
  - `vendor-three`: `['three', '@react-three/fiber', '@react-three/drei']`
  - `vendor-gsap`: `['gsap', '@gsap/react']`
  - `vendor-react`: `['react', 'react-dom']`
  - `vendor-utils`: `['lucide-react', 'canvas-confetti', 'clsx', 'tailwind-merge']`
- Enables efficient long-term browser caching for heavy Three.js dependencies.

---

## 🚀 Running the Project

```bash
# Start local development server
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```
