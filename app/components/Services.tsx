const WA_LINK =
  "https://wa.me/94775354349?text=Hello%20Green%20Solution%2C%20I%20need%20a%20quote%20for%20";

const services = [
  {
    icon: "fa-bug",
    title: "Termite Treatment",
    desc: "Advanced baiting and liquid barrier treatment. Structural protection with up to 5-year warranty coverage.",
    slug: "termite-treatment",
  },
  {
    icon: "fa-shield-virus",
    title: "Cockroach Control",
    desc: "Gel baiting and residual spray for complete colony elimination. Safe formulations for families and pets.",
    slug: "cockroach-control",
  },
  {
    icon: "fa-paw",
    title: "Rodent Control",
    desc: "Integrated trapping, baiting and structural proofing to permanently exclude rats and mice.",
    slug: "rodent-control",
  },
  {
    icon: "fa-mosquito",
    title: "Mosquito & Fly Control",
    desc: "Thermal fogging, larviciding and residual spray for comprehensive indoor and outdoor management.",
    slug: "mosquito-fly-control",
  },
  {
    icon: "fa-house-chimney-crack",
    title: "Beehive & Wasp Removal",
    desc: "Professional removal and safe relocation from residential and commercial properties.",
    slug: "beehive-wasp-removal",
  },
  {
    icon: "fa-seedling",
    title: "Agricultural Pest Control",
    desc: "Crop protection services for paddy, vegetable and fruit farming operations across the Eastern Province.",
    slug: "agricultural-pest-control",
  },
  {
    icon: "fa-building",
    title: "Commercial Pest Management",
    desc: "Annual maintenance contracts for hotels, restaurants, warehouses, food processors and offices.",
    slug: "commercial-pest-management",
  },
  {
    icon: "fa-couch",
    title: "Wood Borer Treatment",
    desc: "Fumigation and chemical injection to protect furniture, timber structures and wooden frameworks.",
    slug: "wood-borer-treatment",
  },
  {
    icon: "fa-microscope",
    title: "Environmental Assessments",
    desc: "Comprehensive site inspections, environmental impact evaluations and pest risk analysis reports.",
    slug: "environmental-assessments",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-bg px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            What We Do
          </p>
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-text-muted">
            Integrated pest management and environmental engineering solutions
            for residential, commercial and agricultural sectors.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <i className={`fas ${service.icon} text-lg`}></i>
              </div>

              <h3 className="mb-2 text-base font-bold text-text">
                {service.title}
              </h3>
              <p className="mb-5 text-[13px] leading-relaxed text-text-muted">
                {service.desc}
              </p>

              <a
                href={`${WA_LINK}${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary transition-colors hover:text-accent"
              >
                Request Quote
                <i className="fas fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
