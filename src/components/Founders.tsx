import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Award, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  X, 
  Search, 
  Globe, 
  BookOpen, 
  Shield, 
  Star,
  CheckCircle2,
  Bookmark,
  TrendingUp,
  FileText
} from 'lucide-react';
import ImageBanner from './ImageBanner';

interface BoardMember {
  name: string;
  role: string;
  focus: string;
  icon: string;
  division: string;
}

export default function Founders() {
  const [selectedModal, setSelectedModal] = useState<'ramesh' | 'ashutosh' | 'bearers' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 13 primary Office Bearers as pictured in the roster image
  const officeBearers: BoardMember[] = [
    { 
      name: "Sandeep Singh Chouhan (IPS)", 
      role: "National President", 
      focus: "IPS Officer directing national youth sports development, compliance, and official state federation approvals.", 
      icon: "👮‍♂️",
      division: "Executive Board"
    },
    { 
      name: "Ramesh Singh", 
      role: "General Secretary & Technical Director", 
      focus: "Drafts game guidelines, administers safety equipment specifications, and organizes referee training clinics.", 
      icon: "📑",
      division: "Executive Board"
    },
    { 
      name: "Dr. Adil Vasa", 
      role: "ISHL Patron & Vice President", 
      focus: "Directs corporate sponsorships, regional league franchise bids, and collegiate draft coordination.", 
      icon: "🎖️",
      division: "Patron / Advisory"
    },
    { 
      name: "Gajendra Singh Rathore", 
      role: "Treasurer", 
      focus: "Manages financial distribution, state-level coaching grants, and equipment production budgeting.", 
      icon: "💳",
      division: "Executive Board"
    },
    { 
      name: "Sunrana Prakash", 
      role: "ISHL Patron", 
      focus: "Champions gender-inclusive player participation and organizes national girls' championship structures.", 
      icon: "👩‍💼",
      division: "Patron / Advisory"
    },
    { 
      name: "Shiksha Pant", 
      role: "Vice President", 
      focus: "Coordinates academic school sports board alignments and physical education integration campaigns.", 
      icon: "🎓",
      division: "Vice President Circle"
    },
    { 
      name: "Gopal Maluja", 
      role: "Vice President", 
      focus: "Leads Western India grassroots expansion programs and local academy certifications.", 
      icon: "🏔️",
      division: "Vice President Circle"
    },
    { 
      name: "Akshay Chaturvedi", 
      role: "Vice President", 
      focus: "Administers collegiate soft hockey sports programs and official coach certifications.", 
      icon: "📋",
      division: "Vice President Circle"
    },
    { 
      name: "Ramavatar Sharma", 
      role: "Vice President", 
      focus: "Oversees media relations, press communication, and broadcast coordination for state championships.", 
      icon: "📰",
      division: "Vice President Circle"
    },
    { 
      name: "Dr. Ramdhan", 
      role: "Joint Secretary", 
      focus: "Supervises administrative documentation, state affiliate registration audits, and governing files.", 
      icon: "🖊️",
      division: "Joint Secretariats"
    },
    { 
      name: "Ajaypal Singh Nathawat", 
      role: "Joint Secretary", 
      focus: "Manages live tournament match coordination, referee assignments, and safety standard compliance.", 
      icon: "🏟️",
      division: "Joint Secretariats"
    },
    { 
      name: "Shankar Lal Magadia", 
      role: "Joint Secretary", 
      focus: "Assists in equipment manufacturing control, test lab validation, and stick density certifications.", 
      icon: "🔧",
      division: "Joint Secretariats"
    },
    { 
      name: "Arun Kumar Singh", 
      role: "Joint Secretary", 
      focus: "Directs rural athlete outreach and school-level talent identification tournaments.", 
      icon: "🌍",
      division: "Joint Secretariats"
    },
  ];

  const filteredBearers = officeBearers.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.focus.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="founders" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 transition-colors text-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-black tracking-widest text-primary uppercase dark:bg-accent/10 dark:border-accent/20 dark:text-accent">
            <Users className="w-3.5 h-3.5" />
            FEDERATION FOUNDERS & LEADERSHIP
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
            The Pioneers of Soft Hockey India
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Meet the visionaries who researched, developed, and established the Amateur Soft Hockey Federation of India (ASHFI) as a national sports powerhouse.
          </p>
        </div>

        {/* Co-Founders / Key Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Founder 1: Mr. Ramesh Singh */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-lg flex flex-col">
            <div className="relative h-72 sm:h-80 bg-slate-950 shrink-0">
              <img 
                src="https://i.postimg.cc/L4b94Jc6/Screenshot-2026-07-15-105359.png" 
                alt="Mr. Ramesh Singh - Founder of Indian Soft Hockey"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-display font-black text-xl uppercase tracking-tight">Mr. Ramesh Singh</p>
                <p className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">Founder of Indian Soft Hockey</p>
              </div>
            </div>
            
            <div className="p-6 flex flex-col justify-between flex-grow space-y-6">
              <div className="space-y-3">
                <span className="text-[9px] font-mono font-black text-primary dark:text-accent uppercase tracking-widest bg-primary/10 dark:bg-accent/10 px-2.5 py-1 rounded-full inline-block">
                  FOUNDER & TECHNICAL DIRECTOR
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
                  As a physical education researcher at the University of Rajasthan, Mr. Ramesh Singh directed the initial design and technical testing of Soft Hockey starting in 2019. 
                  His goal was to create an inclusive, safe, non-contact hockey variation using polymer materials suitable for both concrete play and wooden courts. 
                  He supervised the entire production, establishing the Amateur Soft Hockey Federation of India.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold font-mono">
                    <MapPin className="w-3.5 h-3.5 text-primary dark:text-accent shrink-0" />
                    <span>Jaipur, Rajasthan, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold font-mono">
                    <Calendar className="w-3.5 h-3.5 text-primary dark:text-accent shrink-0" />
                    <span>Founded: 2019 (Jaipur)</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedModal('ramesh')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs font-black text-slate-700 dark:text-slate-200 rounded-xl transition-all uppercase tracking-wider cursor-pointer hover:border-primary/50 dark:hover:border-accent/50 hover:text-primary dark:hover:text-accent active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 text-primary dark:text-accent animate-pulse" />
                  <span>Find More Details</span>
                </button>
              </div>
            </div>
          </div>

          {/* Leader 2: Dr. Ashutosh Pant */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-lg flex flex-col">
            <div className="relative h-72 sm:h-80 bg-slate-950 shrink-0">
              <img 
                src="https://i.postimg.cc/2yp0TFqd/Screenshot-2026-07-15-104537.png" 
                alt="Dr. Ashutosh Pant - National President"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-display font-black text-xl uppercase tracking-tight">Dr. Ashutosh Pant</p>
                <p className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">National President of ASHFI</p>
              </div>
            </div>
            
            <div className="p-6 flex flex-col justify-between flex-grow space-y-6">
              <div className="space-y-3">
                <span className="text-[9px] font-mono font-black text-primary dark:text-accent uppercase tracking-widest bg-primary/10 dark:bg-accent/10 px-2.5 py-1 rounded-full inline-block">
                  NATIONAL PRESIDENT (ASHFI)
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
                  Dr. Ashutosh Pant leads the Amateur Soft Hockey Federation of India as its National President. He has been instrumental in aligning the sport's policies with public university sports boards, primary school physical education curriculums, and securing corporate sponsorships for the Indian Soft Hockey League. 
                  His vision is to integrate soft hockey into international school boards and South Asian Games.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold font-mono">
                    <MapPin className="w-3.5 h-3.5 text-primary dark:text-accent shrink-0" />
                    <span>National Secretariat, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold font-mono">
                    <Award className="w-3.5 h-3.5 text-primary dark:text-accent shrink-0" />
                    <span>Federation President</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedModal('ashutosh')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs font-black text-slate-700 dark:text-slate-200 rounded-xl transition-all uppercase tracking-wider cursor-pointer hover:border-primary/50 dark:hover:border-accent/50 hover:text-primary dark:hover:text-accent active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 text-primary dark:text-accent animate-pulse" />
                  <span>Find More Details</span>
                </button>
              </div>
            </div>
          </div>

          {/* Leader 3: Executive Board & Office Bearers */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-lg flex flex-col">
            <div className="relative h-72 sm:h-80 bg-slate-950 shrink-0">
              <img 
                src="https://i.postimg.cc/9Xqq5qTc/Screenshot-2026-07-14-234711.png" 
                alt="ASHFI Executive Committee & Office Bearers"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-display font-black text-xl uppercase tracking-tight">ASHFI Office Bearers</p>
                <p className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">Executive Board & Committee</p>
              </div>
            </div>
            
            <div className="p-6 flex flex-col justify-between flex-grow space-y-6">
              <div className="space-y-3">
                <span className="text-[9px] font-mono font-black text-primary dark:text-accent uppercase tracking-widest bg-primary/10 dark:bg-accent/10 px-2.5 py-1 rounded-full inline-block">
                  GOVERNING COUNCIL (ASHFI)
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
                  The complete governing council of the Amateur Soft Hockey Federation of India (ASHFI) comprises distinguished senior administrators, law enforcement officials, and physical educators. Spearheaded by President Sandeep Singh Chouhan (IPS) and Secretary General Ramesh Singh, the committee is dedicated to regulating the official sport rules, training state coaches, and administering regional leagues across India.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold font-mono">
                    <MapPin className="w-3.5 h-3.5 text-primary dark:text-accent shrink-0" />
                    <span>Federation Head Offices, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold font-mono">
                    <Award className="w-3.5 h-3.5 text-primary dark:text-accent shrink-0" />
                    <span>Executive Board Committee</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedModal('bearers');
                    setSearchQuery('');
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs font-black text-slate-700 dark:text-slate-200 rounded-xl transition-all uppercase tracking-wider cursor-pointer hover:border-primary/50 dark:hover:border-accent/50 hover:text-primary dark:hover:text-accent active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 text-primary dark:text-accent animate-pulse" />
                  <span>Find More Details</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        <ImageBanner url="https://i.postimg.cc/4xMPdCCD/Screenshot-2026-07-15-001337.png" caption="Founder Ramesh Singh" />

        {/* Message from leadership banner card */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="space-y-6 max-w-4xl">
            <span className="text-xs font-mono font-black text-yellow-400 uppercase tracking-widest block">
              PRESIDENT'S MESSAGE & VISION STATEMENT
            </span>
            <blockquote className="font-display font-black text-lg sm:text-2xl leading-relaxed text-slate-100">
              "Our mission at ASHFI is to provide every schoolchild in India a safe, energetic, and highly dynamic platform to learn teamwork, coordination, and physical fitness. Soft hockey is highly accessible, requires low-cost specialized safety equipment, and fits perfectly on local school grounds. Together, we are building the fastest growing sport in India."
            </blockquote>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-950 shrink-0">
                <img 
                  src="https://i.postimg.cc/2yp0TFqd/Screenshot-2026-07-15-104537.png" 
                  alt="Dr. Ashutosh Pant" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <div>
                <p className="font-display font-black text-sm text-white uppercase tracking-tight">Dr. Ashutosh Pant</p>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">National President, ASHFI</p>
              </div>
            </div>
          </div>
        </div>

        <ImageBanner url="https://i.postimg.cc/YqrbDfzM/Screenshot-2026-07-15-001348.png" caption="National President Dr. Ashutosh Pant" />

      </div>

      {/* NO-AI HIGH POLISH CLIENT SIDE DETAILS MODALS */}
      <AnimatePresence>
        {selectedModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModal(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className={`relative bg-slate-900 border border-slate-800 text-white rounded-3xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh] z-10 ${
                selectedModal === 'bearers' ? 'max-w-4xl' : 'max-w-2xl'
              }`}
            >
              
              {/* TOP HEADER */}
              <div className="p-6 bg-slate-950/60 border-b border-slate-800 flex items-start justify-between gap-4 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shrink-0">
                    <img 
                      src={
                        selectedModal === 'ramesh' 
                          ? "https://i.postimg.cc/L4b94Jc6/Screenshot-2026-07-15-105359.png"
                          : selectedModal === 'ashutosh'
                          ? "https://i.postimg.cc/2yp0TFqd/Screenshot-2026-07-15-104537.png"
                          : "https://i.postimg.cc/9Xqq5qTc/Screenshot-2026-07-14-234711.png"
                      } 
                      alt="Modal Header" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-white flex items-center gap-2">
                      {selectedModal === 'ramesh' && "Mr. Ramesh Singh"}
                      {selectedModal === 'ashutosh' && "Dr. Ashutosh Pant"}
                      {selectedModal === 'bearers' && "ASHFI Office Bearers"}
                      <Sparkles className="w-4 h-4 text-accent shrink-0 animate-pulse" />
                    </h3>
                    <p className="text-xs font-mono font-extrabold text-accent uppercase tracking-widest">
                      {selectedModal === 'ramesh' && "Founder & Technical Director"}
                      {selectedModal === 'ashutosh' && "National President, ASHFI"}
                      {selectedModal === 'bearers' && "Governing Council Directory"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedModal(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* CONTENT AREA */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* 1. MR. RAMESH SINGH MODAL DETAILS */}
                {selectedModal === 'ramesh' && (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono font-black text-accent uppercase tracking-widest flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        BIOGRAPHY & CAREER PROFILE
                      </span>
                      <p className="text-sm text-slate-200 leading-relaxed font-semibold">
                        Mr. Ramesh Singh is a visionary researcher and physical educator. While analyzing collegiate athletic systems at the University of Rajasthan in 2019, he discovered a crucial gap: traditional field hockey was highly expensive to resource and carried severe injury risks on rough regional school grounds. 
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed font-medium">
                        To build a highly inclusive alternative, he spearheaded a multi-year materials science initiative to design polymer-molded flexible hockey sticks and lightweight hollow safety balls. His creation, "Soft Hockey", allows kids to safely develop rapid coordination on tarmac, indoor halls, or outdoor concrete surfaces.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-950/50 border border-slate-800 space-y-4">
                      <h4 className="text-xs font-display font-black tracking-wider uppercase text-white flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary dark:text-accent" />
                        Core Technical Contributions
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                          <span className="text-[9px] font-mono font-black text-accent uppercase">POLYMER STICK DESIGN</span>
                          <p className="text-xs text-slate-300 font-bold leading-relaxed">
                            Researched & approved high-density flexible polymer compositions to prevent fracturing during high-impact plays.
                          </p>
                        </div>
                        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                          <span className="text-[9px] font-mono font-black text-accent uppercase">OFFICIAL RULEBOOK CO-WRITER</span>
                          <p className="text-xs text-slate-300 font-bold leading-relaxed">
                            Drafted the formal 14-page ASHFI match guidebook prioritizing safety, continuous pacing, and non-contact defense.
                          </p>
                        </div>
                        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                          <span className="text-[9px] font-mono font-black text-accent uppercase">COACHING CURRICULUMS</span>
                          <p className="text-xs text-slate-300 font-bold leading-relaxed">
                            Created standard 3-day certification workshops which have trained over 1,200 physical educators across India.
                          </p>
                        </div>
                        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                          <span className="text-[9px] font-mono font-black text-accent uppercase">EQUIPMENT LAB VERIFICATION</span>
                          <p className="text-xs text-slate-300 font-bold leading-relaxed">
                            Established manufacturing safety labs in Jaipur, ensuring zero toxic dyes and accurate aerodynamic weight metrics.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-850">
                        <p className="text-xl font-display font-black text-white">2019</p>
                        <p className="text-[9px] font-mono font-bold text-slate-400 uppercase">First Stick R&D</p>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-850">
                        <p className="text-xl font-display font-black text-white">1,200+</p>
                        <p className="text-[9px] font-mono font-bold text-slate-400 uppercase">Coaches Certified</p>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-850">
                        <p className="text-xl font-display font-black text-white">18+</p>
                        <p className="text-[9px] font-mono font-bold text-slate-400 uppercase">States Reached</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. DR. ASHUTOSH PANT MODAL DETAILS */}
                {selectedModal === 'ashutosh' && (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono font-black text-accent uppercase tracking-widest flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 animate-pulse" />
                        ADMINISTRATIVE RECORD & MILESTONES
                      </span>
                      <p className="text-sm text-slate-200 leading-relaxed font-semibold">
                        Dr. Ashutosh Pant is an esteemed sports administrator who brings over 15 years of athletic council leadership to ASHFI. Under his executive guidance, the Amateur Soft Hockey Federation of India transformed from a regional organization in Jaipur into a thriving national sport system.
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed font-medium">
                        He is highly acclaimed for standardizing federation licensing processes and securing strong corporate and government partnerships. His work ensures that youth players receive official merit certificates, opening doors for university sports admissions and municipal grants.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-950/50 border border-slate-800 space-y-4">
                      <h4 className="text-xs font-display font-black tracking-wider uppercase text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        Major Presidential Milestones
                      </h4>
                      <ul className="space-y-2.5 text-xs text-slate-300 font-bold">
                        <li className="flex items-start gap-2.5">
                          <span className="p-0.5 rounded bg-emerald-500/10 text-emerald-400 mt-0.5">✓</span>
                          <span>Secured streaming and title sponsorships for the Indian Soft Hockey League (ISHL).</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="p-0.5 rounded bg-emerald-500/10 text-emerald-400 mt-0.5">✓</span>
                          <span>Formed authorized collaborations with physical sports boards in 18 states including Delhi, Maharashtra, and Kerala.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="p-0.5 rounded bg-emerald-500/10 text-emerald-400 mt-0.5">✓</span>
                          <span>Integrated soft hockey into standard primary physical education programs in over 5,000 public academies.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="p-0.5 rounded bg-emerald-500/10 text-emerald-400 mt-0.5">✓</span>
                          <span>Established safety insurance structures protecting tournament players from any medical liabilities.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300/90 text-[11px] font-mono font-bold leading-relaxed flex items-center gap-3">
                      <Globe className="w-6 h-6 text-amber-400 shrink-0" />
                      <span>Next Strategic Objective: Partnering with regional Olympic Councils to demonstrate Soft Hockey at the South Asian Games as a premier safe exhibition sport.</span>
                    </div>
                  </div>
                )}

                {/* 3. ASHFI OFFICE BEARERS DIRECTORY WITH SEARCH FILTER (NO AI!) */}
                {selectedModal === 'bearers' && (
                  <div className="space-y-6">
                    
                    {/* Top Image Reference */}
                    <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[4/3] sm:aspect-[16/9] max-h-64 sm:max-h-80 mx-auto">
                      <img 
                        src="https://i.postimg.cc/9Xqq5qTc/Screenshot-2026-07-14-234711.png" 
                        alt="Governing Council Roster Photo" 
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <p className="text-[10px] font-mono font-black text-accent uppercase bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800">
                          Official Federation Office Bearers Presentation Photo
                        </p>
                      </div>
                    </div>

                    {/* Interactive Search Bar */}
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest block">
                          Explore Governing Council Members ({filteredBearers.length} Found)
                        </span>
                        
                        {/* Real-time search */}
                        <div className="relative max-w-sm w-full">
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Filter members by name, role or focus..."
                            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-semibold focus:outline-none focus:border-accent text-white placeholder:text-slate-500"
                          />
                          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
                          {searchQuery && (
                            <button 
                              type="button" 
                              onClick={() => setSearchQuery('')}
                              className="absolute right-3 top-2.5 text-slate-400 hover:text-white text-xs font-bold"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Card Directory Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                        {filteredBearers.length > 0 ? (
                          filteredBearers.map((bearer, index) => (
                            <div 
                              key={index}
                              className="p-4 bg-slate-950/60 border border-slate-800/80 hover:border-accent/40 rounded-2xl flex items-start gap-3.5 transition-all group hover:bg-slate-950"
                            >
                              <div className="text-2xl p-2.5 bg-slate-900 rounded-xl border border-slate-800 shrink-0 group-hover:scale-110 transition-transform">
                                {bearer.icon}
                              </div>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-display font-black text-white group-hover:text-accent transition-colors">
                                    {bearer.name}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <span className="px-2 py-0.5 text-[8px] font-mono font-black bg-primary/10 border border-primary/20 text-primary dark:bg-accent/10 dark:border-accent/20 dark:text-accent rounded-full uppercase">
                                    {bearer.role}
                                  </span>
                                  <span className="text-[8px] font-mono text-slate-500 uppercase font-bold">
                                    {bearer.division}
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-400 font-medium leading-normal pt-1">
                                  {bearer.focus}
                                </p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-span-2 py-12 text-center text-slate-500 font-mono text-xs">
                            No office bearers found matching "{searchQuery}"
                          </div>
                        )}
                      </div>

                    </div>

                  </div>
                )}

              </div>

              {/* MODAL FOOTER */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span>Verified Federation Directory Record</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedModal(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-black uppercase tracking-wider rounded-xl cursor-pointer transition-colors"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
