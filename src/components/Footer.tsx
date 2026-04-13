"use client";

import Link from "next/link";
import gsap from "gsap";

export default function Footer() {
  const playHoverSound = () => {
    const audio = new Audio('/sfx/click.wav');
    audio.volume = 0.15;
    audio.preservesPitch = false;
    audio.playbackRate = 2.0; 
    audio.play().catch(() => {});
  };

  const handleCtaEnter = (e: React.MouseEvent) => {
    playHoverSound();
    const el = e.currentTarget.querySelector('.cta-inner') as HTMLElement;
    const ring = e.currentTarget.querySelector('.dashed-ring') as HTMLElement;
    
    gsap.to(el, {
      height: 120, // Circular morph
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto"
    });

    if (ring) {
      gsap.to(ring, {
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  };

  const handleCtaLeave = (e: React.MouseEvent) => {
    const el = e.currentTarget.querySelector('.cta-inner') as HTMLElement;
    const ring = e.currentTarget.querySelector('.dashed-ring') as HTMLElement;
    
    gsap.to(el, {
      height: 48, // Pill
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto"
    });

    if (ring) {
      gsap.to(ring, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  };

  const dividerPattern = `url("data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 Q30 0, 60 15 T120 15' fill='none' stroke='%231fa1dd' stroke-width='4' stroke-linecap='round' stroke-dasharray='1 14'/%3E%3C/svg%3E")`;

  return (
    <footer className="w-full bg-white relative pt-30 pb-15">
      {/* Blue dotted wave divider bridging FAQ and Footer */}
      <div 
        className="absolute top-0 left-0 w-full h-7.5 -translate-y-1/2 pointer-events-none z-50"
        style={{ backgroundImage: dividerPattern, backgroundRepeat: "repeat-x" }}
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
        
        <div className="text-center max-w-150 mb-12">
          <h2 className="font-jua text-[#353973] text-[40px] md:text-[56px] leading-[1.1] mb-6">
            WHAT ARE YOU WAITING FOR?
          </h2>
          <p className="font-plus text-[#1fa1dd] text-lg md:text-xl font-bold">
            Sign up, start building, and make someone&apos;s day!
          </p>
        </div>

        {/* Big RSVP Button */}
        <div className="relative flex items-center justify-center w-30 h-12 shrink-0 mb-25">
          <Link
            href="#rsvp"
            className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-30 h-30 flex items-center justify-center z-10"
            onMouseEnter={handleCtaEnter}
            onMouseLeave={handleCtaLeave}
          >
            <div
              className={`cta-inner cursor-pointer bg-[#F98866] flex items-center justify-center w-30 h-12 rounded-full text-white text-[16px] font-plus font-bold whitespace-nowrap origin-center relative overflow-hidden`}
            >
              <svg 
                className="dashed-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-29 h-29 opacity-0 pointer-events-none animate-[spin_6s_linear_infinite]" 
                viewBox="0 0 116 116"
              >
                <circle cx="58" cy="58" r="56" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="16 14" />
              </svg>
              <span className="relative z-10">JOIN NOW</span>
            </div>
          </Link>
        </div>

        {/* Bottom Credits */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t-2 border-[#e5effe] pt-6 font-plus font-medium text-[#353973]/60 text-sm">
          <p>
            A <a href="https://hackclub.com" target="_blank" className="text-[#F98866] hover:underline hover:text-[#1fa1dd] cursor-pointer">ysws</a> by <a href="https://shashwt.notion.site" target="_blank" className="text-[#1fa1dd] hover:underline cursor-pointer">shashwat</a>
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#faq" className="hover:text-[#1fa1dd] cursor-pointer transition-colors">FAQ</Link>
            <Link href="#shop" className="hover:text-[#1fa1dd] cursor-pointer transition-colors">Shop</Link>
            <Link href="https://hackclub.com/slack" target="_blank" className="hover:text-[#1fa1dd] cursor-pointer transition-colors">Slack</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}