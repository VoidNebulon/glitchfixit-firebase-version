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
    <footer style={{ backgroundColor: '#030f04' }} className="text-white/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 p-3 rounded-md">
              <Logo className="text-white" />
            </div>
            <p className="max-w-xs text-sm">
              A modern blog for developers fixing bugs and building the future.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-headline text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-headline text-lg font-semibold text-white">Connect</h3>
            <div className="flex justify-center space-x-2 md:justify-start">
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
                    className="relative z-10 hover:bg-white/10 hover:text-white"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Button>
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-accent to-white opacity-0 blur-sm transition-opacity duration-300 group-hover/social:opacity-75"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} GlitchFix Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
