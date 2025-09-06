import { Logo } from './Logo';
import { Button } from './ui/button';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/categories', label: 'Categories' },
  { href: '/search', label: 'Search' },
];

const socials = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-green-700 to-green-900 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <div className="mb-4 bg-white/90 p-3 rounded-md">
              <Logo />
            </div>
            <p className="max-w-xs text-sm text-primary-foreground/80">
              A modern blog for developers fixing bugs and building the future.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-headline text-lg font-semibold">Connect</h3>
            <div className="flex space-x-2">
              {socials.map((social) => (
                <Button key={social.label} variant="ghost" size="icon" asChild className="text-primary-foreground/80 hover:bg-white/20 hover:text-white">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} GlitchFix Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
