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

const linkStyle: React.CSSProperties = {
  fontFamily: 'Sora, sans-serif',
  fontSize: '0.875rem',
  color: 'rgba(255,255,255,0.6)',
  textDecoration: 'none',
  display: 'block',
  padding: '4px 0',
  transition: 'color 0.2s',
};

const columnLabelStyle: React.CSSProperties = {
  fontFamily: 'Sora, sans-serif',
  fontSize: '0.65rem',
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.1em',
  color: 'rgba(255,255,255,0.28)',
  display: 'block',
  marginBottom: '12px',
};

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
    { icon: <LinkedinIcon size={16} />, href: linkedinUrl, label: 'LinkedIn' },
    { icon: <TwitterIcon size={16} />, href: twitterUrl, label: 'Twitter / X' },
    { icon: <MailIcon size={16} />, href: `mailto:${email}`, label: 'Email' },
  ];

  return (
    <footer
      style={{
        background: '#0a0a0a',
        borderTop: '2px solid #bfff00',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Retro grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(191,255,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(191,255,0,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />
      {/* Neon glow line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, #bfff00, transparent)',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Main grid: brand | pages | services */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 180px 180px',
            gap: '48px',
            padding: '56px 0 48px',
            alignItems: 'start',
          }}
        >
          {/* Brand column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a
              href="/"
              aria-label="Ahmad Farooq"
              style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
            >
              <LogoMark />
              <span
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                }}
              >
                Ahmad Farooq
              </span>
            </a>

            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.7,
                maxWidth: 320,
                margin: 0,
              }}
            >
              Growth Strategist & Brand Builder. Helping founders and executives build brands that compound over time.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    border: '2px solid #2a2a2a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#bfff00';
                    el.style.color = '#bfff00';
                    el.style.transform = 'translate(-2px,-2px)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#2a2a2a';
                    el.style.color = 'rgba(255,255,255,0.5)';
                    el.style.transform = 'translate(0,0)';
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Pages column */}
          <div>
            <span style={columnLabelStyle}>Pages</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {pages.map(({ href, title }, i) => (
                <a
                  key={i}
                  href={href}
                  style={linkStyle}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#bfff00')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)')}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <span style={columnLabelStyle}>Services</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {services.map(({ href, title }, i) => (
                <a
                  key={i}
                  href={href}
                  style={linkStyle}
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
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '20px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.25)',
              fontWeight: 300,
              margin: 0,
            }}
          >
            © {year} Ahmad Farooq. All rights reserved.
          </p>
          <a
            href={`mailto:${email}`}
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.3)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#bfff00')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)')}
          >
            {email}
          </a>
        </div>
      </div>
    </footer>
  );
}
