import React, { useRef, Suspense, forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, Html } from '@react-three/drei';
import { ShoeModel } from './ShoeModel';
import { CanvasControls } from './CanvasControls';
import * as THREE from 'three';

function CanvasLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-float border border-[#E4E2DC]">
        <div className="w-10 h-10 border-3 border-[#FF5A1F] border-t-transparent rounded-full animate-spin mb-3" />
        <span className="text-xs uppercase font-mono tracking-widest text-[#171717] font-semibold">
          Loading 3D Canvas
        </span>
        <span className="text-[11px] text-[#71717A] mt-0.5">Calibrating PBR Shaders...</span>
      </div>
    </Html>
  );
}

// Dynamically adjusts camera distance and FOV based on canvas width & aspect ratio
function AdaptiveCamera() {
  const { size, camera } = useThree();

  useEffect(() => {
    const aspect = size.width / Math.max(size.height, 1);
    if (aspect < 0.85) {
      // Very narrow portrait mobile
      camera.position.set(0, 0.25, 3.8);
      camera.fov = 48;
    } else if (aspect < 1.2) {
      // Tablet / square viewport
      camera.position.set(0, 0.3, 3.3);
      camera.fov = 44;
    } else {
      // Standard desktop / wide viewport
      camera.position.set(0, 0.32, 2.7);
      camera.fov = 40;
    }
    camera.updateProjectionMatrix();
  }, [size.width, size.height, camera]);

  return null;
}

export const ShoeCanvas = forwardRef(function ShoeCanvas(
  {
    customization,
    activeRegion,
    onSelectRegion,
    autoRotate,
    onToggleAutoRotate,
  },
  ref
) {
  const controlsRef = useRef();
  const [activeView, setActiveView] = useState('front');

  // Expose camera methods to parent
  useImperativeHandle(ref, () => ({
    resetCamera: () => {
      handleReset();
    },
    setCameraView: (view) => {
      handleSetView(view);
    }
  }));

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
      controlsRef.current.object.position.set(0, 0.32, 2.7);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
      setActiveView('front');
    }
  };

  const handleSetView = (view) => {
    if (!controlsRef.current) return;
    const cam = controlsRef.current.object;
    setActiveView(view);
    switch (view) {
      case 'side':
        cam.position.set(-2.6, 0.15, 0);
        break;
      case 'heel':
        cam.position.set(2.2, 0.35, -1.2);
        break;
      case 'top':
        cam.position.set(0, 3.0, 0.3);
        break;
      case 'front':
      default:
        cam.position.set(-1.6, 0.45, 2.0);
        break;
    }
    controlsRef.current.target.set(0, 0, 0);
    controlsRef.current.update();
  };

  return (
    <div
      className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] xl:h-[620px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-[#F3F1EC] to-[#EBE7DF] border border-[#E6E3DA] select-none shadow-soft"
      style={{ touchAction: 'none' }}
    >
      {/* Decorative Canvas Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none noise-overlay" />

      {/* Subtle Studio Lighting Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.85)_0%,transparent_75%)]" />

      {/* Modular Canvas Overlay Controls */}
      <CanvasControls
        onReset={handleReset}
        autoRotate={autoRotate}
        onToggleAutoRotate={onToggleAutoRotate}
        onSetView={handleSetView}
        activeView={activeView}
      />

      {/* Three.js R3F WebGL Canvas */}
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.32, 2.7], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15
        }}
      >
        {/* Adaptive Viewport Camera adjustment */}
        <AdaptiveCamera />

        {/* Studio Lighting */}
        <ambientLight intensity={0.7} />

        {/* Key Directional Light with Soft Shadows */}
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={15}
          shadow-bias={-0.0001}
        />

        {/* Fill Cool Light */}
        <directionalLight position={[-6, 4, -4]} intensity={0.65} color="#e0e7ff" />

        {/* Rim Backlight */}
        <spotLight
          position={[0, 6, -6]}
          intensity={0.9}
          angle={0.6}
          penumbra={0.8}
          color="#ffffff"
        />

        {/* HDR Environment */}
        <Environment preset="city" />

        <Suspense fallback={<CanvasLoader />}>
          <ShoeModel
            customization={customization}
            activeRegion={activeRegion}
            onSelectRegion={onSelectRegion}
            autoRotate={autoRotate}
            scale={1.2}
          />

          {/* Photorealistic Contact Shadow */}
          <ContactShadows
            position={[0, -0.62, 0]}
            opacity={0.65}
            scale={4.5}
            blur={2.4}
            far={1.6}
            resolution={512}
            color="#09090b"
          />
        </Suspense>

        {/* Orbit Controls */}
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableZoom={true}
          minDistance={1.6}
          maxDistance={4.2}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.95}
          rotateSpeed={0.8}
          dampingFactor={0.05}
          enableDamping={true}
        />
      </Canvas>
    </div>
  );
});
