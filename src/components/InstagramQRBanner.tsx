import React from 'react';

export default function InstagramQRBanner() {
  // Replace INSTAGRAM_PROFILE_URL_HERE with the actual Instagram profile link
  const instagramUrl = "https://www.instagram.com/ishlofficial/";
  const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(instagramUrl)}&color=0b1330`;

  return (
    <section id="instagram-qr-section" className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Custom Style Inject for precisely < 480px stacking */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 480px) {
            .qr-banner-flex {
              flex-direction: column !important;
              gap: 2rem !important;
              text-align: center !important;
            }
            .qr-banner-text {
              order: 2 !important;
              align-items: center !important;
              text-align: center !important;
            }
            .qr-banner-qr {
              order: 1 !important;
            }
            .qr-banner-logos {
              order: 3 !important;
              justify-content: center !important;
              width: 100% !important;
            }
          }
        `}} />

        {/* Banner Card Container */}
        <div className="bg-[#1E3A8A] rounded-2xl md:rounded-3xl p-6 md:p-10 text-white relative overflow-hidden border border-blue-800 shadow-xl">
          
          {/* Subtle Background Decorative Blobs */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Core Content Layout */}
          <div className="qr-banner-flex flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            
            {/* Left Block: Bold Header text */}
            <div className="qr-banner-text flex flex-col justify-center text-center md:text-left">
              <h3 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-tight">
                FOLLOW US <br className="hidden md:inline" />
                ON <span className="text-[#EEB902] font-black">INSTAGRAM</span>
              </h3>
              <p className="text-blue-100/80 text-xs md:text-sm mt-2 font-medium max-w-xs mx-auto md:mx-0 leading-relaxed">
                Experience high-octane reels, live tournament stories, training highlights, and exclusive behind-the-scenes actions.
              </p>
            </div>

            {/* Center Block: QR Code Image */}
            <div className="qr-banner-qr flex flex-col items-center justify-center">
              <div className="bg-white p-3.5 rounded-2xl shadow-2xl inline-block border border-blue-950/20 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={qrCodeImageUrl}
                  alt="ISHL Instagram Profile QR Code"
                  referrerPolicy="no-referrer"
                  className="w-[120px] h-[120px] block"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] md:text-xs font-mono font-black text-blue-200 uppercase tracking-widest mt-3 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#EEB902] animate-pulse" />
                Scan to Follow
              </span>
            </div>

            {/* Right Block: Logos in tandem */}
            <div className="qr-banner-logos flex items-center gap-4 shrink-0">
              
              {/* Instagram Vector Icon with Brand Gradient */}
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0 shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="banner-insta-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  {/* Rounded icon box */}
                  <rect width="100" height="100" fill="url(#banner-insta-gradient)" />
                  {/* Camera graphic */}
                  <rect x="22" y="22" width="56" height="56" rx="16" stroke="#FFFFFF" strokeWidth="6" fill="none" />
                  <circle cx="50" cy="50" r="14" stroke="#FFFFFF" strokeWidth="6" fill="none" />
                  <circle cx="68" cy="32" r="4.5" fill="#FFFFFF" />
                </svg>
              </div>

              {/* Delicate Vertical Separator */}
              <div className="h-10 border-l border-white/20" />

              {/* ISHL Site Logo Shield */}
              <div className="flex items-center gap-2.5">
                <div className="w-11 h-11 rounded-full bg-white text-blue-900 flex items-center justify-center shadow-lg border border-white/10 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5.5 h-5.5 text-[#1E3A8A]"
                  >
                    <path d="M5 21l14-14M17 3a2 2 0 112 2 2 2 0 01-2-2z" />
                    <path d="M14 6l3 3" />
                    <circle cx="9" cy="15" r="2" fill="currentColor" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="font-display font-black text-xs md:text-sm tracking-tight text-white block leading-none">
                    INDIAN SOFT
                  </span>
                  <span className="font-display text-[8px] md:text-[9px] font-black tracking-widest text-[#EEB902] block mt-0.5 uppercase">
                    HOCKEY LEAGUE
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
