export default function UrgencyBanner() {
  const items = [
    "Termite season is here — Call now for FREE inspection",
    "500+ properties protected across Eastern Province",
    "Licensed Environmental Engineering Consultancy",
    "Trusted since 2019",
  ];

  const message = items
    .map((item) => `\u00A0\u00A0\u00A0\u2022\u00A0\u00A0\u00A0${item}`)
    .join("");

  const fullMessage = `${message}${message}`;

  return (
    <section id="urgency" className="w-full overflow-hidden bg-primary-dark py-2.5">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="inline-block text-[13px] font-medium tracking-wide text-white/90">
          {fullMessage}
        </span>
        <span className="inline-block text-[13px] font-medium tracking-wide text-white/90">
          {fullMessage}
        </span>
      </div>
    </section>
  );
}
