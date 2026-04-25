const services = [
  {
    icon: "fa-bug",
    title: "Pest Management",
    //desc: "Comprehensive pest control for residential, commercial, and agricultural properties with safe and effective treatment solutions.",
    slug: "pest-management",
  },
  {
    icon: "fa-shield-alt",
    title: "Termite Control",
    //desc: "Advanced anti-termite treatment using baiting and liquid barrier systems for long-term structural protection.",
    slug: "termite-control",
  },
  {
    icon: "fa-microscope",
    title: "Environmental Engineering Consultancy",
    //desc: "Licensed assessments, site inspections, impact evaluations, and compliance consulting for projects across Sri Lanka.",
    slug: "environmental-engineering",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-gradient-to-b from-white to-green-50 px-6 py-20 sm:px-8 md:py-28">
      {/* Right side license numbers - positioned at top right of section */}
      <div className="mb-8 overflow-x-auto lg:absolute lg:right-8 lg:top-8 lg:z-10 lg:mb-0">
        <div className="mb-2 rounded-lg bg-[#173f8a] px-3 py-1 text-center text-[12px] font-bold tracking-[0.08em] text-white sm:text-[13px]">
          LICENSE DETAILS
        </div>

        <table className="border-separate border-spacing-x-0 rounded-xl border border-[#bfd0ff] bg-gradient-to-b from-[#f3f7ff] to-[#e8f0ff] px-4 py-3 text-[13px] leading-[2] shadow-md shadow-[#3f5fb5]/15 lg:text-[15px]">
          <tbody>
            {[
              ["REG No", "DS/EP/BR/58/2017"],
              ["EP Licence No", "B 23428"],
              ["SWM License No", "1995/HWM/B69/SL/CEA/2024"],
              ["ROP License No", "RP/PCS/EP/112"],
            ].map(([label, value]) => (
              <tr key={label}>
                <td className="w-[164px] whitespace-nowrap text-left font-semibold tracking-[0.01em] text-[#405784]">{label}</td>
                <td className="w-[26px] text-center font-bold text-[#6a82be]">:</td>
                <td className="pl-2 text-left font-extrabold tracking-[0.005em] text-[#1a3270]">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mx-auto max-w-4xl lg:mt-40">
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
              {services.map((service) => (
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
                    
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
