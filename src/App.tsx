import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import Hero from './components/Hero';
import LiveStatsBar from './components/LiveStatsBar';
import About from './components/About';
import OfficialJerseyShowcase from './components/OfficialJerseyShowcase';
import SoftHockeyGuide from './components/SoftHockeyGuide';
import AIHockeyHub from './components/AIHockeyHub';
import Founders from './components/Founders';
import Teams from './components/Teams';
import Matches from './components/Matches';
import Standings from './components/Standings';
import Statistics from './components/Statistics';
import WhereToWatch from './components/WhereToWatch';
import News from './components/News';
import Videos from './components/Videos';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import InstagramQRBanner from './components/InstagramQRBanner';
import SponsorsMarquee from './components/SponsorsMarquee';
import ImageBanner from './components/ImageBanner';

// New official ASHFI pages
import Championships from './components/Championships';
import ISHL from './components/ISHL';
import Gallery from './components/Gallery';
import OfficialLinks from './components/OfficialLinks';
import JoinDonate from './components/JoinDonate';
import ContactSection from './components/ContactSection';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  
  // Persistent global division state ('Men' | 'Women')
  const [division, setDivision] = useState<'Men' | 'Women'>(() => {
    const saved = localStorage.getItem('hil_active_division');
    return (saved === 'Women' || saved === 'Men') ? saved : 'Men';
  });

  // Multiple Color Theme State (No localStorage required, defaults to navy)
  const [colorTheme, setColorTheme] = useState<string>('navy');

  const handleSetDivision = (val: 'Men' | 'Women') => {
    setDivision(val);
    localStorage.setItem('hil_active_division', val);
  };

  // Load and apply dark mode preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('hil_dark_mode');
    if (savedTheme === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark');
      document.body.classList.remove('day-mode');
    } else {
      setDarkMode(false);
      document.body.classList.remove('dark');
      document.body.classList.add('day-mode');
    }
  }, []);

  // Sync color theme to body class & set document CSS custom variables
  useEffect(() => {
    const root = document.documentElement;
    
    const themes: Record<string, {
      bg: string;
      heading: string;
      body: string;
      accent: string;
      card: string;
      border: string;
      isDark: boolean;
    }> = {
      'navy': {
        bg: 'linear-gradient(135deg, #0B1220 0%, #122240 100%)',
        heading: '#FFFFFF',
        body: '#C7D6EC',
        accent: '#FAC775',
        card: '#121B2D',
        border: 'rgba(199, 214, 236, 0.15)',
        isDark: true
      },
      'deep-forest': {
        bg: 'linear-gradient(135deg, #052016 0%, #0D3E2F 100%)',
        heading: '#E6F4EA',
        body: '#A3D9C9',
        accent: '#34D399',
        card: '#0A2B1F',
        border: 'rgba(163, 217, 201, 0.15)',
        isDark: true
      },
      'sunset-glow': {
        bg: 'linear-gradient(135deg, #1E122A 0%, #3B1B3C 50%, #5E263D 100%)',
        heading: '#FFF0F6',
        body: '#E1C4D9',
        accent: '#FF92AD',
        card: '#2A1637',
        border: 'rgba(225, 196, 217, 0.15)',
        isDark: true
      },
      'indigo': {
        bg: 'linear-gradient(135deg, #12102A 0%, #1B173E 100%)',
        heading: '#FFFFFF',
        body: '#B8B4D4',
        accent: '#FAC775',
        card: '#1B173E',
        border: 'rgba(184, 180, 212, 0.15)',
        isDark: true
      },
      'obsidian-crimson': {
        bg: 'linear-gradient(135deg, #18030B 0%, #3F0C1F 100%)',
        heading: '#FFF5F5',
        body: '#EBB8C3',
        accent: '#FF6B8B',
        card: '#290714',
        border: 'rgba(235, 184, 195, 0.15)',
        isDark: true
      },
      'nordic-aurora': {
        bg: 'linear-gradient(135deg, #081C1C 0%, #0C3C3B 100%)',
        heading: '#E6FFFA',
        body: '#9FE2DF',
        accent: '#2DD4BF',
        card: '#0C2D2B',
        border: 'rgba(159, 226, 223, 0.15)',
        isDark: true
      },
      'royal-amber': {
        bg: 'linear-gradient(135deg, #171105 0%, #2F2107 100%)',
        heading: '#FFFDF5',
        body: '#E2D6BE',
        accent: '#FBBF24',
        card: '#241B08',
        border: 'rgba(226, 214, 190, 0.15)',
        isDark: true
      },
      'plum-velvet': {
        bg: 'linear-gradient(135deg, #14051B 0%, #2E103E 100%)',
        heading: '#FFF0FD',
        body: '#D8BFDE',
        accent: '#E879F9',
        card: '#20092B',
        border: 'rgba(216, 191, 222, 0.15)',
        isDark: true
      },
      'cyber-teal': {
        bg: 'linear-gradient(135deg, #020C1B 0%, #0A2E5C 100%)',
        heading: '#E0F2FE',
        body: '#93C5FD',
        accent: '#38BDF8',
        card: '#0E1E38',
        border: 'rgba(147, 197, 253, 0.15)',
        isDark: true
      },
      'light-blue': {
        bg: 'linear-gradient(135deg, #E6F1FB 0%, #F5FAFE 100%)',
        heading: '#0C2E4E',
        body: '#334966',
        accent: '#0284C7',
        card: '#FFFFFF',
        border: 'rgba(12, 46, 78, 0.12)',
        isDark: false
      },
      'gradient-blue': {
        bg: 'linear-gradient(160deg, #0B1220 0%, #123354 60%, #185FA5 130%)',
        heading: '#FFFFFF',
        body: '#C7D6EC',
        accent: '#FAC775',
        card: 'rgba(255, 255, 255, 0.05)',
        border: 'rgba(255, 255, 255, 0.12)',
        isDark: true
      },
      'mint': {
        bg: 'linear-gradient(135deg, #EAF3DE 0%, #F5FBF6 100%)',
        heading: '#173404',
        body: '#3B5A1C',
        accent: '#059669',
        card: '#FFFFFF',
        border: 'rgba(59, 90, 28, 0.15)',
        isDark: false
      },
      'citrus-cream': {
        bg: 'linear-gradient(135deg, #FDF5E2 0%, #FFFDF8 100%)',
        heading: '#451A03',
        body: '#78350F',
        accent: '#D97706',
        card: '#FFFFFF',
        border: 'rgba(120, 53, 15, 0.15)',
        isDark: false
      },
      'lilac-mist': {
        bg: 'linear-gradient(135deg, #F0EBFC 0%, #FAFAFF 100%)',
        heading: '#2E1065',
        body: '#5B21B6',
        accent: '#7C3AED',
        card: '#FFFFFF',
        border: 'rgba(91, 33, 182, 0.15)',
        isDark: false
      },
      'rose-quartz': {
        bg: 'linear-gradient(135deg, #FCEEEB 0%, #FFF9F8 100%)',
        heading: '#500B1A',
        body: '#881337',
        accent: '#DB2777',
        card: '#FFFFFF',
        border: 'rgba(136, 19, 55, 0.15)',
        isDark: false
      },
      'emerald-gold': {
        bg: 'linear-gradient(135deg, #062E1B 0%, #124C30 100%)',
        heading: '#FFFDF0',
        body: '#A6CBB5',
        accent: '#FBBF24',
        card: '#093B24',
        border: 'rgba(166, 203, 181, 0.15)',
        isDark: true
      },
      'neon-tokyo': {
        bg: 'linear-gradient(135deg, #0D0826 0%, #210E4B 100%)',
        heading: '#FFF5FF',
        body: '#B39BCF',
        accent: '#FF007F',
        card: '#160F35',
        border: 'rgba(179, 155, 207, 0.15)',
        isDark: true
      },
      'coral-peach': {
        bg: 'linear-gradient(135deg, #FFF0EA 0%, #FFF8F5 100%)',
        heading: '#5C1E0A',
        body: '#8F4733',
        accent: '#FF6F59',
        card: '#FFFFFF',
        border: 'rgba(143, 71, 51, 0.15)',
        isDark: false
      },
      'sage-stone': {
        bg: 'linear-gradient(135deg, #EDF1EC 0%, #F6F8F5 100%)',
        heading: '#23321F',
        body: '#4A5E46',
        accent: '#5F8575',
        card: '#FFFFFF',
        border: 'rgba(74, 94, 70, 0.15)',
        isDark: false
      },
      'electric-violet': {
        bg: 'linear-gradient(135deg, #1A0033 0%, #3D0066 100%)',
        heading: '#FFFFFF',
        body: '#DFBFFF',
        accent: '#CC33FF',
        card: '#29004D',
        border: 'rgba(223, 191, 255, 0.15)',
        isDark: true
      }
    };

    const currentTheme = themes[colorTheme] || themes['navy'];

    // Update root style variables for seamless global application
    root.style.setProperty('--theme-bg', currentTheme.bg);
    root.style.setProperty('--theme-heading', currentTheme.heading);
    root.style.setProperty('--theme-body', currentTheme.body);
    root.style.setProperty('--theme-accent', currentTheme.accent);
    root.style.setProperty('--theme-card', currentTheme.card);
    root.style.setProperty('--theme-border', currentTheme.border);
    root.style.setProperty('--theme-accent-hover', currentTheme.accent);
    root.style.setProperty('--theme-primary-light', currentTheme.accent);
    root.style.setProperty('--theme-primary', currentTheme.heading);

    // Update document body style
    document.body.style.background = currentTheme.bg;
    document.body.style.color = currentTheme.body;

    // Apply dark/day-mode class based on active theme
    if (currentTheme.isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('day-mode');
      setDarkMode(true);
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('day-mode');
      setDarkMode(false);
    }

    // Toggle corresponding theme class
    Object.keys(themes).forEach((t) => {
      document.body.classList.remove(`theme-${t}`);
    });
    document.body.classList.add(`theme-${colorTheme}`);
  }, [colorTheme]);

  const handleSetColorTheme = (theme: string) => {
    setColorTheme(theme);
  };

  const handleSetDarkMode = (val: boolean) => {
    setDarkMode(val);
    if (val) {
      document.body.classList.add('dark');
      document.body.classList.remove('day-mode');
      localStorage.setItem('hil_dark_mode', 'true');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('day-mode');
      localStorage.setItem('hil_dark_mode', 'false');
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-x-hidden min-h-screen transition-all duration-300 flex flex-col" style={{ background: 'var(--theme-bg)' }}>
      
      {/* Interactive Water Wave Side Accents for Day Mode */}
      {!darkMode && (
        <>
          {/* Left Water Wave */}
          <div className="fixed left-0 top-[80px] bottom-0 w-8 sm:w-16 md:w-24 pointer-events-none overflow-hidden z-0 hidden lg:block opacity-65">
            <svg className="w-full h-full" viewBox="0 0 100 1000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Wave 1 */}
              <path className="wave-animate-1" d="M0,0 Q40,100 15,200 T40,400 T15,600 T40,800 T15,1000 L0,1000 Z" fill="var(--theme-primary-light)" opacity="0.15" />
              {/* Wave 2 */}
              <path className="wave-animate-2" d="M0,0 Q55,120 20,240 T55,480 T20,720 T55,960 L0,1000 Z" fill="var(--theme-accent)" opacity="0.12" />
              {/* Wave 3 */}
              <path className="wave-animate-3" d="M0,0 Q25,80 8,160 T25,320 T8,480 T25,640 T8,800 T25,960 L0,1000 Z" fill="var(--theme-primary)" opacity="0.08" />
            </svg>
          </div>

          {/* Right Water Wave */}
          <div className="fixed right-0 top-[80px] bottom-0 w-8 sm:w-16 md:w-24 pointer-events-none overflow-hidden z-0 hidden lg:block opacity-65">
            <svg className="w-full h-full" viewBox="0 0 100 1000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Wave 1 */}
              <path className="wave-animate-1" d="M100,0 Q60,100 85,200 T60,400 T85,600 T60,800 T85,1000 L100,1000 Z" fill="var(--theme-primary-light)" opacity="0.15" />
              {/* Wave 2 */}
              <path className="wave-animate-2" d="M100,0 Q45,120 80,240 T45,480 T80,720 T45,960 L100,1000 Z" fill="var(--theme-accent)" opacity="0.12" />
              {/* Wave 3 */}
              <path className="wave-animate-3" d="M100,0 Q75,80 92,160 T75,320 T92,480 T75,640 T92,800 T75,960 L100,1000 Z" fill="var(--theme-primary)" opacity="0.08" />
            </svg>
          </div>
        </>
      )}

      {/* Dynamic Header navbar */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={handleSetDarkMode} 
        activeSection={activeSection} 
        setActiveSection={handleSectionChange}
        division={division}
        setDivision={handleSetDivision}
        colorTheme={colorTheme}
        setColorTheme={handleSetColorTheme}
      />

      {/* Main content layouts */}
      <main className="flex-1 mt-[70px] sm:mt-[80px] w-full px-2 sm:px-4">
        <div 
          className="w-full max-w-7xl mx-auto my-3 sm:my-6 p-3 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 border shadow-lg overflow-x-hidden"
          style={{
            backgroundColor: 'var(--theme-card)',
            borderColor: 'var(--theme-border)',
            color: 'var(--theme-body)'
          }}
        >
          {activeSection === 'home' && (
            <>
              <HeroCarousel />
              <Hero setActiveSection={handleSectionChange} />
              <SoftHockeyGuide />
              <ImageBanner url="https://i.postimg.cc/VLvXb7W3/Screenshot-2026-07-14-235936.png" caption="Soft Hockey in Action" />
              <About />
              <ImageBanner url="https://i.postimg.cc/QMT2NkPr/Screenshot-2026-07-15-000017.png" caption="Field Play" />
              <OfficialJerseyShowcase />
              <ImageBanner url="https://i.postimg.cc/HxGCbP5k/Screenshot-2026-07-14-235958.png" caption="Champions on the Ground" />
            </>
          )}
          
          {activeSection === 'about' && <About />}
          
          {activeSection === 'founders' && <Founders />}
          
          {activeSection === 'teams' && (
            <Teams division={division} setDivision={handleSetDivision} />
          )}
          
          {activeSection === 'championships' && <Championships />}
          
          {activeSection === 'ishl' && <ISHL />}
          
          {activeSection === 'gallery' && <Gallery />}

          {activeSection === 'official-links' && <OfficialLinks />}
          
          {activeSection === 'join-donate' && <JoinDonate />}
          
          {activeSection === 'contact' && <ContactSection />}

          {/* Keeping support segments like directory / matches / news fully integrated */}
          {activeSection === 'official-hockey-directory' && <AIHockeyHub />}
          {activeSection === 'news' && <News />}
          {activeSection === 'soft-hockey-guide' && <SoftHockeyGuide />}
          {activeSection === 'matches' && <Matches division={division} setDivision={handleSetDivision} />}
          {activeSection === 'standings' && <Standings division={division} setDivision={handleSetDivision} />}
          {activeSection === 'statistics' && <Statistics />}
          {activeSection === 'videos' && <Videos />}
          {activeSection === 'where-to-watch' && <WhereToWatch />}
        </div>
      </main>

      {/* Sponsors Infinite Marquee (Animated Brand sponsors requested) */}
      <SponsorsMarquee />

      {/* Instagram Social Media Follow QR Banner */}
      <InstagramQRBanner />

      {/* Footer Contacts and Quick Navigation */}
      <Footer />

    </div>
  );
}
