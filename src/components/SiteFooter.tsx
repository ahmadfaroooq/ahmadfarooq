import { MinimalFooter, type FooterLink } from "./ui/minimal-footer";

interface SiteFooterProps {
  email: string;
  linkedinUrl: string;
  twitterUrl: string;
  footerPages: FooterLink[];
  footerServices: FooterLink[];
}

export function SiteFooter({ email, linkedinUrl, twitterUrl, footerPages, footerServices }: SiteFooterProps) {
  return (
    <MinimalFooter
      email={email}
      linkedinUrl={linkedinUrl}
      twitterUrl={twitterUrl}
      footerPages={footerPages}
      footerServices={footerServices}
    />
  );
}
