import { type Metadata } from 'next';
import { getAllCategories } from '@/lib/posts';
import { Tag } from 'lucide-react';
import { HoverEffect } from '@/components/ui/card-hover-effect';

export const metadata: Metadata = {
  title: 'All Categories',
  description: 'Browse all categories on the GlitchFix Blog.',
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();
  const categoryItems = categories.map(category => ({
    title: category,
    description: `Browse all posts in the ${category} category.`,
    link: `/search?category=${encodeURIComponent(category)}`
  }));

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

        <div className="mx-auto mt-16 max-w-5xl">
          <HoverEffect items={categoryItems} />
        </div>
      </div>
    </div>
  );
}
