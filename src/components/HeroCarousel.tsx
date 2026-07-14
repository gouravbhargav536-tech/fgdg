import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const SLIDE_IMAGES = [
  "https://i.postimg.cc/c4pLK2rj/618820825-17901586434202793-2529525522784587047-n.jpg", // Image #1
  "https://i.postimg.cc/j2ztydwW/656682566-17911828710358657-8477715699531415622-n.jpg", // Image #2
  "https://i.postimg.cc/7PgkshhH/547912671-17887090557358657-4724207013965989442-n.jpg", // Image #3
  "https://i.postimg.cc/d1PfrR8L/Screenshot-2026-07-14-124225.png"  // Image #4: First/Default shown on page load
];

const SLIDE_TITLES = [
  "Intense Turf Action & Skill Showdown",
  "Championship Contenders Prepare for Battle",
  "National Pride & Elite Sportsmanship",
  "Official Launch of ISHL 2026"
];

const SLIDE_SUBTITLES = [
  "Players exhibiting world-class ball control and athletic dominance",
  "Men & Women's teams ready to capture the prestigious national shield",
  "A fast-paced safe action sport emerging from the vibrant pink city of Jaipur",
  "Soft Hockey league reaches new historic milestone under Amateur Soft Hockey Federation of India"
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(3); // Initialize with index 3 (Image #4) to show it first on page load
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  
  // Touch swipe support states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance sliding logic every 4 seconds
  useEffect(() => {
    if (isPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % SLIDE_IMAGES.length);
      }, 4000);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isPlaying]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % SLIDE_IMAGES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Touch Swipe Handlers for Mobile responsiveness
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50; // swipe left -> next slide
    const isRightSwipe = distance < -50; // swipe right -> prev slide

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section 
      id="hero-carousel" 
      className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden bg-slate-950 select-none group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with smooth crossfade */}
      <div className="absolute inset-0 w-full h-full">
        {SLIDE_IMAGES.map((imgUrl, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-800 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={imgUrl}
                alt={`League Slide ${index + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000"
              />
              {/* Dark gradient overlay bottom-focused for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
            </div>
          );
        })}
      </div>

      {/* Slide Text Details Overlay (placed bottom-left/center for extreme polish) */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 max-w-xl text-left pointer-events-none transition-all duration-300">
        <div className="space-y-2 animate-fade-in-up">
          <span className="inline-block px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-mono uppercase font-black tracking-widest">
            HOCKEY INDIA LEAGUE
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-black text-white uppercase tracking-tight drop-shadow-md">
            {SLIDE_TITLES[activeIndex]}
          </h2>
          <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed drop-shadow-sm">
            {SLIDE_SUBTITLES[activeIndex]}
          </p>
        </div>
      </div>

      {/* Manual Navigation Arrows */}
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center border border-white/10 shadow-lg cursor-pointer transition-all active:scale-90 opacity-100 md:opacity-0 md:group-hover:opacity-100"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center border border-white/10 shadow-lg cursor-pointer transition-all active:scale-90 opacity-100 md:opacity-0 md:group-hover:opacity-100"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slide Controllers: Pause/Play and Dot indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex items-center justify-center gap-4">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white cursor-pointer transition-all text-[10px]"
          title={isPlaying ? "Pause Autoplay" : "Play Autoplay"}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {SLIDE_IMAGES.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                  isActive ? 'w-6 bg-amber-500' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
