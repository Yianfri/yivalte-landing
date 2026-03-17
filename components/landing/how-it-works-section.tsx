import type { HowItWorksStep } from "@/types/landing";

interface HowItWorksSectionProps {
  steps: HowItWorksStep[];
}

export function HowItWorksSection({ steps }: HowItWorksSectionProps) {
  return (
    <section id="servicio" className="section-space border-t border-white/10">
      <div className="shell">
        <p className="section-eyebrow">Como funciona</p>
        <h2 className="section-title">Proceso simple de cotizacion y produccion</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.id} className="surface-card">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--text-muted)]">
                Paso {index + 1}
              </p>
              <h3 className="mt-2 [font-family:var(--font-heading)] text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--text-soft)]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

