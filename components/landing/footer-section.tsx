import type { FooterContent } from "@/types/landing";

interface FooterSectionProps {
  brandName: string;
  content: FooterContent;
}

export function FooterSection({ brandName, content }: FooterSectionProps) {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="shell flex flex-col gap-3 text-sm text-[color:var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          {brandName} - {content.note}
        </p>
        <div className="flex items-center gap-4">
          <a href="#inicio" className="transition hover:text-[color:var(--text-primary)]">
            Volver arriba
          </a>
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
