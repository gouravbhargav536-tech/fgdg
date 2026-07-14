import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Search, 
  ExternalLink, 
  Globe, 
  HelpCircle, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Building2, 
  Compass, 
  Flame, 
  Loader2, 
  ArrowRight,
  Bookmark,
  CheckCircle2
} from 'lucide-react';

interface Citation {
  title: string;
  uri: string;
}

interface QuickPrompt {
  label: string;
  query: string;
  icon: React.ReactNode;
}

const OFFICIAL_PORTALS = [
  {
    name: "Ministry of Youth Affairs and Sports (MYAS)",
    type: "Government of India / भारत सरकार",
    desc: "The central ministry formulating policies, schemes (like Target Olympic Podium Scheme), and sanctioning national sports development funds.",
    url: "https://yas.gov.in",
    category: "gov",
    badgeColor: "bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/20",
    imageUrl: "https://i.postimg.cc/dtrqghZG/Screenshot-2026-07-14-175912.png"
  },
  {
    name: "Sports Authority of India (SAI)",
    type: "Apex Sports Body / भारतीय खेल प्राधिकरण",
    desc: "Coordinates athletic excellence centers, modern turf installations, coaching programs, and nurtures the official national hockey team academies.",
    url: "https://sportsauthorityofindia.nic.in",
    category: "gov",
    badgeColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/20",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Hockey India (HI)",
    type: "Official Governing Body / हॉकी इंडिया",
    desc: "The official, central governing body organizing National Championships, junior/senior national camps, and direct international matches for Team India.",
    url: "https://www.hockeyindia.org",
    category: "official",
    badgeColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
    imageUrl: "https://i.postimg.cc/W4rC1Zj0/Screenshot-2026-07-14-181455.png"
  },
  {
    name: "International Hockey Federation (FIH)",
    type: "World Governing Body / अंतरराष्ट्रीय हॉकी संघ",
    desc: "The global authority for field hockey, indoor hockey, and variant formats. Standardizes official rules, technical setups, and the World Cups.",
    url: "https://www.fih.hockey",
    category: "official",
    badgeColor: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/20",
    imageUrl: "https://i.postimg.cc/DZr9BXMV/Screenshot-2026-07-14-181401.png"
  },
  {
    name: "Khelo India Programme",
    type: "Ministry Grassroots Initiative / खेलो इंडिया",
    desc: "Prime government scholarship scheme identifying raw grassroots talent, hosting youth championships, and supporting athletic training setups.",
    url: "https://kheloindia.gov.in",
    category: "gov",
    badgeColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20",
    imageUrl: "https://i.postimg.cc/1zt4x9Qf/Screenshot-2026-07-14-181026.png"
  },
  {
    name: "Fit India Movement Portal",
    type: "National Wellness Initiative / फिट इंडिया",
    desc: "A flagship nation-wide campaign by the Government of India to encourage people to remain healthy by including sports and physical activities.",
    url: "https://fitindia.gov.in",
    category: "gov",
    badgeColor: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/20",
    imageUrl: "https://i.postimg.cc/2jqvb7g8/Screenshot-2026-07-14-180856.png"
  },
  {
    name: "Asian Hockey Federation (AHF)",
    type: "Continental Body / एशियाई हॉकी महासंघ",
    desc: "Coordinates Asian tournaments, hockey development grants, indoor championships, and supports safe grassroot initiatives across Asia.",
    url: "https://asiahockey.org",
    category: "official",
    badgeColor: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20",
    imageUrl: "https://i.postimg.cc/y6rg73dC/Screenshot-2026-07-14-180709.png"
  },
  {
    name: "Amateur Soft Hockey Federation of India",
    type: "National Soft Hockey Authority / ASHFI",
    desc: "The premier national federation pioneering and managing Soft/Safe Hockey championships, state events, and training academies in Jaipur and nationwide.",
    url: "https://ashfi.org",
    category: "official",
    badgeColor: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20",
    imageUrl: "/src/assets/images/soft_hockey_news_cover_1784028937329.jpg"
  }
];

