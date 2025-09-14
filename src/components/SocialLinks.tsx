import { Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import type { SVGProps } from 'react';

function XLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1200 1227"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6904H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.828Z" />
    </svg>
  );
}

const socials = [
  { icon: XLogo, href: 'https://x.com', label: 'X' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export function SocialLinks() {
  return (
    <section className="border-y border-border/40 bg-muted/50 py-6">
      <div className="container mx-auto flex justify-center px-4">
        <div className="flex items-center gap-4">
          {socials.map((social) => (
             <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/social"
            >
              <Button
                variant="ghost"
                size="icon"
                className="relative z-10 text-foreground/70 transition-colors group-hover/social:text-primary"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </Button>
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 blur transition-opacity duration-300 group-hover/social:opacity-75"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
