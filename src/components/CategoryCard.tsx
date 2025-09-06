import Link from 'next/link';

type CategoryCardProps = {
  category: string;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/search?category=${encodeURIComponent(category)}`}
      className="group block"
    >
      <div className="rounded-2xl bg-card p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:text-primary">
        <h3 className="font-headline font-semibold capitalize">{category}</h3>
      </div>
    </Link>
  );
}
