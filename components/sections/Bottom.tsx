import React from "react";
import JorDev from "@/public/logo/WhiteJordev.png";
import Image from "next/image";
import { P } from "../ui/typography";
import { H3 } from "../ui/heading";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Bottom() {
  return (
    <section className="w-full flex bg-black p-15 justify-between ">
      <div className="space-y-8  w-full ">
        <Image src={JorDev} height={70} width={70} alt="jordev" />
        <P className="text-white/70">
          Learning to solve problems step by step. <br />
          Exploring new skills and improving little by little.
        </P>
      </div>
        <div className="flex flex-col items-start md:items-end space-y-4 w-full ">
        <H3 className="text-white">Connect</H3>
        
        {/* Social Icons */}
        <div className="flex gap-4">
          {[Github, Mail, Linkedin].map((Icon, idx) => (
            <Icon
              key={idx}
              className="w-5 h-5 cursor-pointer text-white hover:text-blue-500"
            />
          ))}
        </div>

        <div className="outline outline-white w-full "></div>
        <p className="text-white/70 text-xs">© 2026 JorDev. All rights reserved.</p>

      </div>
    </section>
  );
}
