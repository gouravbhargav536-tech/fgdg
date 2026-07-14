import React, { useState } from 'react';
import { Shirt, Sparkles, Shield, Layers, HelpCircle, Flame, Eye, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Path to the official jersey image
const JERSEY_IMAGE_URL = 'https://i.postimg.cc/sDR4cyDW/Chat-GPT-Image-Jul-14-2026-03-17-05-PM.png';

export default function OfficialJerseyShowcase() {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      id: 0,
      title: 'Royal Lion Crest',
      description: 'The left chest features our prestigious royal roaring lion emblem in fiery orange and gold gradient, symbolizing pride, power, and peak competitive spirit.',
      icon: <Flame className="w-5 h-5 text-amber-500" />,
      tag: 'EMBOSSED BADGE'
    },
    {
      id: 1,
      title: 'Geometric Lightning Pattern',
      description: 'High-definition sublimated white and light-grey geometric bolt pattern. Form-fitting sharp triangles mimic speed, agility, and dynamic gameplay.',
      icon: <Layers className="w-5 h-5 text-blue-500" />,
      tag: 'SUBLIMATED FABRIC'
    },
    {
      id: 2,
      title: 'Matte Black Polo Collar',
      description: 'Classic ribbed polo collar with a refined buttoned placket. Crafted from sweat-resistant premium fabric to maintain form and breathability.',
      icon: <Shirt className="w-5 h-5 text-purple-500" />,
      tag: 'PREMIUM TAILORING'
    },
    {
      id: 3,
      title: 'Performance Raglan Sleeves',
      description: 'Durable solid black raglan sleeves. Ergonomically stitched to allow full range of motion for high-intensity, lightning-fast hockey stick movements.',
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
      tag: 'ACTIVE FIT'
    }
  ];

  const specs = [
    'Moisture-Wicking AeroDry™ Technology',
    '85% Polyester / 15% Elastane Blended Mesh',
    'Reinforced dual-lock seams for high physical durability',
    'Eco-friendly non-toxic fade-resistant inks'
  ];

  return (
    <section id="official-jersey" className="py-24 bg-slate-900 text-white overflow-hidden relative border-t border-slate-850">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-black tracking-widest text-blue-400 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            OFFICIAL MATCHWEAR
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            The Soft Hockey League Jersey
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            Engineered for high performance, breathability, and aesthetic power. Our signature white-and-grey geometric jersey pairs premium athletic styling with lightweight, modern utility.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Premium Mockup Display (lg:col-span-7) */}
          <div className="lg:col-span-7 relative flex justify-center">
            {/* Interactive Image Frame */}
            <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 p-2 shadow-2xl group transition-all duration-300">
              {/* Inner subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none z-10" />
              
              <img
                src={JERSEY_IMAGE_URL}
                alt="Official League Jersey Front and Back Mockup View"
                className="w-full h-auto object-cover rounded-2xl drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Image Label Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-slate-900/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 text-xs font-mono">
                <span className="text-white font-bold tracking-wider">OFFICIAL KIT DESIGN</span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-blue-400" /> High-Definition Rendering
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Detailed Features Accordion (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-white tracking-tight">
                Design Innovations & Details
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Click any key feature below to inspect the specialized material technology and craftsmanship of the official soft hockey apparel kit.
              </p>
            </div>

            {/* Features Accordion Card Stack */}
            <div className="space-y-3.5">
              {features.map((item) => {
                const isActive = activeFeature === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveFeature(item.id)}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-blue-500/50 shadow-lg'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-blue-500/20' : 'bg-slate-800'}`}>
                          {item.icon}
                        </div>
                        <div>
                          <span className="text-[9px] font-black tracking-widest font-mono text-blue-400 block mb-0.5">
                            {item.tag}
                          </span>
                          <h4 className="font-display font-extrabold text-sm text-white">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isActive ? 'rotate-90 text-blue-400' : ''}`} />
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-slate-300 leading-relaxed pl-1">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Core Tech specs */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3">
              <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest block">
                TECHNICAL SPECIFICATIONS
              </span>
              <ul className="space-y-2">
                {specs.map((spec, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
