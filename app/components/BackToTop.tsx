"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-primary-light md:bottom-6 ${
        visible
          ? "bottom-[60px] translate-y-0 opacity-100 md:bottom-6"
          : "bottom-[60px] translate-y-4 opacity-0 pointer-events-none md:bottom-6"
      }`}
      aria-label="Back to top"
    >
      <i className="fas fa-chevron-up text-sm"></i>
    </button>
  );
}
