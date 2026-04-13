"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const faqs = [
  {
    q: "What exactly is Memento?",
    a: "It's a YSWS program where you build a physical or digital project for someone you love, and we'll fulfill it and ship it directly to their door—completely free!",
  },
  {
    q: "Who can I build this for?",
    a: "Anyone you care about! Your bestie, your parents, your secret crush, or even a random stranger who needs a smile.",
  },
  {
    q: "Do I need to be a coding genius?",
    a: "Not at all! Whether this is your first line of code or your 100th full-stack app, it's the thought that counts. Build something simple and sweet.",
  },
  {
    q: "Is it actually free?",
    a: "Yep! We cover the manufacturing and the global shipping costs. You just focus on building something incredibly meaningful.",
  }
];

const FAQItem = ({ faq, index, isOpen, toggleOpen }: any) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const playHoverSound = () => {
    const audio = new Audio('/sfx/click.wav');
    audio.volume = 0.15;
    audio.preservesPitch = false;
    audio.playbackRate = 2.0; // Higher pitched tiny tick
    audio.play().catch(() => {});
  };

  const playClickSound = () => {
    const audio = new Audio('/sfx/click.wav');
    audio.volume = 0.4;
    audio.preservesPitch = false;
    audio.playbackRate = 0.35; // Thoccy
    audio.play().catch(() => {});
  };

  useEffect(() => {
    if (!contentRef.current || !iconRef.current || !containerRef.current) return;
    
    // Kill any active tweens to prevent stuttering when spam-clicking
    gsap.killTweensOf([contentRef.current, iconRef.current, containerRef.current]);

    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        marginTop: 16,
        duration: 0.5,
        ease: "back.out(1.2)",
      });
      gsap.to(iconRef.current, {
        rotation: 135,
        scale: 1.2,
        duration: 0.5,
        ease: "back.out(1.5)",
        color: "#F98866" // Coral color on open
      });
      gsap.to(containerRef.current, {
        backgroundColor: "#ffffff",
        borderColor: "#F98866",
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
        transformOrigin: "center center"
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        marginTop: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
      gsap.to(iconRef.current, {
        rotation: 0,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.5)",
        color: "#353973"
      });
      gsap.to(containerRef.current, {
        backgroundColor: "rgba(255,255,255,0.4)", // Slight transparent
        borderColor: "#353973",
        scale: 1,
        duration: 0.4,
        ease: "power2.inOut",
        transformOrigin: "center center"
      });
    }
  }, [isOpen]);

  const handleEnter = () => {
    if (!isOpen && containerRef.current) {
      playHoverSound();
      gsap.to(containerRef.current, {
        scale: 1.015, // Subtle non-intrusive scale (no movement upwards!)
        backgroundColor: "rgba(255,255,255,0.8)",
        duration: 0.2, // Fast transition
        ease: "power2.out",
        transformOrigin: "center center",
        overwrite: "auto" // Prevent tween locking
      });
    }
  };

  const handleLeave = () => {
    if (!isOpen && containerRef.current) {
      gsap.to(containerRef.current, {
        scale: 1,
        backgroundColor: "rgba(255,255,255,0.4)",
        duration: 0.2, // Fast transition
        ease: "power2.out",
        transformOrigin: "center center",
        overwrite: "auto"
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={() => {
        playClickSound();
        toggleOpen(index);
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="border-[3px] border-[#353973] rounded-[24px] p-6 cursor-pointer transform-gpu overflow-hidden"
      style={{ backgroundColor: "rgba(255,255,255,0.4)" }}  // Prevents the white flash!
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className="font-jua text-2xl text-[#353973]">{faq.q}</h3>
        <svg
          ref={iconRef}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-[#353973] origin-center"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
      <div
        ref={contentRef}
        className="h-0 opacity-0 overflow-hidden"
      >
        <p className="font-plus text-[#353973] text-lg font-medium leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const dividerPattern = `url("data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 Q30 0, 60 15 T120 15' fill='none' stroke='%23F98866' stroke-width='4' stroke-linecap='round' stroke-dasharray='1 14'/%3E%3C/svg%3E")`;

  return (
    <section id="faq" className="w-full bg-[#e5effe] py-24 relative">
      {/* Playful Dotted Wave Divider */}
      <div
        className="absolute top-0 left-0 w-full h-[30px] -translate-y-1/2 pointer-events-none z-10"
        style={{ backgroundImage: dividerPattern, backgroundRepeat: "repeat-x" }}
      />
      
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-jua text-5xl md:text-6xl text-[#353973] mb-4">
            Got Questions?
          </h2>
          <p className="font-plus font-bold text-xl text-[#F98866]">
            We've got answers!
          </p>
        </div>
        
        <div className="flex flex-col gap-4 relative z-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              toggleOpen={(i: number) => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}