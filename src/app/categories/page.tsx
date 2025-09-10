import { type Metadata } from 'next';
import { getAllCategories } from '@/lib/posts';
import { Tag, Newspaper, Star, Lightbulb, Code, Cpu, Smartphone, Gamepad, AppWindow, Shield, Globe, Pencil, BookOpen } from 'lucide-react';
import { CategoryCard } from '@/components/CategoryCard';
import type { ElementType } from 'react';

export const metadata: Metadata = {
  title: 'All Categories',
  description: 'Browse all categories on GlitchFixIt.',
};

const categoryIcons: { [key: string]: ElementType } = {
  "Technology": Cpu,
  "IT": Code,
  "Gadegets": Smartphone, // Note: "Gadegets" is likely a typo for "Gadgets"
  "Software": AppWindow,
  "Apps": AppWindow,
  "Games": Gamepad,
  "Latest News": Newspaper,
  "Tech Reviews": Pencil,
  "Must Read": Lightbulb,
  "Editor's Pick": Star,
  "Web Dev": Code,
  "Coding": Code,
  "CyberSpace": Globe,
  "CyberSecurity": Shield,
  "Tutorials": BookOpen,
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();
  const categoryItems = categories.map(category => ({
    title: category,
    description: `View all posts`,
    link: `/search?category=${encodeURIComponent(category)}`,
    icon: categoryIcons[category] || Tag,
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

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoryItems.map((item) => (
            <CategoryCard key={item.title} category={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
