import React, { useState } from 'react';
import { TEAMS } from '../data';
import { Team } from '../types';
import { 
  Shield, MapPin, User, Calendar, X, Star, Search, Award, 
  Crown, Swords, Zap, Flame, Target, Sparkles, Heart, Trophy, Compass, Activity 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TeamsProps {
  division: 'Men' | 'Women';
  setDivision: (val: 'Men' | 'Women') => void;
}

interface Player {
  name: string;
  jersey: number;
  role: 'Forward' | 'Midfielder' | 'Defender' | 'Goalkeeper';
  isCaptain?: boolean;
  specialty: string;
  rating: number; // 1-5 stars
  matches: number;
  goals?: number;
  assists?: number;
  saves?: number; // for Goalkeepers
}

// Highly styled Google material concentric circular sports badge
function GoogleTeamIcon({ teamId, shortName, size = 'md' }: { teamId: string; shortName: string; size?: 'sm' | 'md' | 'lg' }) {
  const getIcon = () => {
    switch (teamId) {
      case 'm1': return <Trophy className="text-pink-500 shrink-0" />;
      case 'm2': return <Crown className="text-blue-500 shrink-0" />;
      case 'm3': return <Shield className="text-red-500 shrink-0" />;
      case 'm4': return <Zap className="text-cyan-500 shrink-0" />;
      case 'm5': return <Swords className="text-amber-500 shrink-0" />;
      case 'm6': return <Flame className="text-orange-500 shrink-0" />;
      case 'w1': return <Crown className="text-fuchsia-500 shrink-0" />;
      case 'w2': return <Target className="text-emerald-500 shrink-0" />;
      case 'w3': return <Sparkles className="text-purple-500 shrink-0" />;
      case 'w4': return <Compass className="text-blue-400 shrink-0" />;
      case 'w5': return <Heart className="text-rose-500 shrink-0" />;
      case 'w6': return <Star className="text-yellow-500 shrink-0" />;
      default: return <Activity className="text-slate-400 shrink-0" />;
    }
  };

  const dims = size === 'sm' ? 'w-10 h-10 text-[10px]' : size === 'lg' ? 'w-20 h-20 text-lg' : 'w-16 h-16 text-sm';
  const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6';

  return (
    <div className={`relative ${dims} flex items-center justify-center select-none shrink-0`}>
      {/* Outer segmented ring in signature Google brand colors: Blue, Red, Yellow, Green */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 animate-spin-slow" viewBox="0 0 36 36">
        {/* Blue Segment */}
        <circle cx="18" cy="18" r="16" fill="none" stroke="#4285F4" strokeWidth="2.5" strokeDasharray="25 75" strokeDashoffset="0" />
        {/* Red Segment */}
        <circle cx="18" cy="18" r="16" fill="none" stroke="#EA4335" strokeWidth="2.5" strokeDasharray="25 75" strokeDashoffset="-25" />
        {/* Yellow Segment */}
        <circle cx="18" cy="18" r="16" fill="none" stroke="#FBBC05" strokeWidth="2.5" strokeDasharray="25 75" strokeDashoffset="-50" />
        {/* Green Segment */}
        <circle cx="18" cy="18" r="16" fill="none" stroke="#34A853" strokeWidth="2.5" strokeDasharray="25 75" strokeDashoffset="-75" />
      </svg>
      
      {/* Inner circular canvas with crisp modern badge icon */}
      <div className="absolute inset-[3px] rounded-full bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center shadow-md border border-slate-200/50 dark:border-slate-800/50">
        <div className={`${iconSize} drop-shadow`}>{getIcon()}</div>
        <span className="font-display font-black text-[9px] tracking-tight text-slate-800 dark:text-slate-200 uppercase mt-0.5 leading-none">
          {shortName}
        </span>
      </div>
    </div>
  );
}

export default function Teams({ division, setDivision }: TeamsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const filteredTeams = TEAMS
    .filter(t => t.category === division)
    .filter(t => 
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortName.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // High fidelity detailed team rosters database
  const TEAM_ROSTERS: Record<string, Player[]> = {
    m1: [
      { name: 'Sardar Singh', jersey: 8, role: 'Midfielder', isCaptain: true, specialty: 'Elite Playmaker', rating: 5, matches: 14, goals: 3, assists: 11 },
      { name: 'Rupinder Pal Singh', jersey: 3, role: 'Defender', specialty: 'Drag-flick Specialist', rating: 5, matches: 14, goals: 9, assists: 2 },
      { name: 'Manuel Brunet', jersey: 14, role: 'Midfielder', specialty: 'Tough Tackler', rating: 4, matches: 12, goals: 1, assists: 4 },
      { name: 'Harjeet Singh', jersey: 10, role: 'Forward', specialty: 'Speed Dribbler', rating: 4, matches: 14, goals: 6, assists: 5 },
      { name: 'Vincent Vanasch', jersey: 1, role: 'Goalkeeper', specialty: 'The Wall', rating: 5, matches: 14, saves: 58 }
    ],
    m2: [
      { name: 'Moritz Fürste', jersey: 21, role: 'Midfielder', isCaptain: true, specialty: 'Championship Veteran', rating: 5, matches: 14, goals: 4, assists: 9 },
      { name: 'Lalit Upadhyay', jersey: 9, role: 'Forward', specialty: 'Goal Poacher', rating: 5, matches: 14, goals: 11, assists: 3 },
      { name: 'Aran Zalewski', jersey: 16, role: 'Midfielder', specialty: 'Midfield Controller', rating: 4, matches: 13, goals: 2, assists: 6 },
      { name: 'David Harte', jersey: 30, role: 'Goalkeeper', specialty: 'Agile Shot-stopper', rating: 5, matches: 14, saves: 64 },
      { name: 'Dharamvir Singh', jersey: 11, role: 'Defender', specialty: 'Intercept Specialist', rating: 4, matches: 12, goals: 0, assists: 3 }
    ],
    m3: [
      { name: 'Mark Knowles', jersey: 9, role: 'Defender', isCaptain: true, specialty: 'Defensive Anchor', rating: 5, matches: 13, goals: 1, assists: 5 },
      { name: 'Sardar Singh Jr.', jersey: 7, role: 'Midfielder', specialty: 'Pace Generator', rating: 4, matches: 14, goals: 2, assists: 8 },
      { name: 'SV Sunil', jersey: 24, role: 'Forward', specialty: 'Sprint Winger', rating: 5, matches: 14, goals: 8, assists: 7 },
      { name: 'Jaap Stockmann', jersey: 12, role: 'Goalkeeper', specialty: 'Penalty Shootout King', rating: 5, matches: 14, saves: 71 },
      { name: 'Varun Kumar', jersey: 4, role: 'Defender', specialty: 'Defensive Block', rating: 4, matches: 14, goals: 3, assists: 1 }
    ],
    m4: [
      { name: 'Manpreet Singh', jersey: 7, role: 'Midfielder', isCaptain: true, specialty: 'Inspirational General', rating: 5, matches: 14, goals: 5, assists: 12 },
      { name: 'Ashley Jackson', jersey: 18, role: 'Forward', specialty: 'Set-piece Specialist', rating: 5, matches: 14, goals: 12, assists: 4 },
      { name: 'Birendra Lakra', jersey: 28, role: 'Defender', specialty: 'Tactical Interceptor', rating: 4, matches: 14, goals: 0, assists: 3 },
      { name: 'Tyler Lovell', jersey: 2, role: 'Goalkeeper', specialty: 'Superb Reflexes', rating: 4, matches: 14, saves: 52 },
      { name: 'Akashdeep Singh', jersey: 15, role: 'Forward', specialty: 'Volley King', rating: 5, matches: 14, goals: 9, assists: 6 }
    ],
    m5: [
      { name: 'V.R. Raghunath', jersey: 12, role: 'Defender', isCaptain: true, specialty: 'Power Dragflicker', rating: 5, matches: 14, goals: 10, assists: 1 },
      { name: 'P.R. Sreejesh', jersey: 16, role: 'Goalkeeper', specialty: 'The Legend', rating: 5, matches: 14, saves: 82 },
      { name: 'Gonzalo Peillat', jersey: 2, role: 'Defender', specialty: 'World Class Flicker', rating: 5, matches: 14, goals: 13, assists: 0 },
      { name: 'Ramandeep Singh', jersey: 22, role: 'Forward', specialty: 'Diving Finisher', rating: 4, matches: 14, goals: 7, assists: 4 },
      { name: 'Sander de Wijn', jersey: 4, role: 'Midfielder', specialty: 'Physical Enforcer', rating: 4, matches: 13, goals: 1, assists: 5 }
    ],
    m6: [
      { name: 'Florian Fuchs', jersey: 23, role: 'Forward', isCaptain: true, specialty: 'Speed Merchant', rating: 5, matches: 14, goals: 10, assists: 8 },
      { name: 'Harmanpreet Singh', jersey: 13, role: 'Defender', specialty: 'Precision Dragflicker', rating: 5, matches: 14, goals: 11, assists: 2 },
      { name: 'David Carter', jersey: 1, role: 'Goalkeeper', specialty: 'Penalty Stopper', rating: 4, matches: 14, saves: 49 },
      { name: 'Gurjant Singh', jersey: 19, role: 'Forward', specialty: 'Circle Penetrator', rating: 4, matches: 14, goals: 6, assists: 3 },
      { name: 'Robert Kemperman', jersey: 6, role: 'Midfielder', specialty: 'Slick Passer', rating: 4, matches: 12, goals: 3, assists: 5 }
    ],
    w1: [
      { name: 'Savita Punia', jersey: 11, role: 'Goalkeeper', isCaptain: true, specialty: 'Great Wall of India', rating: 5, matches: 14, saves: 78 },
      { name: 'Navneet Kaur', jersey: 25, role: 'Forward', specialty: 'Clinical Finisher', rating: 5, matches: 14, goals: 9, assists: 6 },
      { name: 'Neha Goyal', jersey: 18, role: 'Midfielder', specialty: 'Dribbling Maestro', rating: 4, matches: 14, goals: 4, assists: 8 },
      { name: 'Udita Duhan', jersey: 14, role: 'Defender', specialty: 'Hard Tackler', rating: 4, matches: 14, goals: 1, assists: 2 },
      { name: 'Monika Malik', jersey: 2, role: 'Midfielder', specialty: 'Workhorse Utility', rating: 5, matches: 14, goals: 3, assists: 7 }
    ],
    w2: [
      { name: 'Deep Ekka', jersey: 3, role: 'Defender', isCaptain: true, specialty: 'The Shield', rating: 5, matches: 14, goals: 2, assists: 4 },
      { name: 'Bichu Devi', jersey: 33, role: 'Goalkeeper', specialty: 'Young Sensation', rating: 4, matches: 14, saves: 61 },
      { name: 'Salima Tete', jersey: 77, role: 'Midfielder', specialty: 'Lightning Runner', rating: 5, matches: 14, goals: 7, assists: 10 },
      { name: 'Sangita Kumari', jersey: 20, role: 'Forward', specialty: 'In-the-box Striker', rating: 4, matches: 14, goals: 8, assists: 3 },
      { name: 'Jyoti Chhetri', jersey: 15, role: 'Midfielder', specialty: 'Aggressive Interceptor', rating: 4, matches: 13, goals: 2, assists: 5 }
    ],
    w3: [
      { name: 'Vandana Katariya', jersey: 10, role: 'Forward', isCaptain: true, specialty: 'Veteran Striker', rating: 5, matches: 14, goals: 12, assists: 5 },
      { name: 'Rajani Etimarpu', jersey: 1, role: 'Goalkeeper', specialty: 'Reliable Veteran', rating: 4, matches: 14, saves: 53 },
      { name: 'Sushila Chanu', jersey: 27, role: 'Midfielder', specialty: 'Slick Playmaker', rating: 5, matches: 14, goals: 3, assists: 9 },
      { name: 'Katariya Chanu', jersey: 9, role: 'Forward', specialty: 'Speedster Wing', rating: 4, matches: 12, goals: 5, assists: 4 },
      { name: 'Reena Khokhar', jersey: 4, role: 'Defender', specialty: 'Tackle Master', rating: 4, matches: 14, goals: 0, assists: 2 }
    ],
    w4: [
      { name: 'Nikki Pradhan', jersey: 15, role: 'Defender', isCaptain: true, specialty: 'Defensive Anchor', rating: 5, matches: 14, goals: 1, assists: 6 },
      { name: 'Beauty Dungdung', jersey: 11, role: 'Forward', specialty: 'Speed Finisher', rating: 4, matches: 14, goals: 7, assists: 4 },
      { name: 'Sonal Minz', jersey: 12, role: 'Goalkeeper', specialty: 'Shot-stopper', rating: 4, matches: 14, saves: 47 },
      { name: 'Mahima Choudhary', jersey: 16, role: 'Midfielder', specialty: 'Engine Room Midfielder', rating: 4, matches: 14, goals: 3, assists: 5 },
      { name: 'Ropni Kumari', jersey: 5, role: 'Defender', specialty: 'Physical Defender', rating: 4, matches: 13, goals: 0, assists: 2 }
    ],
    w5: [
      { name: 'Sushila Chanu P.', jersey: 16, role: 'Midfielder', isCaptain: true, specialty: 'Legendary Organizer', rating: 5, matches: 14, goals: 4, assists: 11 },
      { name: 'Elangbam Devi', jersey: 6, role: 'Defender', specialty: 'Slap-shot Clearer', rating: 4, matches: 14, goals: 1, assists: 3 },
      { name: 'Khuman Lalremsiami', jersey: 9, role: 'Forward', specialty: 'Power Forward', rating: 5, matches: 14, goals: 10, assists: 4 },
      { name: 'Sonal Devi', jersey: 2, role: 'Midfielder', specialty: 'Wing Playmaker', rating: 4, matches: 14, goals: 2, assists: 6 },
      { name: 'Lourembam Singh', jersey: 1, role: 'Goalkeeper', specialty: 'Great Reflexes', rating: 4, matches: 14, saves: 44 }
    ],
    w6: [
      { name: 'Ishika Chaudhary', jersey: 26, role: 'Defender', isCaptain: true, specialty: 'Elite Stealer', rating: 5, matches: 14, goals: 2, assists: 5 },
      { name: 'Komal Chatre', jersey: 12, role: 'Goalkeeper', specialty: 'Determined Wall', rating: 4, matches: 14, saves: 51 },
      { name: 'Muzamil Khan', jersey: 7, role: 'Midfielder', specialty: 'Pass Master', rating: 4, matches: 14, goals: 4, assists: 8 },
      { name: 'Preeti Dubey', jersey: 10, role: 'Forward', specialty: 'Aggressive Striker', rating: 5, matches: 14, goals: 9, assists: 5 },
      { name: 'Neelam', jersey: 22, role: 'Defender', specialty: 'Intercept Wall', rating: 4, matches: 13, goals: 1, assists: 2 }
    ]
  };

  const isWomen = division === 'Women';
  const sectionClass = isWomen
    ? "py-24 bg-gradient-to-br from-pink-50 via-white to-pink-100/55 transition-colors duration-500 text-slate-900"
    : "py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 text-slate-900 dark:text-white";

  return (
    <section id="teams" className={sectionClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className={`text-xs font-bold tracking-widest uppercase block ${isWomen ? 'text-pink-600' : 'text-accent dark:text-blue-400'}`}>
              FRANCHISES
            </span>
            <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${isWomen ? 'text-pink-900' : 'text-primary dark:text-white'}`}>
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
                placeholder="Search teams or cities..."
                className={`pl-9 pr-4 py-2.5 border font-sans text-xs font-bold placeholder-slate-400 outline-none w-full sm:w-60 rounded-full shadow-sm ${
                  isWomen
                    ? 'bg-white border-pink-200 text-slate-800 focus:border-pink-500'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 focus:border-accent'
                }`}
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            </div>

            {/* Division Toggles */}
            <div className={`inline-flex rounded-full p-1 border select-none shadow-sm ${
              isWomen
                ? 'bg-pink-100/80 border-pink-200'
                : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
            }`}>
              {(['Men', 'Women'] as const).map((div) => {
                const isActive = division === div;
                let btnStyle = "";
                if (isActive) {
                  btnStyle = div === 'Women' 
                    ? 'bg-pink-500 text-white shadow-md' 
                    : 'bg-blue-600 text-white shadow-md';
                } else {
                  btnStyle = isWomen
                    ? 'text-pink-700 hover:text-pink-900'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white';
                }
                
                return (
                  <button
                    key={div}
                    onClick={() => setDivision(div)}
                    className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${btnStyle}`}
                  >
                    {div === 'Men' ? "Men's" : "Women's"}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeams.map((team) => {
            const isTeamWomen = team.category === 'Women';
            return (
              <motion.div
                key={team.id}
                onClick={() => setSelectedTeam(team)}
                whileHover={{ y: -5 }}
                className={`group relative rounded-2xl p-6 shadow-sm border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isTeamWomen
                    ? 'bg-white border-pink-100 hover:shadow-xl hover:border-pink-500'
                    : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:shadow-lg hover:border-accent dark:hover:border-accent'
                }`}
              >
                {/* Background Accent border marker on left */}
                <div className={`absolute top-0 left-0 w-1.5 h-full ${
                  isTeamWomen
                    ? 'bg-gradient-to-b from-pink-500 to-pink-300'
                    : 'bg-gradient-to-b from-primary to-accent'
                }`} />
                
                {/* Content Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 pl-1">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase ${
                      team.category === 'Men' 
                        ? 'bg-blue-50 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300' 
                        : 'bg-pink-50 text-pink-700 font-extrabold'
                    }`}>
                      {team.category === 'Men' ? "Men's" : "Women's"} Division
                    </span>
                    <h3 className={`font-display font-black text-xl transition-colors pt-1 leading-snug ${
                      isTeamWomen
                        ? 'text-slate-900 group-hover:text-pink-600'
                        : 'text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent'
                    }`}>
                      {team.name}
                    </h3>
                  </div>

                  {/* Google Brand Concentric Icon Component */}
                  <GoogleTeamIcon teamId={team.id} shortName={team.shortName} />
                </div>

                {/* Franchise Quick Stats */}
                <div className={`mt-6 pt-4 border-t space-y-2 text-xs pl-1 font-mono ${
                  isTeamWomen
                    ? 'border-pink-100/80 text-pink-900/80'
                    : 'border-slate-100 dark:border-slate-800/80 text-slate-500 dark:text-slate-400'
                }`}>
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 shrink-0 ${isTeamWomen ? 'text-pink-500' : 'text-accent'}`} />
                    <span>City: <strong className={isTeamWomen ? 'text-pink-950 font-black' : 'text-slate-800 dark:text-slate-200 font-extrabold'}>{team.city}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className={`w-4 h-4 shrink-0 ${isTeamWomen ? 'text-pink-500' : 'text-accent'}`} />
                    <span>Coach: <strong className={isTeamWomen ? 'text-pink-950 font-black' : 'text-slate-800 dark:text-slate-200 font-extrabold'}>{team.coach}</strong></span>
                  </div>
                </div>

                {/* Action Prompt */}
                <div className={`mt-5 pt-3 flex items-center justify-between text-[10px] font-black tracking-widest uppercase group-hover:translate-x-1 transition-transform pl-1 ${
                  isTeamWomen ? 'text-pink-600' : 'text-accent'
                }`}>
                  <span>View Full Squad & Roster</span>
                  <span>&rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Modal Overlay with AnimatePresence */}
        <AnimatePresence>
          {selectedTeam && (
            <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 dark:border-slate-800 my-8"
              >
                
                {/* Modal Banner in Google style */}
                <div className={`p-8 bg-gradient-to-r ${selectedTeam.logoColor} text-white relative`}>
                  <button
                    onClick={() => setSelectedTeam(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
                    aria-label="Close Modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  
                  <div className="flex items-center gap-4">
                    <GoogleTeamIcon teamId={selectedTeam.id} shortName={selectedTeam.shortName} size="lg" />
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-yellow-300 uppercase block mb-0.5">
                        OFFICIAL LEAGUE DATABASE
                      </span>
                      <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none">
                        {selectedTeam.name}
                      </h3>
                      <p className="text-white/80 font-mono text-xs tracking-widest uppercase mt-1">
                        {selectedTeam.city} • EST. {selectedTeam.founded}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                  
                  {/* Franchise Quick Facts Block */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400 dark:text-slate-500 text-[10px] font-black block uppercase tracking-wider font-mono">
                        HEAD COACH
                      </span>
                      <div className="flex items-center gap-2 mt-1 text-slate-800 dark:text-slate-200 font-bold text-sm">
                        <User className="w-4 h-4 text-accent" />
                        <span>{selectedTeam.coach}</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400 dark:text-slate-500 text-[10px] font-black block uppercase tracking-wider font-mono">
                        STADIUM / ARENA
                      </span>
                      <div className="flex items-center gap-2 mt-1 text-slate-800 dark:text-slate-200 font-bold text-xs truncate">
                        <Shield className="w-4 h-4 text-accent" />
                        <span className="truncate">{selectedTeam.homeGround}</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Comprehensive Player Roster Section */}
                  <div>
                    <h4 className="font-display font-extrabold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2 mb-4 flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-accent fill-accent" />
                      <span>FRANCHISE ATHLETE ROSTER & PLAYER DETAILS</span>
                    </h4>
                    
                    {/* List of high-fidelity Player details */}
                    <div className="space-y-3">
                      {TEAM_ROSTERS[selectedTeam.id]?.map((player, idx) => (
                        <div 
                          key={idx}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 gap-3 hover:border-accent/40 dark:hover:border-accent/40 transition-colors"
                        >
                          {/* Left: Jersey, Avatar details & Position */}
                          <div className="flex items-center gap-3">
                            {/* Circular Jersey Badge with Google color scheme background */}
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-mono font-black text-xs flex items-center justify-center shrink-0 border border-blue-500/20">
                              #{player.jersey}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-display font-extrabold text-slate-900 dark:text-white text-sm">
                                  {player.name}
                                </span>
                                {player.isCaptain && (
                                  <span className="bg-yellow-100 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 text-[9px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-widest">
                                    CAPTAIN
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                                {player.role} • {player.specialty}
                              </span>
                            </div>
                          </div>

                          {/* Right: Stats and Star Ratings */}
                          <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/50 dark:border-slate-700/50">
                            {/* Direct performance statistics */}
                            <div className="text-right font-mono text-[11px] text-slate-500 dark:text-slate-400">
                              <div>Matches: <span className="text-slate-800 dark:text-slate-200 font-bold">{player.matches}</span></div>
                              {player.role === 'Goalkeeper' ? (
                                <div>Saves: <span className="text-emerald-500 font-extrabold">{player.saves}</span></div>
                              ) : (
                                <div>Goals/Assts: <span className="text-primary font-extrabold">{player.goals}G</span> / <span className="text-accent font-extrabold">{player.assists}A</span></div>
                              )}
                            </div>

                            {/* Stars rating */}
                            <div className="flex items-center gap-0.5">
                              {Array.from({ length: 5 }).map((_, sIdx) => (
                                <Star 
                                  key={sIdx} 
                                  className={`w-3 h-3 ${
                                    sIdx < player.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300 dark:text-slate-700'
                                  }`} 
                                />
                              ))}
                            </div>
                          </div>

                        </div>
                      )) || (
                        <span className="text-xs text-slate-400">No squad database loaded.</span>
                      )}
                    </div>
                  </div>

                  {/* Close CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedTeam(null)}
                      className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-extrabold rounded-full transition-all cursor-pointer text-xs uppercase tracking-wider shadow-md"
                    >
                      Close Profile
                    </button>
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
