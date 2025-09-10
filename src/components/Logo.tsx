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
        <path d="m12 19-7-7 7-7" />
        <path d="m19 12-7-7" />
      </svg>
      <span className="text-xl font-extrabold tracking-tight font-headline">
        GlitchFix <span className="hidden sm:inline">Blog</span>
      </span>
    </Link>
  );
}
