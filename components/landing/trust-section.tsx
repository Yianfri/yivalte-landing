import type { TrustPoint } from "@/types/landing";

interface TrustSectionProps {
  points: TrustPoint[];
}

export function TrustSection({ points }: TrustSectionProps) {
  return (
    <section id="confianza" className="section-space border-t border-white/10">
      <div className="shell">
        <p className="section-eyebrow">Confianza</p>
        <h2 className="section-title">Servicio personalizado por sobre venta masiva</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {points.map((point) => (
            <article key={point.id} className="surface-card">
              <h3 className="[font-family:var(--font-heading)] text-lg font-semibold">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--text-soft)]">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

