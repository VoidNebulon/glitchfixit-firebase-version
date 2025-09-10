'use client';

import { WavyBackground } from '@/components/ui/wavy-background';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 95 ? 95 : prev + 5));
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <WavyBackground
      className="max-w-4xl mx-auto text-center"
      containerClassName="h-screen"
      waveWidth={40}
      speed="slow"
      waveOpacity={0.4}
      colors={['#18A558', '#66D29A', '#e7f9ef']}
    >
      <div className="z-10 container mx-auto px-4 flex flex-col items-center justify-center">
        <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
          Loading Content...
        </h1>
        <p className="mt-4 max-w-xl text-lg text-foreground/80">
          Fixing glitches and fetching the good stuff. Please wait a moment.
        </p>
        <Progress value={progress} className="w-full max-w-md mt-8 h-2.5" />
      </div>
    </WavyBackground>
  );
}
