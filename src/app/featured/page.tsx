import { type Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import { PostCard } from '@/components/PostCard';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Featured Posts',
  description: 'Browse all featured posts on the GlitchFix Blog.',
};

export default async function FeaturedPage() {
  const posts = await getAllPosts();
  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <div className="bg-muted min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Star className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Featured Posts
          </h1>
          <p className="mt-6 text-lg text-foreground/80">
            Hand-picked articles to help you on your coding journey.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
