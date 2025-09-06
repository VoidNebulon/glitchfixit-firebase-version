import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'text-2xl font-extrabold tracking-tight font-headline',
        className
      )}
    >
      GlitchFix <span className="text-primary">Blog</span>
    </Link>
  );
}
