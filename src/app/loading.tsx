'use client';

import { WavyBackground } from '@/components/ui/wavy-background';

export default function Loading() {
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
        <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-primary animate-pulse [animation-delay:-0.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-primary animate-pulse [animation-delay:-0.15s]"></div>
            <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
        </div>
        <h1 className="mt-8 font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
          Loading Content...
        </h1>
        <p className="mt-4 max-w-xl text-lg text-foreground/80">
          Fixing glitches and fetching the good stuff. Please wait a moment.
        </p>
      </div>
    </WavyBackground>
  );
}
