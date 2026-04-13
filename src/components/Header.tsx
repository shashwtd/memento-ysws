"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Header() {
  const [isRsvpToastOpen, setIsRsvpToastOpen] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const toastElement = toastRef.current;

    return () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
      if (toastElement) {
        gsap.killTweensOf(toastElement);
      }
    };
  }, []);

  const playHoverSound = () => {
    const audio = new Audio('/sfx/click.wav');
    audio.volume = 0.15;
    audio.preservesPitch = false;
    audio.playbackRate = 2.0; // Higher pitched tiny tick
    audio.play().catch(() => {});
  };

  const handleLogoEnter = (e: React.MouseEvent) => {
    playHoverSound();
    gsap.to(e.currentTarget.querySelector('.logo-inner'), {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
      transformOrigin: "center center",
      overwrite: "auto"
    });
  };

  const handleLogoLeave = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget.querySelector('.logo-inner'), {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto"
    });
  };

  const handleNavEnter = (e: React.MouseEvent) => {
    playHoverSound();
    const el = e.currentTarget as HTMLElement;
    gsap.set(el, { zIndex: 10 }); // Push above siblings to stop Venn Diagram effect
    gsap.to(el, {
      scale: 1.1,
      backgroundColor: "rgba(205, 220, 246, 1)", // Hex #cddcf6 to RGBA prevents flash
      duration: 0.2,
      ease: "power2.out",
      transformOrigin: "center center",
      overwrite: "auto"
    });
  };

  const handleNavLeave = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    gsap.to(el, {
      scale: 1,
      backgroundColor: "rgba(205, 220, 246, 0)", // Fade to transparent version of the same blue!
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
      onComplete: () => { gsap.set(el, { clearProps: "zIndex" }); }
    });
  };

  const handleCtaEnter = (e: React.MouseEvent) => {
    playHoverSound();
    const el = e.currentTarget.querySelector('.cta-inner') as HTMLElement;
    const ring = e.currentTarget.querySelector('.dashed-ring') as HTMLElement;
    
    gsap.to(el, {
      height: 140, // Match the square hitpoint bounds perfectly
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
      height: 48, // Resets to original pill height
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

  const handleRsvpClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsRsvpToastOpen(true);

    window.requestAnimationFrame(() => {
      if (!toastRef.current) return;
      gsap.killTweensOf(toastRef.current);
      gsap.fromTo(
        toastRef.current,
        { y: 56, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: "power3.out" }
      );
    });

    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = window.setTimeout(() => {
      if (!toastRef.current) {
        setIsRsvpToastOpen(false);
        return;
      }

      gsap.to(toastRef.current, {
        y: 24,
        opacity: 0,
        scale: 0.97,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => setIsRsvpToastOpen(false),
      });
    }, 3000);
  };

  return (
    <header className="relative z-9999 w-full max-w-7xl mx-auto flex items-center justify-between p-2.5">
      {/* Wrapper receives the hover event to prevent looping on child scale changes */}
      <div
        className="h-18 shrink-0 w-56.5 relative cursor-pointer"
        onMouseEnter={handleLogoEnter}
        onMouseLeave={handleLogoLeave}
      >
        <Link href="/" className="logo-inner block w-full h-full relative">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </div>

      <div className="flex gap-2 items-center shrink-0">
        <nav
          className={`bg-[#e5effe] flex gap-0.5 items-center py-2 px-3 rounded-full font-plus font-bold`}
        >
          <Link
            href="#who"
            onMouseEnter={handleNavEnter}
            onMouseLeave={handleNavLeave}
            className="text-[#353973] text-[16px] whitespace-nowrap px-4 py-1.5 rounded-full inline-block relative border border-transparent cursor-pointer"
            style={{ backgroundColor: "rgba(205, 220, 246, 0)" }}
          >
            Who for
          </Link>
          <Link
            href="#how"
            onMouseEnter={handleNavEnter}
            onMouseLeave={handleNavLeave}
            className="text-[#353973] text-[16px] whitespace-nowrap px-4 py-1.5 rounded-full inline-block relative border border-transparent cursor-pointer"
            style={{ backgroundColor: "rgba(205, 220, 246, 0)" }}
          >
            How it works
          </Link>
          <Link
            href="#faq"
            onMouseEnter={handleNavEnter}
            onMouseLeave={handleNavLeave}
            className="text-[#353973] text-[16px] whitespace-nowrap px-4 py-1.5 rounded-full inline-block relative border border-transparent cursor-pointer"
            style={{ backgroundColor: "rgba(205, 220, 246, 0)" }}
          >
            FAQ
          </Link>
        </nav>

        {/* Outer wrapper to reserve DOM space perfectly, destroying layout shifts */}
        <div className="relative flex items-center justify-center w-35 h-12 shrink-0">
          <Link
            href="#rsvp"
            className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-35 h-35 flex items-center justify-center z-10"
            onMouseEnter={handleCtaEnter}
            onMouseLeave={handleCtaLeave}
            onClick={handleRsvpClick}
          >
            <div
              className={`cta-inner cursor-pointer bg-[#1fa1dd] flex items-center justify-center w-35 h-12 rounded-full text-white text-[16px] font-plus font-bold whitespace-nowrap origin-center relative overflow-hidden`}
            >
              <svg 
                className="dashed-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-34 h-34 opacity-0 pointer-events-none animate-[spin_6s_linear_infinite]" 
                viewBox="0 0 136 136"
              >
                <circle cx="68" cy="68" r="66" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="16 14" />
              </svg>
              <span className="relative z-10">RSVP NOW</span>
            </div>
          </Link>
        </div>
      </div>

      {isRsvpToastOpen && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-6 z-9999 pointer-events-none" aria-live="polite">
          <div
            ref={toastRef}
            className="bg-white/95 backdrop-blur-sm border-[3px] border-[#1fa1dd] rounded-3xl px-6 py-4 shadow-xl text-center max-w-90"
          >
            <p className="font-jua text-[#1fa1dd] text-2xl leading-none mb-1">RSVP Opens Soon</p>
            <p className="font-plus text-[#353973] text-sm font-medium">You&apos;ll be able to RSVP very soon. Stay tuned.</p>
          </div>
        </div>
      )}
    </header>
  );
}
