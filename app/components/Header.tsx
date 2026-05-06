"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PHONE = "+94775354349";
const PHONE_DISPLAY = "077 5354 349";

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
        <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/logo.jpeg"
            alt="Green Solution Pest Control Sri Lanka - Environmental Engineering Consultancy"
            width={44}
            height={44}
            className={`rounded-xl object-cover transition-all duration-300 ${
              scrolled ? "h-9 w-9" : "h-10 w-10"
            }`}
          />
          <span className="flex min-w-0 flex-col">
            <span
              className={`max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap font-bold text-primary transition-all duration-300 sm:max-w-[280px] ${
                scrolled ? "text-[11px] sm:text-[13px]" : "text-[12px] sm:text-[15px]"
              }`}
            >
              Green Solution Pest Management
            </span>
            <span className="max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap text-[8px] font-semibold tracking-[0.02em] text-text-muted sm:max-w-[280px] sm:text-[10px]">
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
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${PHONE.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#1da851]"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp text-lg"></i>
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-accent-dark"
            >
              <i className="fas fa-phone text-[10px]"></i>
              {PHONE_DISPLAY}
            </a>
          </div>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`https://wa.me/${PHONE.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp text-sm"></i>
          </a>
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
