import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Folder } from 'lucide-react';
import type { ElementType } from 'react';

type CategoryCardProps = {
  category: {
    title: string;
    description: string;
    link: string;
    icon?: ElementType;
  };
};

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon || Folder;

  return (
    <Link href={category.link} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <CardHeader className="flex-grow p-6 text-center items-center">
          <div className="mb-4 rounded-lg bg-primary/10 p-4 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-10 w-10" />
          </div>
          <div>
            <CardTitle className="mb-1 font-headline text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
              {category.title}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {category.description}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
