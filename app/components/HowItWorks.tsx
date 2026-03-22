const steps = [
  {
    num: 1,
    icon: "fa-phone",
    title: "Call or WhatsApp Us",
    desc: "Contact us anytime — we respond within 30 minutes",
  },
  {
    num: 2,
    icon: "fa-search",
    title: "Free Inspection",
    desc: "Our expert visits your property and identifies pest threats",
  },
  {
    num: 3,
    icon: "fa-clipboard-list",
    title: "Custom Treatment Plan",
    desc: "We design the safest, most effective treatment for your situation",
  },
  {
    num: 4,
    icon: "fa-check-circle",
    title: "Treatment & Warranty",
    desc: "We treat and provide written warranty for your peace of mind",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-bg px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            Getting Protected is Simple
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center">
              {/* Connecting arrow (desktop) */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-10 z-10 hidden translate-x-1/2 text-secondary/40 lg:block">
                  <i className="fas fa-chevron-right text-xl"></i>
                </div>
              )}

              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                <span className="text-xl font-bold">{step.num}</span>
              </div>
              <div className="mb-2 text-secondary">
                <i className={`fas ${step.icon} text-xl`}></i>
              </div>
              <h3 className="mb-2 text-lg font-bold text-primary">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
