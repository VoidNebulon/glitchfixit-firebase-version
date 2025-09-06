'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { WaveBackground } from './WaveBackground';
import Link from 'next/link';
import { ArrowDown, LayoutGrid } from 'lucide-react';

const phrases = [
  'fix your code glitches.',
  'build modern websites.',
  'master Next.js.',
  'level up your skills.',
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 75 : 150;

    const handleTyping = () => {
      setText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex h-[80vh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-muted text-center">
      <WaveBackground />
      <div className="container z-10 mx-auto px-4">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Helping you to <br />
          <span className="relative inline-block h-20 text-primary">
            {text}
            <span className="animate-ping">|</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
          Your daily source for tutorials, tips, and tricks in the world of web development. Let's fix those glitches together.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => scrollTo('featured-posts')}
          >
            <ArrowDown className="mr-2 h-5 w-5" />
            Start Exploring
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => scrollTo('categories')}
          >
            <LayoutGrid className="mr-2 h-5 w-5" />
            See Categories
          </Button>
        </div>
      </div>
    </section>
  );
}
