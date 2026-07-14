import React, { useRef, useState } from 'react';
import { 
  Sliders, 
  Upload, 
  RefreshCw, 
  Check, 
  Trash2, 
  Sparkles, 
  Flame, 
  Palette,
  Layers,
  Image as ImageIcon,
  Compass,
  Cpu
} from 'lucide-react';

interface ConfigPanelProps {
  frontImage: string | null;
  backImage: string | null;
  sideImage: string | null;
  setFrontImage: (val: string | null) => void;
  setBackImage: (val: string | null) => void;
  setSideImage: (val: string | null) => void;
  isFrontAutoLoaded: boolean;
  isBackAutoLoaded: boolean;
  isSideAutoLoaded: boolean;
  
  // Material controls
  fabricRoughness: number;
  setFabricRoughness: (val: number) => void;
  sheenIntensity: number;
  setSheenIntensity: (val: number) => void;
  normalStrength: number;
  setNormalStrength: (val: number) => void;
  environmentPreset: 'city' | 'sunset' | 'warehouse' | 'dawn' | 'night';
  setEnvironmentPreset: (val: 'city' | 'sunset' | 'warehouse' | 'dawn' | 'night') => void;
  
  // General resets
  onResetAll: () => void;
}

export default function ConfigPanel({
  frontImage,
  backImage,
  sideImage,
  setFrontImage,
  setBackImage,
  setSideImage,
  isFrontAutoLoaded,
  isBackAutoLoaded,
  isSideAutoLoaded,
  
  fabricRoughness,
  setFabricRoughness,
  sheenIntensity,
  setSheenIntensity,
  normalStrength,
  setNormalStrength,
  environmentPreset,
  setEnvironmentPreset,
  
  onResetAll,
}: ConfigPanelProps) {
  const [activeTab, setActiveTab] = useState<'upload' | 'materials'>('upload');
  
  const frontInputRef = useRef<HTMLInputElement>(null);
  const backInputRef = useRef<HTMLInputElement>(null);
  const sideInputRef = useRef<HTMLInputElement>(null);

  const [dragTarget, setDragTarget] = useState<'front' | 'back' | 'side' | null>(null);

  // File size formatter helper
  const handleFileUpload = (file: File, type: 'front' | 'back' | 'side') => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        if (type === 'front') setFrontImage(e.target.result as string);
        if (type === 'back') setBackImage(e.target.result as string);
        if (type === 'side') setSideImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const onDragOver = (e: React.DragEvent, target: 'front' | 'back' | 'side') => {
    e.preventDefault();
    setDragTarget(target);
  };

  const onDragLeave = () => {
    setDragTarget(null);
  };

  const onDrop = (e: React.DragEvent, target: 'front' | 'back' | 'side') => {
    e.preventDefault();
    setDragTarget(null);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0], target);
    }
  };

  return (
    <div className="w-full flex flex-col bg-slate-950/85 border border-slate-900 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Panel Navigation Tabs */}
      <div className="flex border-b border-slate-900 bg-slate-950/40 p-2 gap-1">
        <button
          onClick={() => setActiveTab('upload')}
          className={`flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'upload'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
          }`}
        >
          <Upload className="w-4 h-4" />
          <span>Upload Artwork</span>
        </button>
        <button
          onClick={() => setActiveTab('materials')}
          className={`flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'materials'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Material Lab</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="p-6 md:p-8 flex-1 overflow-y-auto max-h-[500px] sm:max-h-[600px] lg:max-h-none space-y-6">
        
        {/* TAB 1: UPLOAD ARTWORK */}
        {activeTab === 'upload' && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-blue-400" />
              <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
                Texture Workspace
              </h3>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Weave your design template directly onto our 3D stitched model. Drop your custom layouts or inspect automatic workspace assets.
            </p>

            <div className="space-y-5">
              {/* 1. FRONT ARTWORK */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest font-black flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    1. Front Jersey Artwork
                  </span>
                  {frontImage && (
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-md font-bold uppercase ${
                      isFrontAutoLoaded ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                      {isFrontAutoLoaded ? 'Auto-detected' : 'Uploaded'}
                    </span>
                  )}
                </div>

                <div
                  onDragOver={(e) => onDragOver(e, 'front')}
                  onDragLeave={onDragLeave}
                  onDrop={(e) => onDrop(e, 'front')}
                  onClick={() => frontInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-4 flex items-center justify-between gap-4 cursor-pointer select-none transition-all ${
                    dragTarget === 'front'
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-slate-800 bg-slate-900/10 hover:border-slate-700 hover:bg-slate-900/30'
                  }`}
                >
                  <input
                    ref={frontInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileUpload(e.target.files[0], 'front');
                      }
                    }}
                    className="hidden"
                  />
                  
                  <div className="flex items-center gap-3">
                    {frontImage ? (
                      <div className="w-14 h-14 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 shrink-0 flex items-center justify-center overflow-hidden">
                        <img src={frontImage} alt="front-thumbnail" className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 shrink-0 flex items-center justify-center text-slate-500">
                        <Upload className="w-5 h-5" />
                      </div>
                    )}
                    
                    <div className="text-left">
                      <span className="block font-bold text-xs text-slate-200">
                        {frontImage ? 'Change Front Design' : 'Select Front File'}
                      </span>
                      <span className="block text-[9px] text-slate-500 font-mono mt-0.5">
                        PNG/JPG or drag & drop here
                      </span>
                    </div>
                  </div>

                  {frontImage && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFrontImage(null);
                      }}
                      className="p-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg transition-colors cursor-pointer"
                      title="Clear Front Image"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* 2. BACK ARTWORK */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest font-black flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    2. Back Jersey Artwork
                  </span>
                  {backImage && (
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-md font-bold uppercase ${
                      isBackAutoLoaded ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                      {isBackAutoLoaded ? 'Auto-detected' : 'Uploaded'}
                    </span>
                  )}
                </div>

                <div
                  onDragOver={(e) => onDragOver(e, 'back')}
                  onDragLeave={onDragLeave}
                  onDrop={(e) => onDrop(e, 'back')}
                  onClick={() => backInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-4 flex items-center justify-between gap-4 cursor-pointer select-none transition-all ${
                    dragTarget === 'back'
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-slate-800 bg-slate-900/10 hover:border-slate-700 hover:bg-slate-900/30'
                  }`}
                >
                  <input
                    ref={backInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileUpload(e.target.files[0], 'back');
                      }
                    }}
                    className="hidden"
                  />
                  
                  <div className="flex items-center gap-3">
                    {backImage ? (
                      <div className="w-14 h-14 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 shrink-0 flex items-center justify-center overflow-hidden">
                        <img src={backImage} alt="back-thumbnail" className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 shrink-0 flex items-center justify-center text-slate-500">
                        <Upload className="w-5 h-5" />
                      </div>
                    )}
                    
                    <div className="text-left">
                      <span className="block font-bold text-xs text-slate-200">
                        {backImage ? 'Change Back Design' : 'Select Back File'}
                      </span>
                      <span className="block text-[9px] text-slate-500 font-mono mt-0.5">
                        PNG/JPG or drag & drop here
                      </span>
                    </div>
                  </div>

                  {backImage && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setBackImage(null);
                      }}
                      className="p-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg transition-colors cursor-pointer"
                      title="Clear Back Image"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* 3. SIDE DETAILS (OPTIONAL) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest font-black flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    3. Sleeves & Side panels (Optional)
                  </span>
                  {sideImage && (
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-md font-bold uppercase ${
                      isSideAutoLoaded ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                      {isSideAutoLoaded ? 'Auto-detected' : 'Uploaded'}
                    </span>
                  )}
                </div>

                <div
                  onDragOver={(e) => onDragOver(e, 'side')}
                  onDragLeave={onDragLeave}
                  onDrop={(e) => onDrop(e, 'side')}
                  onClick={() => sideInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-4 flex items-center justify-between gap-4 cursor-pointer select-none transition-all ${
                    dragTarget === 'side'
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-slate-800 bg-slate-900/10 hover:border-slate-700 hover:bg-slate-900/30'
                  }`}
                >
                  <input
                    ref={sideInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileUpload(e.target.files[0], 'side');
                      }
                    }}
                    className="hidden"
                  />
                  
                  <div className="flex items-center gap-3">
                    {sideImage ? (
                      <div className="w-14 h-14 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 shrink-0 flex items-center justify-center overflow-hidden">
                        <img src={sideImage} alt="side-thumbnail" className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 shrink-0 flex items-center justify-center text-slate-500">
                        <Upload className="w-5 h-5" />
                      </div>
                    )}
                    
                    <div className="text-left">
                      <span className="block font-bold text-xs text-slate-200">
                        {sideImage ? 'Change Sleeves/Side Design' : 'Select Side/Sleeves File'}
                      </span>
                      <span className="block text-[9px] text-slate-500 font-mono mt-0.5">
                        PNG/JPG or drag & drop here
                      </span>
                    </div>
                  </div>

                  {sideImage && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSideImage(null);
                      }}
                      className="p-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg transition-colors cursor-pointer"
                      title="Clear Side Image"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MATERIAL LAB */}
        {activeTab === 'materials' && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-purple-400" />
              <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
                Material Parameters
              </h3>
            </div>

            {/* Environment Preset Dropdown */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest block">
                1. Studio Lighting Profile
              </label>
              <div className="relative">
                <select
                  value={environmentPreset}
                  onChange={(e) => setEnvironmentPreset(e.target.value as any)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl font-sans text-xs font-bold text-slate-200 outline-none appearance-none cursor-pointer focus:border-blue-500 shadow-md"
                >
                  <option value="city">Studio Spot (City Light)</option>
                  <option value="sunset">Sunset Stadium (Warm Glow)</option>
                  <option value="warehouse">Warehouse Dark (Cinematic contrast)</option>
                  <option value="dawn">Showroom Dawn (Soft lighting)</option>
                  <option value="night">Night Lights (Atmospheric shadow)</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                  <Compass className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Sliders Block */}
            <div className="space-y-5 pt-3 border-t border-slate-900">
              
              {/* Fabric Roughness */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">
                    2. Fabric Roughness
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-400">{fabricRoughness.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.30"
                  max="1.00"
                  step="0.05"
                  value={fabricRoughness}
                  onChange={(e) => setFabricRoughness(parseFloat(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer h-1 bg-slate-800 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] font-mono text-slate-600 uppercase">
                  <span>Sleek Silk</span>
                  <span>Matte Cotton</span>
                </div>
              </div>

              {/* Fabric Sheen Glow */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">
                    3. Micro-Sheen Glow
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-400">{sheenIntensity.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.00"
                  max="1.50"
                  step="0.05"
                  value={sheenIntensity}
                  onChange={(e) => setSheenIntensity(parseFloat(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer h-1 bg-slate-800 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] font-mono text-slate-600 uppercase">
                  <span>Flat Matte</span>
                  <span>Soft Velvet</span>
                </div>
              </div>

              {/* Normal Map Weave Bump Strength */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">
                    4. Micro-Weave Stitch Depth
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-400">{normalStrength.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.00"
                  max="1.20"
                  step="0.05"
                  value={normalStrength}
                  onChange={(e) => setNormalStrength(parseFloat(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer h-1 bg-slate-800 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] font-mono text-slate-600 uppercase">
                  <span>Ultra Smooth</span>
                  <span>Heavy Mesh Stitch</span>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Control Footer */}
      <div className="p-5 border-t border-slate-900 bg-slate-950/60 flex items-center justify-start">
        <button
          onClick={onResetAll}
          className="px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Reset Workspace
        </button>
      </div>
    </div>
  );
}
