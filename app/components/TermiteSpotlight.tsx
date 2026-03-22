const PHONE = "+94775354349";
const WA_LINK =
  "https://wa.me/94775354349?text=Hello%20Green%20Solution%2C%20I%20need%20a%20FREE%20termite%20inspection";

const problems = [
  "Termites cause billions in property damage annually",
  "They work 24/7 silently — damage is invisible until severe",
  "A colony can destroy a wooden structure in 3-5 years",
  "Standard insurance does NOT cover termite damage",
  "Eastern Province's humid climate = HIGH termite risk",
];

const solutions = [
  "Pre-construction & post-construction treatment available",
  "Non-repellent chemicals — termites carry poison to colony",
  "1-year to 5-year warranty on all treatments",
  "Certified chemicals approved by Sri Lanka standards",
  "Free re-treatment if termites return within warranty",
];

export default function TermiteSpotlight() {
  return (
    <section className="w-full bg-gradient-to-br from-primary via-primary-light to-secondary px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Why Termite Treatment Cannot Wait
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Problems */}
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm md:p-8">
            <h3 className="mb-6 text-xl font-bold text-white">
              The Hidden Danger
            </h3>
            <ul className="space-y-4">
              {problems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/80 text-xs">
                    ✕
                  </span>
                  <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm md:p-8">
            <h3 className="mb-6 text-xl font-bold text-white">
              Our Solution
            </h3>
            <ul className="space-y-4">
              {solutions.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/80 text-xs">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-lg font-semibold text-white">
            🔍 Get Your FREE Termite Inspection Today
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${PHONE}`}
              className="animate-pulse-glow inline-flex h-14 min-w-[220px] items-center justify-center gap-3 rounded-xl bg-accent px-8 text-lg font-bold text-white shadow-lg transition-all hover:bg-accent-dark"
            >
              <i className="fas fa-phone"></i>
              Call Now
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 min-w-[220px] items-center justify-center gap-3 rounded-xl border-2 border-white bg-white/10 px-8 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-primary"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp for Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
