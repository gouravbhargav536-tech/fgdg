import React, { Component, ReactNode, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

// React Error Boundary to catch loading errors (e.g. 404 missing model) and trigger fallback
interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ModelErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn(
      'GLTF Model loading failed (likely file not in public yet). Falling back to high-fidelity procedural 3D model.',
      error,
      errorInfo
    );
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

interface GLBJerseyProps {
  frontCanvas: HTMLCanvasElement | null;
  backCanvas: HTMLCanvasElement | null;
  sideCanvas: HTMLCanvasElement | null;
  version: number;
  fabricRoughness?: number;
  sheenIntensity?: number;
  normalStrength?: number;
}

export function GLBJersey({
  frontCanvas,
  backCanvas,
  sideCanvas,
  version,
  fabricRoughness = 0.75,
  sheenIntensity = 0.8,
  normalStrength = 0.4,
}: GLBJerseyProps) {
  // Load model from Vite public directory path
  const { scene } = useGLTF('/models/jersey.glb');

  // Convert canvas elements to ThreeJS Textures dynamically
  const frontTexture = useMemo(() => {
    if (!frontCanvas) return null;
    const tex = new THREE.CanvasTexture(frontCanvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [frontCanvas, version]);

  const backTexture = useMemo(() => {
    if (!backCanvas) return null;
    const tex = new THREE.CanvasTexture(backCanvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    // Mirror horizontally for back mapping consistency
    tex.repeat.x = -1;
    tex.offset.x = 1;
    return tex;
  }, [backCanvas, version]);

  const sideTexture = useMemo(() => {
    if (!sideCanvas) return null;
    const tex = new THREE.CanvasTexture(sideCanvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [sideCanvas, version]);

  // Ensure textures update in R3F render loop
  useEffect(() => {
    if (frontTexture) frontTexture.needsUpdate = true;
  }, [frontTexture, version]);

  useEffect(() => {
    if (backTexture) backTexture.needsUpdate = true;
  }, [backTexture, version]);

  useEffect(() => {
    if (sideTexture) sideTexture.needsUpdate = true;
  }, [sideTexture, version]);

  // Normalize, scale, and center model geometry dynamically on load
  const processedModel = useMemo(() => {
    if (!scene) return null;

    // Clone scene to avoid side-effects in React
    const model = scene.clone();

    // Auto-center model using Box3 bounding box
    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Apply offset to center at local (0, 0, 0)
    model.position.x -= center.x;
    model.position.y -= center.y;
    model.position.z -= center.z;

    // Target a specific 3D height scale (approx 75% of stage bounding volume)
    const targetHeight = 1.35;
    const currentHeight = size.y || 1;
    const scaleFactor = targetHeight / currentHeight;
    model.scale.setScalar(scaleFactor);

    model.rotation.y = 0; 

    return model;
  }, [scene]);

  // Dynamic texture mapping and material property updates on traverse
  useEffect(() => {
    if (!processedModel) return;

    processedModel.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        const matName = child.material?.name?.toLowerCase() || '';
        const meshName = child.name?.toLowerCase() || '';

        // Material binding rules for sports kit components
        const isFront = 
          meshName.includes('front') || 
          matName.includes('front') || 
          meshName.includes('chest') || 
          matName.includes('chest') || 
          matName.includes('body_front') ||
          matName.includes('body_f');

        const isBack = 
          meshName.includes('back') || 
          matName.includes('back') || 
          meshName.includes('body_back') ||
          matName.includes('body_b');

        const isSleeve = 
          meshName.includes('sleeve') || 
          matName.includes('sleeve') || 
          meshName.includes('arm') || 
          matName.includes('arm');

        const isCollar = 
          meshName.includes('collar') || 
          matName.includes('collar') || 
          meshName.includes('neck') || 
          matName.includes('neck') || 
          meshName.includes('trim') ||
          matName.includes('trim');

        if (isFront && frontTexture) {
          child.material = new THREE.MeshPhysicalMaterial({
            roughness: fabricRoughness,
            metalness: 0.02,
            envMapIntensity: 1.2,
            map: frontTexture,
            side: THREE.DoubleSide,
            sheen: sheenIntensity,
            sheenRoughness: 0.5,
            sheenColor: new THREE.Color('#ffffff'),
          });
        } else if (isBack && backTexture) {
          child.material = new THREE.MeshPhysicalMaterial({
            roughness: fabricRoughness,
            metalness: 0.02,
            envMapIntensity: 1.2,
            map: backTexture,
            side: THREE.DoubleSide,
            sheen: sheenIntensity,
            sheenRoughness: 0.5,
            sheenColor: new THREE.Color('#ffffff'),
          });
        } else if ((isSleeve || isCollar) && sideTexture) {
          child.material = new THREE.MeshPhysicalMaterial({
            roughness: fabricRoughness,
            metalness: 0.02,
            envMapIntensity: 1.2,
            map: sideTexture,
            side: THREE.DoubleSide,
            sheen: sheenIntensity,
            sheenRoughness: 0.5,
            sheenColor: new THREE.Color('#ffffff'),
          });
        } else {
          // General matching fallback if naming is nested
          if (child.material) {
            if (matName.includes('main') || matName.includes('torso') || matName.includes('jersey')) {
              if (frontTexture) child.material.map = frontTexture;
            }
            child.material.roughness = fabricRoughness;
            child.material.metalness = 0.02;
            child.material.envMapIntensity = 1.2;
          }
        }
      }
    });
  }, [processedModel, frontTexture, backTexture, sideTexture, fabricRoughness, sheenIntensity]);

  if (!processedModel) return null;

  return <primitive object={processedModel} />;
}

// Preload the GLTF file to avoid pop-in stutters
try {
  useGLTF.preload('/models/jersey.glb');
} catch (e) {
  // Ignored in case the file doesn't exist on system startup
}
