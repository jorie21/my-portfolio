'use client'
import React from "react";
import Galaxy from "../Galaxy";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex  justify-center">
      {/* Galaxy Background */}
      <div className="absolute inset-0 w-full h-full">
        <Galaxy 
          glowIntensity={0.1}     
          density={0.5}            
          saturation={0.5}         
          hueShift={200}           
          twinkleIntensity={0.2}   
          transparent={true}
        />
      </div>

      {/* Your Content */}
      <div className="relative z-10 screen w-full">
        <h1 className="font-sora font-extrabold text-3xl md:text-4xl lg:text-5xl text-soft-black text-center">
          Hi, I&apos;m Jorie Bascones Visaya
        </h1>
      </div>
    </section>
  );
}