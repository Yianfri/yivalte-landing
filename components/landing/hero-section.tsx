import type { HeroContent } from "@/types/landing";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="inicio" className="section-space">
      <div className="shell">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[color:var(--accent)]/15 blur-3xl" />

          <p className="section-eyebrow">{content.badge}</p>
          <h1 className="mt-3 max-w-3xl [font-family:var(--font-heading)] text-4xl font-semibold leading-tight sm:text-5xl">
            {content.title}
          </h1>
          <p className="section-copy">{content.description}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {content.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-[color:var(--text-soft)]"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={content.primaryCta.href} className="cta-primary">
              {content.primaryCta.label}
            </a>
            <a href={content.secondaryCta.href} className="cta-secondary">
              {content.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
