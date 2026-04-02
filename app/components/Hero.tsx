import Image from "next/image";

const PHONE = "+94775354349";
const WA_LINK =
  "https://wa.me/94775354349?text=Hello%20Green%20Solution%2C%20I%20need%20pest%20control%20services";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#062106] via-[#0e3a0e] to-[#1B5E20] px-5 text-center text-white sm:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(76,175,80,0.08)_0%,_transparent_60%)]"></div>

      <div className="relative z-10 w-full max-w-4xl py-16 sm:py-20">
        {/* Logo */}
        <div className="mb-12 flex justify-center sm:mb-14">
          <Image
            src="/logo.jpeg"
            alt="Green Solution Pest Management & Environmental Engineering Consultancy Sri Lanka"
            width={140}
            height={140}
            priority
            className="h-28 w-28 rounded-3xl border-[3px] border-white/15 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:h-32 sm:w-32"
          />
        </div>

        {/* Company Name — single line */}
        <h1 className="mb-3 whitespace-nowrap text-[1.3rem] font-extrabold leading-[1.1] tracking-tight sm:text-[2rem] md:text-[2.75rem] lg:text-[3.25rem]">
          Green Solution Pest Management
        </h1>
        <p className="text-base font-semibold text-accent-light sm:text-lg md:text-xl lg:text-2xl">
          Environmental Engineering Consultancy
        </p>

        {/* Divider */}
        <div className="mx-auto my-10 h-px w-14 bg-white/12 sm:my-12"></div>

        {/* Headline */}
        <p className="text-[15px] font-medium text-white/70 sm:text-base md:text-lg">
          Protect Your Valuable Home From
        </p>
        <p className="mt-1 text-xl font-extrabold sm:text-2xl md:text-3xl">
          Subterranean Termites
        </p>
        <p className="mt-3 text-[12px] font-normal tracking-wide text-white/35 sm:text-[13px]">
          The Most Destructive Structural Pest in the World
        </p>

        {/* Multilingual */}
        <div className="mt-6 flex items-center justify-center gap-3 text-[12px] sm:gap-5 sm:text-[13px]">
          <span className="font-medium text-secondary-light/80">වේයන් මර්දනය</span>
          <span className="text-white/15">|</span>
          <span className="font-medium text-accent-light/80">கிருமி கட்டுப்பாடு</span>
          <span className="text-white/15">|</span>
          <span className="font-medium text-white/50">Termite Control</span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center gap-3 sm:mt-14 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href={`tel:${PHONE}`}
            className="animate-pulse-glow inline-flex h-[50px] w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-sm font-bold text-white shadow-lg transition-all hover:bg-accent-dark sm:h-[52px] sm:w-auto sm:text-[15px]"
          >
            <i className="fas fa-phone text-xs"></i>
            Call Now
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-green inline-flex h-[50px] w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 sm:h-[52px] sm:w-auto sm:text-[15px]"
          >
            <i className="fab fa-whatsapp text-base"></i>
            WhatsApp Us
          </a>
        </div>

        {/* Licences & Credentials */}
        <div className="mt-14 sm:mt-16">
          {/* Trust badges */}
          <div className="mb-6 flex items-center justify-center gap-6 text-[12px] text-white/55 sm:gap-8 sm:text-[13px]">
            <span className="flex items-center gap-2">
              <i className="fas fa-certificate text-accent-light"></i>
              Licensed
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-accent-light"></i>
              Warranty
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-leaf text-accent-light"></i>
              Eco-Safe
            </span>
          </div>

          {/* License Cards removed as per request */}
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="animate-bounce-arrow absolute bottom-4 left-1/2 sm:bottom-6">
        <a href="#urgency" className="text-white/15 transition-colors hover:text-white/40">
          <i className="fas fa-chevron-down text-xs"></i>
        </a>
      </div>
    </section>
  );
}
