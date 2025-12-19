import React from "react";
import Image from "next/image";
import JorDev from "@/public/logo/JorDevLogo.png"
import { NAV_LINKS, type NavLink } from "@/constant/navlinks"


export default function Topbar() {
  return (
    <header className="sticky w-full">
      <div className="top-screen flex items-center justify-between">
        {/* left Corner */}
        <div>
          <Image
            src={JorDev}
            alt="JorDev"
            height={40}
            width={40}
          />
        </div>
      {/* Right Corner */}
        <div className="space-x-8">
          {NAV_LINKS.map((link: NavLink)=> (
            <a
            key={link.href}
            href={link.href}
            className="font-sora font-medium text-sm text-soft-black"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
