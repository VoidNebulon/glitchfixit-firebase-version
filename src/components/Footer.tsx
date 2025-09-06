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
    <footer className="bg-gradient-to-br from-[#a8e6a3] via-[#6fdc6f] to-[#3cb371] text-[#0b3d0b] shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 bg-white/90 p-3 rounded-md">
              <Logo />
            </div>
            <p className="max-w-xs text-sm text-[#0b3d0b]/80">
              A modern blog for developers fixing bugs and building the future.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#0b3d0b]/80 transition-colors hover:text-[#0b3d0b]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-headline text-lg font-semibold">Connect</h3>
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
                    className="relative z-10 text-[#0b3d0b]/80 hover:bg-black/10 hover:text-[#0b3d0b]"
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
        <div className="mt-12 border-t border-black/10 pt-8 text-center text-sm text-[#0b3d0b]/70">
          <p>&copy; {new Date().getFullYear()} GlitchFix Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
