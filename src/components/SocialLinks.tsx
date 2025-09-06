import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const socials = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export function SocialLinks() {
  return (
    <section className="border-y border-border/40 bg-muted/50 py-6">
      <div className="container mx-auto flex justify-center px-4">
        <div className="flex items-center gap-4">
          <p className="hidden text-sm font-medium text-foreground/80 sm:block">Connect with us:</p>
          {socials.map((social) => (
            <Button key={social.label} variant="ghost" size="icon" asChild>
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5 text-foreground/70 transition-colors hover:text-primary" />
                <span className="sr-only">{social.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
