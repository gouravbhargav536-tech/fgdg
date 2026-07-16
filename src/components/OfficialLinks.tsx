import React from 'react';
import { ExternalLink } from 'lucide-react';

interface OfficialLink {
  id: string;
  title: string;
  imageUrl: string;
  url: string;
}

const LINKS: OfficialLink[] = [
  {
    id: 'link-1',
    title: 'Excellence Award 2025 News Coverage',
    imageUrl: 'https://i.postimg.cc/wjSqD2Dp/Screenshot-2026-07-15-132508.png',
    url: 'https://news21national.com/excellence-award-2025-%e0%a4%9c%e0%a4%af%e0%a5%81%e0%a4%b0-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%8f%e0%a5%8d%e0%a4%b8%e0%a5%80%e0%a4%b2%e0%a5%87%e0%a4%82%e0%a4%b8-%e0%a4%85%e0%a4%b5/'
  },
  {
    id: 'link-2',
    title: 'Federation Excellence Award 2025 Ceremony',
    imageUrl: 'https://i.postimg.cc/vTfYqVyS/Screenshot-2026-07-15-135242.png',
    url: 'https://news21national.com/excellence-award-2025-%e0%a4%9c%e0%a4%af%e0%a5%81%e0%a4%b0-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%8f%e0%a5%8d%e0%a4%b8%e0%a5%80%e0%a4%b2%e0%a5%87%e0%a4%82%e0%a4%b8-%e0%a4%85%e0%a4%b5/'
  },
  {
    id: 'link-3',
    title: 'ETV Bharat News: Ashutosh Appointed ASHFI President',
    imageUrl: 'https://i.postimg.cc/tJN0ntps/Screenshot-2026-07-15-135443.png',
    url: 'https://www.etvbharat.com/hi/!state/ashutosh-became-the-president-of-indian-soft-hockey-federation-rajasthan-news-rjs25012101119'
  }
];

export default function OfficialLinks() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-display text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Official Soft Hockey Links
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Stay updated with official news, awards, and federation announcements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary dark:hover:border-accent"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={link.imageUrl} 
                  alt={link.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex items-center justify-between">
                <h3 className="font-display font-bold text-slate-900 dark:text-white">
                  {link.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-primary dark:text-accent" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
