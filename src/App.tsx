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
    <div className="relative overflow-x-hidden min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 flex flex-col">
      
      {/* Interactive Water Wave Side Accents for Day Mode */}
      {!darkMode && (
        <>
          {/* Left Water Wave */}
          <div className="fixed left-0 top-[80px] bottom-0 w-8 sm:w-16 md:w-24 pointer-events-none overflow-hidden z-0 hidden lg:block opacity-65">
            <svg className="w-full h-full" viewBox="0 0 100 1000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Wave 1 */}
              <path className="wave-animate-1" d="M0,0 Q40,100 15,200 T40,400 T15,600 T40,800 T15,1000 L0,1000 Z" fill="rgba(59, 130, 246, 0.15)" />
              {/* Wave 2 */}
              <path className="wave-animate-2" d="M0,0 Q55,120 20,240 T55,480 T20,720 T55,960 L0,1000 Z" fill="rgba(236, 72, 153, 0.12)" />
              {/* Wave 3 */}
              <path className="wave-animate-3" d="M0,0 Q25,80 8,160 T25,320 T8,480 T25,640 T8,800 T25,960 L0,1000 Z" fill="rgba(29, 78, 216, 0.08)" />
            </svg>
          </div>

          {/* Right Water Wave */}
          <div className="fixed right-0 top-[80px] bottom-0 w-8 sm:w-16 md:w-24 pointer-events-none overflow-hidden z-0 hidden lg:block opacity-65">
            <svg className="w-full h-full" viewBox="0 0 100 1000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Wave 1 */}
              <path className="wave-animate-1" d="M100,0 Q60,100 85,200 T60,400 T85,600 T60,800 T85,1000 L100,1000 Z" fill="rgba(59, 130, 246, 0.15)" />
              {/* Wave 2 */}
              <path className="wave-animate-2" d="M100,0 Q45,120 80,240 T45,480 T80,720 T45,960 L100,1000 Z" fill="rgba(236, 72, 153, 0.12)" />
              {/* Wave 3 */}
              <path className="wave-animate-3" d="M100,0 Q75,80 92,160 T75,320 T92,480 T75,640 T92,800 T75,960 L100,1000 Z" fill="rgba(29, 78, 216, 0.08)" />
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
      />

      {/* Main content layouts */}
      <main className="flex-1 mt-[80px]">
        <div className={`transition-all duration-500 ${!darkMode ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6 py-6 bg-white/75 backdrop-blur-md rounded-3xl side-shadow-animated border-x border-pink-200/30' : ''}`}>
          {activeSection === 'home' && (
            <>
              <HeroCarousel />
              <Hero setActiveSection={handleSectionChange} />
              <ImageBanner url="https://i.postimg.cc/VLvXb7W3/Screenshot-2026-07-14-235936.png" caption="Soft Hockey in Action" />
              <About />
              <ImageBanner url="https://i.postimg.cc/QMT2NkPr/Screenshot-2026-07-15-000017.png" caption="Field Play" />
              <OfficialJerseyShowcase />
              <SoftHockeyGuide />
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
