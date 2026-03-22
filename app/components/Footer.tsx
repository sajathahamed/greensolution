const WA_LINK =
  "https://wa.me/94775354349?text=Hello%20Green%20Solution%2C%20I%20need%20pest%20control%20services";

const services = [
  "Termite Treatment",
  "Cockroach Control",
  "Rodent Control",
  "Mosquito Control",
  "Beehive Removal",
  "Agricultural Pest Control",
  "Commercial Pest Management",
  "Wood Borer Treatment",
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
    <footer className="w-full bg-primary-dark px-4 pt-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-white">
                <i className="fas fa-leaf"></i>
              </span>
              <span className="text-lg font-bold">Green Solution</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              Sri Lanka&apos;s Trusted Pest Control Experts. Professional pest
              management services across Eastern Province.
            </p>
            <div className="flex gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="tel:+94775354349"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
              >
                <i className="fas fa-phone text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/50">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/50">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas & Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/50">
              Service Areas
            </h4>
            <ul className="mb-6 space-y-2">
              {areas.map((a) => (
                <li key={a}>
                  <a
                    href="#areas"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {a}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-white/50">
              Contact
            </h4>
            <p className="text-sm text-white/70">077 535 4349</p>
            <p className="text-sm text-white/70">065 205 8699</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
          <p className="mb-1">
            Licensed Pest Control Operator — Eastern Province, Sri Lanka
          </p>
          <p>
            &copy; {new Date().getFullYear()} Green Solution Pest Management.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
