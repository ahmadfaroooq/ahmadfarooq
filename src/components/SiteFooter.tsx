import { MinimalFooter } from "./ui/minimal-footer";

interface SiteFooterProps {
  email: string;
  linkedinUrl: string;
  twitterUrl: string;
}

export function SiteFooter({ email, linkedinUrl, twitterUrl }: SiteFooterProps) {
  return (
    <MinimalFooter
      email={email}
      linkedinUrl={linkedinUrl}
      twitterUrl={twitterUrl}
    />
  );
}
