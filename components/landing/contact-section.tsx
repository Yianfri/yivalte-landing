import type { ContactContent } from "@/types/landing";

interface ContactSectionProps {
  content: ContactContent;
}

function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function ContactSection({ content }: ContactSectionProps) {
  const externalCta = isExternalLink(content.buttonHref);

  return (
    <section id="contacto" className="section-space border-t border-white/10">
      <div className="shell">
        <div className="grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="section-eyebrow">Contacto</p>
            <h2 className="section-title">{content.title}</h2>
            <p className="section-copy">{content.description}</p>

            <div className="mt-8">
              <a
                href={content.buttonHref}
                className="cta-primary"
                target={externalCta ? "_blank" : undefined}
                rel={externalCta ? "noopener noreferrer" : undefined}
              >
                {content.buttonLabel}
              </a>
              <p className="mt-3 text-xs text-[color:var(--text-muted)]">
                {content.helperText}
              </p>
              <p className="mt-2 text-xs text-[color:var(--text-muted)]">
                {content.responseTimeNote}
              </p>
            </div>
          </div>

          <aside className="surface-card h-fit bg-white/3">
            <p className="[font-family:var(--font-heading)] text-base font-semibold">
              Para cotizar mas rapido, envia:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--text-soft)]">
              {content.quoteChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
