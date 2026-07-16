import React from 'react';
import { Trophy, Calendar, MapPin, Award, Star, Zap, Users, Flame, Shield, Target } from 'lucide-react';

interface TeamLogo {
  name: string;
  short: string;
  group: 'A' | 'B' | 'Women';
  color: string;
  logoUrl?: string;
}

const ISHL_TEAMS: TeamLogo[] = [
  // Group A
  { name: "UP Riders", short: "UPR", group: 'A', color: "bg-pink-600", logoUrl: "https://i.postimg.cc/s2bJdvbf/Screenshot-2026-07-15-141449.png" },
  { name: "Royal Challenger Rajasthan", short: "RCR", group: 'A', color: "bg-blue-600", logoUrl: "https://i.postimg.cc/MZyCNvWZ/Screenshot-2026-07-15-105918.png" },
  { name: "Maharashtra Dragon", short: "MHD", group: 'A', color: "bg-red-600", logoUrl: "https://i.postimg.cc/DfLhhxcy/Screenshot-2026-07-15-105946.png" },
  { name: "Delhi Fighter", short: "DLF", group: 'A', color: "bg-indigo-600", logoUrl: "https://i.postimg.cc/qBPWX77X/Screenshot-2026-07-15-141145.png" },
  // Group B
  { name: "Haryana Bull", short: "HRB", group: 'B', color: "bg-orange-600", logoUrl: "https://i.postimg.cc/Hnw1tLLk/Screenshot-2026-07-15-110005.png" },
  { name: "Punjab Lions", short: "PBL", group: 'B', color: "bg-yellow-600", logoUrl: "https://i.postimg.cc/5thrkMTB/Screenshot-2026-07-15-105901.png" },
  { name: "Power Strikers Uttarakhand", short: "PSU", group: 'B', color: "bg-teal-600", logoUrl: "https://i.postimg.cc/8zPghNgz/Screenshot-2026-07-15-105938.png" },
  { name: "Star of Chandigarh", short: "SOC", group: 'B', color: "bg-purple-600", logoUrl: "https://i.postimg.cc/3RWz94m5/Screenshot-2026-07-15-141154.png" }
];

export default function ISHL() {
  return (
    <section id="ishl" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-black tracking-widest text-primary uppercase dark:bg-accent/10 dark:border-accent/20 dark:text-accent">
            <Flame className="w-3.5 h-3.5" />
            INDIAN SOFT HOCKEY LEAGUE (ISHL)
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
            The Pinnacle Event: ISHL 2024
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Catch up on the elite national professional league that took place under lights at the pink city of Jaipur. High stakes, intense rivalries, and unmatched athletic display.
          </p>
        </div>

        {/* Quick League Card details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 border border-blue-500/20 shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                TOURNAMENT TIMEFRAME
              </span>
              <h4 className="font-display font-black text-base text-slate-900 dark:text-white mt-1 uppercase">
                December 9 – 12, 2024
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-bold">
                A highly packed 4-day double round-robin league culminating in a grand finals under lights.
              </p>
            </div>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-pink-500/10 text-pink-600 border border-pink-500/20 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                OFFICIAL ARENA VENUE
              </span>
              <h4 className="font-display font-black text-base text-slate-900 dark:text-white mt-1 uppercase">
                SMS Stadium Indoor Hall
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-bold">
                Sawai Mansingh Stadium Indoor Arena in Jaipur, Rajasthan. Fully equipped high-traction flat flooring.
              </p>
            </div>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                COMPETITION CLUBS
              </span>
              <h4 className="font-display font-black text-base text-slate-900 dark:text-white mt-1 uppercase">
                8 Franchises
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-bold">
                8 city-based professional team franchises competing across intense Group A & Group B brackets.
              </p>
            </div>
          </div>
        </div>

        {/* Finals Stand-out Panel */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-mono font-black text-yellow-300 uppercase tracking-widest block">
                GRAND FINALS CORNER & CHAMPIONS
              </span>
            </div>

            <div className="max-w-3xl pt-4">
              {/* Men's Finals */}
              <div className="space-y-4 bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80">
                <div className="inline-block px-2.5 py-1 rounded bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] font-mono font-bold uppercase">
                  ISHL Grand Championship Finals
                </div>
                <h3 className="font-display font-black text-xl tracking-tight text-white uppercase">
                  Star of Chandigarh vs Royal Challenger Rajasthan
                </h3>
                <div className="flex items-center justify-between font-mono text-2xl font-black text-white bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                  <span className="text-slate-400 text-sm">FINAL SCORE:</span>
                  <span className="text-yellow-400">3 — 2</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                  🏆 <strong className="text-white">Star of Chandigarh</strong> claimed the gold medal in an absolute thriller, matching precision coordination with last-second game-winning play.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* League Awards section */}
        <div className="space-y-6">
          <h3 className="font-display font-black text-lg text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span>Official Individual Excellence Awards</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-600 border border-yellow-500/20 flex items-center justify-center">
                  <Star className="w-5 h-5 fill-yellow-500" />
                </div>
                <h4 className="font-display font-black text-slate-900 dark:text-white uppercase text-sm tracking-tight">
                  Man of the Series
                </h4>
                <p className="font-display font-black text-2xl text-primary dark:text-accent">
                  Vishesh Kumar
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-mono font-bold uppercase text-slate-500">
                Performance: 8 Tournament Goals
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 border border-blue-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-display font-black text-slate-900 dark:text-white uppercase text-sm tracking-tight">
                  Best Goalkeeper
                </h4>
                <p className="font-display font-black text-2xl text-primary dark:text-accent">
                  Jothan Rai
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-mono font-bold uppercase text-slate-500">
                Representing: Nepal Falcons / National Team
              </div>
            </div>
          </div>
        </div>

        {/* Team logos/labels grid as requested */}
        <div className="space-y-6">
          <h3 className="font-display font-black text-lg text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span>ISHL Participating Franchises Grid</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {ISHL_TEAMS.map((team, tIdx) => (
              <div 
                key={tIdx}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 p-5 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all duration-300"
              >
                {/* Simulated high-visibility badge or logo */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden shrink-0 shadow ${team.logoUrl ? 'bg-white' : team.color}`}>
                  {team.logoUrl ? (
                    <img src={team.logoUrl} alt={team.name} className="w-full h-full object-contain p-1" />
                  ) : (
                    <span className="text-white font-mono font-black text-xs">{team.short}</span>
                  )}
                </div>
                <div>
                  <h4 className="font-display font-black text-slate-900 dark:text-white text-xs leading-snug">
                    {team.name}
                  </h4>
                  <span className="text-[9px] font-mono font-black text-slate-400 block uppercase tracking-widest mt-0.5">
                    Group {team.group}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
