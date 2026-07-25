import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Award, 
  Shield, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  Info, 
  Video, 
  HelpCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  Compass,
  FileText
} from 'lucide-react';

// Recommended tutorial and highlight video database for Soft Hockey / Floorball
const GUIDE_VIDEOS = [
  {
    id: 'vid-guide-1',
    title: 'How to Play Soft Hockey & Floorball: Basic Rules for Beginners',
    duration: '4:20',
    category: 'Tutorial',
    videoUrl: 'https://www.youtube.com/embed/SOf-pI2fCxs',
    thumbnail: '/src/assets/images/soft_hockey_tutorial_cover_1784028950897.jpg',
    desc: 'Learn the essential grip, posture, passing, and shooting fundamentals safely.'
  },
  {
    id: 'vid-guide-2',
    title: 'Core Stickhandling Drills & Ball Control Mechanics',
    duration: '5:45',
    category: 'Skills Training',
    videoUrl: 'https://www.youtube.com/embed/8_SgXWnN_G8',
    thumbnail: '/src/assets/images/soft_hockey_skills_cover_1784028963618.jpg',
    desc: 'Master the art of rapid soft-puck/ball dragging, fake movements, and toe-drags.'
  },
  {
    id: 'vid-guide-3',
    title: 'Goalkeeper Positioning & Reflex Drills',
    duration: '6:12',
    category: 'Goalkeeping',
    videoUrl: 'https://www.youtube.com/embed/1vR2VInR_lE',
    thumbnail: '/src/assets/images/soft_hockey_news_cover_1784028937329.jpg',
    desc: 'Learn the core sliding, positioning, and glove reflex techniques for the soft net.'
  }
];

