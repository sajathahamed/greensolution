const steps = [
  {
    num: 1,
    icon: "fa-phone-alt",
    title: "Contact Us",
    desc: "Call or WhatsApp us anytime — we respond within 30 minutes during business hours",
  },
  {
    num: 2,
    icon: "fa-search-location",
    title: "Site Inspection",
    desc: "Our certified technician visits your property for a thorough pest and environmental assessment",
  },
  {
    num: 3,
    icon: "fa-file-medical",
    title: "Treatment Plan",
    desc: "We design a customised, eco-friendly treatment strategy tailored to your specific situation",
  },
  {
    num: 4,
    icon: "fa-shield-alt",
    title: "Treatment & Warranty",
    desc: "Professional treatment execution with written warranty documentation for your records",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-bg px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Our Process
          </p>
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative px-4 py-6 text-center lg:px-6">
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-12 z-10 hidden text-gray-200 lg:block">
                  <i className="fas fa-chevron-right text-lg"></i>
                </div>
              )}

              <div className="relative mx-auto mb-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-md">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white shadow">
                  {step.num}
                </span>
              </div>

              <h3 className="mb-2 text-sm font-bold text-text">
                {step.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-text-muted">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
