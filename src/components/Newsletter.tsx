import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle2, ShieldCheck, Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Check if user is already subscribed on mount
  useEffect(() => {
    const isSubscribed = localStorage.getItem('hil_newsletter_subscribed');
    if (isSubscribed === 'true') {
      setSubscribed(true);
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Dynamic validation checks
    if (!email) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Please enter a formatted email address (e.g. name@example.com).');
      return;
    }

    // Simulate server side post request
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      localStorage.setItem('hil_newsletter_subscribed', 'true');
    }, 1500);
  };

  const resetSubscription = () => {
    localStorage.removeItem('hil_newsletter_subscribed');
    setSubscribed(false);
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-primary to-accent p-8 sm:p-12 md:p-16 text-white border border-white/10 shadow-lg overflow-hidden">
          
          {/* Subtle Grid Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-white/10 pointer-events-none rounded-bl-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-white/10 pointer-events-none rounded-tr-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            
            {/* Visual Header icon */}
            <div className="inline-flex p-4 rounded-2xl bg-white/10 border border-white/20 text-white shadow-sm">
              <Mail className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase">
                Join the HIL Fan Club
              </h2>
              <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-semibold">
                Subscribe to our newsletter and receive immediate notifications regarding match schedules, playoff tickets, franchise trades, and exclusive athlete interviews.
              </p>
            </div>

            {/* Newsletter states */}
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="max-w-lg mx-auto space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch gap-3 bg-white/10 p-1.5 rounded-full border border-white/10">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setErrorMsg(''); }}
                      placeholder="Enter your email address"
                      disabled={loading}
                      className="w-full pl-6 pr-6 py-3 rounded-full bg-white text-slate-900 placeholder-slate-400 focus:outline-none font-sans font-semibold text-sm transition-all shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 rounded-full font-black bg-slate-900 hover:bg-slate-800 text-white transition-all cursor-pointer flex items-center justify-center gap-2 disabled:bg-slate-400 shrink-0 select-none text-sm active:translate-y-0.5 shadow-md"
                  >
                    {loading ? (
                      <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin inline-block" />
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Inline Validation message */}
                {errorMsg && (
                  <p className="text-yellow-300 font-mono text-xs font-black text-center animate-pulse">
                    ⚠️ {errorMsg}
                  </p>
                )}
              </form>
            ) : (
              <div className="max-w-md mx-auto p-6 rounded-2xl bg-white/10 border border-white/25 animate-fade-in-up space-y-4 shadow-sm">
                <div className="flex items-center justify-center gap-2.5 text-emerald-300">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <span className="font-display font-black text-lg text-white">Subscription Verified!</span>
                </div>
                <p className="text-slate-100 text-xs sm:text-sm font-semibold">
                  Welcome to the official fan list! You will now receive early-bird access to ticketing portals and weekly team bulletins.
                </p>
                <button
                  onClick={resetSubscription}
                  className="text-[11px] font-black text-white hover:underline uppercase tracking-widest cursor-pointer block mx-auto pt-2"
                >
                  Unsubscribe / Register New Email
                </button>
              </div>
            )}

            {/* Privacy note */}
            <div className="pt-4 flex items-center justify-center gap-1.5 text-[10px] text-slate-100 font-bold uppercase tracking-wider font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>We value your privacy. No spam. Unsubscribe at any time.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
