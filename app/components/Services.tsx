const services = [
  {
    icon: "fa-bug",
    title: "Pest Management",
   
    slug: "pest-management",
  },
  {
    icon: "fa-shield-alt",
    title: "Termite Control",
    //desc: "Advanced anti-termite treatment (වේයන් මර්දනය) using baiting and liquid barrier systems. Pre and post-construction protection with up to 5-year warranty.",
    slug: "termite-control",
  },
  {
    icon: "fa-microscope",
    title: "Environmental Engineering Consultancy",
    //desc: "Licensed environmental assessments, site inspections, impact evaluations and compliance consulting for projects across Sri Lanka.",
    slug: "environmental-engineering",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-gradient-to-b from-white to-green-50 px-6 py-20 sm:px-8 md:py-28">
      {/* Left side license numbers */}
      <div className="mb-8 overflow-x-auto text-[12px] leading-[2] lg:absolute lg:left-6 lg:top-6 lg:mb-0 lg:text-[14px]">
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

      <div className="mx-auto max-w-4xl lg:pt-20">
        <div className="rounded-3xl border-2 border-green-200 bg-white p-8 shadow-xl sm:p-10 md:p-12">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-text sm:text-4xl md:text-[3.1rem]">
              Our Services
            </h2>
          </div>

          <div className="mb-2 flex items-center justify-center gap-2">
            <div className="h-1 w-8 rounded-full bg-gradient-to-r from-[#25D366] to-emerald-500"></div>
            <div className="h-1 w-8 rounded-full bg-gradient-to-l from-[#25D366] to-emerald-500"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="group relative rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 text-center transition-all duration-300 hover:border-[#25D366] hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#25D366] via-emerald-400 to-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="mb-4 inline-block rounded-full bg-gradient-to-br from-[#25D366] to-emerald-500 p-4 text-white shadow-lg">
                  <i className={`fas ${service.icon} text-2xl`}></i>
                </div>

                <h4 className="mb-3 text-lg font-bold text-gray-800">
                  {service.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
