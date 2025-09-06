import { type Metadata } from 'next';
import { getAllCategories } from '@/lib/posts';
import { CategoryCard } from '@/components/CategoryCard';
import { Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Categories',
  description: 'Browse all categories on the GlitchFix Blog.',
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="bg-muted min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Tag className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Explore by Category
          </h1>
          <p className="mt-6 text-lg text-foreground/80">
            Find the topics that interest you most and dive into our collection of articles.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
