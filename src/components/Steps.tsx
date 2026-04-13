import Image from "next/image";

const steps = [
  {
    title: "SIGN UP & PICK AN OCCASION",
    description: "Join #memento on Slack and sign up at memento.hackclub.com. Check your calendar, pick an occasion, and decide what a special project you want to build for someone you care about.",
    image: "/step-images/step1%201.png",
    color: "text-[#353973]"
  },
  {
    title: "BUILD & TRACK YOUR TIME",
    description: "Put your heart into building a personalized website, game, or hardware project! While you focus on the coding, make sure to track your work time using Hackatime or Lapse.",
    image: "/step-images/step2%201.png",
    color: "text-[#1fa1dd]"
  },
  {
    title: "SHIP IT & CHOOSE A REWARD",
    description: "Submit your finished project! Depending on your tracked hours, you get to choose what we send them: a custom handwritten-style letter, polaroid prints, or a cool tech gift from our shop.",
    image: "/step-images/step3%201.png",
    color: "text-[#F98866]"
  },
  {
    title: "WE HANDLE THE DELIVERY",
    description: "Drop your special someone's email and we handle the rest! They'll securely tell us where to send it, and we'll ship the gift and letter directly to their door. Plus, you both get tracking!",
    image: "/step-images/step4%201.png",
    color: "text-[#10B981]"
  }
];

export default function Steps() {
  const dividerPattern = `url("data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 Q30 0, 60 15 T120 15' fill='none' stroke='%23F98866' stroke-width='4' stroke-linecap='round' stroke-dasharray='1 14'/%3E%3C/svg%3E")`;

  return (
    <section id="how" className="w-full bg-white relative py-20 md:py-30">
      {/* Playful Dotted Wave Divider */}
      <div 
        className="absolute top-0 left-0 w-full h-7.5 -translate-y-1/2 pointer-events-none z-50"
        style={{ backgroundImage: dividerPattern, backgroundRepeat: "repeat-x" }}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-10 md:mb-15">
          <h2 className="font-jua text-[#353973] text-[40px] md:text-[56px] leading-[1.1]">
            HOW MEMENTO WORKS
          </h2>
          <p className="font-plus text-lg md:text-xl text-[#353973]/70 font-medium mt-2 md:mt-4">
            Four simple steps to bring your love to life
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col gap-15 md:gap-5 max-w-275 mx-auto">
          
          {/* Playful Wiggly Trail Background (Desktop only) */}
          <div className="absolute top-[12%] bottom-[12%] left-1/2 -translate-x-1/2 w-125 hidden md:block pointer-events-none z-0">
            <svg 
              width="100%" 
              height="100%" 
              preserveAspectRatio="none"
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M 5 0 
                   L 5 9 Q 5 13, 15 14 L 85 21 Q 95 22, 95 26 L 95 33.33
                   L 95 42.33 Q 95 46.33, 85 47.33 L 15 54.33 Q 5 55.33, 5 59.33 L 5 66.66
                   L 5 75.66 Q 5 79.66, 15 80.66 L 85 87.66 Q 95 88.66, 95 92.66 L 95 100" 
                stroke="#e5effe" 
                strokeWidth="6" 
                strokeLinecap="round" 
                strokeDasharray="16 24"
                vectorEffect="non-scaling-stroke"
                className="opacity-100"
              />
            </svg>
          </div>

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={index}
                className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center gap-5 md:gap-15 w-full relative z-10`}
              >
                {/* Illustration */}
                <div className={`w-full md:w-1/2 flex justify-center ${isLeft ? 'md:justify-end' : 'md:justify-start'} items-center`}>
                  <div className="relative w-full max-w-125 aspect-square">
                    <Image 
                      src={step.image} 
                      alt={step.title} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className={`w-full md:w-1/2 flex flex-col justify-center gap-3 text-center ${isLeft ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className={`font-jua text-[32px] md:text-[40px] leading-[1.1] ${step.color}`}>
                    {step.title}
                  </h3>
                  <p className={`font-plus text-[#353973] text-[16px] md:text-[18px] font-medium leading-normal max-w-105 mx-auto ${isLeft ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}