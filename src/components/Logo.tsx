import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="text-2xl font-extrabold tracking-tight text-foreground font-headline">
      GlitchFix <span className="text-primary">Blog</span>
    </Link>
  );
}
