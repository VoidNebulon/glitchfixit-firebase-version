
'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Logo } from './Logo';
import { Search } from './Search';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/featured', label: 'Featured' },
  { href: '/search', label: 'All Posts' },
  { href: '/categories', label: 'Categories' },
  { href: '/about', label: 'About Us' },
];

const NavLinkItems = memo(function NavLinkItems() {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState('');

  return navLinks.map((link) => {
    const isActive = (pathname === link.href) || (link.href !== '/' && pathname.startsWith(link.href));
    
    return (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
          isActive ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
        )}
        onMouseEnter={() => setHoveredLink(link.href)}
        onMouseLeave={() => setHoveredLink('')}
      >
        {link.label}
        {isActive && (
          <motion.div
            layoutId="active-underline"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
            style={{ borderRadius: '2px' }}
          />
        )}
        <AnimatePresence>
        {hoveredLink === link.href && !isActive && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
              style={{ borderRadius: '2px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
        )}
        </AnimatePresence>
      </Link>
    );
  });
});
NavLinkItems.displayName = 'NavLinkItems';


export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/40 bg-background/50 backdrop-blur-xl' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo className="text-foreground" />

        <nav className="hidden items-center gap-1 md:flex">
          <NavLinkItems />
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Search />
          </div>

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="p-4">
                  <Logo className="text-foreground" />
                  <div className="mt-8">
                    <Search />
                  </div>
                  <nav className="mt-8 flex flex-col gap-4" onClick={() => setOpen(false)}>
                    {navLinks.map((link) => (
                      <Link
                        key={`mobile-${link.href}`}
                        href={link.href}
                        className={cn(
                          'rounded-md px-3 py-2 text-lg font-medium transition-colors',
                           pathname === link.href ? 'text-primary bg-secondary' : 'text-foreground/80 hover:text-foreground'
                        )}
                      >
                       {link.label}
                      </Link>
                    ))}
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
