import React, { useState } from 'react';
import { STANDINGS_MEN, STANDINGS_WOMEN } from '../data';
import { StandingsRow } from '../types';
import { ChevronUp, ChevronDown, ListOrdered, Award, TrendingUp } from 'lucide-react';

type SortKey = 'played' | 'won' | 'drawn' | 'lost' | 'goalsFor' | 'goalsAgainst' | 'goalDifference' | 'points';

interface StandingsProps {
  division: 'Men' | 'Women';
  setDivision: (value: 'Men' | 'Women') => void;
}

export default function Standings({ division, setDivision }: StandingsProps) {
  const [sortKey, setSortKey] = useState<SortKey>('points');
  const [sortAscending, setSortAscending] = useState<boolean>(false);

  // Get active raw standing rows
  const rawRows = division === 'Men' ? STANDINGS_MEN : STANDINGS_WOMEN;

  // Sort rows based on sort state
  const sortedRows = [...rawRows].sort((a, b) => {
    let valA = a[sortKey];
    let valB = b[sortKey];

    if (valA < valB) return sortAscending ? -1 : 1;
    if (valA > valB) return sortAscending ? 1 : -1;
    
    // Tie-breaker: sort by Goal Difference if keys match
    if (sortKey !== 'points') {
      let gdA = a.goalDifference;
      let gdB = b.goalDifference;
      if (gdA !== gdB) return gdA < gdB ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortAscending(!sortAscending);
    } else {
      setSortKey(key);
      setSortAscending(false); // Default to descending on new key
    }
  };

  const renderSortIndicator = (key: SortKey) => {
    if (sortKey !== key) return null;
    return sortAscending 
      ? <ChevronUp className="w-4 h-4 text-accent inline ml-1" /> 
      : <ChevronDown className="w-4 h-4 text-accent inline ml-1" />;
  };

  return (
    <section id="standings" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block">
              LEAGUE TABLES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-white">
              Points Standings
            </h2>
          </div>

          {/* Division Toggles */}
          <div className="inline-flex rounded-full bg-slate-100 dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800 shadow-sm select-none">
            <button
              onClick={() => { setDivision('Men'); setSortKey('points'); setSortAscending(false); }}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                division === 'Men'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
              }`}
            >
              Men's Division
            </button>
            <button
              onClick={() => { setDivision('Women'); setSortKey('points'); setSortAscending(false); }}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                division === 'Women'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
              }`}
            >
              Women's Division
            </button>
          </div>
        </div>

        {/* Info box */}
        <div className="mb-6 flex items-center gap-2.5 p-4 rounded-2xl bg-primary/5 dark:bg-accent/5 border border-primary/10 dark:border-accent/10 text-xs text-slate-600 dark:text-slate-300 font-bold">
          <Award className="w-5 h-5 text-accent shrink-0" />
          <span>
            Click on any column header to sort the standings. Top 4 teams qualify for the postseason playoffs.
          </span>
        </div>

        {/* Standings Table Container */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800/80 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-display text-[10px] uppercase tracking-widest font-black select-none">
                  <th className="py-5 px-6 w-16 text-center">Pos</th>
                  <th className="py-5 px-4 min-w-[220px]">Club Name</th>
                  
                  {/* Sortable Header items */}
                  <th 
                    onClick={() => handleSort('played')} 
                    className="py-5 px-3 text-center cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors w-16 font-black"
                  >
                    P {renderSortIndicator('played')}
                  </th>
                  <th 
                    onClick={() => handleSort('won')} 
                    className="py-5 px-3 text-center cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors w-16 font-black"
                  >
                    W {renderSortIndicator('won')}
                  </th>
                  <th 
                    onClick={() => handleSort('drawn')} 
                    className="py-5 px-3 text-center cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors w-16 font-black"
                  >
                    D {renderSortIndicator('drawn')}
                  </th>
                  <th 
                    onClick={() => handleSort('lost')} 
                    className="py-5 px-3 text-center cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors w-16 font-black"
                  >
                    L {renderSortIndicator('lost')}
                  </th>
                  <th 
                    onClick={() => handleSort('goalsFor')} 
                    className="py-5 px-3 text-center cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors w-16 font-black"
                  >
                    GF {renderSortIndicator('goalsFor')}
                  </th>
                  <th 
                    onClick={() => handleSort('goalsAgainst')} 
                    className="py-5 px-3 text-center cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors w-16 font-black"
                  >
                    GA {renderSortIndicator('goalsAgainst')}
                  </th>
                  <th 
                    onClick={() => handleSort('goalDifference')} 
                    className="py-5 px-3 text-center cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors w-20 font-black"
                  >
                    GD {renderSortIndicator('goalDifference')}
                  </th>
                  <th 
                    onClick={() => handleSort('points')} 
                    className="py-5 px-6 text-center cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors w-24 bg-accent/5 dark:bg-accent/10 text-accent font-black"
                  >
                    PTS {renderSortIndicator('points')}
                  </th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm font-bold">
                {sortedRows.map((row, index) => {
                  const position = index + 1;
                  const isPlayoffZone = position <= 4;
                  return (
                    <tr 
                      key={row.teamId}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors group border-b border-slate-100 dark:border-slate-800"
                    >
                      {/* Position */}
                      <td className="py-4.5 px-6 text-center font-display font-black text-slate-700 dark:text-slate-300">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${
                          isPlayoffZone 
                            ? 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent font-black'
                            : 'bg-slate-100 text-slate-400 dark:bg-slate-800/50'
                        }`}>
                          {position}
                        </span>
                      </td>

                      {/* Team Shield & Name */}
                      <td className="py-4.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${row.logoColor} flex items-center justify-center text-white font-display font-black text-xs shrink-0 shadow-sm border border-white/20`}>
                            {row.shortName}
                          </div>
                          <div>
                            <span className="text-slate-900 dark:text-white font-black block leading-snug group-hover:text-primary dark:group-hover:text-accent transition-colors">
                              {row.teamName}
                            </span>
                            <span className="text-slate-400 dark:text-slate-500 text-[10px] font-mono font-bold block uppercase">
                              {row.shortName} CLUB
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Played, W, D, L, GF, GA, GD */}
                      <td className="py-4.5 px-3 text-center text-slate-500 dark:text-slate-400 font-mono font-bold">{row.played}</td>
                      <td className="py-4.5 px-3 text-center text-slate-800 dark:text-slate-200 font-mono font-bold">{row.won}</td>
                      <td className="py-4.5 px-3 text-center text-slate-800 dark:text-slate-200 font-mono font-bold">{row.drawn}</td>
                      <td className="py-4.5 px-3 text-center text-slate-800 dark:text-slate-200 font-mono font-bold">{row.lost}</td>
                      <td className="py-4.5 px-3 text-center text-slate-500 dark:text-slate-400 font-mono font-bold">{row.goalsFor}</td>
                      <td className="py-4.5 px-3 text-center text-slate-500 dark:text-slate-400 font-mono font-bold">{row.goalsAgainst}</td>
                      <td className="py-4.5 px-3 text-center font-mono">
                        <span className={row.goalDifference > 0 ? 'text-emerald-500 font-extrabold' : row.goalDifference < 0 ? 'text-red-500 font-extrabold' : 'text-slate-500'}>
                          {row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}
                        </span>
                      </td>

                      {/* Points */}
                      <td className="py-4.5 px-6 text-center font-display font-black text-base text-primary dark:text-accent bg-slate-50/30 dark:bg-slate-800/10">
                        {row.points}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer Legends */}
          <div className="bg-slate-50 dark:bg-slate-800/40 p-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest font-bold">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-primary/10 dark:bg-accent/10 border border-primary/20 dark:border-accent/20" />
              <span>Qualifies for Championship Playoff Semifinals</span>
            </div>
            <div>
              <span><strong>P</strong>: Played</span> • <span><strong>W</strong>: Won</span> • <span><strong>D</strong>: Drawn</span> • <span><strong>L</strong>: Lost</span> • <span><strong>GF</strong>: Goals For</span> • <span><strong>GA</strong>: Goals Against</span> • <span><strong>GD</strong>: Goal Difference</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
