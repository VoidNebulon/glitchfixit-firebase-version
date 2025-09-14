import { Hero } from '@/components/Hero';
import { SocialLinks } from '@/components/SocialLinks';
import { PostCard } from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';
import { CategoryCard } from '@/components/CategoryCard';
import type { ElementType } from 'react';
import { Newspaper, Lightbulb, Star, Cpu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import phrases from '@/lib/hero-phrases.json';

const categoryIcons: { [key: string]: ElementType } = {
  "Latest News": Newspaper,
  "Must Read": Lightbulb,
  "Editor's Pick": Star,
  "Technology": Cpu,
};

export default async function Home() {
  const posts = await getAllPosts();
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 6);
  
  const categories = [
    "Latest News",
    "Must Read",
    "Editor's Pick",
    "Technology"
  ];

  const categoryItems = categories.map(category => ({
    title: category,
    description: `View all posts`,
    link: `/search?category=${encodeURIComponent(category)}`,
    icon: categoryIcons[category],
  }));

  return (
    <div className="flex flex-col">
      <Hero phrases={phrases} />
      <SocialLinks />
      
      <section id="featured-posts" className="container mx-auto px-4 py-16 sm:py-24">
        <h2 className="mb-12 text-center font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Featured Posts
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-16 text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
              asChild
            >
              <Link href="/featured">
                Read More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
        </div>
      </section>

      <section id="categories" className="bg-muted py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Categories
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {categoryItems.map((item) => (
              <CategoryCard key={item.title} category={item} />
            ))}
          </div>
           <div className="mt-16 text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
              asChild
            >
              <Link href="/categories">
                See More Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
