'use client';

import { Search as SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { Input } from './ui/input';

export function Search() {
  const router = useRouter();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get('q') as string;
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-xs">
      <Input
        type="search"
        name="q"
        placeholder="Search posts..."
        className="h-9 rounded-full border-primary/20 bg-muted/80 pl-10 text-sm focus:border-primary"
        aria-label="Search posts"
      />
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </form>
  );
}
