
import { Suspense } from 'react';
import { getAllPosts, getAllCategories } from '@/lib/posts';
import { SearchClientPage } from '@/components/SearchClientPage';
import { Skeleton } from '@/components/ui/skeleton';
import { Search as SearchIcon } from 'lucide-react';

/**
 * SearchDataWrapper is an async Server Component that fetches all necessary
 * data for the search page. It uses `fs` via the `posts` library safely on the server.
 * It then renders the `SearchClientPage` (a client component) and passes the data as props.
 */
async function SearchDataWrapper() {
  const allPosts = await getAllPosts();
  const categories = await getAllCategories();

  return <SearchClientPage allPosts={allPosts} categories={categories} />;
}


/**
 * A skeleton component to show while the search page data is loading.
 * This improves the user experience by providing an immediate UI shell.
 */
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

/**
 * SearchPage is the main export for the `/search` route.
 * It uses a Suspense boundary to show a loading skeleton while the server
 * fetches the data inside `SearchDataWrapper`.
 */
export default function SearchPage() {
  return (
    <Suspense fallback={<SearchPageSkeleton />}>
      <SearchDataWrapper />
    </Suspense>
  )
}
