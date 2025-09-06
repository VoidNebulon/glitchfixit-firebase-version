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
      <div className="rounded-2xl bg-muted p-6 text-center shadow-[6px_6px_12px_#e1e6e3,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:shadow-[4px_4px_8px_#e1e6e3,-4px_-4px_8px_#ffffff] hover:text-primary">
        <h3 className="font-headline font-semibold capitalize">{category}</h3>
      </div>
    </Link>
  );
}
