import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Image as ImageIcon, X, ArrowRight, Star, Heart, Compass } from 'lucide-react';
import ImageBanner from './ImageBanner';
import SponsorsMarquee from './SponsorsMarquee';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Camps' | 'Matches' | 'Schools' | 'International';
  url: string;
  description: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g-user-1',
    title: "National Soft Hockey Championship Clash",
    category: "Matches",
    url: "https://i.postimg.cc/GtpSZFnd/Screenshot-2026-07-14-234819.png",
    description: "Elite athletes executing high-speed tactical passes with specialized polymer compound sticks during the national matches."
  },
  {
    id: 'g-user-2',
    title: "Indian Soft Hockey League (ISHL) Play",
    category: "Matches",
    url: "https://i.postimg.cc/mDVTYyS9/Screenshot-2026-07-15-000420.png",
    description: "Intense gameplay action under spotlights at Sawai Mansingh Stadium, showcasing professional coordination and fast-paced moves."
  },
  {
    id: 'g-user-3',
    title: "Grassroots Development & School Clinic",
    category: "Schools",
    url: "https://i.postimg.cc/WzJfN2zS/Screenshot-2026-07-15-000944.png",
    description: "Primary school students receiving instructions on non-contact play, agility, and fundamental soft hockey sticks positioning."
  },
  {
    id: 'g-user-4',
    title: "State Referee and Coaches Alignment Camp",
    category: "Camps",
    url: "https://i.postimg.cc/4xMPdCCD/Screenshot-2026-07-15-001337.png",
    description: "Official coaches and field referees coming together to standardize rulebooks, penalty cards, and technical zone boundaries."
  },
  {
    id: 'g-user-5',
    title: "South Asian Bilateral Friendship Cup",
    category: "International",
    url: "https://i.postimg.cc/YqrbDfzM/Screenshot-2026-07-15-001348.png",
    description: "The historical international delegation and ASHFI India team gathering before high-stakes cross-border friendly matches."
  },
  {
    id: 'g-user-6',
    title: "Elite Team Pre-Match Lineup",
    category: "Matches",
    url: "https://i.postimg.cc/YqrbDfzM/Screenshot-2026-07-15-001348.png",
    description: "National selection players showing sportsmanship and solidarity before commencing the championship game."
  },
  {
    id: 'g-user-7',
    title: "School Sports Affiliation Campaign",
    category: "Schools",
    url: "https://i.postimg.cc/WzJfN2zS/Screenshot-2026-07-15-000944.png",
    description: "Interactive session establishing state-wide primary and high school tournaments across over 31+ states."
  }
];


export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'All' | 'Camps' | 'Matches' | 'Schools' | 'International'>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_DATA.filter(item => {
    if (activeTab === 'All') return true;
    return item.category === activeTab;
  });

  return (
    <section id="gallery" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section 1: Event Gallery */}
        <div id="event-gallery" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-black tracking-widest text-primary uppercase dark:bg-accent/10 dark:border-accent/20 dark:text-accent">
              <Camera className="w-3.5 h-3.5" />
              OFFICIAL PHOTO GALLERY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
              Event Gallery
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 pt-6 select-none">
            {(['All', 'Camps', 'Matches', 'Schools', 'International'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/85 hover:border-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative rounded-2xl overflow-hidden h-64 border border-slate-200/50 dark:border-slate-800/80 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-slate-950"
                >
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-5" />
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
                    <span className="text-[9px] font-mono font-black uppercase tracking-widest text-primary dark:text-accent bg-white/10 dark:bg-slate-950/60 border border-white/10 px-2 py-0.5 rounded inline-block">
                      {item.category}
                    </span>
                    <h4 className="font-display font-black text-sm tracking-tight leading-tight uppercase group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <ImageBanner url="https://i.postimg.cc/WzJfN2zS/Screenshot-2026-07-15-000944.png" caption="Action Highlights" />

        {/* Section 2: Media Coverage */}
        <div id="media-coverage" className="space-y-12">
            <h2 className="font-display text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase text-center">Media Coverage</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Media coverage items placeholders */}
            </div>
        </div>

        <ImageBanner url="https://i.postimg.cc/4xMPdCCD/Screenshot-2026-07-15-001337.png" caption="In the Press" />

        {/* Section 3: Our Sponsors */}
        <div id="our-sponsors" className="space-y-12">
            <h2 className="font-display text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase text-center">Our Sponsors</h2>
            <SponsorsMarquee />
        </div>
        
        {/* Detail Modal ... */}

        {/* Detail Modal lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden max-w-3xl w-full border border-slate-100 dark:border-slate-800 shadow-2xl relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/40 hover:bg-slate-950/60 text-white transition-colors cursor-pointer z-10"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col md:flex-row h-[500px]">
                  {/* Left: Media */}
                  <div className="md:w-3/5 bg-black relative h-1/2 md:h-full">
                    <img 
                      src={selectedItem.url} 
                      alt={selectedItem.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right: Info */}
                  <div className="md:w-2/5 p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono font-black text-primary dark:text-accent uppercase tracking-widest block bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 px-2.5 py-1 rounded-full inline-block">
                        {selectedItem.category} Category
                      </span>
                      <h3 className="font-display font-black text-xl text-slate-900 dark:text-white leading-tight uppercase">
                        {selectedItem.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
                        {selectedItem.description}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-slate-400">
                        Amateur Soft Hockey Federation
                      </span>
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer"
                      >
                        Close View
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
