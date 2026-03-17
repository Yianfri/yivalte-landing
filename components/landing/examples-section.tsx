import Image from "next/image";
import type { ExampleItem } from "@/types/landing";

interface ExamplesSectionProps {
  items: ExampleItem[];
}

export function ExamplesSection({ items }: ExamplesSectionProps) {
  return (
    <section id="ejemplos" className="section-space border-t border-white/10">
      <div className="shell">
        <p className="section-eyebrow">Ejemplos</p>
        <h2 className="section-title">Trabajos de referencia para inspirar tu pedido</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.id} className="surface-card p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <h3 className="mt-3 [font-family:var(--font-heading)] text-base font-semibold">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-[color:var(--text-soft)]">{item.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

