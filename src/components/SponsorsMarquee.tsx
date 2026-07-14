import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Sparkles, Star } from 'lucide-react';

interface Sponsor {
  name: string;
  role: string;
  logoText: string;
  accentColor: string;
  textColor: string;
}

const SPONSORS_LIST: Sponsor[] = [
  {
    name: "Odisha Tourism",
    role: "Global Title Sponsor",
    logoText: "ODISHA",
    accentColor: "bg-orange-600",
    textColor: "text-orange-600"
  },
  {
    name: "TATA Steel",
    role: "Academy & Grassroots Partner",
    logoText: "TATA",
    accentColor: "bg-blue-600",
    textColor: "text-blue-600"
  },
  {
    name: "Hero MotoCorp",
    role: "Official League Sponsor",
    logoText: "Hero",
    accentColor: "bg-rose-600",
    textColor: "text-rose-600"
  },
  {
    name: "Shiv Naresh",
    role: "Official Kit & Apparel Partner",
    logoText: "SHIV NARESH",
    accentColor: "bg-amber-600",
    textColor: "text-amber-600"
  },
  {
    name: "Indian Oil",
    role: "National Championship Patron",
    logoText: "IndianOil",
    accentColor: "bg-orange-500",
    textColor: "text-orange-500"
  },
  {
    name: "Sports Authority of India",
    role: "National Development Partner",
    logoText: "SAI",
    accentColor: "bg-indigo-600",
    textColor: "text-indigo-600"
  },
  {
    name: "Coal India",
    role: "Apex League Partner",
    logoText: "Coal India",
    accentColor: "bg-slate-800",
    textColor: "text-slate-800 dark:text-slate-200"
  },
  {
    name: "Amateur Soft Hockey Federation",
    role: "ASHFI Sanctioning Authority",
    logoText: "ASHFI",
    accentColor: "bg-emerald-600",
    textColor: "text-emerald-600"
  }
];

export default function SponsorsMarquee() {
  // Double the list to create a seamless infinite loop
  const doubledSponsors = [...SPONSORS_LIST, ...SPONSORS_LIST, ...SPONSORS_LIST];

  return (
    <section className="py-12 bg-slate-100/50 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-slate-800/80 overflow-hidden relative select-none">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950 pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950 pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 text-primary dark:text-accent animate-pulse" />
          <span className="text-[10px] font-mono font-black tracking-widest text-primary dark:text-accent uppercase">
            Official Alliances & Patrons
          </span>
        </div>
        <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-wider">
          Supporting hockey growth, grassroots academies & soft safety standards
        </p>
      </div>

      {/* INFINITE SCROLLING MARQUEE CONTAINER */}
      <div className="relative flex items-center overflow-x-hidden w-full">
        <motion.div 
          className="flex gap-8 whitespace-nowrap px-4"
          animate={{ x: [0, -1920] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          whileHover={{ x: [0, -1920] }} // keep animating even on hover but we can support CSS animation too
        >
          {doubledSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-4 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 px-6 py-4.5 rounded-2xl shadow-sm hover:border-primary dark:hover:border-accent hover:shadow-md transition-all duration-300 shrink-0 min-w-[280px]"
            >
              {/* Virtual Badge Logo */}
              <div className="flex items-center justify-center h-10 w-16 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 font-display font-black text-xs px-2 text-center uppercase tracking-wider shrink-0 shadow-inner">
                <span className={sponsor.textColor}>{sponsor.logoText}</span>
              </div>
              
              {/* Sponsor Details */}
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono font-black text-slate-800 dark:text-slate-100 tracking-tight">
                  {sponsor.name}
                </span>
                <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  {sponsor.role}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
