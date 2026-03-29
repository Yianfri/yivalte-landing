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

function buildWhatsAppLink() {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const sanitizedNumber = rawNumber.replace(/\D/g, "");

  if (!sanitizedNumber) {
    return null;
  }

  const defaultMessage =
    "Hola Yivalte, quiero cotizar poleras personalizadas. Te comparto los detalles de mi pedido.";
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE?.trim() || defaultMessage;

  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
}

export default function HomePage() {
  const whatsappHref = buildWhatsAppLink();

  const primaryCta = whatsappHref
    ? { ...landingContent.hero.primaryCta, href: whatsappHref, label: "Cotizar por WhatsApp" }
    : landingContent.hero.primaryCta;

  const pricingContent = whatsappHref
    ? {
        ...landingContent.pricing,
        cta: { ...landingContent.pricing.cta, href: whatsappHref },
      }
    : landingContent.pricing;

  const contactContent = whatsappHref
    ? {
        ...landingContent.contact,
        buttonHref: whatsappHref,
        buttonLabel: "Abrir WhatsApp para cotizar",
        helperText:
          "Te redirigimos a WhatsApp con un mensaje sugerido. Puedes editarlo antes de enviar.",
      }
    : landingContent.contact;

  return (
    <div className="min-h-screen pb-20 sm:pb-0">
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>

      <SiteHeader
        brandName={landingContent.brandName}
        nav={landingContent.nav}
        cta={primaryCta}
      />

      <main id="main-content">
        <HeroSection content={{ ...landingContent.hero, primaryCta }} />
        <HowItWorksSection steps={landingContent.howItWorks} />
        <ExamplesSection items={landingContent.examples} />
        <PricingSection content={pricingContent} />
        <TrustSection points={landingContent.trust} />
        <FaqSection items={landingContent.faq} />
        <ContactSection content={contactContent} />
      </main>

      <FooterSection
        brandName={landingContent.brandName}
        content={landingContent.footer}
      />

      <MobileCta cta={primaryCta} />
    </div>
  );
}
