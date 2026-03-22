"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

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
    { label: "Why Us", href: "#why-us" },
    { label: "Areas", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "py-1.5 shadow-lg" : "py-2.5 shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <Image
            src="/logo.jpeg"
            alt="Green Solution Logo"
            width={44}
            height={44}
            className={`rounded-full object-cover transition-all duration-300 ${
              scrolled ? "h-9 w-9" : "h-11 w-11"
            }`}
          />
          <span className="flex flex-col leading-tight">
            <span
              className={`font-bold text-primary transition-all duration-300 ${
                scrolled ? "text-sm" : "text-base"
              }`}
            >
              Green Solution
            </span>
            <span className="hidden text-[9px] font-medium uppercase tracking-wider text-text-muted lg:block">
              Pest Management &amp; Environmental Engineering
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-text transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <div className="mx-1 h-6 w-px bg-gray-200"></div>
          <ThemeSwitcher />
          <a
            href={`tel:${PHONE}`}
            className="animate-pulse-glow inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
          >
            <i className="fas fa-phone text-xs"></i>
            {PHONE_DISPLAY}
          </a>
        </nav>

        <div className="flex items-center gap-2.5 lg:hidden">
          <ThemeSwitcher />
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-xs font-bold text-white"
          >
            <i className="fas fa-phone text-[10px]"></i>
            Call
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-primary"
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-50 py-3 text-sm font-medium text-text transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
