const PHONE = "+94775354349";
const PHONE_DISPLAY = "077 535 4349";
const PHONE2_DISPLAY = "065 205 8699";
const WA_NUMBER = "94775354349";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-primary-dark via-primary to-primary-light px-4 py-16 text-white md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          Get In Touch
        </p>
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">
          Contact Green Solution
        </h2>
        <p className="mb-10 text-sm text-white/60">
          Pest Management &amp; Environmental Engineering Consultancy
        </p>

        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-8 backdrop-blur-sm">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Call Us Directly
          </p>
          <a
            href={`tel:${PHONE}`}
            className="block text-3xl font-extrabold tracking-wider transition-colors hover:text-accent-light md:text-5xl"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href="tel:+94652058699"
            className="mt-2 block text-lg font-medium tracking-wider text-white/60 transition-colors hover:text-accent-light"
          >
            {PHONE2_DISPLAY}
          </a>
        </div>

        <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-xl bg-accent px-7 font-bold text-white shadow-lg transition-all hover:bg-accent-dark"
          >
            <i className="fas fa-phone text-sm"></i>
            Call Now
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hello%20Green%20Solution%2C%20I%20need%20pest%20control%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 font-bold text-white shadow-lg transition-all hover:brightness-110"
          >
            <i className="fab fa-whatsapp text-lg"></i>
            WhatsApp
          </a>
        </div>

        <p className="text-xs text-white/40">
          Mon–Sun, 7:00 AM – 8:00 PM &nbsp;|&nbsp; Eastern Province, Sri Lanka
        </p>
      </div>
    </section>
  );
}
