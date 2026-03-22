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
    "Pest Control Batticaloa | Green Solution Pest Management | Eastern Province Sri Lanka",
  description:
    "Professional pest control services in Batticaloa, Trincomalee and Ampara. Termite treatment, cockroach control, rodent removal. Licensed & certified. Call now for FREE inspection!",
  keywords:
    "pest control Batticaloa, termite treatment Sri Lanka, cockroach control Trincomalee, rodent removal Ampara, pest management Eastern Province, anti termite treatment, Green Solution Pest Management",
  openGraph: {
    title: "Green Solution Pest Management | Eastern Province Sri Lanka",
    description:
      "Professional pest control services across Batticaloa, Trincomalee & Ampara. Termite treatment, cockroach control, rodent removal. 100% Eco-Friendly.",
    type: "website",
    locale: "en_LK",
    siteName: "Green Solution Pest Management",
  },
  robots: "index, follow",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PestControlService",
  name: "Green Solution Pest Management",
  description:
    "Professional pest control services in Eastern Province, Sri Lanka. Specializing in termite treatment, cockroach control, rodent removal, and more.",
  url: "https://greensolutionpest.lk",
  telephone: "+94775354349",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Batticaloa District" },
    { "@type": "AdministrativeArea", name: "Trincomalee District" },
    { "@type": "AdministrativeArea", name: "Ampara District" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Eastern Province",
    addressCountry: "LK",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "07:00",
    closes: "20:00",
  },
  priceRange: "Rs. 2,500 - Rs. 25,000",
  image: "https://greensolutionpest.lk/og-image.jpg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('gs-theme');if(t==='blue')document.documentElement.classList.add('theme-blue');else if(t==='yellow')document.documentElement.classList.add('theme-yellow')}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
