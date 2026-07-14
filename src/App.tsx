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
    } else {
      setDarkMode(false);
      document.body.classList.remove('dark');
    }
  }, []);

  const handleSetDarkMode = (val: boolean) => {
    setDarkMode(val);
    if (val) {
      document.body.classList.add('dark');
      localStorage.setItem('hil_dark_mode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('hil_dark_mode', 'false');
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 flex flex-col">
      
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
