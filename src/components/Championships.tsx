import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, MapPin, Calendar, Star, ChevronDown, ChevronUp, Landmark, ShieldCheck, Award } from 'lucide-react';

interface ChampionshipEvent {
  id: string;
  title: string;
  year: string;
  location: string;
  type: 'National' | 'International';
  description: string;
  winnerMen: string;
  runnerUpMen: string;
  winnerWomen: string;
  runnerUpWomen: string;
  details: string[];
}

const CHAMPIONSHIPS_DATA: ChampionshipEvent[] = [
  {
    id: 'champ-4',
    title: "4th National Soft Hockey Championship (Senior/Junior/Sub-Junior)",
    year: "2024-25",
    location: "Faridabad, Haryana",
    type: "National",
    description: "The biggest soft hockey national championship to date, attracting teams from 28 states with elite matches played on synthetic courts.",
    winnerMen: "Rajasthan Seniors",
    runnerUpMen: "Haryana Bulls",
    winnerWomen: "Delhi Fighters",
    runnerUpWomen: "Rajasthan Queens",
    details: [
      "Over 1,200 active players participated across three age segments.",
      "Strict safety gear standards were deployed using special polymer compound sticks.",
      "Haryana Governor praised the rapid grassroots spread of soft hockey."
    ]
  },
  {
    id: 'intl-3',
    title: "Indo-Bhutan Soft Hockey Championship 2024",
    year: "2024",
    location: "Phuentsholing, Bhutan",
    type: "International",
    description: "An international friendly championship organized by the Asian Soft Hockey Federation to promote safe-play hockey across the Himalayan nations.",
    winnerMen: "India (ASHFI Selection)",
    runnerUpMen: "Bhutan Royals",
    winnerWomen: "India (ASHFI Women Team)",
    runnerUpWomen: "Bhutan Dragons",
    details: [
      "A 4-day tournament held at the Phuentsholing Sports Arena.",
      "Attended by delegates from the Bhutan Olympic Committee.",
      "Soft hockey training kits were donated to 15 Bhutanese primary schools."
    ]
  },
  {
    id: 'intl-2',
    title: "2nd International Soft Hockey Championship 2024",
    year: "2024",
    location: "Pokhara, Nepal",
    type: "International",
    description: "Bringing together premier teams from South Asian nations including India, Nepal, Bangladesh, and Bhutan for a high-intensity showcase.",
    winnerMen: "India National Team",
    runnerUpMen: "Nepal Falcons",
    winnerWomen: "India Women Team",
    runnerUpWomen: "Nepal Himalayan Queens",
    details: [
      "Vishesh Kumar won the Golden Stick award with 11 goals in the tournament.",
      "Jothan Rai (Nepal) was recognized as the Best Goalkeeper of the tournament.",
      "The tournament drew massive local spectator crowds in Pokhara."
    ]
  },
  {
    id: 'champ-3',
    title: "3rd National Soft Hockey Championship 2023-24",
    year: "2023-24",
    location: "SMS Stadium Jaipur, Rajasthan",
    type: "National",
    description: "Held at the legendary Sawai Mansingh Stadium Indoor Hall. Promoted key safety metrics and highlighted fast coordination rules.",
    winnerMen: "Jaipur Raiders",
    runnerUpMen: "Punjab Lions",
    winnerWomen: "Delhi Fighters",
    runnerUpWomen: "Royal Challenger Rajasthan",
    details: [
      "First national championship to utilize digital scoreboards and live replay streams.",
      "Jaipur Raiders registered an undefeated run to claim the men's senior title.",
      "12 university registrars attended to evaluate soft hockey inclusion in sports quotas."
    ]
  },
  {
    id: 'intl-1',
    title: "Indo-Nepal Soft Hockey Championship 2023",
    year: "2023",
    location: "Pokhara, Nepal",
    type: "International",
    description: "The historical first cross-border championship marking the international debut of Soft Hockey under ASHFI sanction.",
    winnerMen: "India Selection",
    runnerUpMen: "Nepal Selection",
    winnerWomen: "India Women Selection",
    runnerUpWomen: "Nepal Queens",
    details: [
      "A milestone in South Asian safe sports culture.",
      "Played on indoor wooden courts showcasing excellent speed, endurance, and strategy.",
      "Established the framework for annual international bilateral leagues."
    ]
  },
  {
    id: 'champ-2',
    title: "2nd National Championship 2022-23",
    year: "2022-23",
    location: "Jaipur, Rajasthan",
    type: "National",
    description: "The championship that solidified the 31+ states reach of the Amateur Soft Hockey Federation of India.",
    winnerMen: "Rajasthan Blue Team",
    runnerUpMen: "Maharashtra Dragons",
    winnerWomen: "Rajasthan Pink Stars",
    runnerUpWomen: "Delhi Defenders",
    details: [
      "Attracted 5,000+ primary school physical training instructors to observe.",
      "Standardized referee signals and green/yellow/red card timing mechanics."
    ]
  },
  {
    id: 'champ-1',
    title: "1st Senior/Junior/Sub-Junior National Championship 2021-22",
    year: "2021-22",
    location: "Jaipur, Rajasthan",
    type: "National",
    description: "The inaugural national championship that launched safe, fast-paced Soft Hockey on the national calendar.",
    winnerMen: "Rajasthan Seniors",
    runnerUpMen: "Haryana Bulls",
    winnerWomen: "Delhi Divas",
    runnerUpWomen: "Rajasthan Queens",
    details: [
      "Organized under the patronage of Mr. Ramesh Singh (Founder).",
      "Successfully demonstrated 6v6 field strategy, non-contact sportsmanship, and D-area goalie boundaries."
    ]
  }
];

