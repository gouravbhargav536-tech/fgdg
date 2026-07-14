import React from 'react';
import { 
  Compass, 
  RotateCw, 
  RotateCcw, 
  RefreshCw, 
  Play, 
  Pause, 
  Eye, 
  Maximize2,
  Minimize2
} from 'lucide-react';

interface ControlOverlaysProps {
  currentView: 'front' | 'back' | 'left' | 'right' | null;
  setCurrentView: (view: 'front' | 'back' | 'left' | 'right' | null) => void;
  autoRotate: boolean;
  setAutoRotate: (active: boolean) => void;
  onManualRotate: (direction: 'left' | 'right') => void;
  onResetCamera: () => void;
}

export default function ControlOverlays({
  currentView,
  setCurrentView,
  autoRotate,
  setAutoRotate,
  onManualRotate,
  onResetCamera,
}: ControlOverlaysProps) {
  const views: ('front' | 'back' | 'left' | 'right')[] = ['front', 'back', 'left', 'right'];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-4 sm:p-6 select-none">
      
      {/* Top Bar HUD */}
      <div className="w-full flex items-start justify-between">
        {/* Status indicator */}
        <div className="bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800 pointer-events-auto flex items-center gap-2 shadow-lg">
          <span className={`w-2 h-2 rounded-full ${autoRotate ? 'bg-blue-500 animate-pulse' : 'bg-amber-500'}`} />
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-300 uppercase">
            {autoRotate ? 'IDLE ROTATION' : 'MANUAL CONTROL'}
          </span>
        </div>

        {/* Top Right Camera Angle Presets */}
        <div className="flex bg-slate-950/85 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800 pointer-events-auto flex-wrap gap-1 shadow-xl">
          {views.map((view) => (
            <button
              key={view}
              onClick={() => setCurrentView(view)}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                currentView === view
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>{view}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Middle Hint Overlay (Fades out when user drags/customizes) */}
      <div className="my-auto mx-auto pointer-events-none text-center max-w-xs opacity-35 transition-opacity">
        <Compass className="w-10 h-10 text-slate-500 mx-auto animate-spin" style={{ animationDuration: '12s' }} />
        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block mt-2 font-bold">
          Left-click & Drag to rotate • Scroll to zoom
        </span>
      </div>

      {/* Bottom Control Dock Overlay */}
      <div className="w-full flex justify-center pointer-events-auto">
        <div className="flex items-center gap-2 bg-slate-950/85 backdrop-blur-md p-2 rounded-2xl border border-slate-800 shadow-2xl overflow-x-auto max-w-full">
          {/* Rotate Left */}
          <button
            onClick={() => onManualRotate('left')}
            className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-800 transition-all flex items-center gap-1.5 text-xs font-semibold uppercase group"
            title="Rotate Left"
          >
            <RotateCcw className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
            <span className="hidden sm:inline">Spin Left</span>
          </button>

          {/* Toggle Auto Rotate */}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-2.5 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-bold uppercase ${
              autoRotate
                ? 'bg-blue-600 border-blue-500 text-white shadow-lg'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            {autoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>Auto Spin</span>
          </button>

          {/* Reset Camera View */}
          <button
            onClick={onResetCamera}
            className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-800 transition-all flex items-center gap-1.5 text-xs font-semibold uppercase"
            title="Reset Angle"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">Reset Camera</span>
          </button>

          {/* Rotate Right */}
          <button
            onClick={() => onManualRotate('right')}
            className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-800 transition-all flex items-center gap-1.5 text-xs font-semibold uppercase group"
            title="Rotate Right"
          >
            <RotateCw className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            <span className="hidden sm:inline">Spin Right</span>
          </button>
        </div>
      </div>

    </div>
  );
}
