"use client";

import { useState, useEffect } from "react";

const WA_NUMBER = "94775354349";
// WhatsApp call link - initiates a direct call
const WA_CALL_LINK = `https://wa.me/${WA_NUMBER}`;

export default function WhatsAppBubble() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={WA_CALL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-float-bounce fixed bottom-24 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-emerald-500 text-white shadow-xl transition-all hover:scale-110 hover:shadow-2xl md:flex"
      aria-label="Call on WhatsApp"
      title="Click to call via WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  );
}
