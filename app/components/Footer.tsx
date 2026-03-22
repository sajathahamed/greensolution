import Image from "next/image";

const WA_LINK =
  "https://wa.me/94775354349?text=Hello%20Green%20Solution%2C%20I%20need%20pest%20control%20services";

const services = [
  "Termite Treatment",
  "Cockroach Control",
  "Rodent Control",
  "Mosquito Control",
  "Beehive Removal",
  "Agricultural Pest Control",
  "Commercial Management",
  "Wood Borer Treatment",
  "Environmental Assessments",
];

const areas = [
  "Batticaloa",
  "Trincomalee",
  "Ampara",
  "Kalmunai",
  "Kattankudy",
  "Eravur",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Service Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-primary-dark px-4 pt-14 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Green Solution"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold leading-tight">Green Solution</p>
                <p className="text-[9px] uppercase tracking-wider text-white/40">
                  Pest Management &amp; Environmental Engineering
                </p>
              </div>
            </div>
            <p className="mb-5 text-[13px] leading-relaxed text-white/50">
              Licensed pest control and environmental engineering consultancy
              serving the Eastern Province of Sri Lanka.
            </p>
            <div className="flex gap-2.5">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-sm transition-colors hover:bg-[#25D366] hover:text-white"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="tel:+94775354349"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-sm transition-colors hover:bg-accent hover:text-white"
              >
                <i className="fas fa-phone text-xs"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/30">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/30">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[13px] text-white/50 transition-colors hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/30">
              Service Areas
            </h4>
            <ul className="mb-6 space-y-2">
              {areas.map((a) => (
                <li key={a}>
                  <a
                    href="#areas"
                    className="text-[13px] text-white/50 transition-colors hover:text-white"
                  >
                    {a}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-white/30">
              Contact
            </h4>
            <p className="text-[13px] text-white/50">077 535 4349</p>
            <p className="text-[13px] text-white/50">065 205 8699</p>
          </div>
        </div>

        <div className="border-t border-white/[0.06] py-6 text-center text-[11px] text-white/25">
          <p className="mb-1">
            Licensed Pest Control Operator &amp; Environmental Engineering Consultancy — Eastern Province, Sri Lanka
          </p>
          <p>
            &copy; {new Date().getFullYear()} Green Solution Pest Management
            &amp; Environmental Engineering Consultancy
          </p>
        </div>
      </div>
    </footer>
  );
}
