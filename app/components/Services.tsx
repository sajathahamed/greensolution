const WA_LINK =
  "https://wa.me/94775354349?text=Hello%20Green%20Solution%2C%20I%20need%20a%20quote%20for%20";

const services = [
  {
    icon: "fa-bug",
    title: "Pest Management",
    desc: "Comprehensive pest control (කෘමි පාලනය / கிருமி கட்டுப்பாடு) for residential, commercial and agricultural properties. Safe, effective and eco-friendly treatments.",
    slug: "pest-management",
  },
  {
    icon: "fa-shield-alt",
    title: "Termite Control",
    desc: "Advanced anti-termite treatment (වේයන් මර්දනය) using baiting and liquid barrier systems. Pre and post-construction protection with up to 5-year warranty.",
    slug: "termite-control",
  },
  {
    icon: "fa-microscope",
    title: "Environmental Engineering Consultancy",
    desc: "Licensed environmental assessments, site inspections, impact evaluations and compliance consulting for projects across Sri Lanka.",
    slug: "environmental-engineering",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-white px-6 py-20 sm:px-8 md:py-28">
      {/* Top-right license numbers */}
      <div className="absolute right-6 top-6 text-[13px] leading-[2.2] sm:right-10 sm:top-8 sm:text-[14px]">
        <table className="border-separate border-spacing-x-0">
          <tbody>
            {[
              ["REG No", "DS/EP/BR/58/2017"],
              ["EP Licence No", "B 23428"],
              ["SWM License No", "1995/HWM/B69/SL/CEA/2024"],
              ["ROP License No", "RP/PCS/EP/112"],
            ].map(([label, value]) => (
              <tr key={label}>
                <td className="w-[148px] whitespace-nowrap text-left font-medium text-gray-500">{label}</td>
                <td className="w-[28px] text-center font-medium text-gray-400">:</td>
                <td className="pl-2 text-left font-semibold text-gray-700">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-secondary">
            What We Do
          </p>
          <h2 className="text-2xl font-extrabold text-text sm:text-3xl md:text-[2.25rem]">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/[0.05] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <i className={`fas ${service.icon} text-xl`}></i>
              </div>

              <h3 className="mb-3 text-[17px] font-bold leading-snug text-text">
                {service.title}
              </h3>
              <p className="mb-6 text-[13px] leading-[1.8] text-text-muted">
                {service.desc}
              </p>

              <a
                href={`${WA_LINK}${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary transition-colors hover:text-accent"
              >
                Request Quote
                <i className="fas fa-arrow-right text-[10px] transition-transform duration-200 group-hover:translate-x-1"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
