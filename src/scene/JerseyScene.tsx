import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  ContactShadows,
  Environment,
  Center,
} from '@react-three/drei';
import * as THREE from 'three';
import { GLBJersey, ModelErrorBoundary } from './JerseyModel';
import ProceduralJersey from './ProceduralJersey';

interface CameraControllerProps {
  currentView: 'front' | 'back' | 'left' | 'right' | null;
  setCurrentView: (view: 'front' | 'back' | 'left' | 'right' | null) => void;
  controlsRef: React.RefObject<any>;
}

// Custom camera coordinator to animate transitions smoothly between presets
function CameraController({ currentView, setCurrentView, controlsRef }: CameraControllerProps) {
  const { camera } = useThree();
  const isTransitioning = useRef(false);

  useEffect(() => {
    if (!currentView || !controlsRef.current) return;

    isTransitioning.current = true;
    const controls = controlsRef.current;

    // Reset controls target to center of jersey
    controls.target.set(0, 0.1, 0);

    // Position targets based on standard camera height of 1.3
    let targetTheta = 0; // horizontal angle
    let targetPhi = Math.PI / 2; // vertical angle (horizontal plane)

    switch (currentView) {
      case 'front':
        targetTheta = 0;
        targetPhi = Math.PI / 2 - 0.05; // slightly looking down
        break;
      case 'back':
        targetTheta = Math.PI; // 180 deg
        targetPhi = Math.PI / 2 - 0.05;
        break;
      case 'left':
        targetTheta = -Math.PI / 2; // -90 deg
        targetPhi = Math.PI / 2 - 0.02;
        break;
      case 'right':
        targetTheta = Math.PI / 2; // 90 deg
        targetPhi = Math.PI / 2 - 0.02;
        break;
    }

    // Set controls angles dynamically with easing
    const duration = 800; // ms
    const startTime = performance.now();
    
    // Get starting camera state
    const startRadius = camera.position.length();
    const spherical = new THREE.Spherical().setFromVector3(camera.position);
    const startTheta = spherical.theta;
    const startPhi = spherical.phi;

    // Direct spherical interpolation for nice organic curved motion paths
    const animate = () => {
      if (!isTransitioning.current || !controlsRef.current) return;
      
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing curve (ease-out-cubic)
      const ease = 1 - Math.pow(1 - progress, 3);

      // Shortest angle path interpolation
      let diffTheta = targetTheta - startTheta;
      // Normalise angle diff to [-PI, PI] to prevent spinning multiple full rotations
      diffTheta = Math.atan2(Math.sin(diffTheta), Math.cos(diffTheta));
      const currentTheta = startTheta + diffTheta * ease;

      const currentPhi = THREE.MathUtils.lerp(startPhi, targetPhi, ease);
      const currentRadius = THREE.MathUtils.lerp(startRadius, 2.3, ease); // Lerp back to standard zoom

      // Set spherical position on camera
      const newSpherical = new THREE.Spherical(currentRadius, currentPhi, currentTheta);
      camera.position.setFromSpherical(newSpherical);
      camera.lookAt(0, 0.1, 0);
      controls.update();

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        isTransitioning.current = false;
        setCurrentView(null); // Finish transition
      }
    };

    requestAnimationFrame(animate);

    return () => {
      isTransitioning.current = false;
    };
  }, [currentView, camera, controlsRef, setCurrentView]);

  return null;
}

interface JerseySceneProps {
  frontCanvas: HTMLCanvasElement | null;
  backCanvas: HTMLCanvasElement | null;
  sideCanvas: HTMLCanvasElement | null;
  version: number;
  currentView: 'front' | 'back' | 'left' | 'right' | null;
  setCurrentView: (view: 'front' | 'back' | 'left' | 'right' | null) => void;
  autoRotate: boolean;
  setAutoRotate: (active: boolean) => void;
  manualRotationTrigger: { direction: 'left' | 'right'; timestamp: number } | null;
  fabricRoughness?: number;
  sheenIntensity?: number;
  normalStrength?: number;
  environmentPreset?: 'city' | 'sunset' | 'warehouse' | 'dawn' | 'night';
}

