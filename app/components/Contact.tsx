const PHONE = "+94775354349";
const PHONE_DISPLAY = "077 535 4349";
const PHONE2_DISPLAY = "065 205 8699";
const WA_NUMBER = "94775354349";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-primary-dark via-primary to-primary-light px-4 py-16 text-white md:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">
          Contact Green Solution Today
        </h2>
        <p className="mb-10 text-white/80">Mon–Sun 7:00 AM – 8:00 PM</p>

        <div className="mb-8">
          <p className="mb-2 text-sm uppercase tracking-wider text-white/60">
            Call Us
          </p>
          <a
            href={`tel:${PHONE}`}
            className="block text-3xl font-extrabold tracking-wide transition-colors hover:text-accent-light md:text-5xl"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href="tel:+94652058699"
            className="mt-2 block text-xl font-semibold tracking-wide text-white/80 transition-colors hover:text-accent-light"
          >
            {PHONE2_DISPLAY}
          </a>
        </div>

        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex h-14 min-w-[200px] items-center justify-center gap-2 rounded-xl bg-accent px-8 text-lg font-bold text-white shadow-lg transition-all hover:bg-accent-dark"
          >
            <i className="fas fa-phone"></i>
            Call Now
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hello%20Green%20Solution%2C%20I%20need%20pest%20control%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 min-w-[200px] items-center justify-center gap-2 rounded-xl border-2 border-white bg-white/10 px-8 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-primary"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            WhatsApp
          </a>
        </div>

        <p className="text-sm text-white/60">
          Service Hours: Mon–Sun, 7:00 AM – 8:00 PM
        </p>
      </div>
    </section>
  );
}
