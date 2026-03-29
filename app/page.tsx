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

const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Yivalte, quiero cotizar poleras personalizadas. Te comparto los detalles de mi pedido.";

function buildWhatsAppConfig() {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const whatsappNumber = rawNumber.replace(/\D/g, "");
  const message =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE?.trim() || DEFAULT_WHATSAPP_MESSAGE;

  if (!whatsappNumber) {
    return {
      whatsappNumber: "",
      defaultMessage: message,
      ctaHref: null,
    };
  }

  return {
    whatsappNumber,
    defaultMessage: message,
    ctaHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
  };
}

export default function HomePage() {
  const { whatsappNumber, defaultMessage, ctaHref } = buildWhatsAppConfig();

  const primaryCta = ctaHref
    ? { ...landingContent.hero.primaryCta, href: ctaHref, label: "Cotizar por WhatsApp" }
    : landingContent.hero.primaryCta;

  const pricingContent = ctaHref
    ? {
        ...landingContent.pricing,
        cta: { ...landingContent.pricing.cta, href: ctaHref },
      }
    : landingContent.pricing;

  const contactContent = ctaHref
    ? {
        ...landingContent.contact,
        buttonHref: ctaHref,
        buttonLabel: "Abrir WhatsApp directo",
        helperText:
          "Tambien puedes abrir WhatsApp directo con un mensaje sugerido.",
      }
    : {
        ...landingContent.contact,
        helperText:
          "Configura NEXT_PUBLIC_WHATSAPP_NUMBER para activar el envio de cotizaciones por formulario.",
      };

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
        <ContactSection
          content={contactContent}
          whatsappNumber={whatsappNumber}
          defaultMessage={defaultMessage}
        />
      </main>

      <FooterSection
        brandName={landingContent.brandName}
        content={landingContent.footer}
      />

      <MobileCta cta={primaryCta} />
    </div>
  );
}
