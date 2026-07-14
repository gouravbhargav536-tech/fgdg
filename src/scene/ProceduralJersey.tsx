import React, { useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';

interface ProceduralJerseyProps {
  frontCanvas: HTMLCanvasElement | null;
  backCanvas: HTMLCanvasElement | null;
  sideCanvas: HTMLCanvasElement | null;
  version: number;
  fabricRoughness?: number;
  sheenIntensity?: number;
  normalStrength?: number;
}

export default function ProceduralJersey({
  frontCanvas,
  backCanvas,
  sideCanvas,
  version,
  fabricRoughness = 0.75,
  sheenIntensity = 0.8,
  normalStrength = 0.4,
}: ProceduralJerseyProps) {
  // Convert canvas elements to high-quality ThreeJS Textures dynamically
  const frontTexture = useMemo(() => {
    if (!frontCanvas) return null;
    const tex = new THREE.CanvasTexture(frontCanvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    return tex;
  }, [frontCanvas, version]);

  const backTexture = useMemo(() => {
    if (!backCanvas) return null;
    const tex = new THREE.CanvasTexture(backCanvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    // Mirror texture horizontally for back view panel alignment
    tex.repeat.x = -1;
    tex.offset.x = 1;
    return tex;
  }, [backCanvas, version]);

  const sideTexture = useMemo(() => {
    if (!sideCanvas) return null;
    const tex = new THREE.CanvasTexture(sideCanvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }, [sideCanvas, version]);

  // Ensure textures update inside Three.js render loop when canvas changes
  useEffect(() => {
    if (frontTexture) frontTexture.needsUpdate = true;
  }, [frontTexture, version]);

  useEffect(() => {
    if (backTexture) backTexture.needsUpdate = true;
  }, [backTexture, version]);

  useEffect(() => {
    if (sideTexture) sideTexture.needsUpdate = true;
  }, [sideTexture, version]);

  // Dynamic collar and sleeve base color matching by sampling the front canvas
  const sampledColors = useMemo(() => {
    if (!frontCanvas) {
      return {
        base: '#1e3a8a',
        collar: '#eab308',
        accent: '#ffffff',
      };
    }

    const ctx = frontCanvas.getContext('2d');
    if (!ctx) {
      return {
        base: '#1e3a8a',
        collar: '#eab308',
        accent: '#ffffff',
      };
    }

    try {
      // Helper to sample average rgb of a tiny coordinate rectangle
      const sampleRect = (x: number, y: number, w: number, h: number, defaultHex: string) => {
        try {
          const imgData = ctx.getImageData(x, y, w, h).data;
          let r = 0, g = 0, b = 0, count = 0;
          for (let i = 0; i < imgData.length; i += 4) {
            r += imgData[i];
            g += imgData[i + 1];
            b += imgData[i + 2];
            count++;
          }
          if (count === 0) return defaultHex;
          return `rgb(${Math.round(r / count)}, ${Math.round(g / count)}, ${Math.round(b / count)})`;
        } catch (e) {
          return defaultHex;
        }
      };

      // Sample base color (from middle center chest area)
      const baseColor = sampleRect(450, 450, 100, 100, '#1e3a8a');
      // Sample collar color (from top neck area)
      const collarColor = sampleRect(490, 80, 44, 40, '#eab308');
      // Sample accent trim color (from bottom side area)
      const accentColor = sampleRect(50, 800, 50, 50, '#ffffff');

      return {
        base: baseColor,
        collar: collarColor,
        accent: accentColor,
      };
    } catch (e) {
      return {
        base: '#1e3a8a',
        collar: '#eab308',
        accent: '#ffffff',
      };
    }
  }, [frontCanvas, version]);

  // Generate highly realistic micro-weave fabric bump map
  const fabricBumpMap = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Neutral gray background for normal mapping reference
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, 128, 128);

      // Fine woven high-density sportswear texture grid
      ctx.fillStyle = '#9e9e9e';
      for (let x = 0; x < 128; x += 4) {
        ctx.fillRect(x, 0, 2, 128);
      }
      ctx.fillStyle = '#616161';
      for (let y = 0; y < 128; y += 4) {
        ctx.fillRect(0, y, 128, 2);
      }

      // Slanted cross stitches for a knit fabric appearance
      ctx.strokeStyle = '#b5b5b5';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = -128; i < 128; i += 8) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i + 128, 128);
        ctx.moveTo(i + 128, 0);
        ctx.lineTo(i, 128);
      }
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(40, 40); // Dense, high frequency repeating micro-weave
    return tex;
  }, []);

  // Generate curved high-density geometry for Front Chest Panel
  const frontGeometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(0.85, 1.25, 64, 64);
    const pos = geo.attributes.position;
    
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      
      // 3D Curvature logic: wrap the edges slightly backwards to create depth
      const angle = (x / 0.425) * (Math.PI / 2.3);
      const zOffset = Math.cos(angle) * 0.12 - 0.12;
      
      // Slight outward flare at bottom, inward tuck at waist
      const waistFactor = Math.sin(((y + 0.625) / 1.25) * Math.PI);
      const xOffset = x * (1.0 - waistFactor * 0.08);

      pos.setX(i, xOffset);
      pos.setZ(i, zOffset + 0.05); // pushed forward
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Generate curved geometry for Back Panel
  const backGeometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(0.85, 1.25, 64, 64);
    const pos = geo.attributes.position;
    
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      
      // 3D Curvature logic: wrap the edges slightly forwards (opposite curve)
      const angle = (x / 0.425) * (Math.PI / 2.3);
      const zOffset = Math.cos(angle) * -0.12 + 0.12; // curved inverse of front
      
      // Waist indentation
      const waistFactor = Math.sin(((y + 0.625) / 1.25) * Math.PI);
      const xOffset = x * (1.0 - waistFactor * 0.08);

      pos.setX(i, xOffset);
      pos.setZ(i, zOffset - 0.05); // pushed backward
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Soft MeshPhysicalMaterial parameters to simulate premium stitched athletic textiles
  const materialProps = {
    roughness: fabricRoughness,
    metalness: 0.02,
    bumpMap: fabricBumpMap,
    bumpScale: normalStrength * 0.015,
    clearcoat: 0.0,
    sheen: sheenIntensity,
    sheenRoughness: 0.5,
    sheenColor: new THREE.Color('#ffffff'),
    envMapIntensity: 1.2,
  };

  return (
    <group position={[0, -0.1, 0]}>
      {/* Front Panel */}
      <mesh geometry={frontGeometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          {...materialProps}
          map={frontTexture}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Back Panel */}
      <mesh geometry={backGeometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          {...materialProps}
          map={backTexture}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Side Panels to seal the torso seams */}
      <group>
        {/* Left Side Seam */}
        <mesh position={[-0.375, 0, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
          <planeGeometry args={[0.07, 1.15, 8, 8]} />
          <meshPhysicalMaterial
            {...materialProps}
            map={sideTexture || null}
            color={sideTexture ? undefined : new THREE.Color(sampledColors.accent)}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Right Side Seam */}
        <mesh position={[0.375, 0, 0]} rotation={[0, -Math.PI / 2, 0]} castShadow>
          <planeGeometry args={[0.07, 1.15, 8, 8]} />
          <meshPhysicalMaterial
            {...materialProps}
            map={sideTexture || null}
            color={sideTexture ? undefined : new THREE.Color(sampledColors.accent)}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* Left Sleeve Cylinder with fabric drapery flare */}
      <group position={[-0.48, 0.42, 0.01]} rotation={[0, 0.1, 0.42]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.13, 0.145, 0.35, 32, 1, true]} />
          <meshPhysicalMaterial
            {...materialProps}
            map={sideTexture || null}
            color={sideTexture ? undefined : new THREE.Color(sampledColors.base)}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Cuff Trim Accent */}
        <mesh position={[0, -0.176, 0]}>
          <cylinderGeometry args={[0.146, 0.146, 0.035, 32, 1]} />
          <meshPhysicalMaterial
            {...materialProps}
            color={new THREE.Color(sampledColors.collar)}
          />
        </mesh>
      </group>

      {/* Right Sleeve Cylinder with fabric drapery flare */}
      <group position={[0.48, 0.42, 0.01]} rotation={[0, -0.1, -0.42]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.13, 0.145, 0.35, 32, 1, true]} />
          <meshPhysicalMaterial
            {...materialProps}
            map={sideTexture || null}
            color={sideTexture ? undefined : new THREE.Color(sampledColors.base)}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Cuff Trim Accent */}
        <mesh position={[0, -0.176, 0]}>
          <cylinderGeometry args={[0.146, 0.146, 0.035, 32, 1]} />
          <meshPhysicalMaterial
            {...materialProps}
            color={new THREE.Color(sampledColors.collar)}
          />
        </mesh>
      </group>

      {/* Collar Neck Trim (V-Neck / Crew combination shape) */}
      <group position={[0, 0.625, 0.02]} rotation={[0.2, 0, 0]}>
        <mesh castShadow>
          <torusGeometry args={[0.13, 0.028, 16, 48]} />
          <meshPhysicalMaterial
            {...materialProps}
            color={new THREE.Color(sampledColors.collar)}
          />
        </mesh>
      </group>
    </group>
  );
}
