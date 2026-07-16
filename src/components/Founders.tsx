import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, MapPin, Calendar, ExternalLink, ShieldCheck, Heart, Sparkles, Send } from 'lucide-react';
import ImageBanner from './ImageBanner';

export default function Founders() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Founder 1: Mr. Ramesh Singh */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-80 md:h-auto min-h-[380px] bg-slate-950">
              <img 
                src="https://i.postimg.cc/L4b94Jc6/Screenshot-2026-07-15-105359.png" 
                alt="Mr. Ramesh Singh - Founder of Indian Soft Hockey"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 text-white md:hidden">
                <p className="font-display font-black text-lg">Mr. Ramesh Singh</p>
                <p className="text-xs font-mono font-bold text-accent">Founder of Indian Soft Hockey</p>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-black text-primary dark:text-accent uppercase tracking-widest bg-primary/10 dark:bg-accent/10 px-2.5 py-1 rounded-full inline-block">
                  FOUNDER & TECHNICAL DIRECTOR
                </span>
                <h3 className="hidden md:block font-display font-black text-2xl text-slate-900 dark:text-white leading-none">
                  Mr. Ramesh Singh
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
                  As a physical education researcher at the University of Rajasthan, Mr. Ramesh Singh directed the initial design and technical testing of Soft Hockey starting in 2019. 
                  His goal was to create an inclusive, safe, non-contact hockey variation using polymer materials suitable for both concrete play and wooden courts. 
                  He supervised the entire production, establishing the Amateur Soft Hockey Federation of India.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-bold font-mono">
                  <MapPin className="w-4 h-4 text-primary dark:text-accent shrink-0" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-bold font-mono">
                  <Calendar className="w-4 h-4 text-primary dark:text-accent shrink-0" />
                  <span>Founded: 2019 (Jaipur)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Leader 2: Dr. Ashutosh Pant */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-80 md:h-auto min-h-[380px] bg-slate-950">
              <img 
                src="https://i.postimg.cc/2yp0TFqd/Screenshot-2026-07-15-104537.png" 
                alt="Dr. Ashutosh Pant - National President"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 text-white md:hidden">
                <p className="font-display font-black text-lg">Dr. Ashutosh Pant</p>
                <p className="text-xs font-mono font-bold text-accent">National President of ASHFI</p>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-black text-primary dark:text-accent uppercase tracking-widest bg-primary/10 dark:bg-accent/10 px-2.5 py-1 rounded-full inline-block">
                  NATIONAL PRESIDENT (ASHFI)
                </span>
                <h3 className="hidden md:block font-display font-black text-2xl text-slate-900 dark:text-white leading-none">
                  Dr. Ashutosh Pant
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-bold">
                  Dr. Ashutosh Pant leads the Amateur Soft Hockey Federation of India as its National President. He has been instrumental in aligning the sport's policies with public university sports boards, primary school physical education curriculums, and securing corporate sponsorships for the Indian Soft Hockey League. 
                  His vision is to integrate soft hockey into international school boards and South Asian Games.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-bold font-mono">
                  <MapPin className="w-4 h-4 text-primary dark:text-accent shrink-0" />
                  <span>National Secretariat, India</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-bold font-mono">
                  <Award className="w-4 h-4 text-primary dark:text-accent shrink-0" />
                  <span>Federation President</span>
                </div>
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
    </section>
  );
}
