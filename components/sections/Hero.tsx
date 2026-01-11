"use client";
import React from "react";
import Galaxy from "../Galaxy";
import { H1, H2, H3, H4, H5 } from "../ui/heading";
import { P } from "../ui/typography";
import { Github, Linkedin, Mail, Facebook } from "lucide-react";
import { Button } from "../ui/button";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex justify-center">
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
      <div className="relative z-10 screen w-full flex flex-col justify-center items-center gap-2">
        <div >
          {/* Title */}
          <H1>Hi, I&apos;m Jorie Bascones Visaya</H1>
        </div>
        {/* subTitle */}
        <div >
          <H3>Aspiring Soft Engineer</H3>
        </div>
        {/* paragraph */}
        <div className="max-w-xl mx-auto text-center space-y-3">
          <P className="text-baseleading-relaxed text-xs">
            4th Year IT Student,
            Passionate about web development and building elegant, user-centered
            solutions. A vibe coder at heart, I enjoy blending creativity with
            clean code, modern UI, and interactive experiences that bring ideas
            to life.
          </P>
        </div>
        {/* buttons */}
        <div className="flex mt-10">
          <HoverBorderGradient variant="dark">
            View Projects
          </HoverBorderGradient>
          <HoverBorderGradient>About Me</HoverBorderGradient>
        </div>
         {/* logos */}
        <div className="flex space-x-2 mt-5">
          <Github />
          <Facebook />
          <Mail />
          <Linkedin />
        </div>
      </div>
    </section>
  );
}
