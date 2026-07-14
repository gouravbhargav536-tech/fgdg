import React, { useState, useEffect } from 'react';
import { MATCHES } from '../data';
import { Match } from '../types';
import { 
  Calendar, 
  MapPin, 
  Zap, 
  RefreshCw, 
  Trophy, 
  BellRing, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Info, 
  ShieldAlert, 
  Activity 
} from 'lucide-react';

interface MatchesProps {
  division: 'Men' | 'Women';
  setDivision: (val: 'Men' | 'Women') => void;
}

export default function Matches({ division, setDivision }: MatchesProps) {
  const [matches, setMatches] = useState<Match[]>(MATCHES);
  const [filter, setFilter] = useState<'ALL' | 'LIVE' | 'COMPLETED' | 'UPCOMING'>('ALL');
  const [stadiumFilter, setStadiumFilter] = useState<string>('ALL');
  const [expandedMatchId, setExpandedMatchId] = useState<string | null>(null);
  
  // PDF download simulation states
  const [downloading, setDownloading] = useState<boolean>(false);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [downloadDivision, setDownloadDivision] = useState<'Men' | 'Women' | null>(null);

  const [liveEvents, setLiveEvents] = useState<Record<string, string[]>>({
    'match-live-men': [
      'Match started under heavy floodlights at Delhi.',
      'Delhi Waveriders secure early penalty corner.',
      'Goal! Delhi Waveriders score via a superb drag-flick!'
    ],
    'match-live-women': [
      'Warm-ups complete. Odisha Queens vs Haryana Golden Girls begins!',
      'Odisha Queens dominate initial circle entries.',
      'Goal! Haryana Golden Girls counter-attack and strike!'
    ]
  });
  const [activeAlert, setActiveAlert] = useState<{ matchId: string; message: string } | null>(null);

  // Get active stadium list based on current division
  const stadiumsList = ['ALL', ...Array.from(new Set(
    matches
      .filter(m => m.category === division)
      .map(m => m.venue.split(',')[0].trim())
  ))];

  // Reset stadium filter when division changes
  useEffect(() => {
    setStadiumFilter('ALL');
    setExpandedMatchId(null);
  }, [division]);

  // Filtered matches list
  const filteredMatches = matches
    .filter(m => m.category === division)
    .filter(m => filter === 'ALL' ? true : m.status === filter)
    .filter(m => {
      if (stadiumFilter === 'ALL') return true;
      return m.venue.toLowerCase().includes(stadiumFilter.toLowerCase());
    });

  // Simulated live minute increment
  useEffect(() => {
    const timer = setInterval(() => {
      setMatches(prevMatches => 
        prevMatches.map(m => {
          if (m.status === 'LIVE' && m.minute !== undefined && m.minute < 60) {
            return { ...m, minute: m.minute + 1 };
          }
          return m;
        })
      );
    }, 12000); // Every 12 seconds, advance matches by 1 minute
    return () => clearInterval(timer);
  }, []);

  const handleDownloadFixtures = (div: 'Men' | 'Women') => {
    setDownloadDivision(div);
    setDownloading(true);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloading(false);
            setDownloadDivision(null);
            
            // Generate official schedule text file content
            const divMatches = matches.filter(m => m.category === div);
            const fixturesText = divMatches
              .map(m => `Date: ${m.date} | Time: ${m.time}\nTeams: ${m.teamAName} vs ${m.teamBName}\nVenue: ${m.venue}\nStatus: ${m.status}\n---------------------------------------\n`)
              .join('\n');
            
            const element = document.createElement("a");
            const file = new Blob([
              `=======================================================\n`,
              `         HOCKEY INDIA LEAGUE - OFFICIAL FIXTURES        \n`,
              `               ${div.toUpperCase()}'S LEAGUE DIVISION DIVISION\n`,
              `=======================================================\n\n`,
              fixturesText,
              `\nGenerated on: ${new Date().toLocaleDateString()}\nAll timings are in IST (Indian Standard Time).\n`
            ], {type: 'text/plain'});
            element.href = URL.createObjectURL(file);
            element.download = `HIL_Fixtures_Schedule_${div}_Division.pdf`; // Downloadable as .pdf (formatted print representation)
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          }, 400);
          return 100;
        }
        return prev + 20;
      });
    }, 100);
  };

  const simulateAction = (matchId: string) => {
    const match = matches.find(m => m.id === matchId);
    if (!match || match.status !== 'LIVE') return;

    const events = [
      {
        msg: `GOAL! ${match.teamAName} scores a thunderous drag-flick penalty corner!`,
        effect: () => {
          setMatches(prev => prev.map(m => m.id === matchId ? { ...m, scoreA: (m.scoreA || 0) + 1 } : m));
        }
      },
      {
        msg: `GOAL! ${match.teamBName} scores an unbelievable field goal through the goalkeeper's legs!`,
        effect: () => {
          setMatches(prev => prev.map(m => m.id === matchId ? { ...m, scoreB: (m.scoreB || 0) + 1 } : m));
        }
      },
      {
        msg: `PENALTY CORNER awarded to ${match.teamAName}! The stadium erupts.`,
        effect: () => {}
      },
      {
        msg: `PENALTY CORNER awarded to ${match.teamBName}! Impenetrable defense prepares.`,
        effect: () => {}
      },
      {
        msg: `GREEN CARD! ${match.teamAName} midfielder suspended for 2 minutes due to physical tackle.`,
        effect: () => {}
      },
      {
        msg: `YELLOW CARD! Referee warns ${match.teamBName} defender for high stick tackle.`,
        effect: () => {}
      },
      {
        msg: `SPECTACULAR SAVE! ${match.teamBName} goalkeeper leaps horizontally to stop a decisive flick.`,
        effect: () => {}
      },
      {
        msg: `SPECTACULAR SAVE! ${match.teamAName} goalkeeper blocks successive field goal attempts!`,
        effect: () => {}
      }
    ];

    const randomEvent = events[Math.floor(Math.random() * events.length)];
    randomEvent.effect();

    setMatches(prev => prev.map(m => {
      if (m.id === matchId && m.minute !== undefined && m.minute < 59) {
        return { ...m, minute: Math.min(60, m.minute + 1) };
      }
      return m;
    }));

    setLiveEvents(prev => ({
      ...prev,
      [matchId]: [randomEvent.msg, ...(prev[matchId] || [])].slice(0, 5)
    }));

    setActiveAlert({ matchId, message: randomEvent.msg });
    setTimeout(() => {
      setActiveAlert(null);
    }, 4500);
  };

  return (
    <section id="matches" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block font-mono">
              SCHEDULE & RESULTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-white uppercase">
              Fixtures & Match Center
            </h2>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 max-w-2xl">
              Track active games, view historic completed penalty shootout scores, and filter full multi-city stadiums rosters below.
            </p>
          </div>

          {/* Download Buttons Panel */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleDownloadFixtures('Men')}
              disabled={downloading}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-sans text-xs uppercase tracking-widest font-black rounded-full flex items-center gap-2 cursor-pointer disabled:opacity-50 select-none transition-all shadow-md active:translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              <span>Men's Fixtures PDF</span>
            </button>
            <button
              onClick={() => handleDownloadFixtures('Women')}
              disabled={downloading}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-sans text-xs uppercase tracking-widest font-black rounded-full flex items-center gap-2 cursor-pointer disabled:opacity-50 select-none transition-all shadow-md active:translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              <span>Women's Fixtures PDF</span>
            </button>
          </div>
        </div>

        {/* Live Downloading State Overlay */}
        {downloading && (
          <div className="mb-8 p-5 bg-slate-900 border-4 border-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-accent animate-spin" />
              <div className="text-sm">
                <span className="font-bold">Compiling Official Fixtures Schedule</span>
                <span className="text-slate-400 ml-2">PDF Document formatted for {downloadDivision}'s Division...</span>
              </div>
            </div>
            <div className="w-full md:w-64 bg-slate-800 h-3 border border-slate-700 overflow-hidden relative">
              <div 
                style={{ width: `${downloadProgress}%` }} 
                className="bg-accent h-full transition-all duration-100"
              />
            </div>
          </div>
        )}

        {/* Filter Controls (Status & Stadium filters) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 bg-slate-50 dark:bg-slate-800/10 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 mb-8 items-center shadow-sm">
          {/* Status Filter */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-slate-500 font-mono">
              Status:
            </span>
            <div className="flex flex-wrap gap-1 bg-slate-200/60 dark:bg-slate-900/60 p-1 rounded-full border border-slate-200 dark:border-slate-800">
              {(['ALL', 'LIVE', 'COMPLETED', 'UPCOMING'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    filter === s
                      ? 'bg-accent text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
                  }`}
                >
                  {s === 'ALL' ? 'All' : s === 'LIVE' ? '🔴 Live' : s === 'COMPLETED' ? 'Results' : 'Fixtures'}
                </button>
              ))}
            </div>
          </div>

          {/* Stadium Filter */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-end w-full">
            <span className="text-xs font-black uppercase tracking-widest text-slate-500 font-mono whitespace-nowrap">
              Venue Stadium:
            </span>
            <select
              value={stadiumFilter}
              onChange={(e) => setStadiumFilter(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-sans text-xs font-bold text-slate-800 dark:text-slate-100 focus:border-accent outline-none w-full shadow-sm"
            >
              {stadiumsList.map((stadium, idx) => (
                <option key={idx} value={stadium === 'ALL' ? 'ALL' : stadium}>
                  {stadium === 'ALL' ? 'All Stadium Venues' : stadium}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Floating live simulated goal toast */}
        {activeAlert && (
          <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border-l-4 border-accent border border-slate-800 flex items-start gap-3 animate-bounce">
            <div className="p-1.5 bg-accent/20 rounded-full text-accent shrink-0">
              <BellRing className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs uppercase tracking-widest text-accent font-mono">LIVE COMMENTARY</span>
              <p className="text-sm font-semibold text-white mt-0.5">{activeAlert.message}</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredMatches.length === 0 && (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-900/40 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-8">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <span className="block text-sm font-bold text-slate-600 dark:text-slate-300">
              No matches found matching the filter criteria.
            </span>
            <button 
              onClick={() => { setFilter('ALL'); setStadiumFilter('ALL'); }}
              className="mt-4 px-5 py-2 bg-primary hover:bg-primary/95 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-full shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Matches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredMatches.map((match) => {
            const isLive = match.status === 'LIVE';
            const isExpanded = expandedMatchId === match.id;
            
            // Shootout Score representation (e.g. Completed games with tie shootouts)
            const hasShootout = match.status === 'COMPLETED' && (match.scoreA === match.scoreB);
            const shootoutScore = hasShootout ? "Shootout: 4 - 3 SO" : null;

            return (
              <div
                key={match.id}
                className={`relative rounded-2xl bg-slate-50 dark:bg-slate-800/45 border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.015] ${
                  isLive 
                    ? 'border-red-500 bg-red-500/5 dark:bg-red-500/2.5' 
                    : 'border-slate-200 dark:border-slate-800/80 hover:border-accent dark:hover:border-accent'
                }`}
              >
                {/* Main Card Body */}
                <div 
                  onClick={() => setExpandedMatchId(isExpanded ? null : match.id)}
                  className="p-6 cursor-pointer select-none"
                >
                  {/* Match Header Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase ${
                      isLive
                        ? 'bg-red-600 text-white font-mono animate-pulse'
                        : match.status === 'COMPLETED'
                        ? 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
                        : 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent'
                    }`}>
                      {isLive && <span className="h-2 w-2 bg-white inline-block animate-ping rounded-full" />}
                      {isLive ? `LIVE • QTR 3 (${match.minute}')` : match.status}
                    </span>

                    <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest">
                      {match.category === 'Men' ? "Men's League" : "Women's League"}
                    </span>
                  </div>

                  {/* Scorecards */}
                  <div className="grid grid-cols-12 gap-4 items-center">
                    
                    {/* Team A */}
                    <div className="col-span-5 flex flex-col items-center text-center space-y-2">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-tr ${match.teamALogoColor} flex items-center justify-center text-white font-display font-black text-xs shadow-md border border-white/20`}>
                        {match.teamAName.substring(0, 3).toUpperCase()}
                      </div>
                      <span className="font-display font-extrabold text-xs sm:text-sm text-slate-800 dark:text-slate-100 line-clamp-1">
                        {match.teamAName}
                      </span>
                    </div>

                    {/* SCORE or VS */}
                    <div className="col-span-2 flex flex-col items-center justify-center text-center">
                      {match.status === 'UPCOMING' ? (
                        <span className="font-display text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-widest border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-900">
                          VS
                        </span>
                      ) : (
                        <div className="flex flex-col items-center">
                          <div className="flex items-center gap-2 font-display text-3xl font-black text-slate-900 dark:text-white">
                            <span>{match.scoreA}</span>
                            <span className="text-slate-300 dark:text-slate-600 font-normal">-</span>
                            <span>{match.scoreB}</span>
                          </div>
                          {shootoutScore && (
                            <span className="text-[9px] font-mono font-black text-accent mt-1 tracking-wider uppercase bg-accent/10 px-2 py-0.5 rounded-full">
                              {shootoutScore}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Team B */}
                    <div className="col-span-5 flex flex-col items-center text-center space-y-2">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-tr ${match.teamBLogoColor} flex items-center justify-center text-white font-display font-black text-xs shadow-md border border-white/20`}>
                        {match.teamBName.substring(0, 3).toUpperCase()}
                      </div>
                      <span className="font-display font-extrabold text-xs sm:text-sm text-slate-800 dark:text-slate-100 line-clamp-1">
                        {match.teamBName}
                      </span>
                    </div>

                  </div>

                  {/* Match Info Details (Venue & Date) */}
                  <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800 grid grid-cols-2 gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span>{match.date} | {match.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      <span className="truncate">{match.venue}</span>
                    </div>
                  </div>

                  {/* Expand Prompt Indicator */}
                  <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-mono font-black uppercase tracking-widest text-primary dark:text-accent">
                    <span>{isExpanded ? 'Hide Match Details' : 'View Stats & Roster lineups'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Expanded Accordion details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 bg-slate-100/50 dark:bg-slate-900/40 border-t border-slate-200/50 dark:border-slate-800 space-y-5 animate-fade-in">
                    
                    {/* Simulated Match Stats */}
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 block mb-2.5">
                        Match Performance Metrics
                      </span>
                      <div className="space-y-2 font-mono text-xs text-slate-600 dark:text-slate-300 font-bold">
                        {/* Possession bar */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[11px]">
                            <span>Possession: 55%</span>
                            <span>45%</span>
                          </div>
                          <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex">
                            <div className="bg-primary h-full" style={{ width: '55%' }} />
                            <div className="bg-accent h-full" style={{ width: '45%' }} />
                          </div>
                        </div>

                        {/* Other numeric comparisons */}
                        <div className="grid grid-cols-3 gap-2 text-center pt-2">
                          <div className="p-2 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
                            <span className="text-[9px] text-slate-400 block uppercase tracking-wide">Circle Entries</span>
                            <span className="text-xs font-black text-slate-800 dark:text-white">24 - 18</span>
                          </div>
                          <div className="p-2 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
                            <span className="text-[9px] text-slate-400 block uppercase tracking-wide">Penalty Corners</span>
                            <span className="text-xs font-black text-slate-800 dark:text-white">6 - 4</span>
                          </div>
                          <div className="p-2 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
                            <span className="text-[9px] text-slate-400 block uppercase tracking-wide">Saves Made</span>
                            <span className="text-xs font-black text-slate-800 dark:text-white">5 - 8</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Team Rosters Preview */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] font-mono font-black uppercase tracking-widest text-primary block mb-1.5">
                          Lineups: {match.teamAName.substring(0, 3).toUpperCase()}
                        </span>
                        <ul className="text-xs text-slate-500 dark:text-slate-400 font-semibold space-y-1 font-mono">
                          <li>• P. Sreejesh (GK)</li>
                          <li>• Harmanpreet Singh (C)</li>
                          <li>• Manpreet Singh</li>
                          <li>• Gurjant Singh</li>
                          <li>• Varun Kumar</li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-black uppercase tracking-widest text-accent block mb-1.5">
                          Lineups: {match.teamBName.substring(0, 3).toUpperCase()}
                        </span>
                        <ul className="text-xs text-slate-500 dark:text-slate-400 font-semibold space-y-1 font-mono">
                          <li>• David Harte (GK)</li>
                          <li>• Mark Knowles (C)</li>
                          <li>• Ashley Jackson</li>
                          <li>• Lalit Upadhyay</li>
                          <li>• Sander de Wijn</li>
                        </ul>
                      </div>
                    </div>

                    {/* Interactive Simulator Section for LIVE Matches inside accordion as well */}
                    {isLive && (
                      <div className="pt-3 border-t border-red-500/10 bg-slate-100/60 dark:bg-slate-900/30 rounded-xl p-3 space-y-3 border border-red-500/10">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-slate-600 dark:text-slate-300 tracking-widest uppercase flex items-center gap-1 font-mono">
                            <Zap className="w-3 h-3 text-red-500 animate-pulse" />
                            Live Event Log
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              simulateAction(match.id);
                            }}
                            className="px-4 py-1.5 rounded-full text-xs font-black bg-accent hover:bg-orange-600 text-white flex items-center gap-1 cursor-pointer transition-all active:scale-95 shadow-sm font-sans"
                          >
                            <RefreshCw className="w-3 h-3" />
                            Simulate Action
                          </button>
                        </div>

                        {/* Simulation Event Logs list */}
                        <div className="space-y-1.5 max-h-[100px] overflow-y-auto pr-1">
                          {liveEvents[match.id]?.map((event, index) => (
                            <div
                              key={index}
                              className={`text-xs p-2 rounded-lg font-mono font-bold transition-all ${
                                index === 0
                                  ? 'bg-accent/10 text-accent border-l-4 border-accent font-extrabold'
                                  : 'text-slate-600 dark:text-slate-400'
                              }`}
                            >
                              {event}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
