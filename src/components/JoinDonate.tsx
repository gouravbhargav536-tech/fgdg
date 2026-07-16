import React, { useState } from 'react';
import { Heart, Send, CheckCircle, ShieldCheck, Copy, Check, Landmark, Award, ArrowUpRight, CheckSquare, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function JoinDonate() {
  const [joinSubmitted, setJoinSubmitted] = useState(false);
  const [donateSubmitted, setDonateSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Player',
    state: 'Rajasthan',
    comments: ''
  });
  
  const [donationAmount, setDonationAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setJoinSubmitted(true);
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDonateSubmitted(true);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <section id="join-donate" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200 text-xs font-black tracking-widest uppercase dark:bg-rose-950/40 dark:border-rose-900 dark:text-rose-400">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            SUPPORT SOFT HOCKEY IN INDIA
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
            Empower the Next Generation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Join our mission as a registered member or fuel our grassroots camps, equipment drives, and championships across India through secure, tax-exempt donations.
          </p>
        </div>

        {/* Brand / Donation Pitch Banner inspired by the flyer */}
        <div className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white rounded-3xl p-8 md:p-10 border border-indigo-900/60 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Banner Left Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-3">
                <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-indigo-300 uppercase bg-indigo-900/50 rounded-md border border-indigo-500/20 inline-block">
                  Amateur Soft Hockey Federation of India (ASHFI)
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-yellow-400 uppercase leading-tight">
                  Support the Growth of Soft Hockey in India – Donate Today!
                </h3>
              </div>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                You can contribute to the Amateur Soft Hockey Federation of India through your generous donations. The Federation is registered under <strong className="text-white">12A, 80G, and CSR</strong>, which means your donation is eligible for tax exemption under the Income Tax Act.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2 text-indigo-200">
                  <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tax Benefits (12A & 80G)</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-200">
                  <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Eligible for CSR</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-200">
                  <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Empower Young Talent</span>
                </div>
              </div>

              <p className="text-indigo-300 text-xs sm:text-sm italic font-bold">
                "Your contribution will directly benefit players and promote the development of Soft Hockey in India. Let's build a stronger future for Indian sports – together!"
              </p>
            </div>

            {/* Banner Right QR Area */}
            <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
              <span className="text-[10px] font-mono font-black text-yellow-400 uppercase tracking-widest block">
                Payment Through Any UPI APP
              </span>
              
              {/* Simulated QR Code representation since user wants to use QR / UPI code */}
              <div className="bg-white p-3 rounded-xl inline-block shadow-md">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=boim-661900710084@boi&pn=Amateur%20Soft%20Hockey%20Federation%20of%2520India&cu=INR"
                  alt="ASHFI UPI Payment QR Code"
                  className="w-40 h-40"
                />
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider block">Official UPI ID</span>
                <div className="flex items-center justify-center gap-2 bg-slate-950 p-2 rounded-lg border border-slate-800/80">
                  <code className="text-xs font-mono font-black text-indigo-300">boim-661900710084@boi</code>
                  <button
                    onClick={() => copyToClipboard('boim-661900710084@boi', 'upi')}
                    className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition-colors"
                    title="Copy UPI ID"
                  >
                    {copiedText === 'upi' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Main Grid: Form Left, Bank/UPI details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Join Registration Form */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-150 dark:border-slate-850 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-black text-primary dark:text-accent uppercase tracking-widest block">
                FEDERATION REGISTRY
              </span>
              <h3 className="font-display font-black text-2xl text-slate-950 dark:text-white uppercase leading-none">
                Register as Member
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Submit your interest to join localized training camps, receive guidelines, or volunteer.
              </p>
            </div>

            {joinSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center space-y-3"
              >
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-display font-black text-slate-900 dark:text-white text-base uppercase">
                  Application Logged!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-bold max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-primary dark:text-accent font-black">{formData.name}</span>! The Amateur Soft Hockey Federation of India secretary will reach out to you within 3 business days.
                </p>
                <button
                  onClick={() => setJoinSubmitted(false)}
                  className="px-5 py-2 border border-slate-300 dark:border-slate-800 text-xs font-black uppercase tracking-wider rounded-xl hover:bg-slate-100 transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
                >
                  Register Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleJoinSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Harshit Yadav"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-xs font-semibold placeholder-slate-400 focus:border-primary text-slate-800 dark:text-slate-100"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                    Contact Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g., harshit@example.com"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-xs font-semibold placeholder-slate-400 focus:border-primary text-slate-800 dark:text-slate-100"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Member Role */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                      Desired Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={e => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-xs font-semibold text-slate-800 dark:text-slate-100 cursor-pointer"
                    >
                      <option value="Player">Player</option>
                      <option value="Volunteer">Volunteer</option>
                      <option value="Referee">Referee / Umpire</option>
                      <option value="School Affiliation">School Affiliation</option>
                    </select>
                  </div>

                  {/* State */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                      Home State
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={e => setFormData({ ...formData, state: e.target.value })}
                      placeholder="e.g., Rajasthan"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-xs font-semibold placeholder-slate-400 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>

                {/* Additional notes */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                    Brief Notes or Experience
                  </label>
                  <textarea
                    rows={3}
                    value={formData.comments}
                    onChange={e => setFormData({ ...formData, comments: e.target.value })}
                    placeholder="Let us know your school sports background..."
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-xs font-semibold placeholder-slate-400 focus:border-primary text-slate-800 dark:text-slate-100 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary hover:bg-opacity-95 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Registration</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Bank Details & Registration Numbers */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Bank Details Card */}
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-150 dark:border-slate-850 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-black text-primary dark:text-accent uppercase tracking-widest block">
                  DIRECT BANK TRANSFER
                </span>
                <h3 className="font-display font-black text-2xl text-slate-950 dark:text-white uppercase leading-none">
                  Bank Details
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  Transfer directly to the official bank account of the Amateur Soft Hockey Federation of India.
                </p>
              </div>

              <div className="space-y-4">
                {/* Beneficiary */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-850 flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Account Name</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Amateur Soft Hockey Federation of India</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('Amateur Soft Hockey Federation of India', 'name')}
                    className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg transition-colors shrink-0"
                    title="Copy Account Name"
                  >
                    {copiedText === 'name' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Bank Name */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-850 flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Bank Details & Branch</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Bank of India, Jhotwara, Jaipur</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('Bank of India, Jhotwara, Jaipur', 'branch')}
                    className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg transition-colors shrink-0"
                    title="Copy Bank Info"
                  >
                    {copiedText === 'branch' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Account Number */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-850 flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Account Number</span>
                    <span className="text-base font-mono font-black text-slate-900 dark:text-white">661910210000084</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('661910210000084', 'account')}
                    className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg transition-colors shrink-0"
                    title="Copy Account Number"
                  >
                    {copiedText === 'account' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* IFSC Code */}
                <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-850 flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">IFSC Code</span>
                    <span className="text-base font-mono font-black text-primary dark:text-accent">BKID0006619</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('BKID0006619', 'ifsc')}
                    className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg transition-colors shrink-0"
                    title="Copy IFSC Code"
                  >
                    {copiedText === 'ifsc' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

              </div>
            </div>

            {/* Registration Details & Tax-Exempt Status Card */}
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-150 dark:border-slate-850 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest block">
                  LEGAL & CERTIFICATIONS
                </span>
                <h3 className="font-display font-black text-2xl text-slate-950 dark:text-white uppercase leading-none">
                  Tax Exemptions
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  Verify the active registration status for eligible Income Tax exemptions.
                </p>
              </div>

              <div className="space-y-3">
                
                {/* 80G */}
                <div className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-850">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wide">80G Reg. No.</span>
                    <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">AAKTA8266DF20241</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('AAKTA8266DF20241', '80g')}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 rounded transition-colors"
                  >
                    {copiedText === '80g' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* 12AA */}
                <div className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-850">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wide">12AA Reg. No.</span>
                    <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">AAKTA8285DE2024101</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('AAKTA8285DE2024101', '12aa')}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 rounded transition-colors"
                  >
                    {copiedText === '12aa' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* CSR */}
                <div className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-850">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wide">CSR Reg. No.</span>
                    <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">CSR00078973</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('CSR00078973', 'csr')}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 rounded transition-colors"
                  >
                    {copiedText === 'csr' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
