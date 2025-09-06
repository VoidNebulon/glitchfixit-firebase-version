import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary via-green-500 to-accent opacity-0 blur transition-opacity duration-300 group-hover/social:opacity-75 animate-pulse group-hover/social:animate-none"></div>
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary via-green-500 to-accent opacity-0 blur-xl transition-opacity duration-300 group-hover/social:opacity-75 animate-pulse group-hover/social:animate-none"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}