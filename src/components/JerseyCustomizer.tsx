import React, { useState } from 'react';
import { 
  Sparkles, 
  Download, 
  RefreshCw, 
  ShieldCheck, 
  Cpu,
  Tv,
  Compass,
  Layers
} from 'lucide-react';
import { useJerseyTexture } from '../hooks/useJerseyTexture';
import JerseyScene from '../scene/JerseyScene';
import ConfigPanel from '../ui/ConfigPanel';
import ControlOverlays from '../ui/ControlOverlays';

export default function JerseyCustomizer() {
  // Leverage our dynamic texture loader hook
  const {
    frontCanvas,
    backCanvas,
    sideCanvas,
    version,
    frontImage,
    backImage,
    sideImage,
    setFrontImage,
    setBackImage,
    setSideImage,
    isFrontAutoLoaded,
    isBackAutoLoaded,
    isSideAutoLoaded,
  } = useJerseyTexture();

  // State for 3D Viewport Controls
  const [currentView, setCurrentView] = useState<'front' | 'back' | 'left' | 'right' | null>('front');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [manualRotationTrigger, setManualRotationTrigger] = useState<{
    direction: 'left' | 'right';
    timestamp: number;
  } | null>(null);

  // Material and Environment States
  const [fabricRoughness, setFabricRoughness] = useState<number>(0.75);
  const [sheenIntensity, setSheenIntensity] = useState<number>(0.8);
  const [normalStrength, setNormalStrength] = useState<number>(0.4);
  const [environmentPreset, setEnvironmentPreset] = useState<'city' | 'sunset' | 'warehouse' | 'dawn' | 'night'>('city');

  const [downloading, setDownloading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // Trigger manual rotation offset inside ThreeJS OrbitControls
  const handleManualRotate = (direction: 'left' | 'right') => {
    setAutoRotate(false);
    setManualRotationTrigger({
      direction,
      timestamp: performance.now(),
    });
  };

  const handleResetCamera = () => {
    setCurrentView('front');
    setAutoRotate(true);
  };

  const handleResetAll = () => {
    setFrontImage(null);
    setBackImage(null);
    setSideImage(null);
    setFabricRoughness(0.75);
    setSheenIntensity(0.8);
    setNormalStrength(0.4);
    setEnvironmentPreset('city');
    handleResetCamera();
  };

  // High-fidelity split canvas mockup exporter
  const handleDownload = () => {
    setDownloading(true);
    
    // Simulate real-time viewport image rendering
    setTimeout(() => {
      setDownloading(false);
      setSuccessMessage(true);
      
      setTimeout(() => setSuccessMessage(false), 4000);
      
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 630;
      const ctx = canvas.getContext('2d');
      if (ctx && frontCanvas && backCanvas) {
        // Render a studio-grade layout card
        ctx.fillStyle = '#030712'; // Premium Slate Dark Backing
        ctx.fillRect(0, 0, 1200, 630);
        
        // Draw decorative grid patterns on the export
        ctx.fillStyle = 'rgba(30, 41, 59, 0.2)';
        for (let i = 0; i < 1200; i += 40) {
          ctx.fillRect(i, 0, 1, 630);
        }
        for (let j = 0; j < 630; j += 40) {
          ctx.fillRect(0, j, 1200, 1);
        }

        // Draw the textured canvas prints
        ctx.drawImage(frontCanvas, 80, 80, 440, 440);
        ctx.drawImage(backCanvas, 680, 80, 440, 440);
        
        // Render gold divider borders
        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 3;
        ctx.strokeRect(30, 30, 1140, 570);
        
        ctx.strokeStyle = 'rgba(234, 179, 8, 0.2)';
        ctx.strokeRect(70, 70, 460, 460);
        ctx.strokeRect(670, 70, 460, 460);

        // Labels
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px "Courier New", monospace';
        ctx.fillText('FRONT VIEW ARTWORK', 80, 560);
        ctx.fillText('BACK VIEW ARTWORK', 680, 560);

        // Studio branding details
        ctx.textAlign = 'center';
        ctx.fillStyle = '#eab308';
        ctx.font = 'black uppercase italic 24px Impact, sans-serif';
        ctx.fillText('HIL 3D JERSEY STUDIO EXPORT', 600, 280);
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.font = '11px sans-serif';
        ctx.fillText('STITCHED APPAREL SPECIFICATION • 60 FPS RENDER', 600, 310);
        ctx.fillText(`LIGHTING PRESET: ${environmentPreset.toUpperCase()}`, 600, 335);

        try {
          const dataUrl = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.download = `hil-jersey-viewer-export.png`;
          link.href = dataUrl;
          link.click();
        } catch (e) {
          console.error(e);
        }
      }
    }, 1200);
  };

  return (
    <section 
      id="jersey-viewer-section" 
      className="py-16 md:py-24 bg-[#050816] text-white relative overflow-hidden border-t border-b border-slate-900"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 via-[#050816] to-black -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Cinematic Blur Orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono font-black text-blue-400 tracking-widest uppercase mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            HIL PREMIUM 3D VIEW PORTAL
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight uppercase">
            3D DIGITAL <span className="text-blue-500">JERSEY VIEW STUDY</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3 font-medium leading-relaxed">
            Examine high-fidelity <strong className="text-slate-200">stitched texture mappings</strong> in full 360-degree rotation. Change environmental reflections, edit fabric specifications, and preview template artwork seamlessly.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Immersive 3D Viewport (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-slate-950/40 rounded-3xl overflow-hidden border border-slate-900 shadow-2xl relative min-h-[480px] sm:min-h-[550px] lg:min-h-[620px]">
            
            {/* Immersive 3D Scene */}
            <div className="w-full flex-1 relative min-h-[400px]">
              <JerseyScene
                frontCanvas={frontCanvas}
                backCanvas={backCanvas}
                sideCanvas={sideCanvas}
                version={version}
                currentView={currentView}
                setCurrentView={setCurrentView}
                autoRotate={autoRotate}
                setAutoRotate={setAutoRotate}
                manualRotationTrigger={manualRotationTrigger}
                fabricRoughness={fabricRoughness}
                sheenIntensity={sheenIntensity}
                normalStrength={normalStrength}
                environmentPreset={environmentPreset}
              />

              {/* Floating overlays for camera control and rotation presets */}
              <ControlOverlays
                currentView={currentView}
                setCurrentView={setCurrentView}
                autoRotate={autoRotate}
                setAutoRotate={setAutoRotate}
                onManualRotate={handleManualRotate}
                onResetCamera={handleResetCamera}
              />
            </div>

          </div>

          {/* RIGHT: Studio Control Desk (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <ConfigPanel
              frontImage={frontImage}
              backImage={backImage}
              sideImage={sideImage}
              setFrontImage={setFrontImage}
              setBackImage={setBackImage}
              setSideImage={setSideImage}
              isFrontAutoLoaded={isFrontAutoLoaded}
              isBackAutoLoaded={isBackAutoLoaded}
              isSideAutoLoaded={isSideAutoLoaded}
              
              fabricRoughness={fabricRoughness}
              setFabricRoughness={setFabricRoughness}
              sheenIntensity={sheenIntensity}
              setSheenIntensity={setSheenIntensity}
              normalStrength={normalStrength}
              setNormalStrength={setNormalStrength}
              environmentPreset={environmentPreset}
              setEnvironmentPreset={setEnvironmentPreset}
              
              onResetAll={handleResetAll}
            />

            {/* Premium Download Export Button */}
            <div className="relative">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className={`w-full py-4 rounded-2xl text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  downloading
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0'
                }`}
              >
                {downloading ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Baking Textures & Exporting...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Export Studio Mockup Card
                  </>
                )}
              </button>

              {/* Success Notification */}
              {successMessage && (
                <div className="absolute -top-14 left-0 right-0 mx-auto w-fit bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-md text-emerald-400 py-2 px-4 rounded-xl text-xs font-bold text-center animate-bounce shadow-xl flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Successfully baking high-res 3D Studio Mockup!
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
