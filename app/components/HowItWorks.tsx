const steps = [
  {
    num: 1,
    icon: "fa-phone-alt",
    title: "Contact Us",
    desc: "Call or WhatsApp us anytime — we respond within 30 minutes",
  },
  {
    num: 2,
    icon: "fa-search-location",
    title: "Site Inspection",
    desc: "Our licensed technician visits your property for a thorough assessment",
  },
  {
    num: 3,
    icon: "fa-file-medical",
    title: "Treatment Plan",
    desc: "We design a customised, eco-friendly strategy for your situation",
  },
  {
    num: 4,
    icon: "fa-shield-alt",
    title: "Treatment & Warranty",
    desc: "Professional treatment with written warranty for your records",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0a3d0a] via-[#145214] to-[#1B5E20] px-6 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-white/40">
            Our Process
          </p>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-[2.25rem]">
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="absolute -right-2.5 top-7 z-10 hidden text-white/10 sm:-right-4 lg:block">
                  <i className="fas fa-chevron-right text-xs"></i>
                </div>
              )}

              <div className="relative mx-auto mb-5 w-fit">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-white backdrop-blur-sm sm:h-16 sm:w-16">
                  <i className={`fas ${step.icon} text-lg`}></i>
                </div>
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white shadow sm:h-6 sm:w-6 sm:text-[11px]">
                  {step.num}
                </span>
              </div>

              <h3 className="mb-2 text-[13px] font-bold text-white sm:text-sm">
                {step.title}
              </h3>
              <p className="text-[11px] leading-relaxed text-white/45 sm:text-[12px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
