import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Folder } from 'lucide-react';

type CategoryCardProps = {
  category: {
    title: string;
    description: string;
    link: string;
  };
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={category.link} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="flex-grow p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-primary/10 p-3 text-primary">
              <Folder className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="mb-1 font-headline text-xl font-bold capitalize group-hover:text-primary">
                {category.title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {category.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
