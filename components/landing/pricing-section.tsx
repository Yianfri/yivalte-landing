import type { PricingContent } from "@/types/landing";

interface PricingSectionProps {
  content: PricingContent;
}

function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function PricingSection({ content }: PricingSectionProps) {
  const externalCta = isExternalLink(content.cta.href);

  return (
    <section id="precios" className="section-space border-t border-white/10">
      <div className="shell">
        <p className="section-eyebrow">{content.heading}</p>
        <h2 className="section-title">
          Desde <span className="text-[color:var(--accent)]">{content.startingPrice}</span>
        </h2>
        <p className="section-copy">{content.description}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {content.notes.map((note) => (
            <p key={note} className="surface-card text-sm text-[color:var(--text-soft)]">
              {note}
            </p>
          ))}
        </div>

        <a
          href={content.cta.href}
          className="cta-primary mt-8"
          target={externalCta ? "_blank" : undefined}
          rel={externalCta ? "noopener noreferrer" : undefined}
        >
          {content.cta.label}
        </a>
        <p className="mt-3 text-xs text-[color:var(--text-muted)]">{content.disclaimer}</p>
      </div>
    </section>
  );
}
