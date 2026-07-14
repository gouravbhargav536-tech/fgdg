import React from 'react';
import { Tv, Smartphone, Globe, ShieldAlert, Antenna } from 'lucide-react';

interface Partner {
  name: string;
  type: 'Television' | 'Digital Streaming' | 'International';
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export default function WhereToWatch() {
  const partners: Partner[] = [
    {
      name: 'Star Sports Network',
      type: 'Television',
      description: 'Official linear broadcasting partner with multi-camera live feeds in high-definition (HD) English, Hindi, and regional commentary.',
      icon: <Tv className="w-8 h-8 text-accent" />,
      tags: ['Star Sports 1 HD', 'Star Sports Select 1']
    },
    {
      name: 'Sports18 Network',
      type: 'Television',
      description: 'Live coverage provider for the regular tournament matches across multiple feeds with expert analysis and interactive graphics.',
      icon: <Antenna className="w-8 h-8 text-accent" />,
      tags: ['Sports18 1', 'Sports18 Khel']
    },
    {
      name: 'JioCinema App & Web',
      type: 'Digital Streaming',
      description: 'Uncapped 4K Ultra-HD streaming, live interactive play-along fan feeds, tactical pitch cameras, and instant replay clips.',
      icon: <Smartphone className="w-8 h-8 text-accent" />,
      tags: ['Free Stream', 'JioCinema App']
    },
    {
      name: 'FanCode International',
      type: 'International',
      description: 'Exclusive global distribution and streaming access for international viewers outside the Indian subcontinent.',
      icon: <Globe className="w-8 h-8 text-accent" />,
      tags: ['Global Feed', 'FanCode Premium']
    }
  ];

  return (
    <section id="where-to-watch" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black tracking-widest text-accent uppercase block">
            BROADCAST PARTNERS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-primary dark:text-white uppercase">
            Where to Watch HIL
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-semibold">
            Catch every high-speed flick, intense penalty corner clash, and championship playoff decider live across multiple broadcasting channels and streaming web portals.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-6 flex flex-col justify-between hover:shadow-lg hover:border-accent dark:hover:border-accent rounded-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Type Tag */}
                <div className="flex justify-between items-start">
                  <span className={`inline-flex px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 ${
                    partner.type === 'Television'
                      ? 'text-primary'
                      : partner.type === 'Digital Streaming'
                      ? 'text-accent'
                      : 'text-violet-600'
                  }`}>
                    {partner.type}
                  </span>
                </div>

                {/* Partner Icon & Name */}
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shrink-0 shadow-sm">
                    {partner.icon}
                  </div>
                  <h3 className="font-display font-black text-base text-slate-900 dark:text-white leading-tight">
                    {partner.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-bold">
                  {partner.description}
                </p>
              </div>

              {/* Tags/Channels list */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {partner.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[10px] font-mono font-black uppercase bg-slate-200/50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent p-6 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-black text-lg uppercase tracking-tight">
              Matchday streams commence 15 mins prior to push-off
            </h4>
            <p className="text-xs text-slate-100 font-semibold leading-relaxed">
              Ensure you have the latest JioCinema application installed on your smart TV, phone, or tablet device for multi-angle feeds.
            </p>
          </div>
          <a
            href="https://www.jiocinema.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-slate-900 font-sans font-black text-xs uppercase tracking-widest rounded-full hover:bg-slate-150 transition-all cursor-pointer select-none shadow-md active:translate-y-0.5 whitespace-nowrap"
          >
            Stream Live on JioCinema
          </a>
        </div>

      </div>
    </section>
  );
}
