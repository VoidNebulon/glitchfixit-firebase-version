import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Wrench, Home } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you were looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="bg-muted">
      <div className="container mx-auto flex min-h-[calc(100vh-20rem)] flex-col items-center justify-center px-4 py-16 text-center">
        <Wrench className="h-20 w-20 text-primary/80" strokeWidth={1} />
        <h1 className="mt-8 font-headline text-8xl font-extrabold tracking-tighter text-foreground">
          404
        </h1>
        <h2 className="mt-2 font-headline text-2xl font-semibold text-foreground/90">
          Glitch in the Matrix
        </h2>
        <p className="mt-4 max-w-md text-lg text-muted-foreground">
          Oops! It seems you've found a page that doesn't exist. Maybe it was a typo, or perhaps the page has been moved to another dimension.
        </p>
        <Button
          size="lg"
          className="mt-10 w-full sm:w-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
          asChild
        >
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Go Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
