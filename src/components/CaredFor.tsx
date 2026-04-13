import React, { useRef } from "react";
import gsap from "gsap";

const BestFriendSvg = () => (
  <div className="flex gap-3 h-full items-center justify-center -ml-7.5">
    <div className="cared-character origin-center">
      <svg width="110" height="110" viewBox="0 0 126 126" fill="none">
        <rect x="0.25" y="0.25" width="125.5" height="125.5" rx="62.75" fill="white"/>
        <circle cx="62.75" cy="62.75" r="57.75" stroke="#F1BFAA" strokeWidth="10"/>
        <circle cx="79.5" cy="42.5" r="10" fill="#FD8E45"/>
        <circle cx="46" cy="42.5" r="10" fill="#FD8E45"/>
        <path d="M40 69.3821C46.6197 95.8962 84.9003 95.8381 90.0515 69" stroke="#F1BFAA" strokeWidth="10" strokeLinecap="round"/>
      </svg>
    </div>
    <div className="cared-character origin-center -ml-11.25 mt-10">
      <svg width="110" height="110" viewBox="0 0 126 126" fill="none">
        <rect x="0.25" y="0.25" width="125.5" height="125.5" rx="62.75" fill="white"/>
        <circle cx="62.75" cy="62.75" r="57.75" stroke="#8ACAD8" strokeWidth="10"/>
        <circle cx="79.5" cy="42.5" r="10" fill="#44A8DE"/>
        <circle cx="46" cy="42.5" r="10" fill="#44A8DE"/>
        <path d="M36.5206 84.5001L71 84.5001C81.2172 84.5001 89.5 76.2173 89.5 66.0001" stroke="#8ACAD8" strokeWidth="10" strokeLinecap="round"/>
      </svg>
    </div>
  </div>
);

const FamilySvg = () => (
  <div className="flex items-center justify-center relative w-47.5 h-35">
    {/* Parent 1 (Left) */}
    <div className="absolute left-2.5 top-2.5 z-10 cared-character origin-center">
      <svg width="90" height="90" viewBox="0 0 126 126" fill="none">
        <rect x="0.25" y="0.25" width="125.5" height="125.5" rx="62.75" fill="white"/>
        <circle cx="62.75" cy="62.75" r="57.75" stroke="#C4B5FD" strokeWidth="10"/>
        <circle cx="46" cy="42.5" r="10" fill="#A855F7"/>
        <circle cx="79.5" cy="42.5" r="10" fill="#A855F7"/>
        <path d="M40 75 Q63 100 86 75" stroke="#C4B5FD" strokeWidth="10" strokeLinecap="round"/>
      </svg>
    </div>
    {/* Parent 2 (Right) */}
    <div className="absolute right-2.5 top-2.5 z-10 cared-character origin-center">
      <svg width="90" height="90" viewBox="0 0 126 126" fill="none">
        <rect x="0.25" y="0.25" width="125.5" height="125.5" rx="62.75" fill="white"/>
        <circle cx="62.75" cy="62.75" r="57.75" stroke="#93C5FD" strokeWidth="10"/>
        <circle cx="46" cy="42.5" r="10" fill="#3B82F6"/>
        <circle cx="79.5" cy="42.5" r="10" fill="#3B82F6"/>
        <path d="M40 75 Q63 100 86 75" stroke="#93C5FD" strokeWidth="10" strokeLinecap="round"/>
      </svg>
    </div>
    {/* Baby (Middle) */}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-2.5 z-20">
      <div className="cared-character origin-center">
        <svg width="65" height="65" viewBox="0 0 126 126" fill="none">
          <rect x="0.25" y="0.25" width="125.5" height="125.5" rx="62.75" fill="white"/>
          <circle cx="62.75" cy="62.75" r="57.75" stroke="#5EEAD4" strokeWidth="12"/>
          <circle cx="46" cy="42.5" r="12" fill="#14B8A6"/>
          <circle cx="79.5" cy="42.5" r="12" fill="#14B8A6"/>
          <path d="M40 70 Q63 80 86 70" stroke="#5EEAD4" strokeWidth="12" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  </div>
);

const CrushSvg = () => (
  <div className="flex h-full items-center justify-center">
    <div className="cared-character origin-center">
      <svg width="126" height="126" viewBox="0 0 126 126" fill="none">
        <rect x="0.25" y="0.25" width="125.5" height="125.5" rx="62.75" fill="white"/>
        <circle cx="62.75" cy="62.75" r="57.75" stroke="#F9A8D4" strokeWidth="10"/>
        {/* Eyelashes */}
        <path d="M35 48 Q46 38 55 48" stroke="#EC4899" strokeWidth="8" strokeLinecap="round"/>
        <path d="M71 48 Q82 38 91 48" stroke="#EC4899" strokeWidth="8" strokeLinecap="round"/>
        {/* Blush */}
        <circle cx="35" cy="65" r="8" fill="#FBCFE8"/>
        <circle cx="91" cy="65" r="8" fill="#FBCFE8"/>
        {/* Cute Smile */}
        <path d="M50 80 Q63 95 76 80" stroke="#F9A8D4" strokeWidth="10" strokeLinecap="round"/>
      </svg>
    </div>
  </div>
);

