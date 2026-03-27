"use client";

const PHONE = "+94775354349";
const WA_LINK =
  "https://wa.me/94775354349?text=Hello%20Green%20Solution%2C%20I%20need%20pest%20control%20services";

export default function FloatingCTA() {
  return (
    <div className="pb-safe fixed bottom-0 left-0 z-40 flex w-full md:hidden">
      <a
        href={`tel:${PHONE}`}
        className="flex flex-1 items-center justify-center gap-2 bg-accent py-3.5 text-sm font-bold text-white"
      >
        <i className="fas fa-phone text-[13px]"></i>
        Call Now
      </a>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-bold text-white"
      >
        <i className="fab fa-whatsapp text-lg"></i>
        WhatsApp
      </a>
    </div>
  );
}
