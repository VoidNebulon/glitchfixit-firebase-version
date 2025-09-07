'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PostCard } from '@/components/PostCard';
import type { Post } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
// Note: We cannot import from '@/lib/posts' here as it's a client component.
// Data is fetched in the server wrapper component below.

// This is the actual component that renders the search UI.
// It receives posts and categories as props from its parent.
function SearchPageComponent({ allPosts, categories }: { allPosts: Post[], categories: string[] }) {
  const searchParams = useSearchParams();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    // Initial load is handled by passing props, so we can set loading to false.
    setLoading(false);
  }, []);

  useEffect(() => {
    let results = allPosts;

    if (query) {
      results = results.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category !== 'all') {
      results = results.filter((post) => post.categories.includes(category));
    }

    results.sort((a, b) => {
      if (sort === 'oldest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    setFilteredPosts(results);
  }, [query, category, sort, allPosts]);

  return (
    <div className="min-h-screen bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
             <SearchIcon className="h-10 w-10 text-primary" />
             <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Search Posts
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 rounded-2xl bg-card p-6 shadow-sm sm:grid-cols-2 md:grid-cols-4">
            <div className="relative sm:col-span-2">
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Keywords..."
                className="h-10 text-base"
              />
              {query && (
                <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2" onClick={() => setQuery('')}>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat} className="capitalize">{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-56 w-full rounded-2xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h2 className="text-2xl font-semibold">No posts found</h2>
            <p className="mt-2 text-muted-foreground">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// This is the new wrapper component that fetches data on the server.
// It must be defined in the same file to avoid circular dependencies.
async function SearchDataWrapper() {
  // We must import the server-side functions here, inside the async component.
  const { getAllPosts, getAllCategories } = await import('@/lib/posts');
  const allPosts = await getAllPosts();
  const categories = await getAllCategories();

  return <SearchPageComponent allPosts={allPosts} categories={categories} />;
}


// This remains the default export for the page.
export default function SearchPage() {
  return (
    <Suspense fallback={<SearchPageSkeleton />}>
      <SearchDataWrapper />
    </Suspense>
  )
}

function SearchPageSkeleton() {
  return (
    <div className="min-h-screen bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
             <Skeleton className="h-10 w-10 rounded-full" />
             <Skeleton className="h-10 w-64" />
          </div>
          <div className="grid grid-cols-1 gap-4 rounded-2xl bg-card p-6 shadow-sm sm:grid-cols-2 md:grid-cols-4">
            <Skeleton className="h-10 sm:col-span-2" />
            <Skeleton className="h-10" />
            <Skeleton className="h-10" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-56 w-full rounded-2xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
