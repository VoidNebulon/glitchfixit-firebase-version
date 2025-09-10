import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      <svg
        className="h-8 w-8 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.6 8.25 7.5 12l3.1 3.75" />
        <path d="M13.4 15.75 16.5 12l-3.1-3.75" />
        <path d="M4.5 12H7" />
        <path d="M17 12h2.5" />
        <path d="m14 7-4 10" />
        <rect x="2" y="2" width="20" height="20" rx="10" />
      </svg>
      <span className="text-xl font-extrabold tracking-tight font-headline">
        GlitchFix <span className="hidden sm:inline">Blog</span>
      </span>
    </Link>
  );
}
