import Image from "next/image";

const PHONE = "+94775354349";
const WA_LINK =
  "https://wa.me/94775354349?text=Hello%20Green%20Solution%2C%20I%20need%20pest%20control%20services";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-secondary px-4 py-24 text-center text-white md:min-h-[88vh]"
    >
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")" }}></div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-6 flex justify-center">
          <Image
            src="/logo.jpeg"
            alt="Green Solution Pest Management"
            width={90}
            height={90}
            className="h-20 w-20 rounded-full border-3 border-white/30 object-cover shadow-2xl sm:h-[90px] sm:w-[90px]"
          />
        </div>

        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 sm:text-sm">
          Green Solution
        </p>
        <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50 sm:text-xs">
          Pest Management &amp; Environmental Engineering Consultancy
        </p>

        <h1 className="mb-5 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem]">
          Protect Your Valuable Home
          <br />
          From{" "}
          <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
            Subterranean Termites
          </span>
        </h1>

        <p className="mx-auto mb-2 max-w-2xl text-base font-light leading-relaxed text-white/85 sm:text-lg md:text-xl">
          The Most Destructive Structural Pest in the World
        </p>

        <p className="mb-10 text-base font-semibold text-secondary-light sm:text-lg">
          கிருமி கட்டுப்பாடு
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${PHONE}`}
            className="animate-pulse-glow inline-flex h-[52px] min-w-[220px] items-center justify-center gap-3 rounded-xl bg-accent px-8 text-base font-bold text-white shadow-xl transition-all hover:bg-accent-dark hover:shadow-2xl sm:h-14 sm:text-lg"
          >
            <i className="fas fa-phone"></i>
            Call Now
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-green inline-flex h-[52px] min-w-[220px] items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 text-base font-bold text-white shadow-xl transition-all hover:brightness-110 hover:shadow-2xl sm:h-14 sm:text-lg"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            WhatsApp
          </a>
        </div>

        <div className="mx-auto max-w-xl rounded-2xl bg-white/[0.07] px-6 py-4 backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] text-white/80 sm:text-sm">
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
        </div>
      </div>

      <div className="animate-bounce-arrow absolute bottom-8 left-1/2">
        <a href="#urgency" className="text-white/40 transition-colors hover:text-white">
          <i className="fas fa-chevron-down text-xl"></i>
        </a>
      </div>
    </section>
  );
}
