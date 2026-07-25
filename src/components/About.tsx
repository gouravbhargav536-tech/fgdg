import React from 'react';
import { Target, Users, Shield, Award, Map, AlertTriangle, TableProperties } from 'lucide-react';
import ImageBanner from './ImageBanner';

interface AgeGroup {
  category: string;
  ageLimit: string;
  classes: string;
}

const AGE_GROUPS: AgeGroup[] = [
  { category: "Mini", ageLimit: "Under 11", classes: "Class 3rd to 5th" },
  { category: "Sub-Junior", ageLimit: "Under 14", classes: "Class 6th to 8th" },
  { category: "Junior", ageLimit: "Under 17", classes: "Class 9th to 10th" },
  { category: "Senior", ageLimit: "Under 19", classes: "Class 11th to 12th" }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-black tracking-widest text-primary uppercase dark:bg-accent/10 dark:border-accent/20 dark:text-accent">
                <Shield className="w-3.5 h-3.5" />
                ABOUT SOFT HOCKEY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
                Born in Jaipur, Made in India
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-semibold">
              <strong>Soft Hockey</strong> is a completely homegrown Indian sport that emerged in the pink city of Jaipur in the year 2019. It took 2 years of continuous evaluation to be fully embodied. This safe, fast-paced game was created by <strong className="text-primary dark:text-accent">Mr. Ramesh Singh</strong> and <strong className="text-primary dark:text-accent">Harshit Yadav</strong>, two passionate students of the Department of Physical Education, University of Rajasthan.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-semibold">
              With production starting under the direction and supervision of Mr. Ramesh Singh, the game is completely made in India. To establish structured administration, the <strong className="text-slate-900 dark:text-white">Amateur Soft Hockey Federation of India (ASHFI)</strong> was established on August 15, 2021. Today, the sport is played across 28 States & UTs, 8,000+ primary schools, 5,000+ senior secondary schools, and recognized by 12+ leading universities.
            </p>

            <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Official Website:</span>
              <a 
                href="https://indiansofthockeyleague.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary dark:text-accent hover:underline font-black"
              >
                https://indiansofthockeyleague.com/
              </a>
            </div>
            
            <ImageBanner url="https://i.postimg.cc/VLvXb7W3/Screenshot-2026-07-14-235936.png" caption="Playing Court & Rules" />
          </div>

          {/* Right quick stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 space-y-2">
              <span className="text-slate-400 text-[10px] font-mono font-black uppercase">States & UTs Coverage</span>
              <p className="font-display font-black text-3xl text-primary dark:text-accent">28</p>
              <p className="text-[10px] text-slate-500 font-semibold">Active state federations & associations</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 space-y-2">
              <span className="text-slate-400 text-[10px] font-mono font-black uppercase">Primary Schools</span>
              <p className="font-display font-black text-3xl text-primary dark:text-accent">8000+</p>
              <p className="text-[10px] text-slate-500 font-semibold">Deploying soft hockey clinics & games</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 space-y-2">
              <span className="text-slate-400 text-[10px] font-mono font-black uppercase">Senior Schools</span>
              <p className="font-display font-black text-3xl text-primary dark:text-accent">5000+</p>
              <p className="text-[10px] text-slate-500 font-semibold">With competitive high-school tournaments</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 space-y-2">
              <span className="text-slate-400 text-[10px] font-mono font-black uppercase">Universities</span>
              <p className="font-display font-black text-3xl text-primary dark:text-accent">12+</p>
              <p className="text-[10px] text-slate-500 font-semibold">Providing sports quota and course credits</p>
            </div>
          </div>
        </div>

        {/* Game Rules breakdown */}
        <div className="space-y-8">
          <h3 className="font-display font-black text-xl text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            <span>Official Game Specifications & Field Rules</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 border border-blue-500/20 flex items-center justify-center">
                <Map className="w-5 h-5" />
              </div>
              <h4 className="font-display font-black text-sm text-slate-900 dark:text-white uppercase">
                Court Dimensions
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-bold">
                The standard playing field measures <strong className="text-slate-900 dark:text-white">40 meters in length by 20 meters in width</strong>. It can be set up on cement courts, wooden indoor floors, or grass fields, making it highly versatile.
              </p>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-600 border border-pink-500/20 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-display font-black text-sm text-slate-900 dark:text-white uppercase">
                Team Composition
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-bold">
                Each team registers <strong className="text-slate-900 dark:text-white">12 players</strong>. 6 players come on the field at a time (including 1 designated Goalkeeper) and 6 remain in the reserve block with rolling substitution rules.
              </p>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-display font-black text-sm text-slate-900 dark:text-white uppercase">
                Goal & D-Area Boundaries
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-bold">
                The goalkeeper must remain inside the designated semi-circular <strong className="text-slate-900 dark:text-white">D-area</strong>. Goals can only be scored from outside the D-area. If an opposition player enters the D-area, it is flagged as a technical foul.
              </p>
            </div>
          </div>
        </div>

        {/* Cards discipline & Age Group Table split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Card Discipline (Left) */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-150 dark:border-slate-850 space-y-6">
            <h4 className="font-display font-black text-base text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <span>Card Discipline & Penalty Mechanics</span>
            </h4>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-4 h-6 rounded bg-emerald-500 shrink-0 shadow-sm border border-emerald-600" />
                <div>
                  <h5 className="font-display font-black text-xs text-slate-900 dark:text-white uppercase">Green Card</h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mt-0.5">
                    An official warning issued by the field umpire for initial rough handling or technical boundary encroachments.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-t border-slate-200/50 dark:border-slate-800/50 pt-4">
                <div className="w-4 h-6 rounded bg-yellow-400 shrink-0 shadow-sm border border-yellow-500" />
                <div>
                  <h5 className="font-display font-black text-xs text-slate-900 dark:text-white uppercase">Yellow Card</h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mt-0.5">
                    Temporary suspension from the game for <strong className="text-slate-800 dark:text-slate-200">2 minutes</strong>. The team must play with 5 players during this suspension period.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-t border-slate-200/50 dark:border-slate-800/50 pt-4">
                <div className="w-4 h-6 rounded bg-red-600 shrink-0 shadow-sm border border-red-700" />
                <div>
                  <h5 className="font-display font-black text-xs text-slate-900 dark:text-white uppercase">Red Card</h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mt-0.5">
                    Permanent suspension from the match for dangerous tackles or extreme unsportsmanlike behavior. No reserve substitutes are allowed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Age Group Table (Right) */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-150 dark:border-slate-850 space-y-6">
            <h4 className="font-display font-black text-base text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
              <TableProperties className="w-5 h-5 text-primary" />
              <span>Official Age Group Brackets & Class Matrix</span>
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-mono text-[10px] uppercase font-black">
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Age Limit</th>
                    <th className="py-3 px-4">Class Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-semibold text-slate-800 dark:text-slate-200">
                  {AGE_GROUPS.map((group, gIdx) => (
                    <tr key={gIdx} className="hover:bg-slate-100/50 dark:hover:bg-slate-900/40 transition-colors">
                      <td className="py-4 px-4 font-display font-black text-primary dark:text-accent uppercase">
                        {group.category}
                      </td>
                      <td className="py-4 px-4 font-mono">
                        {group.ageLimit}
                      </td>
                      <td className="py-4 px-4 text-slate-500">
                        {group.classes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800 text-[10px] text-slate-500 text-center font-bold">
              * Official certification of age is mandatory via municipal birth registration certificate or board marksheets.
            </div>
            
            <ImageBanner url="https://i.postimg.cc/QMT2NkPr/Screenshot-2026-07-15-000017.png" caption="Referee Signals" />
          </div>

        </div>
        
        <ImageBanner url="https://i.postimg.cc/HxGCbP5k/Screenshot-2026-07-14-235958.png" caption="Official Match Setup" />

      </div>
    </section>
  );
}