export default function SoftHockeyGuide() {
  const [activeTab, setActiveTab] = useState<'wiki' | 'rules' | 'equipment' | 'videos'>('wiki');
  const [selectedRule, setSelectedRule] = useState<number>(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const rules = [
    {
      id: 0,
      title: 'No High Sticks (Waist-Level Constraint)',
      description: 'The blade of the stick must never rise above waist level during active play, nor above knee level during passing/shooting. This ensures maximum safety in dense indoor playing spaces.',
      severity: 'Strict Violation',
      icon: <ShieldCheck className="w-5 h-5 text-rose-500" />
    },
    {
      id: 1,
      title: 'Strict No Body Contact',
      description: 'Unlike standard ice hockey, body-checking, slide tackling, pushing, or using elbows is strictly forbidden. Players must use purely defensive positioning and stick agility to win possession.',
      severity: 'Pure Skill-Based',
      icon: <Shield className="w-5 h-5 text-blue-500" />
    },
    {
      id: 2,
      title: 'Safe Hollow Perforated Ball',
      description: 'The game is played using a lightweight, hollow plastic ball with 26 integrated holes (weighing roughly 23 grams) or a soft flat flexible rubber puck, minimizing any impact injury risk.',
      severity: 'Equipment Mandate',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />
    },
    {
      id: 3,
      title: 'Match Duration & Team Size',
      description: 'An official championship match consists of 3 action-packed periods of 15 minutes each. Each team has 5 field players and 1 specialized goalkeeper on the court.',
      severity: 'Championship Standard',
      icon: <Clock className="w-5 h-5 text-purple-500" />
    },
    {
      id: 4,
      title: 'No Hand or Head Play',
      description: 'Players cannot use hands, heads, or arms to catch or control the ball. However, kicking the ball once to your own stick is permitted as part of standard ground control.',
      severity: 'Gameplay Boundary',
      icon: <Zap className="w-5 h-5 text-emerald-500" />
    }
  ];

  const gearList = [
    {
      name: 'Safe Polymer Sticks',
      desc: 'Crafted from flexible carbon-fiberglass shafts with safe molded polyethylene blades. The blades have curved honeycombs for maximum drag control.',
      type: 'Core Gear'
    },
    {
      name: 'Hollow Aero Ball',
      desc: 'A 23-gram high-density polypropylene ball with 26 circular holes to reduce air resistance and ensure safe, high-speed movement.',
      type: 'Core Gear'
    },
    {
      name: 'Goalkeeper Protective Shield',
      desc: 'Since goalkeepers play on their knees without sticks, they are equipped with padded chest guards, lightweight helmets, and knee protectors.',
      type: 'Safety Equipment'
    },
    {
      name: 'Miniature Nets (Goalposts)',
      desc: 'Standard goalposts measure 1.6 meters wide by 1.15 meters high, structured from lightweight aluminum tubes with double-stitched nylon mesh netting.',
      type: 'Pitch Infrastructure'
    }
  ];

  return (
    <section id="soft-hockey-guide" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-black tracking-widest text-accent uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            COMPREHENSIVE WIKI & GUIDE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
            The Soft Hockey Encyclopedia
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Discover the rules, history, and equipment of Soft Hockey. Supported by the Amateur Soft Hockey Federation of India (ASHFI), this sport is revolutionizing physical education and championship athletics across Jaipur and India.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'wiki', label: 'About & Wiki Info', icon: <Compass className="w-4 h-4" /> },
            { id: 'rules', label: 'Official Rules', icon: <FileText className="w-4 h-4" /> },
            { id: 'equipment', label: 'Gear & Equipment', icon: <Shield className="w-4 h-4" /> },
            { id: 'videos', label: 'YouTube Tutorials', icon: <Video className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setActiveVideo(null);
              }}
              className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 border transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-primary dark:bg-accent border-primary dark:border-accent text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Interactive Container */}
        <div className="bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-xl min-h-[420px] transition-all">
          <AnimatePresence mode="wait">
            
            {/* WIKI TAB */}
            {activeTab === 'wiki' && (
              <motion.div
                key="wiki"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                {/* TOP SECTION: Title, Logo Badge, and Overview Text */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-slate-200/80 dark:border-slate-800/80 pb-6">
                    {/* Perfect Circle Soft Hockey Logo */}
                    <div className="w-14 h-14 rounded-full aspect-square border-2 border-primary/30 dark:border-accent/40 ring-2 ring-primary/10 overflow-hidden shrink-0 shadow-lg bg-slate-950 flex items-center justify-center">
                      <img 
                        src="https://i.postimg.cc/ydytkN33/Screenshot-2026-07-16-143140.png" 
                        alt="ASHFI Soft Hockey Official Logo" 
                        className="w-full h-full object-cover rounded-full" 
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-black tracking-widest text-primary dark:text-accent font-mono uppercase block">
                        OFFICIAL ASHFI SUMMARY & OVERVIEW
                      </span>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight leading-snug">
                        What is Soft Hockey?
                      </h3>
                    </div>
                  </div>

                  {/* Summary Text Content */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
                      <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base">Safe & Dynamic</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Soft Hockey</strong> (often referred to as safe indoor hockey or recreational floorball) is an athletic sport designed to offer the exhilarating pace, strategy, and hand-eye training of Field and Ice hockey while keeping physical impact and high-stick injuries to absolute zero.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
                      <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base">Aero Ball & Polymer Gear</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        Played on polished indoor floors, concrete, or outdoor astroturf, the game substitutes standard heavy wooden sticks with ultra-light, flexible polymer shafts and heavy pucks with hollow 23g aerodynamic plastic balls, making the game accessible to all ages.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
                      <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base">Governed by ASHFI</h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        The <strong>Amateur Soft Hockey Federation of India (ASHFI)</strong> acts as the central national authority, orchestrating state-level training programs, domestic cups, and supporting international camps with Jaipur's SMS Stadium as a key hub.
                      </p>
                    </div>
                  </div>

                  {/* Feature Badges */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
                      <Award className="w-4 h-4 text-amber-500" />
                      ASHFI Certified Standard
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-bold text-blue-700 dark:text-blue-400">
                      <Shield className="w-4 h-4 text-blue-500" />
                      Zero-Impact Design
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      <Sparkles className="w-4 h-4 text-emerald-500" />
                      Non-Contact Sport
                    </div>
                  </div>
                </div>

                {/* BOTTOM SECTION: Official Soft Hockey Action Image & Quick Comparison Guide */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                  <span className="text-[10px] font-black tracking-widest text-primary dark:text-accent font-mono uppercase block mb-4">
                    MATCH VISUAL SHOWCASE & SPECIFICATIONS
                  </span>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Official Image Frame at bottom */}
                    <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl min-h-[280px] bg-slate-950 flex flex-col justify-end">
                      <img 
                        src="https://i.postimg.cc/YqrbDfzM/Screenshot-2026-07-15-001348.png" 
                        alt="Soft Hockey Action Match & Equipment Showcase" 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                      
                      {/* Image Overlay Label */}
                      <div className="relative z-10 p-6 space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/90 text-white font-mono text-[10px] font-black uppercase tracking-wider shadow">
                          <Sparkles className="w-3 h-3 text-amber-300" />
                          Official ASHFI Action Arena
                        </div>
                        <h4 className="font-display font-extrabold text-xl text-white tracking-tight">
                          Safe Indoor & Outdoor Soft Hockey Equipment
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                          Lightweight polymer sticks paired with 26-hole aero balls deliver explosive velocity with maximum player safety.
                        </p>
                      </div>
                    </div>

                    {/* Quick Comparison Guide Card */}
                    <div className="lg:col-span-5 w-full">
                      <div className="h-full p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-[#0B0F19] border border-[#1F2937] text-white shadow-2xl flex flex-col justify-between gap-6 transition-all duration-300">
                        <div className="space-y-6">
                          {/* Header section with section title, subtle info icon, and main title */}
                          <div className="space-y-2 border-b border-[#1F2937] pb-5">
                            <span className="text-[10px] font-mono font-bold text-[#9CA3AF] uppercase tracking-[0.2em] block">
                              TECHNICAL SPECIFICATIONS
                            </span>
                            <div className="flex items-center gap-3">
                              <div className="w-7 h-7 rounded-full border border-[#1F2937] bg-[#111827] flex items-center justify-center shrink-0">
                                <Info className="w-4 h-4 text-[#9CA3AF]" />
                              </div>
                              <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#FFFFFF] tracking-tight uppercase">
                                Quick Comparison Guide
                              </h4>
                            </div>
                          </div>

                          {/* Stacked, rounded rectangular sub-cards */}
                          <div className="space-y-3.5">
                            {/* Block 1 */}
                            <div className="p-4 rounded-xl bg-[#111827] border border-[#1F2937] space-y-1 transition-all duration-200 hover:border-slate-700">
                              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#9CA3AF] block">
                                GAME BALL
                              </span>
                              <span className="text-sm sm:text-base font-extrabold text-[#FFFFFF] block tracking-wide">
                                23g Perforated Plastic
                              </span>
                            </div>

                            {/* Block 2 */}
                            <div className="p-4 rounded-xl bg-[#111827] border border-[#1F2937] space-y-1 transition-all duration-200 hover:border-slate-700">
                              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#9CA3AF] block">
                                STICKS USED
                              </span>
                              <span className="text-sm sm:text-base font-extrabold text-[#FFFFFF] block tracking-wide">
                                Safe Molded Polymer
                              </span>
                            </div>

                            {/* Block 3 */}
                            <div className="p-4 rounded-xl bg-[#111827] border border-[#1F2937] space-y-1 transition-all duration-200 hover:border-slate-700">
                              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#9CA3AF] block">
                                CONTACT LEVEL
                              </span>
                              <span className="text-sm sm:text-base font-extrabold text-[#FFFFFF] block tracking-wide">
                                Strictly Non-Contact
                              </span>
                            </div>

                            {/* Block 4 */}
                            <div className="p-4 rounded-xl bg-[#111827] border border-[#1F2937] space-y-1 transition-all duration-200 hover:border-slate-700">
                              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#9CA3AF] block">
                                GOALKEEPING STYLE
                              </span>
                              <span className="text-sm sm:text-base font-extrabold text-[#FFFFFF] block tracking-wide">
                                Stickless & Kneeling
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Quote Footer */}
                        <div className="p-4 rounded-xl bg-[#111827]/60 border border-[#1F2937]">
                          <p className="text-xs text-[#9CA3AF] italic font-medium leading-relaxed">
                            "By keeping the stick blade low and eliminating heavy body checks, players develop rapid hand speed and superior spatial movement mechanics."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* RULES TAB */}
            {activeTab === 'rules' && (
              <motion.div
                key="rules"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left Rule list (lg:col-span-5) */}
                <div className="lg:col-span-5 space-y-2.5">
                  <div className="mb-4">
                    <span className="text-[10px] font-black tracking-widest text-primary dark:text-accent font-mono uppercase block">
                      ASHFI Rulebook
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                      The Five Core Mandates
                    </h3>
                  </div>

                  {rules.map((rule, idx) => (
                    <div
                      key={rule.id}
                      onClick={() => setSelectedRule(idx)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                        selectedRule === idx
                          ? 'bg-primary/5 dark:bg-accent/5 border-primary dark:border-accent/40 shadow-sm'
                          : 'bg-transparent border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${selectedRule === idx ? 'bg-primary/10 dark:bg-accent/10' : 'bg-slate-100 dark:bg-slate-800'}`}>
                          {rule.icon}
                        </div>
                        <span className="font-display font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                          {rule.title}
                        </span>
                      </div>
                      <ArrowRight className={`w-4 h-4 text-slate-400 transition-transform ${selectedRule === idx ? 'translate-x-1 text-primary dark:text-accent' : ''}`} />
                    </div>
                  ))}
                </div>

                {/* Right Rule Detail card (lg:col-span-7) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                      <span className="text-[10px] font-black tracking-widest text-rose-500 font-mono uppercase bg-rose-500/10 px-2.5 py-1 rounded-full">
                        {rules[selectedRule].severity}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        Rule ID: 0{rules[selectedRule].id + 1}
                      </span>
                    </div>

                    <h4 className="font-display font-black text-xl text-slate-900 dark:text-white">
                      {rules[selectedRule].title}
                    </h4>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-bold">
                      {rules[selectedRule].description}
                    </p>

                    <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-3">
                      <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-600 dark:text-amber-400 leading-relaxed font-semibold">
                        Penalty corner or penalty shot is awarded to the opponent if safety rules like high sticks are breached inside the goalkeeper’s crease.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* EQUIPMENT TAB */}
            {activeTab === 'equipment' && (
              <motion.div
                key="equipment"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <span className="text-[10px] font-black tracking-widest text-primary dark:text-accent font-mono uppercase block">
                    Kit Requirements
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">
                    Soft Hockey Essential Gear
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {gearList.map((item, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:border-primary dark:hover:border-accent hover:shadow-md transition-all duration-300"
                    >
                      <div className="space-y-3">
                        <span className="text-[9px] font-mono font-black text-primary dark:text-accent tracking-widest bg-primary/10 dark:bg-accent/10 px-2 py-0.5 rounded-full inline-block">
                          {item.type}
                        </span>
                        <h4 className="font-display font-black text-sm text-slate-900 dark:text-white">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-bold">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 text-xs text-emerald-600 font-bold uppercase">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        Approved
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* VIDEOS TAB */}
            {activeTab === 'videos' && (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-black tracking-widest text-primary dark:text-accent font-mono uppercase block">
                      Instructional Tutorials
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">
                      Learn Soft Hockey Live
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-bold flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-rose-500" />
                    Videos provided by professional guides
                  </span>
                </div>

                {/* Video Play Spotlight Frame */}
                {activeVideo ? (
                  <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-black">
                    <iframe
                      src={activeVideo}
                      title="YouTube Video Player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                    <button
                      onClick={() => setActiveVideo(null)}
                      className="absolute top-4 right-4 px-4 py-2 bg-slate-900/90 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl border border-white/10 shadow-lg cursor-pointer hover:bg-slate-800 transition-all"
                    >
                      Close Player
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {GUIDE_VIDEOS.map((vid) => (
                      <div
                        key={vid.id}
                        onClick={() => setActiveVideo(vid.videoUrl)}
                        className="group bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary dark:hover:border-accent cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
                      >
                        {/* Thumbnail overlay */}
                        <div className="relative h-44 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                          <img
                            src={vid.thumbnail}
                            alt={vid.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-primary dark:bg-accent text-white flex items-center justify-center shadow-md group-hover:scale-110 active:scale-95 transition-transform">
                              <Play className="w-5 h-5 fill-white translate-x-0.5" />
                            </div>
                          </div>
                          <span className="absolute bottom-3 right-3 bg-slate-900/80 text-white font-mono text-[9px] font-black px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {vid.duration}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <div className="p-4 space-y-2">
                          <span className="text-[9px] font-mono font-black text-primary dark:text-accent tracking-wider uppercase block">
                            {vid.category}
                          </span>
                          <h4 className="font-display font-extrabold text-sm text-slate-800 dark:text-slate-100 line-clamp-1 leading-snug group-hover:text-primary dark:group-hover:text-accent transition-colors">
                            {vid.title}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-bold">
                            {vid.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
