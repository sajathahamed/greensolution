const WA_LINK =
  "https://wa.me/94775354349?text=Hello%20Green%20Solution%2C%20I%20need%20a%20quote%20for%20";

const services = [
  {
    icon: "fa-bug",
    emoji: "🐜",
    title: "Termite Treatment",
    desc: "Advanced baiting & liquid treatment. Protects structure for up to 5 years with warranty.",
    slug: "termite-treatment",
  },
  {
    icon: "fa-cockroach",
    emoji: "🪳",
    title: "Cockroach Control",
    desc: "Gel treatment & spray for complete elimination. Safe for families and pets.",
    slug: "cockroach-control",
  },
  {
    icon: "fa-paw",
    emoji: "🐀",
    title: "Rodent Control",
    desc: "Trapping, baiting & proofing solutions to keep rats and mice out permanently.",
    slug: "rodent-control",
  },
  {
    icon: "fa-mosquito",
    emoji: "🦟",
    title: "Mosquito & Fly Control",
    desc: "Fogging, larviciding & residual spray for outdoor and indoor mosquito management.",
    slug: "mosquito-fly-control",
  },
  {
    icon: "fa-locust",
    emoji: "🐝",
    title: "Beehive & Wasp Removal",
    desc: "Safe removal and relocation of hives from residential and commercial properties.",
    slug: "beehive-wasp-removal",
  },
  {
    icon: "fa-wheat-awn",
    emoji: "🌾",
    title: "Agricultural Pest Control",
    desc: "Crop protection services for paddy, vegetable and fruit farms across the Eastern Province.",
    slug: "agricultural-pest-control",
  },
  {
    icon: "fa-building",
    emoji: "🏢",
    title: "Commercial Pest Management",
    desc: "Annual maintenance contracts for hotels, restaurants, warehouses and offices.",
    slug: "commercial-pest-management",
  },
  {
    icon: "fa-tree",
    emoji: "🪲",
    title: "Wood Borer Treatment",
    desc: "Fumigation and chemical treatment to protect furniture and wooden structures.",
    slug: "wood-borer-treatment",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-bg px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            Our Pest Control Services
          </h2>
          <p className="mx-auto max-w-2xl text-text-light">
            Complete protection for homes, offices &amp; agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group rounded-xl border-t-4 border-secondary bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-2xl">
                {service.emoji}
              </div>
              <h3 className="mb-2 text-lg font-bold text-primary">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-light">
                {service.desc}
              </p>
              <a
                href={`${WA_LINK}${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-secondary px-4 py-2 text-sm font-semibold text-secondary transition-all hover:bg-secondary hover:text-white"
              >
                Get Quote
                <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
