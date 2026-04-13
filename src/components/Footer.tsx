"use client";

import Link from "next/link";
import { useState } from "react";
import gsap from "gsap";

export default function Footer() {
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);

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
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t-2 border-[#e5effe] pt-6 font-plus font-medium text-[#353973]/60 text-sm flex-wrap gap-4">
          <p>
            A <a href="https://hackclub.com" target="_blank" className="text-[#F98866] hover:underline hover:text-[#1fa1dd] cursor-pointer relative z-10">ysws</a> by <a href="https://shashwt.notion.site" target="_blank" className="text-[#1fa1dd] hover:underline cursor-pointer relative z-10">shashwat</a>
          </p>
          <div className="flex gap-6 md:mt-0 relative z-10">
            <Link href="#faq" className="hover:text-[#1fa1dd] cursor-pointer transition-colors">FAQ</Link>
            <Link href="#shop" className="hover:text-[#1fa1dd] cursor-pointer transition-colors">Shop</Link>
            <button onClick={() => setIsCreditsOpen(true)} className="hover:text-[#1fa1dd] cursor-pointer transition-colors font-medium">Credits</button>
            <Link href="https://hackclub.com/slack" target="_blank" className="hover:text-[#1fa1dd] cursor-pointer transition-colors">Slack</Link>
          </div>
        </div>

      </div>

      {/* Credits Dialog */}
      {isCreditsOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#353973]/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsCreditsOpen(false)} 
          />
          <div className="relative bg-white w-full max-w-md rounded-[24px] border-[3px] border-[#353973] shadow-lg p-8 overflow-hidden animate-in fade-in zoom-in duration-200">
            <h3 className="font-jua text-[#353973] text-[32px] text-center mb-6 relative z-10 leading-none">
              CREDITS
            </h3>

            <div className="flex justify-center flex-col gap-8 font-plus text-[#353973]/80 relative z-10 text-center">
              <div>
                <p className="font-bold text-[#1fa1dd] text-lg mb-2">Illustrations</p>
                <div className="text-sm font-medium leading-relaxed">
                  <p className="mb-3">
                    A massive thanks to <a href="https://www.instagram.com/starrie.kun" target="_blank" className="text-[#F98866] hover:text-[#1fa1dd] hover:underline whitespace-nowrap">Starrie 🌟</a> for helping out with artwork, including the:
                  </p>
                  <ul className="inline-block text-left list-disc list-inside text-[#353973] space-y-1">
                    <li>Logo</li>
                    <li>Hero cover art</li>
                    <li>Steps art</li>
                    <li>Stickers</li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="font-bold text-[#1fa1dd] text-lg mb-1">Sound Effects</p>
                <p className="text-sm font-medium leading-relaxed">
                  "Navigation Tap Select"<br/>
                  Downloaded from <a href="https://tunetank.com" target="_blank" className="text-[#F98866] hover:text-[#1fa1dd] hover:underline break-words">Tunetank</a>
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center relative z-10">
              <button 
                onClick={() => setIsCreditsOpen(false)}
                className="bg-[#353973] text-[#e5effe] font-jua text-xl px-10 py-3 rounded-full hover:bg-[#F98866] hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}