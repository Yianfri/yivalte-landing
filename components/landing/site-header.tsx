import type { CtaLink, NavItem } from "@/types/landing";

interface SiteHeaderProps {
  brandName: string;
  nav: NavItem[];
  cta: CtaLink;
}

function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function SiteHeader({ brandName, nav, cta }: SiteHeaderProps) {
  const externalCta = isExternalLink(cta.href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--bg)]/80 backdrop-blur">
      <div className="shell py-3">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#inicio"
            className="[font-family:var(--font-heading)] text-lg font-semibold tracking-tight"
          >
            {brandName}
          </a>
          <a
            href={cta.href}
            className="cta-primary px-4 py-2 text-xs sm:text-sm"
            target={externalCta ? "_blank" : undefined}
            rel={externalCta ? "noopener noreferrer" : undefined}
          >
            {cta.label}
          </a>
        </div>

        <nav
          aria-label="Navegacion principal"
          className="mt-3 flex items-center gap-4 overflow-x-auto pb-1 text-sm text-[color:var(--text-soft)]"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition hover:text-[color:var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
