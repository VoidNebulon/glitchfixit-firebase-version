import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Tag } from 'lucide-react';
import { format } from 'date-fns';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/post/${post.slug}`} className="group block">
      <Card className="flex h-full flex-col overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="blog cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <CardTitle className="mb-2 font-headline text-xl font-bold leading-snug group-hover:text-primary">
            {post.title}
          </CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
          </div>
        </CardContent>
        <CardFooter className="flex-wrap gap-2 p-6 pt-0">
          {(Array.isArray(post.categories)
            ? post.categories
            : []
          )
            .slice(0, 3)
            .map((category) => (
              <Badge key={category} variant="secondary" className="font-normal">
                <Tag className="mr-1 h-3 w-3" />
                {category}
              </Badge>
            ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
