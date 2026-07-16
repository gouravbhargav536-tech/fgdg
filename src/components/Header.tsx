import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Users, Activity, BarChart2, Video, Mail, Home, BookOpen, Award, Camera, Heart, ShieldAlert, Trophy, Globe, Newspaper, Palette } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  division: 'Men' | 'Women';
  setDivision: (value: 'Men' | 'Women') => void;
  colorTheme: string;
  setColorTheme: (value: string) => void;
}

export default function Header({ darkMode, setDarkMode, activeSection, setActiveSection, division, setDivision, colorTheme, setColorTheme }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeModalOpen, setThemeModalOpen] = useState(false);

  const themeColors = [
    { id: 'navy', name: 'Navy', colorCode: '#0B1220', bgPreview: 'linear-gradient(135deg, #0B1220 0%, #122240 100%)' },
    { id: 'deep-forest', name: 'Forest Green', colorCode: '#052016', bgPreview: 'linear-gradient(135deg, #052016 0%, #0D3E2F 100%)' },
    { id: 'sunset-glow', name: 'Sunset Violet', colorCode: '#1E122A', bgPreview: 'linear-gradient(135deg, #1E122A 0%, #3B1B3C 50%, #5E263D 100%)' },
    { id: 'indigo', name: 'Indigo Blue', colorCode: '#12102A', bgPreview: 'linear-gradient(135deg, #12102A 0%, #1B173E 100%)' },
    { id: 'obsidian-crimson', name: 'Crimson Rose', colorCode: '#18030B', bgPreview: 'linear-gradient(135deg, #18030B 0%, #3F0C1F 100%)' },
    { id: 'nordic-aurora', name: 'Teal Aurora', colorCode: '#081C1C', bgPreview: 'linear-gradient(135deg, #081C1C 0%, #0C3C3B 100%)' },
    { id: 'royal-amber', name: 'Golden Amber', colorCode: '#171105', bgPreview: 'linear-gradient(135deg, #171105 0%, #2F2107 100%)' },
    { id: 'plum-velvet', name: 'Plum Grape', colorCode: '#14051B', bgPreview: 'linear-gradient(135deg, #14051B 0%, #2E103E 100%)' },
    { id: 'cyber-teal', name: 'Cyber Cyan', colorCode: '#020C1B', bgPreview: 'linear-gradient(135deg, #020C1B 0%, #0A2E5C 100%)' },
    { id: 'light-blue', name: 'Light Blue', colorCode: '#E6F1FB', bgPreview: 'linear-gradient(135deg, #E6F1FB 0%, #F5FAFE 100%)' },
    { id: 'gradient-blue', name: 'Gradient Blue', colorCode: '#123354', bgPreview: 'linear-gradient(160deg, #0B1220 0%, #123354 60%, #185FA5 130%)' },
    { id: 'mint', name: 'Mint Green', colorCode: '#EAF3DE', bgPreview: 'linear-gradient(135deg, #EAF3DE 0%, #F5FBF6 100%)' },
    { id: 'citrus-cream', name: 'Citrus Yellow', colorCode: '#FDF5E2', bgPreview: 'linear-gradient(135deg, #FDF5E2 0%, #FFFDF8 100%)' },
    { id: 'lilac-mist', name: 'Lilac Purple', colorCode: '#F0EBFC', bgPreview: 'linear-gradient(135deg, #F0EBFC 0%, #FAFAFF 100%)' },
    { id: 'rose-quartz', name: 'Rose Quartz', colorCode: '#FCEEEB', bgPreview: 'linear-gradient(135deg, #FCEEEB 0%, #FFF9F8 100%)' },
    { id: 'emerald-gold', name: 'Emerald Gold', colorCode: '#062E1B', bgPreview: 'linear-gradient(135deg, #062E1B 0%, #124C30 100%)' },
    { id: 'neon-tokyo', name: 'Neon Tokyo', colorCode: '#0D0826', bgPreview: 'linear-gradient(135deg, #0D0826 0%, #210E4B 100%)' },
    { id: 'coral-peach', name: 'Coral Peach', colorCode: '#FFF0EA', bgPreview: 'linear-gradient(135deg, #FFF0EA 0%, #FFF8F5 100%)' },
    { id: 'sage-stone', name: 'Sage Stone', colorCode: '#EDF1EC', bgPreview: 'linear-gradient(135deg, #EDF1EC 0%, #F6F8F5 100%)' },
    { id: 'electric-violet', name: 'Electric Violet', colorCode: '#1A0033', bgPreview: 'linear-gradient(135deg, #1A0033 0%, #3D0066 100%)' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer or theme modal is open
  useEffect(() => {
    if (drawerOpen || themeModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen, themeModalOpen]);

  // Main menu items requested by the user
  const navLinks = [
    { label: 'Home', id: 'home', icon: <Home className="w-4 h-4" /> },
    { label: 'About', id: 'about', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Founder', id: 'founders', icon: <Users className="w-4 h-4" /> },
    { label: 'Team', id: 'teams', icon: <Activity className="w-4 h-4" /> },
    { label: 'Championships', id: 'championships', icon: <Trophy className="w-4 h-4" /> },
    { label: 'ISHL (League)', id: 'ishl', icon: <Award className="w-4 h-4" /> },
    { label: 'Gallery', id: 'gallery', icon: <Camera className="w-4 h-4" /> },
    { label: 'News', id: 'news', icon: <Newspaper className="w-4 h-4" /> },
    { label: 'Official Links', id: 'official-links', icon: <Globe className="w-4 h-4" /> },
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
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl text-white shadow-md transform group-hover:scale-[1.03] transition-transform duration-300 overflow-hidden">
                <img src="https://i.postimg.cc/fySnWtR1/Screenshot-2026-07-15-142120.png" alt="ASHFI Logo" className="w-full h-full object-cover" />
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

            {/* Controls (Theme Toggle & Drawer Trigger) */}
            <div className="flex items-center gap-2.5">
              
              {/* Single "Change Theme" Button with Palette icon */}
              <button
                onClick={() => setThemeModalOpen(true)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all duration-300 cursor-pointer shadow-md border flex items-center justify-center gap-2 select-none font-mono font-black text-[10px] uppercase tracking-wider ${
                  !darkMode 
                    ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50' 
                    : 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800'
                }`}
                title="Change Color Theme"
                aria-label="Change Color Theme"
              >
                <Palette className="w-4 h-4 text-pink-500" />
                <span>Change Theme</span>
              </button>

              {/* Theme Mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-md border ${
                  !darkMode 
                    ? 'bg-gradient-to-tr from-pink-100 to-blue-100 border-pink-300 text-pink-600 hover:scale-105 shadow-pink-200/50' 
                    : 'bg-slate-950 text-slate-300 border-slate-850 hover:bg-slate-800 border-slate-800'
                }`}
                aria-label="Toggle Theme Mode"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 text-yellow-400 animate-pulse" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-900" />
                )}
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
          <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mt-auto space-y-4">
            <div className="space-y-1.5">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block px-1">
                Appearance mode
              </span>
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850">
                <button
                  onClick={() => setDarkMode(false)}
                  className={`py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer ${
                    !darkMode 
                      ? 'bg-gradient-to-r from-pink-500 to-blue-600 text-white shadow-md transform scale-[1.03]' 
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  <Sun className={`w-3.5 h-3.5 ${!darkMode ? 'text-white animate-spin-slow' : 'text-yellow-500'}`} />
                  <span>Day</span>
                </button>
                <button
                  onClick={() => setDarkMode(true)}
                  className={`py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer ${
                    darkMode 
                      ? 'bg-slate-800 text-white shadow-md' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5 text-blue-400" />
                  <span>Night</span>
                </button>
              </div>
            </div>

            {/* Multiple Color Palette Theme selection */}
            <div className="space-y-2">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block px-1">
                Color Theme Accent
              </span>
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  setThemeModalOpen(true);
                }}
                className="w-full py-2.5 px-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-[10px] font-mono font-black uppercase tracking-wider flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                <Palette className="w-4 h-4 text-pink-500" />
                <span>Change Theme Color</span>
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

      {/* Theme selection Pop-up Modal (20 Mixed Gradients) */}
      {themeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop blur overlay */}
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer transition-opacity duration-300"
            onClick={() => setThemeModalOpen(false)}
          />
          
          {/* Pop-up Window Card */}
          <div 
            className="w-full max-w-2xl rounded-3xl border shadow-2xl p-6 sm:p-8 relative z-10 transition-all duration-300 animate-fade-in-up"
            style={{ 
              backgroundColor: 'var(--theme-card)', 
              borderColor: 'var(--theme-border)',
              color: 'var(--theme-body)'
            }}
          >
            {/* Header section with title and close X button */}
            <div className="flex items-start justify-between gap-4 border-b pb-4 animate-none" style={{ borderColor: 'var(--theme-border)' }}>
              <div>
                <h3 className="text-base sm:text-lg font-display font-black uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--theme-heading)' }}>
                  <Palette className="w-5 h-5 text-pink-500 animate-bounce" />
                  Select Space Theme Color
                </h3>
                <p className="text-[10px] sm:text-[11px] mt-1 text-slate-400 dark:text-slate-400 font-sans tracking-wide">
                  Choose from 20 custom mixed-gradient palettes to dynamically personalize your workspace and training experience.
                </p>
              </div>
              <button 
                onClick={() => setThemeModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-all cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 15 theme choices grid layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-6 max-h-[60vh] overflow-y-auto pr-1">
              {themeColors.map((theme) => {
                const isSelected = colorTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => setColorTheme(theme.id)}
                    className={`p-3 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-between gap-2.5 cursor-pointer relative group ${
                      isSelected 
                        ? 'border-pink-500 bg-pink-500/5 shadow-md scale-105' 
                        : 'border-slate-200 dark:border-slate-800 hover:border-pink-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30'
                    }`}
                  >
                    {/* Circle Swatch Preview with color gradients */}
                    <div 
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border shadow-sm transition-transform duration-300 group-hover:scale-110 flex items-center justify-center ${
                        isSelected ? 'ring-2 ring-pink-500 ring-offset-2 dark:ring-offset-slate-900' : 'border-slate-200 dark:border-slate-800'
                      }`}
                      style={{ background: theme.bgPreview }}
                    >
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-white shadow-md animate-pulse" />
                      )}
                    </div>

                    {/* Text Label */}
                    <span 
                      className={`text-[9px] font-black uppercase tracking-wider block leading-tight ${
                        isSelected ? 'text-pink-600 dark:text-pink-400 font-black' : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {theme.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Modal action buttons */}
            <div className="flex justify-end pt-4 border-t" style={{ borderColor: 'var(--theme-border)' }}>
              <button
                onClick={() => setThemeModalOpen(false)}
                className="px-6 py-2 bg-gradient-to-r from-blue-900 to-sky-700 text-white font-mono font-black text-[10px] uppercase tracking-widest rounded-xl hover:brightness-105 active:translate-y-0.5 shadow-md transition-all cursor-pointer"
              >
                Save & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
