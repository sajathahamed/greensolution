"use client";

import { useState, useEffect } from "react";

const WA_LINK =
  "https://api.whatsapp.com/send?phone=94775354349&text=Hello%20Green%20Solution%2C%20I%20need%20pest%20control%20services";

export default function WhatsAppBubble() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-float-bounce fixed bottom-24 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 md:flex"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  );
}
