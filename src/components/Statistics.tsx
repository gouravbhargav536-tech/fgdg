import React, { useState } from 'react';
import { Target, BarChart2, ShieldAlert } from 'lucide-react';

interface Scorer {
  name: string;
  team: string;
  goals: number;
  imageColor: string;
}

interface TeamGoal {
  name: string;
  goals: number;
  logoColor: string;
}

interface CardStat {
  team: string;
  logoColor: string;
  green: number;
  yellow: number;
  red: number;
}

export default function Statistics() {
  const [activeTab, setActiveTab] = useState<'scorers' | 'teams' | 'cards'>('scorers');

  const scorers: Scorer[] = [
    { name: 'Harmanpreet Singh', team: 'Punjab Warriors', goals: 12, imageColor: 'from-yellow-400 to-amber-600' },
    { name: 'Gonzalo Peillat', team: 'Uttar Pradesh Wizards', goals: 9, imageColor: 'from-purple-600 to-fuchsia-900' },
    { name: 'Ashley Jackson', team: 'Ranchi Rays', goals: 8, imageColor: 'from-emerald-500 to-teal-800' },
    { name: 'Lalit Upadhyay', team: 'Kalinga Lancers', goals: 7, imageColor: 'from-orange-500 to-red-700' },
    { name: 'Rupinder Pal Singh', team: 'Delhi Waveriders', goals: 6, imageColor: 'from-blue-600 to-indigo-800' },
  ];

  const teamGoals: TeamGoal[] = [
    { name: 'Punjab Warriors', goals: 18, logoColor: 'from-yellow-400 to-amber-600' },
    { name: 'Delhi Waveriders', goals: 14, logoColor: 'from-blue-600 to-indigo-800' },
    { name: 'Ranchi Rays', goals: 12, logoColor: 'from-emerald-500 to-teal-800' },
    { name: 'Railway Rangers', goals: 12, logoColor: 'from-slate-600 to-slate-800' },
    { name: 'Kalinga Lancers', goals: 11, logoColor: 'from-orange-500 to-red-700' },
  ];

  const cards: CardStat[] = [
    { team: 'Kalinga Lancers', logoColor: 'from-orange-500 to-red-700', green: 5, yellow: 2, red: 1 },
    { team: 'Ranchi Rays', logoColor: 'from-emerald-500 to-teal-800', green: 6, yellow: 2, red: 0 },
    { team: 'Punjab Warriors', logoColor: 'from-yellow-400 to-amber-600', green: 4, yellow: 2, red: 0 },
    { team: 'Delhi Waveriders', logoColor: 'from-blue-600 to-indigo-800', green: 3, yellow: 3, red: 0 },
    { team: 'Odisha Queens', logoColor: 'from-cyan-500 to-blue-700', green: 2, yellow: 1, red: 0 },
  ];

  const maxScorerGoals = scorers[0].goals;
  const maxTeamGoals = teamGoals[0].goals;

  return (
    <section id="statistics" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black tracking-widest text-accent uppercase block">
            LEAGUE ANALYTICS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-primary dark:text-white uppercase">
            Leaderboards & Statistics
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-semibold">
            Track individual athlete goals, offensive powerhouse franchises, and overall player discipline rosters across both divisions.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-slate-100 dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800 max-w-full overflow-x-auto shadow-sm select-none">
            <button
              onClick={() => setActiveTab('scorers')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'scorers'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Goal Scorers</span>
            </button>
            
            <button
              onClick={() => setActiveTab('teams')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'teams'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Team Offensive</span>
            </button>

            <button
              onClick={() => setActiveTab('cards')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'cards'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Discipline Cards</span>
            </button>
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800/80 p-6 sm:p-8">
          
          {/* Scorers Panel */}
          {activeTab === 'scorers' && (
            <div className="space-y-6">
              <h3 className="font-display font-black text-xl text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-6 flex items-center gap-2 uppercase">
                <Target className="w-5 h-5 text-accent" />
                Individual Leading Goal Scorers
              </h3>

              <div className="space-y-6">
                {scorers.map((scorer, idx) => {
                  const percentage = (scorer.goals / maxScorerGoals) * 100;
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-end text-sm">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${scorer.imageColor} flex items-center justify-center text-white font-display font-black text-[10px] border border-white/20 shrink-0 shadow-sm`}>
                            {scorer.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <span className="font-extrabold text-slate-800 dark:text-slate-200 block">
                              {scorer.name}
                            </span>
                            <span className="text-slate-400 text-[10px] font-mono font-bold block">
                              {scorer.team}
                            </span>
                          </div>
                        </div>
                        <span className="font-mono font-black text-slate-900 dark:text-white text-base">
                          {scorer.goals} <span className="text-[10px] font-bold text-slate-400">PTS</span>
                        </span>
                      </div>
                      
                      {/* Bar Visualization */}
                      <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
                        <div 
                          style={{ width: `${percentage}%` }} 
                          className="h-full bg-accent rounded-full transition-all duration-1000"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Team Offensive Panel */}
          {activeTab === 'teams' && (
            <div className="space-y-6">
              <h3 className="font-display font-black text-xl text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-6 flex items-center gap-2 uppercase">
                <BarChart2 className="w-5 h-5 text-accent" />
                Team Goals Scored
              </h3>

              <div className="space-y-6">
                {teamGoals.map((team, idx) => {
                  const percentage = (team.goals / maxTeamGoals) * 100;
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-end text-sm">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${team.logoColor} flex items-center justify-center text-white font-display font-black text-[10px] border border-white/20 shrink-0 shadow-sm`}>
                            {team.name.substring(0, 3).toUpperCase()}
                          </div>
                          <span className="font-extrabold text-slate-800 dark:text-slate-200">
                            {team.name}
                          </span>
                        </div>
                        <span className="font-mono font-black text-slate-900 dark:text-white text-base">
                          {team.goals} <span className="text-[10px] font-bold text-slate-400">GOALS</span>
                        </span>
                      </div>
                      
                      {/* Bar Visualization */}
                      <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
                        <div 
                          style={{ width: `${percentage}%` }} 
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Discipline Cards Panel */}
          {activeTab === 'cards' && (
            <div className="space-y-6">
              <h3 className="font-display font-black text-xl text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 mb-6 flex items-center gap-2 uppercase">
                <ShieldAlert className="w-5 h-5 text-accent" />
                Franchise Penalty Discipline Records
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-500 font-mono text-[10px] uppercase tracking-widest font-black select-none">
                      <th className="py-4 px-4">Franchise Club</th>
                      <th className="py-4 px-3 text-center w-28">🟩 Green Card</th>
                      <th className="py-4 px-3 text-center w-28">🟨 Yellow Card</th>
                      <th className="py-4 px-3 text-center w-28">🟥 Red Card</th>
                      <th className="py-4 px-4 text-center w-28">Total Cards</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm font-bold">
                    {cards.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                        <td className="py-4.5 px-4 flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${item.logoColor} flex items-center justify-center text-white font-display font-black text-[10px] border border-white/20 shrink-0 shadow-sm`}>
                            {item.team.substring(0, 3).toUpperCase()}
                          </div>
                          <span className="font-black text-slate-800 dark:text-slate-100">{item.team}</span>
                        </td>
                        <td className="py-4.5 px-3 text-center">
                          <span className="inline-flex items-center justify-center w-7 h-7 font-mono font-black text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-200 rounded-full">
                            {item.green}
                          </span>
                        </td>
                        <td className="py-4.5 px-3 text-center">
                          <span className="inline-flex items-center justify-center w-7 h-7 font-mono font-black text-amber-500 bg-amber-100 dark:bg-amber-950/40 border border-amber-200 rounded-full">
                            {item.yellow}
                          </span>
                        </td>
                        <td className="py-4.5 px-3 text-center">
                          <span className="inline-flex items-center justify-center w-7 h-7 font-mono font-black text-red-600 bg-red-100 dark:bg-red-950/40 border border-red-200 rounded-full">
                            {item.red}
                          </span>
                        </td>
                        <td className="py-4.5 px-4 text-center font-mono font-black text-base text-slate-900 dark:text-white">
                          {item.green + item.yellow + item.red}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
