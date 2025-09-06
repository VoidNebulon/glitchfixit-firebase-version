'use client';

import { estimateBlogPostReadingTime } from '@/ai/flows/estimate-blog-post-reading-time';
import { Clock, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';

type ReadingTimeProps = {
  content: string;
};

export function ReadingTime({ content }: ReadingTimeProps) {
  const [readingTime, setReadingTime] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReadingTime = async () => {
      try {
        setLoading(true);
        const result = await estimateBlogPostReadingTime({ content });
        setReadingTime(result.readingTimeMinutes);
      } catch (error) {
        console.error('Failed to estimate reading time:', error);
        // Fallback to a simple calculation
        const wordsPerMinute = 200;
        const wordCount = content.split(/\s+/).length;
        setReadingTime(Math.ceil(wordCount / wordsPerMinute));
      } finally {
        setLoading(false);
      }
    };
    getReadingTime();
  }, [content]);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4" />
        <Skeleton className="h-4 w-20" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <BookOpen className="h-4 w-4" />
      <span>{readingTime} min read</span>
    </div>
  );
}