const RandomPersonSvg = () => (
  <div className="flex h-full items-center justify-center">
    <div className="cared-character origin-center">
      <svg width="126" height="126" viewBox="0 0 126 126" fill="none">
        <rect x="0.25" y="0.25" width="125.5" height="125.5" rx="20" fill="white"/>
        <rect x="5" y="5" width="116" height="116" rx="16" stroke="#86EFAC" strokeWidth="10"/>
        {/* Weird Eyes */}
        <circle cx="40" cy="45" r="15" stroke="#10B981" strokeWidth="8" fill="white"/>
        <circle cx="45" cy="45" r="6" fill="#10B981"/>
        <rect x="75" y="32" width="25" height="25" stroke="#10B981" strokeWidth="8" fill="white"/>
        <circle cx="85" cy="45" r="5" fill="#10B981"/>
        {/* Squiggly Mouth */}
        <path d="M35 85 L45 75 L55 88 L65 75 L75 88 L85 75" stroke="#86EFAC" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
);

const cards = [
  { 
    title: "THE STUPID BESTFRIEND??",
    bg: "bg-white",
    text: "text-[#ff9b9b]",
    Illustration: BestFriendSvg,
  },
  { 
    title: "THE ONES WHO RAISED YOU RIGHT",
    bg: "bg-white",
    text: "text-[#ff9b9b]",
    Illustration: FamilySvg,
  },
  { 
    title: "MAYBE FOR THE GIRL YOU LIKE?",
    bg: "bg-white",
    text: "text-[#ff9b9b]",
    Illustration: CrushSvg,
  },
  { 
    title: "OR THAT RANDOM PERSON YOU MET",
    bg: "bg-white",
    text: "text-[#ff9b9b]",
    Illustration: RandomPersonSvg,
  },
];

const dividerPattern = `url("data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 Q30 0, 60 15 T120 15' fill='none' stroke='%23F98866' stroke-width='4' stroke-linecap='round' stroke-dasharray='1 14'/%3E%3C/svg%3E")`;

type Card = {
  title: string;
  bg: string;
  text: string;
  Illustration: React.ComponentType;
};

const CardItem = ({ card, index }: { card: Card; index: number }) => {
  const iconRef = useRef<HTMLDivElement>(null);

  const playHoverSound = () => {
    const audio = new Audio('/sfx/click.wav');
    audio.volume = 0.15;
    audio.preservesPitch = false;
    audio.playbackRate = 2.0; // Higher pitched tiny tick
    audio.play().catch(() => {});
  };

  const handleEnter = () => {
    playHoverSound();
    if (iconRef.current) {
      const characters = iconRef.current.querySelectorAll('.cared-character');
      gsap.to(characters, {
        rotation: (i) => (index + i) % 2 === 0 ? 8 : -8,
        scale: 1.15,
        y: -10,
        duration: 0.4,
        ease: "back.out(2)",
        stagger: 0.05,
        overwrite: "auto",
        transformOrigin: "center center"
      });
    }
  };

  const handleLeave = () => {
    if (iconRef.current) {
      const characters = iconRef.current.querySelectorAll('.cared-character');
      gsap.to(characters, {
        rotation: 0,
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`${card.bg} select-none cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col items-center justify-between p-6 rounded-[22px] min-h-78.25 drop-shadow-none`}
    >
      <div ref={iconRef} className="flex h-48.75 w-full justify-center items-center shrink-0 origin-center">
        <card.Illustration />
      </div>
      <p className={`font-jua w-full text-center ${card.text} text-[28px] leading-[1.1] min-w-full drop-shadow-none`}>
        {card.title}
      </p>
    </div>
  );
};

export default function CaredFor() {
  return (
    <section id="who" className="bg-[#FDF0CB] w-full flex flex-col items-center justify-center pt-20 pb-31 relative border-t-0">
      {/* Playful Dotted Wave Divider */}
      <div 
        className="absolute top-0 left-0 w-full h-7.5 -translate-y-1/2 pointer-events-none z-50"
        style={{ backgroundImage: dividerPattern, backgroundRepeat: "repeat-x" }}
      />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-11 px-2.5 relative z-10">
        <h2 className="font-jua text-[#F98866] text-[42px] tracking-[-0.84px] text-center mb-5">
          WHO ARE YOU BUILDING FOR?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {cards.map((card, index) => (
            <CardItem key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}