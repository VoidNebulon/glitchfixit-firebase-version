import { Button } from './ui/button';
import Link from 'next/link';
import { socials } from '@/lib/socials';

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
