import Image from "next/image";

const WA_LINK =
  "https://wa.me/94775354349?text=Hello%20Green%20Solution%2C%20I%20need%20pest%20control%20services";

const services = [
  "Pest Management",
  "Termite Control",
  "Environmental Engineering Consultancy",
];

const areas = ["Batticaloa", "Trincomalee", "Ampara", "All Island"];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Service Areas", href: "#areas" },
  { label: "Get Quotation", href: "#footer" },
];

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-[#071f07] text-white">
      <div className="mx-auto max-w-5xl px-6 pb-10 pt-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Green Solution Pest Management Environmental Engineering Consultancy Sri Lanka"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl object-cover"
              />
              <div>
                <p className="text-sm font-bold leading-tight">
                  Green Solution
                </p>
                <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/30">
                  Environmental Engineering Consultancy
                </p>
              </div>
            </div>

            <p className="mb-6 max-w-[260px] text-[12px] leading-[1.8] text-white/35">
              Licensed pest control and environmental engineering consultancy
              serving Batticaloa, Trincomalee, Ampara and all island Sri Lanka.
            </p>

            <div className="flex gap-2">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-[13px] text-white/40 transition-all hover:bg-[#25D366] hover:text-white"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="tel:+94775354349"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-[11px] text-white/40 transition-all hover:bg-accent hover:text-white"
                aria-label="Call"
              >
                <i className="fas fa-phone"></i>
              </a>
              <a
                href="mailto:greensolutionpm@gmail.com"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-[11px] text-white/40 transition-all hover:bg-primary-light hover:text-white"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[12px] text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Areas */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[12px] text-white/40 transition-colors hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="mb-3 mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
              Service Areas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {areas.map((a) => (
                <a
                  key={a}
                  href="#areas"
                  className="inline-block rounded-md bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/40 transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  {a}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
              Contact Us
            </h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                  <i className="fas fa-phone text-[9px] text-white/30"></i>
                </div>
                <div>
                  <a
                    href="tel:+94775354349"
                    className="block text-[12px] font-medium text-white/55 transition-colors hover:text-white"
                  >
                    077 535 4349
                  </a>
                  <a
                    href="tel:+94652058699"
                    className="block text-[12px] text-white/35 transition-colors hover:text-white"
                  >
                    065 205 8699
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                  <i className="fas fa-envelope text-[9px] text-white/30"></i>
                </div>
                <a
                  href="mailto:greensolutionpm@gmail.com"
                  className="text-[12px] text-white/40 transition-colors hover:text-white"
                >
                  greensolutionpm@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                  <i className="fas fa-clock text-[9px] text-white/30"></i>
                </div>
                <p className="text-[12px] text-white/40">
                  Mon – Sun, 7 AM – 8 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-6 py-5 text-center text-[10px] text-white/15 sm:flex-row sm:justify-between sm:px-8">
          <p>
            &copy; {new Date().getFullYear()} Green Solution Pest Management
            &amp; Environmental Engineering Consultancy
          </p>
          <p>Licensed Pest Control Operator — Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
