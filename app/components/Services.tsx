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
      <div className="mb-8 flex justify-center text-[12px] leading-[2] sm:text-[13px] lg:absolute lg:right-6 lg:top-6 lg:mb-0 lg:justify-end lg:text-[14px]">
        <table className="border-separate border-spacing-x-0 rounded-xl bg-white/95 px-3 py-2 shadow-sm">
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
          <h2 className="text-3xl font-extrabold text-text sm:text-4xl md:text-[3.1rem]">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group relative rounded-2xl border border-gray-100 bg-white p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <h3 className="text-[24px] font-extrabold leading-snug text-text sm:text-[27px]">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
