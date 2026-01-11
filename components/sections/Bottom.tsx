import React from "react";
import JorDev from "@/public/logo/WhiteJordev.png";
import Image from "next/image";
import { P } from "../ui/typography";
import { H3 } from "../ui/heading";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Bottom() {
  return (
    <section className="w-full flex flex-col md:flex-row bg-black p-8 md:p-15 gap-8 md:justify-between">
      {/* Left Column */}
      <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-8 w-full md:w-auto text-center md:text-left">
        <Image src={JorDev} height={70} width={70} alt="jordev" />
        <P className="text-white/70 text-sm md:text-base">
          Learning to solve problems step by step. <br />
          Exploring new skills and improving little by little.
        </P>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-center md:items-end space-y-4 w-full md:w-auto text-center md:text-right">
        <H3 className="text-white">Connect</H3>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-end">
          {[Github, Mail, Linkedin].map((Icon, idx) => (
            <Icon
              key={idx}
              className="w-5 h-5 cursor-pointer text-white hover:text-blue-500"
            />
          ))}
        </div>

        <div className="border-t border-white w-full md:w-auto"></div>

        <p className="text-white/70 text-xs md:text-sm mt-2">
          © 2026 JorDev. All rights reserved.
        </p>
      </div>
    </section>
  );
}
