import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import { Tag } from 'lucide-react';

type CategoryCardProps = {
  category: string;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/search?category=${encodeURIComponent(category)}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardContent className="flex flex-grow flex-col items-center justify-center p-6">
            <Tag className="mb-4 h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
            <h3 className="font-headline text-xl font-bold capitalize text-foreground group-hover:text-primary">
                {category}
            </h3>
            <p className="mt-2 text-center text-sm text-muted-foreground">
                Browse all posts in the {category} category.
            </p>
        </CardContent>
      </Card>
    </Link>
  );
}
