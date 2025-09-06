import Link from 'next/link';
import { Card, CardTitle, CardDescription } from '@/components/ui/card-hover-effect';

type CategoryCardProps = {
  category: {
    title: string;
    description: string;
    link: string;
  }
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={category.link} className="group block h-full w-full">
      <Card>
        <CardTitle>{category.title}</CardTitle>
        <CardDescription>{category.description}</CardDescription>
      </Card>
    </Link>
  );
}
