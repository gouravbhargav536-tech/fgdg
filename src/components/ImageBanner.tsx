import React from 'react';
import { Camera } from 'lucide-react';

interface ImageBannerProps {
  url: string;
  caption: string;
  label?: string;
}

export default function ImageBanner({ url, caption, label = "High-Definition Rendering" }: ImageBannerProps) {
  return (
    <div className="max-w-5xl mx-auto my-6 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative group">
      <img
        src={url}
        alt={caption}
        loading="lazy"
        className="w-full aspect-[21/9] sm:aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      
      {/* Caption Overlay */}
      <div className="absolute bottom-6 left-6 text-white">
        <p className="font-display font-black text-lg sm:text-xl uppercase tracking-tight">
          {caption}
        </p>
      </div>

      {/* Label Tag */}
      <div className="absolute bottom-6 right-6 flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
        <Camera className="w-3 h-3 text-white" />
        <span className="text-[9px] font-mono font-black text-white uppercase tracking-widest">
          {label}
        </span>
      </div>
    </div>
  );
}
