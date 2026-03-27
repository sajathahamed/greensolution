"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PHONE = "+94775354349";
const PHONE_DISPLAY = "077 535 4349";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Areas", href: "#areas" },
    { label: "Contact", href: "#footer" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-gray-100 bg-white/95 py-2 shadow-lg backdrop-blur-md"
          : "border-transparent bg-white py-3"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Green Solution Pest Control Sri Lanka - Environmental Engineering Consultancy"
            width={44}
            height={44}
            className={`rounded-xl object-cover transition-all duration-300 ${
              scrolled ? "h-9 w-9" : "h-10 w-10"
            }`}
          />
          <span className="flex flex-col">
            <span
              className={`font-bold text-primary transition-all duration-300 ${
                scrolled ? "text-[13px]" : "text-[15px]"
              }`}
            >
              Green Solution
            </span>
            <span className="hidden text-[8px] font-semibold uppercase tracking-[0.15em] text-text-muted lg:block">
              Environmental Engineering Consultancy
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-accent-dark"
          >
            <i className="fas fa-phone text-[10px]"></i>
            {PHONE_DISPLAY}
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[11px] font-bold text-white"
          >
            <i className="fas fa-phone text-[9px]"></i>
            Call
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-primary"
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-lg`}></i>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-80 border-t border-gray-50" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-1 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-50 py-3.5 text-[13px] font-medium text-text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
