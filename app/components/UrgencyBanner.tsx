export default function UrgencyBanner() {
  const message =
    "⚠️ Termite season is here! Don't wait until damage is done. Call now for FREE inspection \u00A0\u00A0|\u00A0\u00A0 500+ homes protected in Eastern Province \u00A0\u00A0|\u00A0\u00A0 Trusted since 2019 \u00A0\u00A0|\u00A0\u00A0 ⚠️ Termite season is here! Don't wait until damage is done. Call now for FREE inspection \u00A0\u00A0|\u00A0\u00A0 500+ homes protected in Eastern Province \u00A0\u00A0|\u00A0\u00A0 Trusted since 2019 \u00A0\u00A0|\u00A0\u00A0";

  return (
    <section id="urgency" className="w-full overflow-hidden bg-primary py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="inline-block px-4 text-sm font-semibold text-white sm:text-base">
          {message}
        </span>
        <span className="inline-block px-4 text-sm font-semibold text-white sm:text-base">
          {message}
        </span>
      </div>
    </section>
  );
}
