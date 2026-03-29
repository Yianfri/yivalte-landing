import type { CtaLink } from "@/types/landing";

interface MobileCtaProps {
  cta: CtaLink;
}

function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function MobileCta({ cta }: MobileCtaProps) {
  const externalCta = isExternalLink(cta.href);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[color:var(--bg)]/95 px-4 py-3 backdrop-blur sm:hidden">
      <a
        href={cta.href}
        className="cta-primary w-full"
        target={externalCta ? "_blank" : undefined}
        rel={externalCta ? "noopener noreferrer" : undefined}
      >
        {cta.label}
      </a>
    </div>
  );
}
