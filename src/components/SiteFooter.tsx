import { Footer } from "./ui/footer";
import { Linkedin, Twitter, Mail } from "lucide-react";

const LogoMark = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="100" height="100" fill="#f36f21" />
    <rect x="2" y="2" width="96" height="96" fill="none" stroke="black" strokeWidth="4" />
    <rect
      x="25" y="25" width="50" height="50"
      fill="#2ecc40" stroke="black" strokeWidth="4"
      transform="rotate(45 50 50)"
    />
    <circle cx="50" cy="50" r="12" fill="black" />
  </svg>
);

interface SiteFooterProps {
  email: string;
  linkedinUrl: string;
  twitterUrl: string;
}

export function SiteFooter({ email, linkedinUrl, twitterUrl }: SiteFooterProps) {
  return (
    <Footer
      logo={<LogoMark />}
      brandName="Ahmad Farooq"
      socialLinks={[
        { icon: <Linkedin size={18} />, href: linkedinUrl, label: "LinkedIn" },
        { icon: <Twitter size={18} />, href: twitterUrl, label: "Twitter / X" },
        { icon: <Mail size={18} />, href: `mailto:${email}`, label: "Email" },
      ]}
      mainLinks={[
        { href: "/", label: "Home" },
        { href: "/behind-the-build", label: "Behind the Build" },
        { href: "/blog", label: "Blog" },
        { href: "/playbook", label: "Playbook" },
        { href: "/book", label: "Book a Call" },
      ]}
      legalLinks={[
        { href: `mailto:${email}`, label: email },
      ]}
      copyright={{
        text: "© 2026 Ahmad Farooq. All rights reserved.",
      }}
    />
  );
}
