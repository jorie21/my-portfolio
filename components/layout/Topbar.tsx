'use client'
import React, { useState } from "react";
import Image from "next/image";
import JorDev from "@/public/logo/JorDevLogo.png"
import { NAV_LINKS, type NavLink } from "@/constant/navlinks"

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
    <header className="fixed w-full z-50 backdrop-blur-lg bg-[#e5e5e5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={JorDev}
              alt="JorDev Logo"
              height={40}
              width={40}
              className="hover:opacity-80 transition-opacity duration-200"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {NAV_LINKS.map((link: NavLink) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`font-sora font-medium text-sm px-3 py-2 rounded-md transition-all duration-200 ${
                      activeLink === link.href 
                        ? 'text-gray-900 bg-white/40' 
                        : 'text-gray-800 hover:text-gray-900 hover:bg-white/20'
                    }`}
                    onClick={() => setActiveLink(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-all duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6 transition-all duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6 transition-all duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64' : 'max-h-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-lg bg-white/40 shadow-lg border-t border-white/20">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sora font-medium text-sm block px-3 py-2 rounded-md transition-all duration-200 ${
                activeLink === link.href 
                  ? 'text-gray-900 bg-white/40' 
                  : 'text-gray-800 hover:text-gray-900 hover:bg-white/20'
              }`}
              onClick={() => {
                setActiveLink(link.href);
                setIsMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}