export default function JerseyScene({
  frontCanvas,
  backCanvas,
  sideCanvas,
  version,
  currentView,
  setCurrentView,
  autoRotate,
  setAutoRotate,
  manualRotationTrigger,
  fabricRoughness = 0.75,
  sheenIntensity = 0.8,
  normalStrength = 0.4,
  environmentPreset = 'city',
}: JerseySceneProps) {
  const controlsRef = useRef<any>(null);

  // Stop auto-rotation when user manually drags model
  const handleStartDrag = () => {
    setAutoRotate(false);
  };

  // Perform manual rotation on OrbitControls when buttons are clicked
  useEffect(() => {
    if (!manualRotationTrigger || !controlsRef.current) return;
    
    const step = manualRotationTrigger.direction === 'left' ? -0.45 : 0.45;
    controlsRef.current.rotateLeft(step);
    controlsRef.current.update();
  }, [manualRotationTrigger]);

  return (
    <div className="w-full h-full relative" style={{ backgroundColor: '#050816' }}>
      {/* Studio Radial Ambient Backdrop Light Glow (CSS-driven behind Canvas) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />

      <Canvas
        shadows
        camera={{ position: [0, 1.3, 2.3], fov: 30 }}
        gl={{ antialias: true, preserveDrawingBuffer: true, toneMapping: THREE.ACESFilmicToneMapping }}
        className="w-full h-full"
      >
        {/* Lights */}
        <ambientLight intensity={0.4} />
        
        {/* Warm sky, deep pitch ground light */}
        <hemisphereLight intensity={0.7} color="#ffffff" groundColor="#080c21" />
        
        {/* Powerful studio spotlight with soft shadow settings */}
        <directionalLight
          position={[4, 8, 4]}
          intensity={1.8}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}
          shadow-normalBias={0.02}
        />
        <directionalLight position={[-4, 5, -3]} intensity={0.6} />
        <directionalLight position={[0, -3, 0]} intensity={0.3} color="#1d4ed8" />

        <Suspense fallback={null}>
          <Center>
            {/* Try loading GLB model first, fail gracefully to procedurally modeled fallback */}
            <ModelErrorBoundary
              fallback={
                <ProceduralJersey
                  frontCanvas={frontCanvas}
                  backCanvas={backCanvas}
                  sideCanvas={sideCanvas}
                  version={version}
                  fabricRoughness={fabricRoughness}
                  sheenIntensity={sheenIntensity}
                  normalStrength={normalStrength}
                />
              }
            >
              <GLBJersey
                frontCanvas={frontCanvas}
                backCanvas={backCanvas}
                sideCanvas={sideCanvas}
                version={version}
                fabricRoughness={fabricRoughness}
                sheenIntensity={sheenIntensity}
                normalStrength={normalStrength}
              />
            </ModelErrorBoundary>
          </Center>

          {/* Realistic Studio HDRI reflections dynamically changeable */}
          <Environment preset={environmentPreset} />
        </Suspense>

        {/* Soft, beautiful realistic Contact shadows on ground plane */}
        <ContactShadows
          position={[0, -0.76, 0]}
          opacity={0.65}
          scale={3.2}
          blur={2.2}
          far={1.2}
        />

        {/* Dynamic camera navigation state animator */}
        <CameraController
          currentView={currentView}
          setCurrentView={setCurrentView}
          controlsRef={controlsRef}
        />

        {/* Camera Interactive Controls */}
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          minDistance={1.4}
          maxDistance={4.5}
          enableDamping
          dampingFactor={0.05}
          autoRotate={autoRotate}
          autoRotateSpeed={2.2}
          onStart={handleStartDrag}
        />
      </Canvas>
    </div>
  );
}