const QUICK_PROMPTS: QuickPrompt[] = [
  {
    label: "Khelo India and SAI Schemes for Hockey",
    query: "What are the latest Sports Authority of India (SAI) schemes, scholarships, and academy initiatives for hockey and youth talent?",
    icon: <Building2 className="w-4 h-4 text-orange-500" />
  },
  {
    label: "Hockey India League 2026 Rules & Status",
    query: "What is the latest status, schedule, and structure of the Hockey India League (HIL) 2026 including the men and women divisions?",
    icon: <Award className="w-4 h-4 text-emerald-500" />
  },
  {
    label: "Soft Hockey Rules and Safety Guide",
    query: "How does Soft Hockey differ from standard Field Hockey in terms of rules, sticks, hollow ball, and waist-level constraints?",
    icon: <ShieldCheck className="w-4 h-4 text-blue-500" />
  },
  {
    label: "Indian National Hockey Team Achievements",
    query: "What are the recent major achievements, Olympic qualification standings, and international titles won by the Indian Men's and Women's National Hockey Teams?",
    icon: <Flame className="w-4 h-4 text-purple-500" />
  }
];

export default function AIHockeyHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [citations, setCitations] = useState<Citation[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleAISearch = async (queryToSubmit: string) => {
    if (!queryToSubmit.trim()) return;
    setLoading(true);
    setError(null);
    setResponse(null);
    setCitations([]);

    try {
      const res = await fetch("/api/hockey-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: queryToSubmit }),
      });

      if (!res.ok) {
        throw new Error("Failed to search the live web. Make sure the backend server is active.");
      }

      const data = await res.json();
      setResponse(data.text);
      setCitations(data.citations || []);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred while communicating with Gemini API.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAISearch(searchQuery);
  };

  return (
    <section id="ai-hockey-hub" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-black tracking-widest text-primary uppercase dark:bg-accent/10 dark:border-accent/20 dark:text-accent">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            LIVE AI HOCKEY INTELLIGENCE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
            AI Search Grounding & Official Directory
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Query the sports web in real-time powered by <strong>Gemini 3.5-Flash</strong> with live Search Grounding. Discover official facts, rules, government schemes, and browse the verified athletic links directory.
          </p>
        </div>

        {/* INTERACTIVE AI GROUNDING SEARCH BAR */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl space-y-8">
          
          <div className="space-y-3">
            <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-primary dark:text-accent" />
              Ask any Hockey Question (पूंछें हॉकी से जुड़े सवाल)
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold leading-relaxed">
              Our AI automatically queries live government databases, Hockey India press releases, and world federation portals to retrieve precise, non-hallucinated results complete with source citations.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask about Hockey India tournaments, Soft Hockey safety guidelines, or government SAI schemes..."
              className="w-full pl-12 pr-32 py-4 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary dark:focus:border-accent font-medium shadow-inner transition-colors placeholder:text-slate-400"
            />
            <div className="absolute left-4 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <button
              type="submit"
              disabled={loading || !searchQuery.trim()}
              className={`absolute right-2 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                loading || !searchQuery.trim()
                  ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  : 'bg-primary dark:bg-accent hover:bg-opacity-95 text-white shadow-md active:scale-95'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  Query / खोजें
                </>
              )}
            </button>
          </form>

          {/* Recommended Quick prompts */}
          <div className="space-y-3">
            <span className="text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 font-mono uppercase block">
              Suggested High-Quality Queries / सुझाए गए प्रश्न:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSearchQuery(prompt.query);
                    handleAISearch(prompt.query);
                  }}
                  className="p-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-950/80 border border-slate-200/50 dark:border-slate-800/80 rounded-xl text-left text-xs text-slate-700 dark:text-slate-300 font-bold flex items-center gap-3 transition-all cursor-pointer group"
                >
                  <div className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 group-hover:scale-110 transition-transform">
                    {prompt.icon}
                  </div>
                  <span className="line-clamp-1 leading-tight">{prompt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* OUTPUT RESPONSE CONTAINER */}
          <AnimatePresence mode="wait">
            {loading && (
              <motion.div
                key="loading-ai"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-dashed border-slate-200 dark:border-slate-800/80 flex flex-col items-center justify-center space-y-4 text-center"
              >
                <div className="relative flex items-center justify-center">
                  <Loader2 className="w-10 h-10 text-primary dark:text-accent animate-spin" />
                  <Sparkles className="w-4 h-4 text-amber-500 absolute animate-pulse" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-black text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                    Searching Government and Hockey Databases...
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed font-bold">
                    Gemini 3.5-Flash is filtering current sports declarations, rule books, and news wires in real-time.
                  </p>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                key="error-ai"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-semibold leading-relaxed"
              >
                {error}
              </motion.div>
            )}

            {response && (
              <motion.div
                key="response-ai"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Text Result */}
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-white space-y-4 shadow-lg">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-[10px] font-mono font-black text-primary dark:text-accent tracking-widest uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                      GROUNDED AI RESPONSE / लाइव सत्यापित जानकारी
                    </span>
                    <span className="text-[9px] font-mono font-bold text-slate-500">
                      Citations: {citations.length} Sources Found
                    </span>
                  </div>

                  <div className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium whitespace-pre-line space-y-4">
                    {response}
                  </div>
                </div>

                {/* Citations Grid */}
                {citations.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                      Live Verified Sources consulted for this search / परामर्शित आधिकारिक वेबसाइटें:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {citations.map((cite, index) => (
                        <a
                          key={index}
                          href={cite.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3.5 bg-slate-50 dark:bg-slate-900 hover:border-primary dark:hover:border-accent border border-slate-200/60 dark:border-slate-800/80 rounded-xl flex items-center justify-between transition-all hover:shadow-sm cursor-pointer group"
                        >
                          <div className="space-y-1">
                            <span className="text-[10px] font-black font-mono text-primary dark:text-accent tracking-wider uppercase block">
                              Source 0{index + 1}
                            </span>
                            <span className="text-xs text-slate-800 dark:text-slate-200 font-bold block line-clamp-1">
                              {cite.title}
                            </span>
                          </div>
                          <div className="p-2 bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/80 rounded-lg group-hover:scale-105 transition-transform shrink-0">
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary dark:group-hover:text-accent" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* GOVERNMENT & OFFICIAL PORTALS BUTTON DIRECTORY */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-black tracking-widest text-primary dark:text-accent font-mono uppercase block">
              OFFICIAL GOVERNMENT & WORLD SPORTS PORTALS
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white uppercase tracking-tight">
              Official Hockey Directory
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold">
              Access the validated official websites of the government authorities, federations, and sports portals.
            </p>
          </div>

          {/* Portals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICIAL_PORTALS.map((portal, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl flex flex-col justify-between overflow-hidden hover:border-primary dark:hover:border-accent hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Portal Preview Image */}
                  <div className="relative h-32 w-full bg-slate-100 dark:bg-slate-950 overflow-hidden border-b border-slate-100 dark:border-slate-800/80">
                    <img 
                      src={portal.imageUrl} 
                      alt={`${portal.name} Portal Banner`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    <span className={`text-[9px] font-mono font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full inline-block ${portal.badgeColor}`}>
                      {portal.type}
                    </span>
                    
                    <h4 className="font-display font-black text-sm text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      {portal.name}
                    </h4>
                    
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-bold">
                      {portal.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100/80 dark:border-slate-850">
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 rounded-xl transition-all uppercase tracking-wider group cursor-pointer"
                  >
                    <span>Visit Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
