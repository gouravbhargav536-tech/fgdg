import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section 
      id="home-info" 
      className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 font-mono text-xs font-bold uppercase tracking-widest"
            >
              <Trophy className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Amateur Soft Hockey Federation of India</span>
            </motion.div>

            <div className="space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl sm:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none"
              >
                Indian <span className="text-blue-600 dark:text-blue-400">Soft</span> <br className="hidden sm:inline" />
                Hockey League
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-medium"
            >
              Welcome to the official digital hub of the Indian Soft Hockey League! Experience fast-paced safely-engineered modern hockey action, follow rising domestic athletes, and keep up with live fixtures verified by the Amateur Soft Hockey Federation of India (ASHFI).
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => setActiveSection('matches')}
                className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-lg transition-all shadow-md cursor-pointer"
              >
                Match Center
              </button>
              <button
                onClick={() => setActiveSection('teams')}
                className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer"
              >
                View Teams
              </button>
            </motion.div>
          </div>

          {/* Right Block: Statistics Dashboard style */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/40 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-3">
              League Specifications
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Total Franchises</span>
                <span className="font-display font-black text-slate-900 dark:text-white text-lg">12 Active Clubs</span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50 pt-3">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Tournament Style</span>
                <span className="font-display font-black text-slate-900 dark:text-white text-lg">Men & Women</span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50 pt-3">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Established Year</span>
                <span className="font-display font-black text-slate-900 dark:text-white text-lg">2021 (Jaipur)</span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50 pt-3">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Sanctioning Body</span>
                <span className="font-mono text-xs font-bold bg-amber-500/10 text-amber-600 border border-amber-500/25 px-2 py-0.5 rounded">
                  ASHFI CERTIFIED
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
