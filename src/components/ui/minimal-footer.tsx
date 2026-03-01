import { LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';

const LogoMark = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="100" height="100" fill="#f36f21" />
    <rect x="2" y="2" width="96" height="96" fill="none" stroke="black" strokeWidth="4" />
    <rect x="25" y="25" width="50" height="50" fill="#2ecc40" stroke="black" strokeWidth="4" transform="rotate(45 50 50)" />
    <circle cx="50" cy="50" r="12" fill="black" />
  </svg>
);

interface MinimalFooterProps {
  email: string;
  linkedinUrl: string;
  twitterUrl: string;
}

export function MinimalFooter({ email, linkedinUrl, twitterUrl }: MinimalFooterProps) {
  const year = new Date().getFullYear();

  const pages = [
    { title: 'Home', href: '/' },
    { title: 'Behind the Build', href: '/behind-the-build' },
    { title: 'Blog', href: '/blog' },
    { title: 'Playbook', href: '/playbook' },
    { title: 'Book a Call', href: '/book' },
  ];

  const services = [
    { title: 'Growth Marketing', href: '/growth' },
    { title: 'LinkedIn Branding', href: '/linkedin' },
    { title: 'Marketing Strategy', href: '/strategy' },
    { title: 'Copy Writing', href: '/copy-writing' },
  ];

  const socialLinks = [
    { icon: <LinkedinIcon className="size-4" />, href: linkedinUrl, label: 'LinkedIn' },
    { icon: <TwitterIcon className="size-4" />, href: twitterUrl, label: 'Twitter / X' },
    { icon: <MailIcon className="size-4" />, href: `mailto:${email}`, label: 'Email' },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#0a0a0a', borderTop: '2px solid #bfff00' }}
    >
      {/* Retro grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(191,255,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(191,255,0,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Neon glow line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #bfff00, transparent)',
          opacity: 0.5,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Top border line */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

        <div className="grid grid-cols-6 gap-6 py-12">
          {/* Brand column */}
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <a href="/" className="flex items-center gap-2 w-max" aria-label="Ahmad Farooq">
              <LogoMark />
              <span
                className="text-lg font-bold tracking-tight"
                style={{ fontFamily: 'Sora, sans-serif', color: '#ffffff' }}
              >
                Ahmad Farooq
              </span>
            </a>
            <p
              className="max-w-sm text-sm"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}
            >
              Growth Strategist & Brand Builder. Helping founders and executives build brands that compound over time.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
                  style={{
                    width: 36,
                    height: 36,
                    border: '2px solid #333',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#bfff00';
                    (e.currentTarget as HTMLElement).style.color = '#bfff00';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#333';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)';
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Pages column */}
          <div className="col-span-3 w-full md:col-span-1">
            <span
              className="mb-3 block text-xs uppercase tracking-widest"
              style={{ fontFamily: 'Sora, sans-serif', color: 'rgba(255,255,255,0.3)' }}
            >
              Pages
            </span>
            <div className="flex flex-col gap-1">
              {pages.map(({ href, title }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-max py-1 text-sm transition-colors duration-200"
                  style={{ fontFamily: 'Sora, sans-serif', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#bfff00')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)')}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="col-span-3 w-full md:col-span-1">
            <span
              className="mb-3 block text-xs uppercase tracking-widest"
              style={{ fontFamily: 'Sora, sans-serif', color: 'rgba(255,255,255,0.3)' }}
            >
              Services
            </span>
            <div className="flex flex-col gap-1">
              {services.map(({ href, title }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-max py-1 text-sm transition-colors duration-200"
                  style={{ fontFamily: 'Sora, sans-serif', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#bfff00')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)')}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t py-5 text-center"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <p
            className="text-sm"
            style={{ fontFamily: 'Sora, sans-serif', color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}
          >
            © {year} Ahmad Farooq. All rights reserved.{' '}
            <a
              href={`mailto:${email}`}
              style={{ color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#bfff00')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
