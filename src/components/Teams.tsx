import React, { useState } from 'react';
import { Shield, Search, X } from 'lucide-react';
import { motion } from 'motion/react';
import ImageBanner from './ImageBanner';

interface TeamsProps {
  division: 'Men' | 'Women';
  setDivision: (val: 'Men' | 'Women') => void;
}

// ISHL Team Data Structure
interface ISHLTeam {
  id: string;
  name: string;
  group: 'A' | 'B' | 'Women';
  logoUrl: string;
  bannerUrl: string;
  players: { name: string; position: string; photoUrl: string }[];
  achievements: string[];
}

const ISHL_TEAMS: ISHLTeam[] = [
  { id: 'upr', name: 'UP Riders', group: 'A', logoUrl: 'https://i.postimg.cc/s2bJdvbf/Screenshot-2026-07-15-141449.png', bannerUrl: '', players: [], achievements: [] },
  { id: 'rcr', name: 'Royal Challenger Rajasthan', group: 'A', logoUrl: 'https://i.postimg.cc/MZyCNvWZ/Screenshot-2026-07-15-105918.png', bannerUrl: '', players: [], achievements: ['🥈 ISHL 2024 Men\'s Runners-up'] },
  { id: 'mdr', name: 'Maharashtra Dragon', group: 'A', logoUrl: 'https://i.postimg.cc/DfLhhxcy/Screenshot-2026-07-15-105946.png', bannerUrl: '', players: [], achievements: [] },
  { id: 'dft', name: 'Delhi Fighter', group: 'A', logoUrl: 'https://i.postimg.cc/qBPWX77X/Screenshot-2026-07-15-141145.png', bannerUrl: '', players: [], achievements: [] },
  { id: 'hbl', name: 'Haryana Bull', group: 'B', logoUrl: 'https://i.postimg.cc/Hnw1tLLk/Screenshot-2026-07-15-110005.png', bannerUrl: '', players: [], achievements: [] },
  { id: 'pls', name: 'Punjab Lions', group: 'B', logoUrl: 'https://i.postimg.cc/5thrkMTB/Screenshot-2026-07-15-105901.png', bannerUrl: '', players: [], achievements: [] },
  { id: 'psu', name: 'Power Strikers Uttarakhand', group: 'B', logoUrl: 'https://i.postimg.cc/8zPghNgz/Screenshot-2026-07-15-105938.png', bannerUrl: '', players: [], achievements: [] },
  { id: 'soc', name: 'Star of Chandigarh', group: 'B', logoUrl: 'https://i.postimg.cc/3RWz94m5/Screenshot-2026-07-15-141154.png', bannerUrl: '', players: [], achievements: ['🏆 ISHL 2024 Men\'s Champions — beat Royal Challenger Rajasthan 3-2 in the final'] },
];

function TeamCard({ team }: { team: ISHLTeam }) {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all space-y-4 select-none"
    >
      <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center overflow-hidden mx-auto shadow-inner">
        {team.logoUrl ? (
          <img src={team.logoUrl} alt={team.name} className="w-full h-full object-contain p-2" />
        ) : (
          <Shield className="text-slate-400 w-8 h-8" />
        )}
      </div>
      <div className="text-center">
        <h4 className="font-display font-black text-slate-900 dark:text-white uppercase text-sm leading-snug line-clamp-2 min-h-[40px] flex items-center justify-center">
          {team.name}
        </h4>
        <span className="text-[10px] font-mono font-black text-primary dark:text-accent bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block mt-2">
          Group {team.group}
        </span>
      </div>
    </motion.div>
  );
}

