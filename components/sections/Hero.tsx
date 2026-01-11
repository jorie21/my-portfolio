"use client";
import React from "react";
import Galaxy from "../Galaxy";
import { H1, H2, H3, H4, H5 } from "../ui/heading";
import { P } from "../ui/typography";
import { Github, Linkedin, Mail, Facebook } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex justify-center px-4 sm:px-6 md:px-16">
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
      <div className="relative z-10 screen w-full flex flex-col justify-center items-center gap-2 text-center">
        <div>
          {/* Title */}
          <H1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Hi, I&apos;m Jorie Bascones Visaya
          </H1>
        </div>

        {/* Subtitle */}
        <div>
          <H3 className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Aspiring Soft Engineer
          </H3>
        </div>

        {/* Paragraph */}
        <div className="max-w-xl mx-auto text-center space-y-3 mt-2 px-2 sm:px-0">
          <P className="text-xs lg:text-xs md:text-base leading-relaxed">
            An IT student, inspired to become a software engineer in the future.
            I am passionate about web development and interactive experiences
            that bring ideas to life.
          </P>
        </div>

        {/* Buttons */}
        <div className="flex  gap-3 mt-10">
          <HoverBorderGradient
            variant="dark"
            className="w-full sm:w-auto text-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
          >
            View Projects
          </HoverBorderGradient>
          <HoverBorderGradient className="w-full sm:w-auto text-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
            About Me
          </HoverBorderGradient>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 text-xl sm:text-2xl">
         {[Github, Linkedin, Facebook, Mail].map((Icon, index) => (
          <Icon
            key={index}
            className="w-6 h-6 cursor-pointer  hover:text-white"
          />
         ))}
        </div>
      </div>
    </section>
  );
}
