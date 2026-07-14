import React, { useState } from 'react';
import { Heart, Send, CheckCircle, ShieldCheck, DollarSign, Users, Award, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

export default function JoinDonate() {
  const [joinSubmitted, setJoinSubmitted] = useState(false);
  const [donateSubmitted, setDonateSubmitted] = useState(false);
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

  return (
    <section id="join-donate" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-200 text-xs font-black tracking-widest uppercase dark:bg-pink-950/40 dark:border-pink-850 dark:text-pink-400">
            <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
            SUPPORT THE GROWING SPORT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">
            Join Us or Donate
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Whether you want to represent your state as a soft hockey athlete, associate your school, or contribute financially to grassroots camps—your support makes a difference!
          </p>
        </div>

        {/* Two-Column split: Left: Join Form, Right: Donate Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Join Registration Form */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-150 dark:border-slate-850 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-black text-primary dark:text-accent uppercase tracking-widest block">
                FEDERATION REGISTRY
              </span>
              <h3 className="font-display font-black text-2xl text-slate-950 dark:text-white uppercase leading-none">
                Register as Member
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Submit your interest to join localized training camps or receive official affiliation guidelines.
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

          {/* Right Block: Secure Donation Portal */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-150 dark:border-slate-850 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-black text-pink-600 dark:text-pink-400 uppercase tracking-widest block">
                SECURE CONTRIBUTION GATEWAY
              </span>
              <h3 className="font-display font-black text-2xl text-slate-950 dark:text-white uppercase leading-none">
                Support Soft Hockey
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Contribute funds to distribute polymer hockey sticks, soft balls, and goalkeeper kit gear to rural government schools.
              </p>
            </div>

            {donateSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center space-y-4"
              >
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-display font-black text-slate-900 dark:text-white text-base uppercase">
                  Payment Simulation Successful!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-bold max-w-sm mx-auto leading-relaxed">
                  Thank you! You simulated a donation of <span className="text-emerald-600 font-black">₹{customAmount || donationAmount}</span> to ASHFI. Your contribution represents safe-sport development for rural schools.
                </p>
                <button
                  onClick={() => setDonateSubmitted(false)}
                  className="px-5 py-2 border border-slate-300 dark:border-slate-800 text-xs font-black uppercase tracking-wider rounded-xl hover:bg-slate-100 transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
                >
                  Simulate New Donation
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleDonateSubmit} className="space-y-5">
                {/* Preset Amounts */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                    Select Donation Amount (INR)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['500', '1000', '2500', '5000'].map(amount => {
                      const isSelected = donationAmount === amount && !customAmount;
                      return (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setDonationAmount(amount);
                            setCustomAmount('');
                          }}
                          className={`py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-pink-600 border-pink-600 text-white shadow'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-pink-300'
                          }`}
                        >
                          ₹{amount}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-slate-400 font-mono text-xs font-bold">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={e => {
                        setCustomAmount(e.target.value);
                        setDonationAmount('');
                      }}
                      placeholder="e.g., 7500"
                      className="w-full pl-8 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-xs font-semibold placeholder-slate-400 focus:border-pink-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>

                {/* Federation Bank details as requested */}
                <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-2 font-mono text-[10px] text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800/80 pb-1.5 mb-1.5">
                    <Landmark className="w-3.5 h-3.5 text-pink-500" />
                    <span className="font-black text-slate-700 dark:text-slate-300">OFFICIAL BANK ACCOUNT DETAILS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Beneficiary:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">Amateur Soft Hockey Federation of India</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bank Name:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">ICICI Bank Ltd, Jaipur Branch</span>
                  </div>
                  <div className="flex justify-between">
                    <span>UPI ID Ref:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">ashfi@icici</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-pink-600 hover:bg-pink-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Simulate UPI Donation (₹{customAmount || donationAmount || '0'})</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
