import React, { useState } from 'react';
import { VIDEOS } from '../data';
import { HighlightVideo } from '../types';
import { Play, X, Clock, Video, Tv } from 'lucide-react';

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<HighlightVideo | null>(null);

  return (
    <section id="videos" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center md:text-left">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block">
            MULTIMEDIA
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-white">
            Video Highlights
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-2xl">
            Relive the action-packed field play, gravity-defying goalkeeper saves, and tactical drag-flick penalty corners.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEOS.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setSelectedVideo(vid)}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-lg hover:border-accent dark:hover:border-accent transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              {/* Thumbnail with Play Hover effect */}
              <div className="relative h-56 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <img
                  src={vid.thumbnailUrl}
                  alt={vid.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Visual Video Play Overlay icon */}
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/50 transition-all flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-md group-hover:scale-110 active:scale-95 transition-transform">
                    <Play className="w-6 h-6 fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <span className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  {vid.duration}
                </span>

                {/* Match Information overlay */}
                <span className="absolute top-3 left-3 bg-primary/95 backdrop-blur-sm text-white text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                  {vid.matchInfo}
                </span>
              </div>

              {/* Title info bar */}
              <div className="p-5 space-y-2">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 font-mono tracking-widest uppercase block">
                  {vid.date}
                </span>
                <h3 className="font-display font-black text-base text-slate-800 dark:text-white line-clamp-2 leading-snug group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {vid.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Video Player Overlay Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            {selectedVideo.videoUrl.includes('instagram.com') ? (
              /* Instagram Reels Vertical Mockup Player */
              <div className="bg-black rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden border border-slate-800 transform transition-all animate-fade-in-up relative flex flex-col h-[85vh]">
                
                {/* Close Button overlay */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer z-30 shadow-md border border-white/10"
                  aria-label="Close Video Overlay"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Vertical Iframe Container */}
                <div className="relative flex-1 bg-neutral-950 flex items-center justify-center">
                  <iframe
                    title={selectedVideo.title}
                    src={selectedVideo.videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0 rounded-t-2xl"
                    style={{ minHeight: '100%' }}
                  />
                </div>

                {/* Video Info Panel */}
                <div className="bg-slate-900 p-5 text-white shrink-0">
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono border-b border-slate-800 pb-2 mb-2">
                    <span className="flex items-center gap-1 uppercase tracking-widest font-black text-amber-500">
                      <Tv className="w-3.5 h-3.5" />
                      INSTAGRAM REEL
                    </span>
                    <span>•</span>
                    <span className="font-bold">{selectedVideo.matchInfo}</span>
                  </div>
                  <h3 className="font-display font-black text-sm text-white leading-snug">
                    {selectedVideo.title}
                  </h3>
                </div>

              </div>
            ) : (
              /* Standard Landscape Player */
              <div className="bg-black rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-slate-800 transform transition-all animate-fade-in-up relative">
                
                {/* Close Button overlay */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer z-30 shadow-md"
                  aria-label="Close Video Overlay"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Responsive Video Aspect Box */}
                <div className="relative w-full aspect-video">
                  <iframe
                    title={selectedVideo.title}
                    src={selectedVideo.videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-0"
                  />
                </div>

                {/* Video Info Panel */}
                <div className="bg-slate-900 p-6 text-white space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono border-b border-slate-800 pb-3 mb-2">
                    <span className="flex items-center gap-1.5 uppercase tracking-widest font-black text-accent">
                      <Video className="w-4 h-4" />
                      HIL REPLAY
                    </span>
                    <span>•</span>
                    <span className="font-bold">{selectedVideo.matchInfo}</span>
                    <span>•</span>
                    <span>Duration: {selectedVideo.duration}</span>
                  </div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-white">
                    {selectedVideo.title}
                  </h3>
                </div>

              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