export default function Teams({ division, setDivision }: TeamsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'franchises' | 'board'>('franchises');

  const sectionClass = "py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 text-slate-900 dark:text-white";

  return (
    <section id="teams" className={sectionClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* View Selection Tabs */}
        <div className="flex justify-center mb-12 border-b border-slate-200/50 dark:border-slate-800/50 pb-px">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('franchises')}
              className={`pb-4 text-xs sm:text-sm font-black uppercase tracking-widest border-b-2 cursor-pointer transition-all ${
                activeTab === 'franchises'
                  ? 'border-primary text-primary dark:border-accent dark:text-accent font-black'
                  : 'border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-600'
              }`}
            >
              ISHL Teams
            </button>
            <button
              onClick={() => setActiveTab('board')}
              className={`pb-4 text-xs sm:text-sm font-black uppercase tracking-widest border-b-2 cursor-pointer transition-all ${
                activeTab === 'board'
                  ? 'border-primary text-primary dark:border-accent dark:text-accent font-black'
                  : 'border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-600'
              }`}
            >
              Office Bearers
            </button>
          </div>
        </div>

        <div className="mb-12">
            <ImageBanner url="https://i.postimg.cc/mDmh3Rmh/Screenshot-2026-07-15-113854.png" caption="ASHFI Teams Overview" />
        </div>

        {activeTab === 'board' ? (
          <div className="space-y-16">
            
            {/* Core Leadership Grid */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-primary dark:text-accent px-3 py-1 rounded-full bg-primary/10 dark:bg-accent/10">
                  Core Executive Council
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-slate-900 dark:text-white">
                  Federation Leadership
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* President */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-md flex flex-col">
                  <div className="h-64 bg-slate-950 overflow-hidden relative">
                    <img 
                      src="https://i.postimg.cc/2yp0TFqd/Screenshot-2026-07-15-104537.png" 
                      alt="Dr. Ashutosh Pant" 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-black text-yellow-600 dark:text-yellow-400 uppercase tracking-widest bg-yellow-50 dark:bg-yellow-950/45 px-2 py-0.5 rounded">
                        National President
                      </span>
                      <h4 className="font-display font-black text-lg text-slate-900 dark:text-white pt-1">
                        Dr. Ashutosh Pant
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-bold leading-relaxed">
                        Leading the Federation with visionary governance, scaling national tournaments and corporate alignments.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 font-bold">
                      ASHFI Central Board
                    </div>
                  </div>
                </div>

                {/* Founder & Secretary */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-md flex flex-col">
                  <div className="h-64 bg-slate-950 overflow-hidden relative">
                    <img 
                      src="https://i.postimg.cc/L4b94Jc6/Screenshot-2026-07-15-105359.png" 
                      alt="Mr. Ramesh Singh" 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-black text-primary dark:text-accent uppercase tracking-widest bg-primary/10 dark:bg-accent/10 px-2.5 py-0.5 rounded">
                        Founder & Secretary General
                      </span>
                      <h4 className="font-display font-black text-lg text-slate-900 dark:text-white pt-1">
                        Mr. Ramesh Singh
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-bold leading-relaxed">
                        Pioneer and creator of Indian Soft Hockey, spearheading technical rules, equipment production, and development.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 font-bold">
                      Founder, ASHFI
                    </div>
                  </div>
                </div>

                {/* Joint Secretary / Technical Director */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-md flex flex-col">
                  <div className="h-64 bg-slate-950 overflow-hidden relative">
                    <img 
                      src="https://i.postimg.cc/ht9SKcRD/Screenshot-2026-07-15-121631.png" 
                      alt="Harshit Yadav" 
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-black text-green-600 dark:text-green-400 uppercase tracking-widest bg-green-50 dark:bg-green-950/45 px-2 py-0.5 rounded">
                        Joint Secretary & Technical Director
                      </span>
                      <h4 className="font-display font-black text-lg text-slate-900 dark:text-white pt-1">
                        Harshit Yadav
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-bold leading-relaxed">
                        Co-developer of the sport, structuring physical education curriculum guidelines and referee certification pathways.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 font-bold">
                      Rajasthan Representative
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ImageBanner url="https://i.postimg.cc/VLvXb7W3/Screenshot-2026-07-14-235936.png" caption="ASHFI Leadership" />

            {/* Vice Presidents (Office Bearers) */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-primary dark:text-accent px-3 py-1 rounded-full bg-primary/10 dark:bg-accent/10">
                  Zonal Management
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-slate-900 dark:text-white">
                  Office Bearers
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Mr. Devendra Kumar", role: "Vice President (North Zone)", state: "Uttar Pradesh" },
                  { name: "Dr. S. K. Sharma", role: "Vice President (West Zone)", state: "Maharashtra" },
                  { name: "Smt. Meenakshi Sundaram", role: "Vice President (South Zone)", state: "Karnataka" },
                  { name: "Mr. Rajeshwar Rao", role: "Vice President (East Zone)", state: "Odisha" }
                ].map((vp, idx) => (
                  <div key={idx} className="p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl shadow-sm text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent flex items-center justify-center mx-auto text-xl font-bold font-display">
                      {vp.name.split(' ').slice(-1)[0][0]}
                    </div>
                    <div>
                      <h4 className="font-display font-black text-sm text-slate-900 dark:text-white uppercase leading-none">{vp.name}</h4>
                      <p className="text-[10px] font-mono font-black text-primary dark:text-accent uppercase tracking-widest mt-1.5">{vp.role}</p>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 font-bold">
                      Zone State: {vp.state}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ImageBanner url="https://i.postimg.cc/QMT2NkPr/Screenshot-2026-07-15-000017.png" caption="Office Bearers" />

            {/* Committee Members */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-primary dark:text-accent px-3 py-1 rounded-full bg-primary/10 dark:bg-accent/10">
                  National Working Committee
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-slate-900 dark:text-white">
                  Committee Members
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Mr. Anil Kumar Yadav", role: "National Treasurer", state: "Delhi NCR" },
                  { name: "Smt. Priya Sen", role: "Executive Board Member", state: "West Bengal" },
                  { name: "Mr. Manpreet Singh Dhillon", role: "Joint Secretary / State Representative", state: "Punjab" },
                  { name: "Mr. K. Rangarajan", role: "Joint Secretary / State Representative", state: "Tamil Nadu" },
                  { name: "Dr. Amit Mukherjee", role: "Executive Board Member", state: "Assam" },
                  { name: "Smt. Sarita Choudhary", role: "Executive Board Member", state: "Haryana" }
                ].map((member, idx) => (
                  <div key={idx} className="p-5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/55 rounded-2xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center font-display font-black text-sm uppercase">
                      {member.name.split(' ').slice(-1)[0][0]}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-black text-xs text-slate-900 dark:text-white uppercase tracking-tight leading-none">{member.name}</h4>
                      <p className="text-[9px] font-mono font-black text-slate-500 uppercase tracking-widest">{member.role}</p>
                      <p className="text-[9px] font-mono text-slate-400 font-bold">Region: {member.state}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ImageBanner url="https://i.postimg.cc/HxGCbP5k/Screenshot-2026-07-14-235958.png" caption="Committee Members" />

          </div>
        ) : (
          <>
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest uppercase block text-accent dark:text-blue-400">
                  FRANCHISES
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-white">
                  Meet the Battle Teams
                </h2>
              </div>

              {/* Filtering & Search controls */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full md:w-auto">
                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search teams..."
                    className="pl-9 pr-4 py-2.5 border font-sans text-xs font-bold placeholder-slate-400 outline-none w-full sm:w-60 rounded-full shadow-sm bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 focus:border-accent"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>
            </div>


            {/* ISHL Teams Grid */}
            <div className="space-y-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {ISHL_TEAMS
                  .filter(team => team.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(team => (
                    <TeamCard key={team.id} team={team} />
                  ))}
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
