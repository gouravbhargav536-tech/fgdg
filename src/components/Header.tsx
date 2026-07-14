import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Users, Activity, BarChart2, Video, Mail, Home, BookOpen, Award, Camera, Heart, ShieldAlert, Trophy } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  division: 'Men' | 'Women';
  setDivision: (value: 'Men' | 'Women') => void;
}

export default function Header({ darkMode, setDarkMode, activeSection, setActiveSection, division, setDivision }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  // Main menu items requested by the user
  const navLinks = [
    { label: 'Home', id: 'home', icon: <Home className="w-4 h-4" /> },
    { label: 'About', id: 'about', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Founder', id: 'founders', icon: <Users className="w-4 h-4" /> },
    { label: 'Team', id: 'teams', icon: <Activity className="w-4 h-4" /> },
    { label: 'Championships', id: 'championships', icon: <Trophy className="w-4 h-4" /> },
    { label: 'ISHL (League)', id: 'ishl', icon: <Award className="w-4 h-4" /> },
    { label: 'Gallery', id: 'gallery', icon: <Camera className="w-4 h-4" /> },
    { label: 'Join/Donate', id: 'join-donate', icon: <Heart className="w-4 h-4" /> },
    { label: 'Contact', id: 'contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const handleLinkClick = (id: string) => {
    setDrawerOpen(false);
    setActiveSection(id);
    
    // Smooth scroll support
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <>
      <header
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b shadow-sm ${
          scrolled 
            ? 'bg-white/90 dark:bg-slate-900/95 border-slate-200 dark:border-slate-800 backdrop-blur-md py-2.5' 
            : 'bg-white dark:bg-slate-900 border-slate-150 dark:border-slate-850 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo area representing ASHFI */}
            <div
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => handleLinkClick('home')}
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 to-sky-600 text-white shadow-md transform group-hover:scale-[1.03] transition-transform duration-300">
                {/* Custom Hockey Sticks and Ball Vector */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5.5 h-5.5 text-white"
                >
                  <path d="M5 21l14-14M17 3a2 2 0 112 2 2 2 0 01-2-2z" />
                  <path d="M14 6l3 3" />
                  <circle cx="9" cy="15" r="2.5" fill="currentColor" className="text-pink-400" />
                </svg>
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-tight text-blue-900 dark:text-white block leading-none">
                  ASHFI
                </span>
                <span className="font-display text-[9px] font-black tracking-widest text-pink-600 block mt-0.5 uppercase">
                  Soft Hockey India
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links (Priority Direct Tabs) */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 select-none ${
                      isActive
                        ? 'text-white bg-blue-900 dark:bg-blue-800 shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:text-blue-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Controls (Theme Toggle & Division Toggle & Drawer Trigger) */}
            <div className="flex items-center gap-2.5">
              
              {/* Division Selector */}
              <div className="hidden sm:flex bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 p-1 rounded-full font-mono text-[10px] select-none shadow-sm">
                <button
                  onClick={() => setDivision('Men')}
                  className={`px-3.5 py-1 rounded-full font-black uppercase transition-all cursor-pointer ${
                    division === 'Men'
                      ? 'bg-blue-900 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-900 dark:hover:text-white'
                  }`}
                >
                  Men
                </button>
                <button
                  onClick={() => setDivision('Women')}
                  className={`px-3.5 py-1 rounded-full font-black uppercase transition-all cursor-pointer ${
                    division === 'Women'
                      ? 'bg-pink-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-pink-600'
                  }`}
                >
                  Women
                </button>
              </div>

              {/* Theme Mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-850 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
                aria-label="Toggle Theme Mode"
              >
                {darkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-800" />}
              </button>

              {/* Hamburger Button for Mobile/Tablet */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="relative py-2.5 px-4 bg-gradient-to-r from-blue-900 to-sky-700 text-white cursor-pointer transition-all duration-300 select-none shadow-md rounded-xl flex items-center justify-center gap-1.5 font-display font-black text-[10px] uppercase tracking-widest hover:brightness-105 active:translate-y-0.5"
                aria-label="Open Navigation Drawer"
              >
                <Menu className="w-4 h-4" />
                <span>Menu</span>
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* MOBILE OVERFLOW DRAWER */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dark Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setDrawerOpen(false)}
        />

        {/* Slide-out Drawer Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200 dark:border-slate-850 p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out z-10 ${
            drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header Area */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-4.5 h-4.5 text-blue-900 dark:text-sky-400" />
                <span className="font-display font-black text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                  ASHFI NAVIGATOR
                </span>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
                aria-label="Close Drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Division Selector inside Drawer for Mobile Screen */}
            <div className="sm:hidden space-y-1.5">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block px-1">
                Active Tournament Division
              </span>
              <div className="grid grid-cols-2 bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-850 p-1 rounded-full font-mono text-xs select-none text-center">
                <button
                  onClick={() => { setDivision('Men'); }}
                  className={`py-1.5 rounded-full font-black uppercase transition-all cursor-pointer ${
                    division === 'Men'
                      ? 'bg-blue-900 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Men
                </button>
                <button
                  onClick={() => { setDivision('Women'); }}
                  className={`py-1.5 rounded-full font-black uppercase transition-all cursor-pointer ${
                    division === 'Women'
                      ? 'bg-pink-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Women
                </button>
              </div>
            </div>

            {/* Drawer menu list */}
            <div className="space-y-1">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block mb-2 px-1">
                Federation Pages
              </span>
              {navLinks.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full text-left py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-150 flex items-center gap-3 min-h-[44px] cursor-pointer ${
                      isActive
                        ? 'text-white bg-blue-900 dark:bg-blue-800'
                        : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {React.cloneElement(item.icon, {
                      className: `w-4 h-4 ${isActive ? 'text-white' : 'text-blue-900 dark:text-sky-400'}`
                    })}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme selection quick toggle */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mt-auto space-y-2">
            <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block px-1">
              Appearance mode
            </span>
            <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850">
              <button
                onClick={() => setDarkMode(false)}
                className={`py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  !darkMode ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-yellow-500" />
                <span>Day</span>
              </button>
              <button
                onClick={() => setDarkMode(true)}
                className={`py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  darkMode ? 'bg-slate-800 text-white shadow-xs' : 'text-slate-500'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-blue-400" />
                <span>Night</span>
              </button>
            </div>
          </div>

          {/* Footer segment */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-4 text-center">
            <span className="text-[9px] font-mono text-slate-400 block">
              ASHFI India © {new Date().getFullYear()}
            </span>
            <span className="text-[8px] font-sans font-black text-slate-400 block mt-0.5 uppercase tracking-widest text-pink-600">
              Speed · Endurance · Coordination
            </span>
          </div>

        </div>
      </div>
    </>
  );
}
