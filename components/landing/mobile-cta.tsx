import type { CtaLink } from "@/types/landing";

interface MobileCtaProps {
  cta: CtaLink;
}

export function MobileCta({ cta }: MobileCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[color:var(--bg)]/95 px-4 py-3 backdrop-blur sm:hidden">
      <a href={cta.href} className="cta-primary w-full">
        {cta.label}
      </a>
    </div>
  );
}
