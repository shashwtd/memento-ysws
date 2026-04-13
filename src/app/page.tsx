"use client";

import Image from "next/image";
import CaredFor from "@/components/CaredFor";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex-1">
      {/* Hero Section */}
      <section className="w-full bg-white relative overflow-hidden">
        {/* Full bleed background art */}
        <div className="absolute inset-0 z-0 pointer-events-none hidden justify-center items-center">
          <div className="relative w-full max-w-[900px] h-full mx-auto">        
            <Image
              src="/hero-art.jpg"
              alt="Memento Hero Art"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto min-h-[400px] md:min-h-[550px] flex items-center justify-center py-14 px-[24px]">
          <div className="text-center">
            <h1 className="text-[46px] md:text-[64px] leading-[1.1] tracking-[-0.04em] text-[#F98866] max-w-[800px] mx-auto font-jua [text-shadow:4px_4px_0_#353973]">
        </div>
      </section>

      {/* Cared For Section (Yellow) */}
      <CaredFor />

      {/* Steps Section (White) */}
      <Steps />

      {/* FAQ Section (Blue) */}
      <FAQ />

      {/* Footer CTA Section (White) */}
      <Footer />
    </main>
  );
}