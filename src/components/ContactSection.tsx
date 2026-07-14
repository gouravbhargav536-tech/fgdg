import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-black tracking-widest text-primary uppercase dark:bg-accent/10 dark:border-accent/20 dark:text-accent">
            <Globe className="w-3.5 h-3.5" />
            GET IN TOUCH
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
            Contact ASHFI Office
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Have questions about state associations, coaching manuals, or tournament entries? Contact the Amateur Soft Hockey Federation of India headquarters.
          </p>
        </div>

        {/* Form and info split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-sm flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="font-display font-black text-xl text-slate-900 dark:text-white uppercase tracking-tight">
                Headquarters Address
              </h3>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary dark:text-accent shrink-0 h-12 w-12 flex items-center justify-center border border-primary/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-widest">
                      Registered Office
                    </h4>
                    <p className="text-sm font-extrabold text-slate-800 dark:text-slate-200 mt-1 leading-relaxed">
                      Amateur Soft Hockey Federation of India<br />
                      Jaipur, Pink City, Rajasthan, PIN - 302004, India
                    </p>
                  </div>
                </div>

                {/* Email addresses */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary dark:text-accent shrink-0 h-12 w-12 flex items-center justify-center border border-primary/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-widest">
                      Official Support Emails
                    </h4>
                    <p className="text-sm font-extrabold text-slate-800 dark:text-slate-200 mt-1 space-y-0.5">
                      <a href="mailto:ashfi.india@gmail.com" className="hover:underline block">ashfi.india@gmail.com</a>
                      <a href="mailto:info@indiansofthockeyleague.com" className="hover:underline block">info@indiansofthockeyleague.com</a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary dark:text-accent shrink-0 h-12 w-12 flex items-center justify-center border border-primary/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-widest">
                      Telephone Helpline
                    </h4>
                    <p className="text-sm font-extrabold text-slate-800 dark:text-slate-200 mt-1">
                      +91 94140 18239 / +91 94141 55628
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary dark:text-accent shrink-0 h-12 w-12 flex items-center justify-center border border-primary/10">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-widest">
                      Official Portals
                    </h4>
                    <p className="text-sm font-extrabold text-primary dark:text-accent mt-1">
                      <a href="https://indiansofthockeyleague.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        https://indiansofthockeyleague.com/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest leading-normal">
                Officially Affiliated with the Amateur Soft Hockey Federation of India
              </span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-sm flex flex-col justify-between">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="my-auto text-center space-y-4 p-8"
              >
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="font-display font-black text-2xl text-slate-950 dark:text-white uppercase leading-none">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-bold max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-primary dark:text-accent font-extrabold">{form.name}</span>. We have received your query about <span className="italic">"{form.subject}"</span> and will respond via <span className="underline">{form.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 bg-slate-900 dark:bg-slate-800 text-white font-black text-xs uppercase tracking-wider rounded-xl cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-xs font-semibold placeholder-slate-400 focus:border-primary text-slate-800 dark:text-slate-100"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-xs font-semibold placeholder-slate-400 focus:border-primary text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                    Subject / Concern
                    </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder="e.g., Requesting coaching manual or affiliation"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-xs font-semibold placeholder-slate-400 focus:border-primary text-slate-800 dark:text-slate-100"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                    Detailed Message
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your details here..."
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-xs font-semibold placeholder-slate-400 focus:border-primary text-slate-800 dark:text-slate-100 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to ASHFI</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
