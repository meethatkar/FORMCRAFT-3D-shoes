import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Configure DRACO decoder path to local public/draco folder
useGLTF.setDecoderPath('/draco/');

export function ShoeModel({
  customization,
  activeRegion,
  onSelectRegion,
  autoRotate = false,
  scale = 1.2
}) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/shoe.glb');
  const [hoveredPart, setHoveredPart] = useState(null);

  // Synchronize Three.js materials with customization state
  useEffect(() => {
    if (!materials) return;

    // 1. Upper Body Mesh
    if (materials.mesh && customization.mesh) {
      materials.mesh.color.set(customization.mesh);
      materials.mesh.roughness = 0.55;
      materials.mesh.metalness = 0.05;
      materials.mesh.needsUpdate = true;
    }

    // 2. Sole Unit
    if (materials.sole && customization.sole) {
      materials.sole.color.set(customization.sole);
      materials.sole.roughness = 0.8;
      materials.sole.metalness = 0.02;
      materials.sole.needsUpdate = true;
    }

    // 3. Laces & Caps
    if (materials.laces && customization.laces) {
      materials.laces.color.set(customization.laces);
      materials.laces.roughness = 0.6;
      materials.laces.needsUpdate = true;
    }
    if (materials.caps) {
      const capsColor = customization.caps || customization.laces || '#18181B';
      materials.caps.color.set(capsColor);
      materials.caps.roughness = 0.3;
      materials.caps.metalness = 0.8;
      materials.caps.needsUpdate = true;
    }

    // 4. Heel Counter (patch & band)
    if (customization.heel) {
      if (materials.patch) {
        materials.patch.color.set(customization.heel);
        materials.patch.roughness = 0.45;
        materials.patch.needsUpdate = true;
      }
      if (materials.band) {
        materials.band.color.set(customization.heel);
        materials.band.roughness = 0.5;
        materials.band.needsUpdate = true;
      }
    }

    // 5. Side Logo / Stripes
    if (materials.stripes && customization.stripes) {
      materials.stripes.color.set(customization.stripes);
      materials.stripes.roughness = 0.35;
      materials.stripes.metalness = 0.15;
      materials.stripes.needsUpdate = true;
    }

    // 6. Inner Collar Lining
    if (materials.inner) {
      const innerColor = customization.inner || '#18181B';
      materials.inner.color.set(innerColor);
      materials.inner.roughness = 0.7;
      materials.inner.needsUpdate = true;
    }
  }, [customization, materials]);

  // Subtle idle breathing & rotation
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      Math.sin(t * 1.5) * 0.03,
      0.08
    );
    if (autoRotate) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const handlePointerOver = (e, regionKey) => {
    e.stopPropagation();
    setHoveredPart(regionKey);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    setHoveredPart(null);
    document.body.style.cursor = 'auto';
  };

  const handleClick = (e, regionKey) => {
    e.stopPropagation();
    if (onSelectRegion) {
      onSelectRegion(regionKey);
    }
  };

  return (
    <Center top={false}>
      <group
        ref={groupRef}
        dispose={null}
        scale={scale}
        rotation={[0.12, -Math.PI / 4, 0]}
        position={[0, 0, 0]}
      >
        {/* 0: Laces */}
        {nodes.shoe?.geometry && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shoe.geometry}
            material={materials.laces}
            onPointerOver={(e) => handlePointerOver(e, 'laces')}
            onPointerOut={handlePointerOut}
            onClick={(e) => handleClick(e, 'laces')}
          />
        )}

        {/* 1: Mesh / Upper Body */}
        {nodes.shoe_1?.geometry && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shoe_1.geometry}
            material={materials.mesh}
            onPointerOver={(e) => handlePointerOver(e, 'mesh')}
            onPointerOut={handlePointerOut}
            onClick={(e) => handleClick(e, 'mesh')}
          />
        )}

        {/* 2: Caps / Eyelets */}
        {nodes.shoe_2?.geometry && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shoe_2.geometry}
            material={materials.caps}
            onPointerOver={(e) => handlePointerOver(e, 'laces')}
            onPointerOut={handlePointerOut}
            onClick={(e) => handleClick(e, 'laces')}
          />
        )}

        {/* 3: Inner Collar Lining */}
        {nodes.shoe_3?.geometry && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shoe_3.geometry}
            material={materials.inner}
            onPointerOver={(e) => handlePointerOver(e, 'heel')}
            onPointerOut={handlePointerOut}
            onClick={(e) => handleClick(e, 'heel')}
          />
        )}

        {/* 4: Sole Unit */}
        {nodes.shoe_4?.geometry && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shoe_4.geometry}
            material={materials.sole}
            onPointerOver={(e) => handlePointerOver(e, 'sole')}
            onPointerOut={handlePointerOut}
            onClick={(e) => handleClick(e, 'sole')}
          />
        )}

        {/* 5: Stripes / Side Logo */}
        {nodes.shoe_5?.geometry && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shoe_5.geometry}
            material={materials.stripes}
            onPointerOver={(e) => handlePointerOver(e, 'stripes')}
            onPointerOut={handlePointerOut}
            onClick={(e) => handleClick(e, 'stripes')}
          />
        )}

        {/* 6: Heel Band */}
        {nodes.shoe_6?.geometry && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shoe_6.geometry}
            material={materials.band}
            onPointerOver={(e) => handlePointerOver(e, 'heel')}
            onPointerOut={handlePointerOut}
            onClick={(e) => handleClick(e, 'heel')}
          />
        )}

        {/* 7: Heel Patch */}
        {nodes.shoe_7?.geometry && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shoe_7.geometry}
            material={materials.patch}
            onPointerOver={(e) => handlePointerOver(e, 'heel')}
            onPointerOut={handlePointerOut}
            onClick={(e) => handleClick(e, 'heel')}
          />
        )}
      </group>
    </Center>
  );
}

useGLTF.preload('/shoe.glb');
