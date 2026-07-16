import React from 'react';
import { Camera } from 'lucide-react';

interface ImageBannerProps {
  url: string;
  caption: string;
  label?: string;
}

export default function ImageBanner({ url, caption, label = "High-Definition Rendering" }: ImageBannerProps) {
  return (
    <div className="max-w-4xl mx-auto my-4 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative group">
      <div className="relative w-full h-36 sm:h-48 overflow-hidden">
        <img
          src={url}
          alt={caption}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
      </div>
      
      {/* Caption Overlay */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
        <p className="font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-tight">
          {caption}
        </p>
      </div>

      {/* Label Tag */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
        <Camera className="w-3 h-3 text-white" />
        <span className="text-[9px] font-mono font-black text-white uppercase tracking-widest">
          {label}
        </span>
      </div>
    </div>
  );
}
