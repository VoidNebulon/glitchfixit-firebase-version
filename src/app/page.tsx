import { Hero } from '@/components/Hero';
import { SocialLinks } from '@/components/SocialLinks';
import { PostCard } from '@/components/PostCard';
import { getAllPosts, getAllCategories } from '@/lib/posts';
import { CategoryCard } from '@/components/CategoryCard';

export default async function Home() {
  const posts = await getAllPosts();
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 6);
  const categories = (await getAllCategories()).slice(0, 6);

  return (
    <div className="flex flex-col">
      <Hero />
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
      </section>

      <section id="categories" className="bg-muted py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Categories
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category} category={category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
