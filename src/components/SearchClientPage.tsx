
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PostCard } from '@/components/PostCard';
import type { Post } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * SearchClientPage is a Client Component responsible for the UI and client-side logic
 * of the search page (filtering, sorting, etc.). It receives all posts and categories
 * as props from its server-side parent.
 */
export function SearchClientPage({ allPosts, categories }: { allPosts: Post[], categories: string[] }) {
  const searchParams = useSearchParams();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // State for the search filters, initialized from URL search params
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    // Initial data is passed via props, so we set loading to false immediately.
    // The initial filtering will be handled by the next useEffect.
    setLoading(false);
  }, []);

  // This effect runs whenever filters or the source data changes.
  useEffect(() => {
    let results = allPosts;

    // Filter by search query (case-insensitive)
    if (query) {
      results = results.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by category
    if (category !== 'all') {
      results = results.filter((post) => post.categories.includes(category));
    }

    // Sort results
    results.sort((a, b) => {
      if (sort === 'oldest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      // Default to newest first
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
              Search All Posts
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
