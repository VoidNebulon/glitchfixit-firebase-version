import { Logo } from './Logo';
import { Button } from './ui/button';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import type { SVGProps } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/search', label: 'All Posts' },
  { href: '/categories', label: 'Categories' },
];

const legalLinks = [
  { href: '/legal/privacy-policy', label: 'Privacy Policy' },
  { href: '/legal/terms-of-service', label: 'Terms of Service' },
]

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


export const socials = [
  { icon: XLogo, href: 'https://x.com', label: 'X' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#030f04' }} className="text-white/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
          <div className="flex flex-col items-center md:items-start md:col-span-1">
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
            <h3 className="mb-4 font-headline text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
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
          <p>&copy; {new Date().getFullYear()} GlitchFixIt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
