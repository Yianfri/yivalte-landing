export type SectionId =
  | "inicio"
  | "servicio"
  | "ejemplos"
  | "precios"
  | "confianza"
  | "faq"
  | "contacto";

export type AnchorHref = `#${SectionId}`;

export interface NavItem {
  label: string;
  href: AnchorHref;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}

export interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
}

export interface ExampleItem {
  id: string;
  title: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
}

export interface PricingContent {
  heading: string;
  startingPrice: string;
  description: string;
  notes: string[];
  disclaimer: string;
  cta: CtaLink;
}

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactContent {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  helperText: string;
  responseTimeNote: string;
  quoteChecklist: string[];
}

export interface FooterContent {
  note: string;
  copyright: string;
}

export interface LandingContent {
  brandName: string;
  nav: NavItem[];
  hero: HeroContent;
  howItWorks: HowItWorksStep[];
  examples: ExampleItem[];
  pricing: PricingContent;
  trust: TrustPoint[];
  faq: FaqItem[];
  contact: ContactContent;
  footer: FooterContent;
}
