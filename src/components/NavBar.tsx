'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import { Logo } from './Logo';
import { Search } from './Search';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#featured-posts', label: 'Featured' },
  { href: '/categories', label: 'Categories' },
  { href: '/about', label: 'About Us' },
];

export function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinkItems = () =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground',
          (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)))
            ? 'text-primary'
            : 'text-foreground/80'
        )}
      >
        {link.label}
      </Link>
    ));

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/40 bg-background/50 backdrop-blur-xl' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />

        <nav className="hidden items-center gap-4 md:flex">
          <NavLinkItems />
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Search />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="p-4">
                  <Logo />
                  <div className="mt-8">
                    <Search />
                  </div>
                  <nav className="mt-8 flex flex-col gap-4">
                    <NavLinkItems />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
