const PHONE = "+94775354349";
const WA_LINK =
  "https://wa.me/94775354349?text=Hello%20Green%20Solution%2C%20I%20need%20pest%20control%20services";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-secondary px-4 py-20 text-center text-white md:min-h-[85vh]"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Protect Your Home From Pests
          <br />
          <span className="text-accent-light">Fast, Safe &amp; Guaranteed!</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
          Professional Pest Control Services Across Batticaloa, Trincomalee &amp;
          Ampara — 100% Eco-Friendly Treatment
        </p>

        {/* CTA Buttons */}
        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${PHONE}`}
            className="animate-pulse-glow inline-flex h-14 min-w-[240px] items-center justify-center gap-3 rounded-xl bg-accent px-8 text-lg font-bold text-white shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl"
          >
            <i className="fas fa-phone"></i>
            Call Now — Free Quote
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-green inline-flex h-14 min-w-[240px] items-center justify-center gap-3 rounded-xl bg-secondary px-8 text-lg font-bold text-white shadow-lg transition-all hover:bg-secondary-light hover:shadow-xl"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            WhatsApp Us Now
          </a>
        </div>

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/90 sm:text-base">
          <span className="flex items-center gap-2">
            <i className="fas fa-certificate text-accent-light"></i>
            Licensed &amp; Certified
          </span>
          <span className="hidden text-white/40 sm:inline">|</span>
          <span className="flex items-center gap-2">
            <i className="fas fa-clock text-accent-light"></i>
            Same-Day Service
          </span>
          <span className="hidden text-white/40 sm:inline">|</span>
          <span className="flex items-center gap-2">
            <i className="fas fa-shield-alt text-accent-light"></i>
            1-Year Warranty
          </span>
          <span className="hidden text-white/40 sm:inline">|</span>
          <span className="flex items-center gap-2">
            <i className="fas fa-leaf text-accent-light"></i>
            Eco-Friendly Products
          </span>
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="animate-bounce-arrow absolute bottom-6 left-1/2">
        <a href="#urgency" className="text-white/60 transition-colors hover:text-white">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
}
