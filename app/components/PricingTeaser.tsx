const WA_BASE =
  "https://wa.me/94775354349?text=Hello%20Green%20Solution%2C%20I%20need%20a%20quote%20for%20";

const plans = [
  {
    icon: "🏠",
    title: "Home Treatment",
    price: "Rs. 2,500",
    subtitle: "Apartment / Small Home",
    popular: false,
    slug: "home-treatment",
  },
  {
    icon: "🏡",
    title: "Full House Package",
    price: "Rs. 5,000",
    subtitle: "Full inspection + treatment",
    popular: true,
    slug: "full-house-package",
  },
  {
    icon: "🏢",
    title: "Commercial Contract",
    price: "Custom Pricing",
    subtitle: "Offices, warehouses, hotels",
    popular: false,
    slug: "commercial-contract",
  },
];

export default function PricingTeaser() {
  return (
    <section className="w-full bg-bg px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
            Affordable Pest Control Starting From
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.slug}
              className={`relative rounded-xl border-2 bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.popular
                  ? "border-accent scale-105 md:scale-110"
                  : "border-gray-100"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}
              <div className="mb-3 text-4xl">{plan.icon}</div>
              <h3 className="mb-2 text-lg font-bold text-primary">
                {plan.title}
              </h3>
              <p className="mb-1 text-2xl font-extrabold text-accent">
                {plan.price.startsWith("Rs.") ? (
                  <>
                    <span className="text-sm font-normal text-text-muted">
                      From{" "}
                    </span>
                    {plan.price}
                  </>
                ) : (
                  plan.price
                )}
              </p>
              <p className="mb-6 text-sm text-text-muted">{plan.subtitle}</p>
              <a
                href={`${WA_BASE}${encodeURIComponent(plan.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-all ${
                  plan.popular
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                Get Exact Quote
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-muted">
          Final pricing depends on property size and pest type. Contact us for
          FREE assessment.
        </p>
      </div>
    </section>
  );
}
