import React, { useState } from 'react';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Youtube, Send, CheckCircle, ExternalLink } from 'lucide-react';

export default function Footer() {
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackEmail || !feedbackMsg) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFeedbackEmail('');
      setFeedbackMsg('');
    }, 4000);
  };

  return (
    <div className="w-full flex flex-col z-20">
      
      {/* ----------------- SPONSORS & PARTNERS SECTION ----------------- */}
      <section className="w-full bg-white text-slate-800 border-t border-slate-100 py-16 px-4 sm:px-6 lg:px-8 text-center select-none">
        <div className="max-w-4xl mx-auto">
          
          {/* Partner categories in a 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left">
            
            {/* Category 1: Broadcast Partner */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono font-black tracking-widest text-slate-400 uppercase block">
                Broadcast Partner
              </span>
              <a 
                href="https://prasarbharati.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-slate-50/85 hover:bg-blue-50/30 border border-slate-200/60 hover:border-blue-300 rounded-xl flex items-center gap-4 transition-all duration-300 relative overflow-hidden group block"
              >
                {/* Logo Image */}
                <div className="w-18 h-12 bg-[#0B1330] rounded-lg overflow-hidden flex items-center justify-center border border-slate-800 shrink-0 group-hover:scale-105 transition-all duration-300">
                  <svg viewBox="0 0 160 50" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="160" height="50" rx="6" fill="#0B1330"/>
                    <text x="12" y="34" fontFamily="sans-serif" fontWeight="900" fontSize="22" fill="#FFFFFF" letterSpacing="0.5">S</text>
                    <text x="28" y="34" fontFamily="sans-serif" fontWeight="900" fontSize="22" fill="#FFFFFF" letterSpacing="0.5">P</text>
                    
                    {/* Stylized O with glowing sports rings */}
                    <circle cx="56" cy="25" r="10" stroke="#FFFFFF" strokeWidth="2.5" fill="none"/>
                    <path d="M 48 25 A 8 5 0 0 0 64 25" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
                    <path d="M 56 15 A 3 10 0 0 0 56 35" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
                    <circle cx="56" cy="25" r="3.5" fill="#E63946" />
                    
                    <text x="72" y="34" fontFamily="sans-serif" fontWeight="900" fontSize="22" fill="#FFFFFF" letterSpacing="0.5">R</text>
                    <text x="88" y="34" fontFamily="sans-serif" fontWeight="900" fontSize="22" fill="#FFFFFF" letterSpacing="0.5">T</text>
                    <text x="104" y="34" fontFamily="sans-serif" fontWeight="900" fontSize="22" fill="#FFFFFF" letterSpacing="0.5">S</text>
                  </svg>
                </div>
                
                <div className="relative z-10 flex flex-col">
                  <span className="text-slate-800 font-extrabold uppercase text-xs tracking-wider flex items-center gap-1 group-hover:text-blue-900 transition-colors">
                    DD Sports <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-900 transition-colors" />
                  </span>
                  <span className="text-[9px] font-mono font-bold text-slate-400 group-hover:text-blue-950/70 transition-colors uppercase tracking-wider mt-0.5">
                    Official Broadcast Partner
                  </span>
                </div>
              </a>
            </div>

            {/* Category 2: Streaming Partner */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono font-black tracking-widest text-slate-400 uppercase block">
                Streaming Partner
              </span>
              <a 
                href="https://prasarbharati.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-slate-50/85 hover:bg-blue-50/30 border border-slate-200/60 hover:border-blue-300 rounded-xl flex items-center gap-4 transition-all duration-300 relative overflow-hidden group block"
              >
                {/* Logo Image */}
                <div className="w-16 h-12 rounded-lg overflow-hidden flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
                  <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="46" fill="#0A1128" stroke="#1D4ED8" strokeWidth="2"/>
                    {/* Crown / Wave crest symbol */}
                    <path d="M 30 36 L 41 62 L 50 48 L 59 62 L 70 36 L 62 36 L 50 54 L 38 36 Z" fill="#FFFFFF"/>
                    <circle cx="34" cy="28" r="2.5" fill="#EEB902" />
                    <circle cx="50" cy="28" r="2.5" fill="#EEB902" />
                    <circle cx="66" cy="28" r="2.5" fill="#EEB902" />
                    <text x="50" y="80" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="10" fill="#FFFFFF" letterSpacing="1">WAVES</text>
                  </svg>
                </div>
                
                <div className="relative z-10 flex flex-col">
                  <span className="text-slate-800 font-extrabold uppercase text-xs tracking-wider flex items-center gap-1 group-hover:text-blue-900 transition-colors">
                    WAVES OTT <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-900 transition-colors" />
                  </span>
                  <span className="text-[9px] font-mono font-bold text-slate-400 group-hover:text-blue-950/70 transition-colors uppercase tracking-wider mt-0.5">
                    Official Streaming Partner
                  </span>
                </div>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- DARK NAVY FOOTER BAR (#0B1F3A) ----------------- */}
      <footer id="contact" className="bg-[#0B1F3A] text-slate-300 border-t border-slate-800/60">
        
        {/* Upper Footer Segment */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Column 1: Site Logo (white/light version), info and Socials */}
            <div className="md:col-span-4 space-y-5">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleScrollTo('home')}>
                {/* Perfect circle ASHFI logo */}
                <div className="relative flex items-center justify-center w-11 h-11 rounded-full aspect-square text-white shadow-lg overflow-hidden border-2 border-slate-700 shrink-0 ring-2 ring-white/10">
                  <img src="https://i.postimg.cc/ydytkN33/Screenshot-2026-07-16-143140.png" alt="ASHFI Soft Hockey Logo" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <span className="font-display font-black text-xl tracking-tight text-white block leading-none animate-pulse">
                    INDIAN SOFT
                  </span>
                  <span className="font-display text-[10px] font-black tracking-widest text-pink-400 block mt-0.5 uppercase">
                    HOCKEY LEAGUE
                  </span>
                </div>
              </div>

              <p className="text-slate-300/80 text-sm leading-relaxed font-semibold">
                The official portal for India's homegrown soft hockey franchise platform, nurtured by the Amateur Soft Hockey Federation of India.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3.5 pt-2">
                {[
                  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com' },
                  { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com' },
                  { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com' },
                  { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 hover:scale-105 border border-white/10 hover:text-white text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links Directory */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-display font-black text-sm text-white uppercase tracking-widest border-b border-white/10 pb-2">
                Navigation
              </h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                {[
                  { label: 'Home Page', id: 'home' },
                  { label: 'League History', id: 'about' },
                  { label: 'Battle Teams', id: 'teams' },
                  { label: 'Live Matches', id: 'matches' },
                  { label: 'Leaderboard Standings', id: 'standings' },
                  { label: 'News Updates', id: 'news' },
                  { label: 'Match Highlights', id: 'videos' },
                  { label: 'Fan Newsletter', id: 'newsletter' },
                ].map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleScrollTo(link.id)}
                    className="text-left text-slate-300/80 hover:text-pink-400 font-bold cursor-pointer transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3: Contact Details Form */}
            <div className="md:col-span-5 space-y-4">
              <h4 className="font-display font-black text-sm text-white uppercase tracking-widest border-b border-white/10 pb-2">
                Contact HIL Support
              </h4>
              
              {submitted ? (
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2.5 animate-fade-in-up font-bold">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <div>
                    <span className="font-black block text-sm">Inquiry Submitted Successfully!</span>
                    <span>Our league coordinating team will review your contact form and respond within 24 business hours.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-2.5">
                  <input
                    type="email"
                    required
                    value={feedbackEmail}
                    onChange={(e) => setFeedbackEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 text-xs font-bold"
                  />
                  <textarea
                    required
                    value={feedbackMsg}
                    onChange={(e) => setFeedbackMsg(e.target.value)}
                    placeholder="Inquiry or Feedback Message..."
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 text-xs resize-none font-bold"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-full bg-pink-500 hover:bg-white text-white hover:text-[#0B1F3A] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer active:translate-y-0.5 transition-all shadow-md"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

              <div className="pt-2 text-xs text-slate-400 space-y-1.5 font-mono">
                <div className="flex items-center gap-2 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Dept. of Physical Education, University of Rajasthan, Jaipur</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Lower Copyright Segment */}
        <div className="bg-[#071527] py-6 border-t border-white/5 text-xs text-slate-400 text-center font-mono font-bold uppercase tracking-wider">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} Amateur Soft Hockey Federation of India. All Rights Reserved.</span>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="hover:text-pink-400 cursor-pointer transition-colors">Privacy Policy</span>
              <span>|</span>
              <span className="hover:text-pink-400 cursor-pointer transition-colors">Terms of Service</span>
              <span>|</span>
              <span className="hover:text-pink-400 cursor-pointer transition-colors">Anti-Doping Policy</span>
            </div>
          </div>
        </div>

      </footer>

    </div>
  );
}
