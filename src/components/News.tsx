import React, { useState } from 'react';
import { NEWS_ARTICLES } from '../data';
import { NewsArticle } from '../types';
import { Calendar, Clock, BookOpen, X, ArrowUpRight, Search, Sparkles } from 'lucide-react';

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(2); // Start with 2 articles, clicking load more reveals more
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Filter articles based on search keyword
  const filteredArticles = NEWS_ARTICLES.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = filteredArticles.length > visibleCount;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 2);
      setIsLoadingMore(false);
    }, 850); // Simulate a network latency load with skeletons
  };

  return (
    <section id="news" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Search Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block font-mono">
              JOURNALISM & UPDATES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-white uppercase">
              News & Features
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl font-bold">
              Stay updated with exclusive team news, pre-match press releases, analytical reports, and grassroots feature stories.
            </p>
          </div>

          {/* Search bar input */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(2); // Reset to 2 on new search query
              }}
              placeholder="Search news by keyword..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-2 border-slate-950 dark:border-slate-800 font-mono text-xs font-black text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-accent outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* Empty state on search */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-900/20 border-2 border-dashed border-slate-300 dark:border-slate-800 p-8">
            <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <span className="block text-sm font-bold text-slate-500">
              No articles found matching "{searchQuery}".
            </span>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group relative w-full h-[360px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:border-accent border border-transparent transition-all duration-300 cursor-pointer flex flex-col justify-end"
            >
              {/* Background Image (पूरा कार्ड कवर करती हुई) */}
              <img
                src={article.imageUrl}
                alt={article.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* नीचे डार्क ओवरले/ग्रेडिएंट ताकि टेक्स्ट पढ़ने लायक रहे */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent" />

              {/* Category tag overlay top left */}
              <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-md shadow-md">
                {article.category}
              </span>

              {/* Text Content Overlay (नीचे इमेज पर ओवरले) */}
              <div className="relative z-10 p-5 space-y-3">
                {/* डेट (हल्का सफेद टेक्स्ट) */}
                <div className="flex items-center gap-2 text-[11px] font-bold text-white/80 font-mono tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                {/* बोल्ड हेडलाइन (सफेद, नीचे इमेज पर ओवरले) */}
                <h3 className="font-display font-black text-base sm:text-lg text-white group-hover:text-accent transition-colors line-clamp-2 leading-snug drop-shadow">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/70 text-xs line-clamp-2 font-medium">
                  {article.excerpt}
                </p>

                {/* Read Prompt */}
                <div className="pt-1 flex items-center justify-between text-[10px] font-black tracking-widest uppercase text-accent">
                  <span>Read Article</span>
                  {article.externalUrl ? (
                    <span className="flex items-center gap-1.5 px-2 py-1 bg-sky-950/40 hover:bg-sky-900/60 text-sky-400 text-[9px] font-bold border border-sky-400/20 rounded-md transition-colors">
                      Official Link <ArrowUpRight className="w-3 h-3" />
                    </span>
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Skeleton Loaders displayed during loading state with Rounded Corners */}
          {isLoadingMore && (
            <>
              {[1, 2].map((idx) => (
                <div
                  key={idx}
                  className="relative w-full h-[360px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 animate-pulse border border-slate-200 dark:border-slate-700 p-5 flex flex-col justify-end"
                >
                  <div className="space-y-3">
                    <div className="h-4 w-1/3 bg-slate-300 dark:bg-slate-700 rounded-md" />
                    <div className="h-6 w-full bg-slate-300 dark:bg-slate-700 rounded-md" />
                    <div className="h-4 w-3/4 bg-slate-300 dark:bg-slate-700 rounded-md" />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Load More Button Wrapper */}
        {hasMore && !isLoadingMore && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-mono text-xs uppercase tracking-widest font-black rounded-full shadow-md transition-all cursor-pointer active:translate-y-0.5 select-none"
            >
              Load More News Articles
            </button>
          </div>
        )}
      </div>

      {/* Detailed News Modal Overlay */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 dark:border-slate-800 transform transition-all animate-fade-in-up">
            
            {/* Header Image Area */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl">
              <img
                src={selectedArticle.imageUrl}
                alt={selectedArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/40 to-transparent" />
              
              {/* Close Button overlay */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer z-20 border border-white/10"
                aria-label="Close News Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Dynamic badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="bg-accent text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-sm inline-block mb-3">
                  {selectedArticle.category}
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-tight leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            {/* Modal Editorial Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Meta Details Row */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400 font-mono tracking-wider border-b border-slate-200 dark:border-slate-800 pb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  Published: {selectedArticle.date}
                </span>
                <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  Read Time: {selectedArticle.readTime}
                </span>
                <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Type: Editorial
                </span>
              </div>

              {/* Article Prose Paragraphs */}
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="font-medium">
                    {paragraph}
                  </p>
                ))}
              </div>

              {selectedArticle.externalUrl && (
                <div className="p-5 bg-gradient-to-r from-blue-50/70 to-sky-50/70 dark:from-slate-950/40 dark:to-slate-900/40 border border-blue-100 dark:border-slate-800/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-black text-blue-900 dark:text-sky-400 uppercase tracking-widest block">
                      OFFICIAL SOURCE PUBLICATION
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-bold">
                      Read the original press release directly on the official news agency website.
                    </p>
                  </div>
                  <a
                    href={selectedArticle.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm shrink-0 transition-all hover:scale-[1.02]"
                  >
                    <span>Read Official Link</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* CTA Close Area */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-xs font-black tracking-widest uppercase transition-colors cursor-pointer shadow-sm"
                >
                  Done Reading
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
