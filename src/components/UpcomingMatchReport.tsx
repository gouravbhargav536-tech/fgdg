import React from 'react';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

interface MatchPreview {
  id: string;
  match: string;
  date: string;
  previewText: string;
  reportUrl: string;
}

const PREVIEWS: MatchPreview[] = [
  {
    id: 'preview-1',
    match: 'Rajasthan Royals vs Haryana Stars',
    date: 'July 20, 2026',
    previewText: 'A high-stakes clash expected at the Jaipur stadium as the league leaders face the resilient Haryana side. Tactically, this match promises to be an intense display of defensive maneuvering.',
    reportUrl: '#'
  },
  {
    id: 'preview-2',
    match: 'Odisha Queens vs Delhi Divas',
    date: 'July 22, 2026',
    previewText: 'The top-tier women’s showdown focuses on speed and circle penetrations. Both teams have shown exceptional form in the last round.',
    reportUrl: '#'
  }
];

export default function UpcomingMatchReport() {
  return (
    <div className="space-y-6 mt-12 bg-slate-50 dark:bg-slate-800/20 p-8 rounded-3xl border border-slate-150 dark:border-slate-800/60">
      <div className="flex items-center gap-3">
        <Newspaper className="w-6 h-6 text-primary dark:text-accent" />
        <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          Upcoming Match Previews
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PREVIEWS.map((preview) => (
          <div key={preview.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-display font-bold text-slate-900 dark:text-white">{preview.match}</h4>
              <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{preview.date}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              {preview.previewText}
            </p>
            <a 
              href={preview.reportUrl} 
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-primary dark:text-accent hover:underline"
            >
              Read Full Preview <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
