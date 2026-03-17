import type { FaqItem } from "@/types/landing";

interface FaqSectionProps {
  items: FaqItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section id="faq" className="section-space border-t border-white/10">
      <div className="shell">
        <p className="section-eyebrow">FAQ</p>
        <h2 className="section-title">Preguntas frecuentes antes de cotizar</h2>

        <div className="mt-8 space-y-3">
          {items.map((item) => (
            <details key={item.id} className="surface-card group">
              <summary className="cursor-pointer list-none [font-family:var(--font-heading)] text-base font-semibold">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-[color:var(--text-soft)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

