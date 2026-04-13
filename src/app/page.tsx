"use client";

import CaredFor from "@/components/CaredFor";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="w-full flex-1">
      {/* Hero Section */}
      <section className="w-full bg-white relative">
        <div className="max-w-[1280px] mx-auto min-h-[500px] flex items-center justify-center py-20 px-[10px]">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl tracking-tighter text-[#353973] max-w-[800px] mx-auto font-sans">
              Build something for someone you love. We'll ship it to them.
            </h1>
          </div>
        </div>
      </section>

      {/* Cared For Section */}
      <CaredFor />

      {/* FAQ Section */}
      <FAQ />
    </main>
  );
}