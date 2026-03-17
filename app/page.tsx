import { ContactSection } from "@/components/landing/contact-section";
import { ExamplesSection } from "@/components/landing/examples-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FooterSection } from "@/components/landing/footer-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { MobileCta } from "@/components/landing/mobile-cta";
import { PricingSection } from "@/components/landing/pricing-section";
import { SiteHeader } from "@/components/landing/site-header";
import { TrustSection } from "@/components/landing/trust-section";
import { landingContent } from "@/data/landing-content";

export default function HomePage() {
  return (
    <div className="min-h-screen pb-20 sm:pb-0">
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>

      <SiteHeader
        brandName={landingContent.brandName}
        nav={landingContent.nav}
        cta={landingContent.hero.primaryCta}
      />

      <main id="main-content">
        <HeroSection content={landingContent.hero} />
        <HowItWorksSection steps={landingContent.howItWorks} />
        <ExamplesSection items={landingContent.examples} />
        <PricingSection content={landingContent.pricing} />
        <TrustSection points={landingContent.trust} />
        <FaqSection items={landingContent.faq} />
        <ContactSection content={landingContent.contact} />
      </main>

      <FooterSection
        brandName={landingContent.brandName}
        content={landingContent.footer}
      />

      <MobileCta cta={landingContent.hero.primaryCta} />
    </div>
  );
}
