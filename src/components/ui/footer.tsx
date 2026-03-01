import { Button } from "@/components/ui/button";

interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  socialLinks: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  legalLinks: Array<{
    href: string;
    label: string;
  }>;
  copyright: {
    text: string;
    license?: string;
  };
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer
      className="relative overflow-hidden pb-8 pt-16 lg:pb-10 lg:pt-24"
      style={{
        background: "#0a0a0a",
        borderTop: "2px solid #bfff00",
      }}
    >
      {/* Retro grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(191,255,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(191,255,0,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Neon glow accent line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #bfff00, transparent)",
          opacity: 0.6,
        }}
      />

      <div className="relative px-6 lg:px-10">
        {/* Top row: logo + socials */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <a
            href="/"
            className="flex items-center gap-3 group"
            aria-label={brandName}
          >
            <span
              className="flex items-center justify-center transition-transform group-hover:-translate-y-0.5"
              style={{ color: "#bfff00" }}
            >
              {logo}
            </span>
            <span
              className="text-xl font-black tracking-tight"
              style={{ fontFamily: "Sora, sans-serif", color: "#ffffff" }}
            >
              {brandName}
            </span>
          </a>

          <ul className="flex list-none gap-2">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-9 w-9 rounded-none border-2 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
                  style={{
                    background: "transparent",
                    borderColor: "#333",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div
          className="mt-8 border-t lg:mt-10"
          style={{ borderColor: "#222" }}
        />

        {/* Bottom grid: copyright + links */}
        <div className="mt-6 lg:grid lg:grid-cols-10 lg:mt-8">
          {/* Copyright — left col on desktop */}
          <div
            className="text-sm leading-6 lg:col-[1/4] lg:row-[1/3]"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>

          {/* Main nav links */}
          <nav className="mt-6 lg:mt-0 lg:col-[4/11]">
            <ul className="flex list-none flex-wrap -mx-2 -my-1 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="mx-2 my-1 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm font-semibold transition-colors hover:text-[#bfff00]"
                    style={{
                      fontFamily: "Sora, sans-serif",
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal links */}
          <div className="mt-4 lg:mt-2 lg:col-[4/11]">
            <ul className="flex list-none flex-wrap -mx-3 -my-1 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="mx-3 my-1 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#bfff00]"
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
