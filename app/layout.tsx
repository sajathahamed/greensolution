import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title:
    "Pest Control Sri Lanka | Green Solution — Termite Control & Environmental Engineering",
  description:
    "Professional pest control & termite treatment in Batticaloa, Trincomalee, Ampara & all island Sri Lanka. Licensed environmental engineering consultancy. கிருமி கட்டுப்பாடு | කෘමි පාලනය. Call 077 535 4349.",
  keywords:
    "pest control Sri Lanka, pest control Batticaloa, termite control, termite treatment Sri Lanka, cockroach control, rodent removal, environmental engineering consultancy, anti termite treatment, pest control near me, கிருமி கட்டுப்பாடு, kirumi kattupadu, කෘමි පාලනය, වේයන් මර්දනය, pest management Eastern Province, Green Solution Pest Management, pest control Trincomalee, pest control Ampara, pest control Colombo, pest control Kandy, pest control Jaffna, eco-friendly pest control",
  openGraph: {
    title: "Green Solution Pest Management & Environmental Engineering Consultancy",
    description:
      "Licensed pest control & environmental engineering in Sri Lanka. Termite treatment, pest management across Batticaloa, Trincomalee, Ampara & all island. கிருமி கட்டுப்பாடு | කෘමි පාලනය.",
    type: "website",
    locale: "en_LK",
    siteName: "Green Solution Pest Management",
  },
  alternates: {
    canonical: "https://greensolutionpest.lk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "LK",
    "geo.placename": "Batticaloa",
    "content-language": "en,ta,si",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    name: "Green Solution Pest Management & Environmental Engineering Consultancy",
    alternateName: ["Green Solution", "கிரீன் சொல்யூஷன்", "ග්‍රීන් සොලූෂන්"],
    description:
      "Licensed pest control and environmental engineering consultancy in Sri Lanka. Specializing in termite control (වේයන් මර්දනය / கிருமி கட்டுப்பாடு), pest management, and environmental engineering. Serving Batticaloa, Trincomalee, Ampara & all island.",
    url: "https://greensolutionpest.lk",
    telephone: "+94775354349",
    email: "greensolutionpm@gmail.com",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Batticaloa" },
      { "@type": "AdministrativeArea", name: "Trincomalee" },
      { "@type": "AdministrativeArea", name: "Ampara" },
      { "@type": "Country", name: "Sri Lanka" },
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Eastern Province",
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "7.7310",
      longitude: "81.6747",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pest Control & Environmental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pest Management",
            description: "Comprehensive pest control for residential, commercial and agricultural properties in Sri Lanka",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Termite Control",
            description: "Pre and post-construction termite treatment with baiting and liquid barrier systems. Anti-termite treatment Sri Lanka.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Environmental Engineering Consultancy",
            description: "Environmental assessments, site inspections, impact evaluations and compliance consulting across Sri Lanka",
          },
        },
      ],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "20:00",
    },
    priceRange: "Rs. 2,500 - Rs. 25,000",
    image: "https://greensolutionpest.lk/logo.jpeg",
    sameAs: [
      "https://wa.me/94775354349",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is pest control? (කෘමි පාලනය කියන්නේ මොකක්ද?)",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pest control (කෘමි පාලනය / கிருமி கட்டுப்பாடு) is the management and elimination of harmful pests such as termites, cockroaches, rodents, and mosquitoes from residential and commercial properties. Green Solution provides licensed pest control services across Sri Lanka.",
        },
      },
      {
        "@type": "Question",
        name: "What is kirumi kattupadu (கிருமி கட்டுப்பாடு)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kirumi kattupadu (கிருமி கட்டுப்பாடு) is the Tamil term for pest control. It covers all pest management methods including termite control, cockroach elimination, and rodent removal. Green Solution offers professional kirumi kattupadu services in Batticaloa, Trincomalee, and Ampara.",
        },
      },
      {
        "@type": "Question",
        name: "How much does pest control cost in Sri Lanka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pest control costs in Sri Lanka vary depending on the type of pest, property size, and treatment method. Green Solution offers competitive pricing starting from Rs. 2,500. Contact us on 077 535 4349 for a free quotation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide termite control near me in Batticaloa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Green Solution provides professional termite control (වේයන් මර්දනය) services in Batticaloa, Trincomalee, Ampara, and across all of Sri Lanka. We offer pre and post-construction anti-termite treatments with warranty.",
        },
      },
      {
        "@type": "Question",
        name: "What is environmental engineering consultancy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Environmental engineering consultancy involves professional environmental assessments, site inspections, environmental impact evaluations, and regulatory compliance consulting. Green Solution is a licensed environmental engineering consultancy in Sri Lanka (WMP License: 1995/HWM/B69/SL/CEA/2024).",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://greensolutionpest.lk" />
        <link rel="alternate" hrefLang="en" href="https://greensolutionpest.lk" />
        <link rel="alternate" hrefLang="ta" href="https://greensolutionpest.lk" />
        <link rel="alternate" hrefLang="si" href="https://greensolutionpest.lk" />
        <link rel="alternate" hrefLang="x-default" href="https://greensolutionpest.lk" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
