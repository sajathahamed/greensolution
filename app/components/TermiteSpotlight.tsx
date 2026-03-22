const PHONE = "+94775354349";
const WA_LINK =
  "https://wa.me/94775354349?text=Hello%20Green%20Solution%2C%20I%20need%20a%20FREE%20termite%20inspection";

const problems = [
  "Termites cause billions in structural damage annually worldwide",
  "Colonies work 24/7 silently — damage is invisible until severe",
  "A single colony can compromise a structure within 3–5 years",
  "Standard property insurance does not cover termite damage",
  "Eastern Province's tropical humidity creates ideal termite conditions",
];

const solutions = [
  "Pre-construction and post-construction treatment available",
  "Non-repellent transfer technology — colony elimination at source",
  "1-year to 5-year written warranty on all treatments",
  "Certified chemicals meeting Sri Lankan regulatory standards",
  "Complimentary re-treatment if termites return within warranty",
];

export default function TermiteSpotlight() {
  return (
    <section className="w-full bg-gradient-to-br from-primary-dark via-primary to-primary-light px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Specialist Service
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Why Termite Treatment Cannot Wait
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20">
                <i className="fas fa-exclamation-triangle text-red-300"></i>
              </div>
              <h3 className="text-lg font-bold text-white">The Risk</h3>
            </div>
            <ul className="space-y-3.5">
              {problems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/25 text-[10px] text-red-300">
                    <i className="fas fa-times"></i>
                  </span>
                  <span className="text-[13px] leading-relaxed text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                <i className="fas fa-shield-alt text-accent-light"></i>
              </div>
              <h3 className="text-lg font-bold text-white">Our Solution</h3>
            </div>
            <ul className="space-y-3.5">
              {solutions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/25 text-[10px] text-accent-light">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="text-[13px] leading-relaxed text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-center backdrop-blur-sm">
          <p className="mb-5 text-sm font-medium uppercase tracking-wider text-white/60">
            Book Your Free Termite Inspection
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${PHONE}`}
              className="animate-pulse-glow inline-flex h-12 min-w-[200px] items-center justify-center gap-2.5 rounded-xl bg-accent px-7 font-bold text-white shadow-lg transition-all hover:bg-accent-dark"
            >
              <i className="fas fa-phone text-sm"></i>
              Call Now
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.06] px-7 font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-primary"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
