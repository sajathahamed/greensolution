"use client";

import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UrgencyBanner from "./components/UrgencyBanner";
import StatsCounter from "./components/StatsCounter";
import Services from "./components/Services";
import TermiteSpotlight from "./components/TermiteSpotlight";
import WhyChooseUs from "./components/WhyChooseUs";
import ServiceAreas from "./components/ServiceAreas";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import PricingTeaser from "./components/PricingTeaser";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import WhatsAppBubble from "./components/WhatsAppBubble";
import BackToTop from "./components/BackToTop";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <UrgencyBanner />

        <div className="fade-in-section">
          <StatsCounter />
        </div>

        <div className="fade-in-section">
          <Services />
        </div>

        <div className="fade-in-section">
          <TermiteSpotlight />
        </div>

        <div className="fade-in-section">
          <WhyChooseUs />
        </div>

        <div className="fade-in-section">
          <ServiceAreas />
        </div>

        <div className="fade-in-section">
          <HowItWorks />
        </div>

        <div className="fade-in-section">
          <Testimonials />
        </div>

        <div className="fade-in-section">
          <PricingTeaser />
        </div>

        <div className="fade-in-section">
          <Contact />
        </div>
      </main>

      <Footer />

      {/* Floating elements */}
      <FloatingCTA />
      <WhatsAppBubble />
      <BackToTop />

      {/* Extra bottom padding on mobile to account for fixed CTA bar */}
      <div className="h-16 md:hidden"></div>
    </>
  );
}