export default function Championships() {
  const [selectedType, setSelectedType] = useState<'All' | 'National' | 'International'>('All');
  const [expandedId, setExpandedId] = useState<string | null>('champ-4');

  const filteredChampionships = CHAMPIONSHIPS_DATA.filter(event => {
    if (selectedType === 'All') return true;
    return event.type === selectedType;
  });

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="championships" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-black tracking-widest text-primary uppercase dark:bg-accent/10 dark:border-accent/20 dark:text-accent">
            <Trophy className="w-3.5 h-3.5" />
            CHAMPIONSHIPS TIMELINE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
            ASHFI Championship Records
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Explore the proud milestones, host cities, and national/international tournament history of the Amateur Soft Hockey Federation of India.
          </p>

          {/* Filtering Tabs */}
          <div className="inline-flex rounded-full p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 mt-6 shadow-sm select-none">
            {(['All', 'National', 'International'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  selectedType === type
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Championships Timeline Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredChampionships.map((event, idx) => {
            const isExpanded = expandedId === event.id;
            return (
              <div 
                key={event.id}
                className={`bg-white dark:bg-slate-900 border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                  isExpanded 
                    ? 'border-primary dark:border-accent shadow-md' 
                    : 'border-slate-200/60 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleExpand(event.id)}
                  className="w-full text-left p-6 sm:p-8 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    {/* Badge */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border shadow-sm ${
                      event.type === 'International'
                        ? 'bg-amber-500/10 border-amber-500/20 text-amber-600'
                        : 'bg-primary/10 border-primary/20 text-primary dark:text-accent'
                    }`}>
                      <Trophy className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono font-black text-primary dark:text-accent uppercase tracking-widest bg-slate-50 dark:bg-slate-950 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-800">
                          {event.year}
                        </span>
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                          event.type === 'International'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                      <h3 className="font-display font-black text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-bold">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Icon Indicator */}
                  <div className="p-1.5 rounded-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-slate-500 shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Content Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/20"
                    >
                      <div className="p-6 sm:p-8 space-y-6">
                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-semibold">
                          {event.description}
                        </p>

                        {/* Gold & Silver Podium results */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Men's Segment */}
                          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-800/80 space-y-3">
                            <span className="text-[10px] font-mono font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block border-b border-slate-50 dark:border-slate-800/60 pb-1.5">
                              Men's Championship Results
                            </span>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-xs font-bold">
                                <span className="flex items-center gap-1.5 text-amber-600">
                                  <Award className="w-4 h-4 fill-amber-500 text-amber-500" />
                                  <span>Gold (1st):</span>
                                </span>
                                <span className="text-slate-800 dark:text-slate-100">{event.winnerMen}</span>
                              </div>
                              <div className="flex items-center justify-between text-xs font-bold">
                                <span className="flex items-center gap-1.5 text-slate-400">
                                  <Award className="w-4 h-4 fill-slate-300 text-slate-300" />
                                  <span>Silver (2nd):</span>
                                </span>
                                <span className="text-slate-800 dark:text-slate-100">{event.runnerUpMen}</span>
                              </div>
                            </div>
                          </div>

                          {/* Women's Segment */}
                          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-800/80 space-y-3">
                            <span className="text-[10px] font-mono font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block border-b border-slate-50 dark:border-slate-800/60 pb-1.5">
                              Women's Championship Results
                            </span>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-xs font-bold">
                                <span className="flex items-center gap-1.5 text-amber-600">
                                  <Award className="w-4 h-4 fill-amber-500 text-amber-500" />
                                  <span>Gold (1st):</span>
                                </span>
                                <span className="text-slate-800 dark:text-slate-100">{event.winnerWomen}</span>
                              </div>
                              <div className="flex items-center justify-between text-xs font-bold">
                                <span className="flex items-center gap-1.5 text-slate-400">
                                  <Award className="w-4 h-4 fill-slate-300 text-slate-300" />
                                  <span>Silver (2nd):</span>
                                </span>
                                <span className="text-slate-800 dark:text-slate-100">{event.runnerUpWomen}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Special Details / Bullet notes */}
                        <div className="space-y-2.5">
                          <span className="text-[10px] font-mono font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                            Key Event Highlights & Notes
                          </span>
                          <ul className="space-y-1.5 pl-4 list-disc">
                            {event.details.map((detail, dIdx) => (
                              <li key={dIdx} className="text-xs text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
